"use client";
import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

// Contact data taken from her CV; change here if she uses another line for the service.
const PHONE = "5492612402277";
const EMAIL = "alazzarano@hotmail.com";
const SUBJECT = "Consulta por gestión de obras sociales";

type Intake = { motivos: string[]; obras: string; prestaciones: string };

// "a", "a y b", "a, b y c"
function enumerate(items: string[]) {
  return items.length < 2 ? items.join("") : `${items.slice(0, -1).join(", ")} y ${items.at(-1)}`;
}

// The message the visitor sends: what they ticked and what they wrote on the talón, in their voice.
export function buildMessage({ motivos, obras, prestaciones }: Intake) {
  const parts = ["Hola Alejandra, quiero consultarte por la gestión de mis obras sociales."];
  if (motivos.length) parts.push(`Hoy me debitan por ${enumerate(motivos.map((m) => m[0].toLowerCase() + m.slice(1)))}.`);
  if (obras.trim()) parts.push(`Trabajo con ${obras.trim().replace(/[.\s]+$/, "")}.`);
  if (prestaciones.trim()) parts.push(`Hago unas ${prestaciones.trim()} prestaciones por mes.`);
  return parts.join(" ");
}

const Ctx = createContext<{
  intake: Intake;
  toggle: (m: string) => void;
  set: (k: "obras" | "prestaciones", v: string) => void;
  message: string;
} | null>(null);

function useIntake() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useIntake outside IntakeProvider");
  return c;
}

export function IntakeProvider({ children }: { children: ReactNode }) {
  const [intake, setIntake] = useState<Intake>({ motivos: [], obras: "", prestaciones: "" });
  const value = useMemo(
    () => ({
      intake,
      message: buildMessage(intake),
      toggle: (m: string) =>
        setIntake((s) => ({ ...s, motivos: s.motivos.includes(m) ? s.motivos.filter((x) => x !== m) : [...s.motivos, m] })),
      set: (k: "obras" | "prestaciones", v: string) => setIntake((s) => ({ ...s, [k]: v })),
    }),
    [intake]
  );
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function WaLink({ className, children }: { className?: string; children: ReactNode }) {
  const { message } = useIntake();
  return (
    <a className={className} href={`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener">
      {children}
      <span className="sr"> (se abre en otra pestaña)</span>
    </a>
  );
}

export function MailLink({ className, children }: { className?: string; children: ReactNode }) {
  const { message } = useIntake();
  return (
    <a className={className} href={`mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(message)}`}>
      {children}
    </a>
  );
}

// Debit reasons the visitor ticks; each tick goes into the message.
export function Motivos({ items }: { items: string[] }) {
  const { intake, toggle } = useIntake();
  return (
    <ul className="checks">
      {items.map((r) => (
        <li key={r}>
          <label>
            <input type="checkbox" className="box" checked={intake.motivos.includes(r)} onChange={() => toggle(r)} />
            {r}
          </label>
        </li>
      ))}
    </ul>
  );
}

// Typed-in fields of the talón.
export function TalonFields() {
  const { intake, set } = useIntake();
  return (
    <div className="blanks">
      <label className="blank">
        <span className="blank-name">Obras sociales</span>
        <input
          className="blank-input"
          type="text"
          autoComplete="off"
          placeholder="ej.: OSDE, PAMI, IOSFA"
          value={intake.obras}
          onChange={(e) => set("obras", e.target.value)}
        />
      </label>
      <label className="blank blank-short">
        <span className="blank-name">Prestaciones por mes</span>
        <input
          className="blank-input"
          type="text"
          inputMode="numeric"
          autoComplete="off"
          placeholder="ej.: 120"
          value={intake.prestaciones}
          onChange={(e) => set("prestaciones", e.target.value)}
        />
      </label>
    </div>
  );
}

// What the message will carry, typed back on the talón as the visitor fills the form.
export function Resumen() {
  const { intake } = useIntake();
  const n = intake.motivos.length;
  const bits = [
    n ? `${n} ${n === 1 ? "motivo" : "motivos"} de débito marcados` : "",
    intake.obras.trim(),
    intake.prestaciones.trim() ? `${intake.prestaciones.trim()} prestaciones/mes` : "",
  ].filter(Boolean);
  return (
    <p className="typed resumen" aria-live="polite">
      {bits.length ? `Va en tu mensaje: ${bits.join(" · ")}.` : "Lo que marques arriba y completes acá se suma a tu mensaje."}
    </p>
  );
}
