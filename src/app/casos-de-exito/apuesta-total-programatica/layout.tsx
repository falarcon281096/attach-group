import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Caso de éxito: Apuesta Total Ads | Attach Group",
  description:
    "Conoce nuestro caso de éxito con Apuesta Total. Descubre este caso de estudio y conoce cómo optimizamos los resultados publicitarios desde Attach Group.",
  openGraph: {
    images: [{ url: "/images/opengraph/Casos_de_exito_-apuesta-total-publicidad-programatica.webp" }],
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}