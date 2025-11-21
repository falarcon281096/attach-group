import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contáctanos | Attach Group",
  description:
    "Contáctanos hoy para hablar de tu proyecto y descubrir cómo las soluciones digitales de Attach Group puede ayudarte a alcanzar tus objetivos digitales.",
  openGraph: {
    images: [{ url: "/images/opengraph/Contactanos.webp" }],
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}