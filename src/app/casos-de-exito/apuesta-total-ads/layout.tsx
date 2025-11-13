import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Caso de éxito: Apuesta Total Ads | Attach Group",
  description:
    "Conoce nuestro caso de éxito con Apuesta Total. Descubre este caso de estudio y conoce cómo optimizamos los resultados publicitarios desde Attach Group.",
  openGraph: {
    images: [{ url: "/images/casos-de-exito/Apuestathenads1.webp" }],
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}