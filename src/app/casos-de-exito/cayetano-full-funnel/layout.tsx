import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Caso de éxito: Universidad Cayetano Heredia | Attach Group",
  description:
    "Descubre nuestro caso de éxito para la Universidad Peruana Cayetano Heredia que permitió alcanzar sus objetivos con una solución digital a medida.",
  openGraph: {
    images: [{ url: "/images/opengraph/Casos_de_exito_-_Cayetano.webp" }],
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}