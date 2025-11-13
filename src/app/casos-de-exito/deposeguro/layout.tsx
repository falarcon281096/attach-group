import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Caso de éxito: Deposeguro | Attach Group",
  description:
    "Descubre nuestro caso de éxito para Deposeguro que permitió alcanzar sus objetivos con una estrategia digital sólo con foco en resultados.",
  openGraph: {
    images: [{ url: "/images/casos-de-exito/deposeguro.png" }],
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}