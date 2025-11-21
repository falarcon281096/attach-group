import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conoce Athena Ads | Attach Group",
  description:
    "Impulsa tu éxito con Athena Ads, una marca de Attach Group. Descubre soluciones de publicidad programática innovadoras y efectivas para alcanzar objetivos.",
  openGraph: {
    images: [{ url: "/images/opengraph/Athena_Ads.webp" }],
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}