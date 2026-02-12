import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "El Universal UX | Casos de Éxito",
  description:
    "Descubre cómo El Universal mejoró su experiencia de usuario con una interfaz conversacional impulsada por LLM.",
  alternates: {
    canonical: "/casos-de-exito/el-universal-ux",
  },
};

export default function ElUniversalUXLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
