import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Caso de éxito: El Universal | Attach Group",
  description:
    "Descubre cómo Attach Group logró un caso de éxito con El Universal. Conoce nuestra experiencia y resultados en la optimización de proyectos con IA.",
  openGraph: {
    images: [{ url: "/images/casos-de-exito/universal/universal_estrategia.png" }],
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}