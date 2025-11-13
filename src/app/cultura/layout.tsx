import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestra cultura | Attach Group",
  description:
    "Descubre la cultura de Attach Group: innovación, colaboración y crecimiento. Conoce nuestros valores, equipo y cómo transformamos la industria.",
  openGraph: {
    images: [{ url: "/images/cultura/culturaAttach.jpg" }],
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}