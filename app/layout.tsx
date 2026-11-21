import type { Metadata, Viewport } from "next";
import { Archivo, Courier_Prime } from "next/font/google";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--f-print" });
const courier = Courier_Prime({ subsets: ["latin"], weight: ["400", "700"], variable: "--f-type" });

export const metadata: Metadata = {
  title: "Alejandra Lazzarano · Gestión de obras sociales",
  description:
    "Facturación, autorizaciones y obras sociales para médicos, kinesiólogos y odontólogos con consultorio propio. 34 años dentro de IOSFA (ex IOSE). 100% remoto desde Mendoza.",
};

export const viewport: Viewport = { themeColor: "#f3c4cf" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className={`${archivo.variable} ${courier.variable}`} suppressHydrationWarning>
      <head>
        {/* before first paint, so the stamp waits hidden instead of showing and then popping out */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
