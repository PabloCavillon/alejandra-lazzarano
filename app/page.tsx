import Stamp from "./stamp";

// Contact data taken from her CV; change here if she uses another line for the service.
const WHATSAPP = "https://wa.me/5492612402277?text=" +
  encodeURIComponent("Hola Alejandra, quiero consultarte por la gestión de mis obras sociales.");
const MAIL = "mailto:alazzarano@hotmail.com?subject=" + encodeURIComponent("Consulta por gestión de obras sociales");

const rechazos = [
  "Falta de autorización previa",
  "Orden vencida o mal confeccionada",
  "Código de práctica mal cargado",
  "Falta firma o sello del afiliado",
  "Presentación fuera de término",
  "Afiliado sin cobertura al día de la prestación",
];

const circuito = [
  ["Autorizo antes de que atiendas", "Pido las autorizaciones previas a cada obra social para que la práctica llegue cubierta."],
  ["Armo y presento tu facturación", "Órdenes, planillas y plazos de cada obra social, presentados completos y a tiempo."],
  ["Sigo cada liquidación", "Reviso los débitos, reclamo lo que corresponde y refacturo lo rechazado."],
  ["Hablo con la obra social por vos", "Consultas, cambios de normas y trámites. Vos atendés, yo hago los papeles."],
];

const antecedentes = [
  ["2023 – hoy", "Mendoza", "Atención al afiliado, turnos y auditoría médica"],
  ["2017 – 2022", "Chubut", "Encargada de derivaciones y autorizaciones"],
  ["2014 – 2016", "Buenos Aires", "Subadministradora de farmacia"],
  ["2010 – 2013", "Chubut", "Contable"],
  ["2007 – 2009", "Buenos Aires", "Administrativa de RR.HH."],
  ["2004 – 2006", "Chubut", "Tesorera"],
  ["2000 – 2003", "Buenos Aires", "Contable"],
  ["1995 – 1999", "La Pampa", "Pagos, liquidaciones, débitos y créditos a prestadores"],
  ["1992 – 1994", "Córdoba", "Caja y atención al afiliado en ventanilla"],
];

export default function Home() {
  return (
    <main>
      <div className="sheet">
        <header className="strip">
          <p className="form-title">
            Orden de prestación <span className="form-no">N.º 1992–2026</span>
            <span className="form-sub">Gestión de obras sociales</span>
          </p>
          <nav aria-label="Secciones">
            <a href="#rechazos">Rechazos</a>
            <a href="#circuito">Qué hago</a>
            <a href="#antecedentes">Antecedentes</a>
            <a href="#contacto">Contacto</a>
            <a className="strip-wa" href={WHATSAPP} target="_blank" rel="noopener">
              WhatsApp<span className="sr"> (se abre en otra pestaña)</span>
            </a>
          </nav>
        </header>

        <section className="orden" aria-labelledby="titular">
          <div className="fields">
            <div className="row o-prestador">
              <span className="label">Prestador</span>
              <p className="typed">Médicos, kinesiólogos y odontólogos con consultorio propio</p>
            </div>
            <div className="row row-main o-practica">
              <span className="label">Práctica solicitada</span>
              <h1 id="titular">Que cada prestación que atendés se cobre.</h1>
            </div>
            <div className="row o-diag">
              <span className="label">Diagnóstico</span>
              <p className="typed">Prestaciones rechazadas, cobros que llegan tarde y horas perdidas con papeles.</p>
            </div>
            <div className="row o-gestiona">
              <span className="label">Gestiona</span>
              <p className="typed">
                Alejandra Lazzarano. 34 años dentro de IOSFA (ex IOSE): autorizaciones, derivaciones, auditoría
                médica, atención al afiliado y facturación.
              </p>
            </div>
            <div className="row o-modalidad">
              <span className="label">Modalidad</span>
              <p className="typed">100% remoto, desde Mendoza</p>
            </div>
          </div>

          <aside className="side">
            <figure className="carnet">
              {/* pre-cropped to the 3:4 carnet; shown at ~160px (240px on tablet), so 320/480 cover 2x screens */}
              <picture>
                <source
                  type="image/webp"
                  srcSet="/alejandra-320.webp 320w, /alejandra-480.webp 480w"
                  sizes="(max-width: 860px) 240px, 160px"
                />
                <img src="/alejandra-480.jpg" alt="Alejandra Lazzarano" width={480} height={640} decoding="async" />
              </picture>
              <figcaption>A. Lazzarano</figcaption>
            </figure>
            <div className="auth">
              {/* carbon ghost of the stamp on the pink duplicate, peeking out past the sheet's edge */}
              <svg className="stamp stamp-ghost" viewBox="0 0 320 120" aria-hidden="true">
                <use href="#stamp-art" />
              </svg>
              <span className="label">Autorización</span>
              <div className="stamped">
                <Stamp />
                <a className="btn" href={WHATSAPP} target="_blank" rel="noopener">
                  Escribime por WhatsApp<span className="sr"> (se abre en otra pestaña)</span>
                </a>
              </div>
              <a className="alt" href={MAIL}>
                o mandame un mail
              </a>
            </div>
          </aside>
        </section>

        <section id="rechazos" className="part" aria-labelledby="h-rechazos">
          <h2 id="h-rechazos" className="part-head">Lo que hoy se te cae en la liquidación</h2>
          <div className="row">
            <span className="label">Observaciones</span>
            <p className="typed">
              Cada uno de estos motivos es un débito que se puede evitar. Los conozco desde el otro lado del mostrador,
              donde se revisa la orden antes de pagarla.
            </p>
          </div>
          <div className="row">
            <span className="label">Motivos de débito</span>
            <ul className="checks">
              {rechazos.map((r) => (
                <li key={r}>
                  <span className="box" aria-hidden="true" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="circuito" className="part" aria-labelledby="h-circuito">
          <h2 id="h-circuito" className="part-head">Qué hago por vos, mes a mes</h2>
          <ol className="circuit">
            {circuito.map(([t, d], i) => (
              <li key={t} className="row">
                <span className="label num">{i + 1}</span>
                <div>
                  <h3>{t}</h3>
                  <p className="typed">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="antecedentes" className="part" aria-labelledby="h-antecedentes">
          <h2 id="h-antecedentes" className="part-head">34 años del lado de la obra social</h2>
          <div className="row">
            <span className="label">Observaciones</span>
            <p className="typed">
              Toda mi carrera en IOSFA (ex IOSE), en cinco provincias. Sé cómo se mira una orden antes de autorizarla y
              una factura antes de pagarla.
            </p>
          </div>
          <div className="row">
            <span className="label">Trayectoria</span>
            <table className="ledger">
              <caption className="sr">Trayectoria en IOSFA</caption>
              <thead>
                <tr>
                  <th scope="col">Período</th>
                  <th scope="col">Lugar</th>
                  <th scope="col">Tarea</th>
                </tr>
              </thead>
              <tbody>
                {antecedentes.map(([p, l, t]) => (
                  <tr key={p}>
                    <td>{p}</td>
                    <td>{l}</td>
                    <td>{t}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="contacto" className="part talon" aria-labelledby="h-contacto">
          <h2 id="h-contacto" className="part-head">
            Talón para el prestador <span>Contame cómo facturás hoy</span>
          </h2>
          <div className="row">
            <span className="label">Para la charla</span>
            <p className="typed">Con qué obras sociales trabajás y cuántas prestaciones hacés por mes.</p>
          </div>
          <div className="row">
            <span className="label">Honorarios</span>
            <p className="typed">Se cotizan según eso. Lo vemos en la primera charla.</p>
          </div>
          <div className="row">
            <span className="label">Contacto</span>
            <div className="firma">
              <a className="btn" href={WHATSAPP} target="_blank" rel="noopener">
                Escribime por WhatsApp<span className="sr"> (se abre en otra pestaña)</span>
              </a>
              <a className="alt" href={MAIL}>
                alazzarano@hotmail.com
              </a>
              <span className="label firma-line">Firma y sello del prestador</span>
            </div>
          </div>
        </section>

        <footer className="foot">
          <p>Alejandra Lazzarano · Gestión de facturación, autorizaciones y obras sociales · Mendoza, Argentina</p>
        </footer>
      </div>
    </main>
  );
}
