import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prisma | Attach Group",
  description:
    "Prisma es el nuevo estándar para medir la reputación y visibilidad de tu marca en la era de la IA generativa.",
  openGraph: {
    images: [{ url: "/images/prisma/precalificacionLeads.jpg" }],
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}