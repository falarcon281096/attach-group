import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Caso de éxito: Apuesta Total 2025 | Attach Group",
  description:
    "Conoce cómo Attach Group logró un caso de éxito con Apuesta Total en el 2025. Descubre nuestra estrategia digital para llegar a los objetivos propuestos.",
  openGraph: {
    images: [{ url: "/images/opengraph/Casos_de_exito_-apuesta-total-catalogo-dinamico.webp" }],
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}