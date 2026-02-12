import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Caso de Éxito Cayetano Heredia",
  description:
    "Descubre nuestro caso de éxito para la Universidad Peruana Cayetano Heredia que permitió alcanzar sus objetivos con una solución digital a medida.",
  openGraph: {
    images: [{ url: "/images/opengraph/Casos_de_exito_-_Cayetano.webp" }],
  },
  alternates: {
    canonical: "/casos-de-exito/cayetano-full-funnel",
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}