import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "El Universal | Casos de Éxito",
  description:
    "Descubre cómo El Universal integró IA generativa con la ayuda de Attach Group para clasificar contenido automáticamente.",
  alternates: {
    canonical: "/casos-de-exito/el-universal-ia",
  },
};

export default function ElUniversalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
