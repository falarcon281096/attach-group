import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conoce GalileoIA | Attach Group",
  description:
    "Descubre GalileoIA, la solución de Attach Group para transformar tu negocio con IA, Cloud y Martech. Comienza tu evolución hoy con nuestros servicios.",
  openGraph: {
    images: [{ url: "/images/opengraph/Galileo_IA.webp" }],
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}