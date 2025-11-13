import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conoce GalileoIA | Attach Group",
  description:
    "Descubre GalileoIA, la solución de Attach Group para transformar digitalmente tu negocio. Conoce nuestros servicios de IA y comienza tu evolución hoy.",
  openGraph: {
    images: [{ url: "/images/galileo/galileo.png" }],
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}