"use client";
import { useEffect, useRef } from "react";

const FALL = 190; // ms of the stamp coming down, before contact
const SPRING = 460; // ms of the rubber settling after contact
const STEP = 1000 / 60;

// Underdamped spring released at rest with a downward kick: the rubber squashes past 1 and settles.
function spring(t: number, kick: number) {
  const w = 2 * Math.PI * 4.2;
  const z = 0.42;
  const wd = w * Math.sqrt(1 - z * z);
  return (kick / wd) * Math.exp(-z * w * t) * Math.sin(wd * t);
}

function strikeFrames(rot: number, from: number): Keyframe[] {
  const total = FALL + SPRING;
  const frames: Keyframe[] = [
    { offset: 0, opacity: 0, transform: `rotate(${rot + 5}deg) scale(${from})`, filter: "blur(5px)", easing: "cubic-bezier(0.55, 0, 1, 0.45)" },
  ];
  for (let ms = 0; ms <= SPRING; ms += STEP) {
    const d = spring(ms / 1000, -2.4);
    frames.push({
      offset: Math.min(1, (FALL + ms) / total),
      opacity: 0.9,
      transform: `rotate(${rot + d * 18}deg) scale(${1 + d})`,
      filter: "blur(0px)",
    });
  }
  frames[frames.length - 1].offset = 1;
  return frames;
}

// Ink transfers patchy at contact and fills in, by moving the blot mask's threshold.
function spreadInk(matrix: SVGFEColorMatrixElement) {
  const t0 = performance.now();
  const tick = (now: number) => {
    const p = Math.min(1, (now - t0) / 520);
    const k = 1 - Math.pow(1 - p, 3);
    matrix.setAttribute("values", `0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -2.2 ${(1.25 + 0.85 * k).toFixed(3)}`);
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

// Visible and static by default; once hydrated it waits off-screen and strikes when it scrolls into view.
export default function Stamp() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Every visit gets its own impression: slightly different angle and ink pattern.
    const rot = -6 - Math.random() * 6;
    el.style.setProperty("--rot", `${rot.toFixed(1)}deg`);
    el.querySelector("#ink-blot")?.setAttribute("seed", String(1 + Math.floor(Math.random() * 900)));

    const matrix = el.querySelector<SVGFEColorMatrixElement>("#ink-mask")!;
    const btn = el.parentElement?.querySelector<HTMLElement>(".btn");

    const strike = (delay: number, from: number) => {
      el.classList.add("struck");
      matrix.setAttribute("values", "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -2.2 1.25");
      el.animate(strikeFrames(rot, from), { duration: FALL + SPRING, delay, fill: "backwards" });
      setTimeout(() => {
        spreadInk(matrix);
        // the paper and the button take the hit
        btn?.animate([{ translate: "0 0" }, { translate: "0 2px" }, { translate: "0 0" }], { duration: 160, easing: "ease-out" });
      }, delay + FALL);
    };

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          io.disconnect();
          strike(250, 1.65);
        }
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    // Clicking WhatsApp stamps the order again (the chat opens in a new tab, the page stays).
    const again = () => strike(0, 1.18);
    btn?.addEventListener("click", again);
    return () => {
      io.disconnect();
      btn?.removeEventListener("click", again);
    };
  }, []);

  return (
    <svg ref={ref} className="stamp stamp-hero" viewBox="0 0 320 120" aria-hidden="true">
      <defs>
        <filter id="ink" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="3" result="d" />
          <feTurbulence id="ink-blot" type="fractalNoise" baseFrequency="0.06 0.4" numOctaves="2" seed="3" result="blot" />
          <feColorMatrix id="ink-mask" in="blot" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -2.2 2.1" result="mask" />
          <feComposite in="d" in2="mask" operator="in" />
        </filter>
      </defs>
      <g filter="url(#ink)" fill="none" stroke="currentColor">
        <rect x="6" y="6" width="308" height="108" rx="10" strokeWidth="6" />
        <rect x="16" y="16" width="288" height="88" rx="5" strokeWidth="2" />
        <text x="160" y="77" textAnchor="middle" textLength="258" lengthAdjust="spacingAndGlyphs" fill="currentColor" stroke="none" className="stamp-word">
          AUTORIZADO
        </text>
      </g>
    </svg>
  );
}
