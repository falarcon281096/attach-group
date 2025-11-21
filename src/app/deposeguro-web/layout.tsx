import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Caso de éxito: Deposeguro | Attach Group",
  description:
    "Descubre nuestro caso de éxito para Deposeguro que permitió alcanzar sus objetivos con una estrategia digital sólo con foco en resultados.",
  openGraph: {
    images: [{ url: "/images/opengraph/Casos_de_exito_-_Deposeguro_web.webp" }],
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}