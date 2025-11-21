import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre nosotros | Attach Group",
  description:
    "Descubre quiénes somos, nuestra misión y visión. Conoce al equipo detrás de nuestros proyectos y cómo podemos ayudarte a alcanzar tus metas.",
  openGraph: {
    images: [{ url: "/images/opengraph/Nosotros.webp" }],
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}