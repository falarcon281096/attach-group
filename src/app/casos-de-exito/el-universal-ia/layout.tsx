import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "El Universal | Casos de Éxito | Attach Group",
  description:
    "Descubre cómo El Universal integró IA generativa con la ayuda de Attach Group para clasificar contenido automáticamente.",
};

export default function ElUniversalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
