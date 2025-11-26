import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Caso de éxito: Deposeguro | Attach Group",
  description:
    "Descubre cómo Attach Group logró un caso de éxito con El Universal. Conoce nuestra experiencia y resultados en la optimización de proyectos con IA.",
  openGraph: {
    images: [{ url: "/images/opengraph/Casos_de_exito_-_El_Universal-ia.webp" }],
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}