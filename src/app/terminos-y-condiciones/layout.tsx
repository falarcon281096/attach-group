import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones | ProspectIA",
  description:
    "Términos y condiciones de uso del servicio ProspectIA de ATENA ADS S.A.C. Conoce los términos aplicables al uso de nuestra plataforma de marketing y ventas potenciada por Inteligencia Artificial.",
  openGraph: {
    images: [{ url: "/images/opengraph/Home.webp" }],
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}

