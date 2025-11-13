import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conoce Attach Media | Attach Group",
  description:
    "Descubre Attach Media: la división de Attach Group especializada en soluciones digitales y tecnológicas innovadoras para hacer crecer tu negocio.",
  openGraph: {
    images: [{ url: "/images/general/attachmedia_logo.png" }],
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}