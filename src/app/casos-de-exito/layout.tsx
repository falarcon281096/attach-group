import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casos de éxitos en Estrategia Digital | Attach Group",
  description:
    "Descubre los casos de éxito de Attach Group. Conoce cómo ayudamos a nuestros clientes a alcanzar sus objetivos con soluciones innovadoras en estrategia digital.",
  openGraph: {
    images: [{ url: "/images/general/attach_cross_blue_to_purple.png" }],
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}