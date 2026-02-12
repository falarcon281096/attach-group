import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apuesta Total | Catálogo Dinámico",
  description:
    "Conoce cómo Attach Group logró un caso de éxito con Apuesta Total en el 2025. Descubre nuestra estrategia digital para llegar a los objetivos propuestos.",
  openGraph: {
    images: [{ url: "/images/opengraph/Casos_de_exito_-apuesta-total-catalogo-dinamico.webp" }],
  },
  alternates: {
    canonical: "/casos-de-exito/apuesta-total-catalogo-dinamico",
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}