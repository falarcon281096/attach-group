import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "El Universal UX | Casos de Éxito | Attach Group",
  description:
    "Descubre cómo El Universal mejoró su experiencia de usuario con una interfaz conversacional impulsada por LLM.",
};

export default function ElUniversalUXLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
