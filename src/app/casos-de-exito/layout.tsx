import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casos de éxitos en Estrategia Digital",
  description:
    "Descubre los casos de éxito de Attach Group. Conoce cómo ayudamos a nuestros clientes a alcanzar sus objetivos con soluciones innovadoras en estrategia digital.",
  openGraph: {
    images: [{ url: "/images/opengraph/Casos_de_exito.webp" }],
  },
  alternates: {
    canonical: "/casos-de-exito",
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}