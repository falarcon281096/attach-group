import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conoce GalileoIA",
  description:
    "Descubre GalileoIA, la solución de Attach Group para transformar tu negocio con IA, Cloud y Martech. Comienza tu evolución hoy con nuestros servicios.",
  openGraph: {
    images: [{ url: "/images/opengraph/Galileo_IA.webp" }],
  },
  alternates: {
    canonical: "/galileo-ia",
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}