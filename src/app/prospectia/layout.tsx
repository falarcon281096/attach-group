import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ProspectIA | Attach Group",
  description:
    "ProspectIA conversa y precalifica leads con IA, envía señales inteligentes a Google y Meta y potencia al equipo comercial para incrementar el ROI.",
  openGraph: {
    images: [{ url: "/images/prospectia/logo.webp" }],
  },
}

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>
}
