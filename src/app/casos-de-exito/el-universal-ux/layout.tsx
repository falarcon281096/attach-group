import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Caso de éxito: El Universal | Attach Group | UX",
  description:
    "Descubre nuestro caso de éxito con El Universal. Conoce nuestra experiencia y resultados en la optimización de proyectos con IA.",
  openGraph: {
    images: [{ url: "/images/opengraph/Casos_de_exito_-_El_Universal_ux.webp" }],
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}