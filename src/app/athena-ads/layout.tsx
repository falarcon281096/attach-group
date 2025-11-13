import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conoce Athena Ads | Attach Group",
  description:
    "Impulsa tu éxito con Athena Ads de Attach Group. Descubre soluciones de publicidad programática innovadoras y efectivas para alcanzar tus objetivos.",
  openGraph: {
    images: [{ url: "/images/athena-ads/01.jpg" }],
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}