import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conoce Attach Media | Attach Group",
  description:
    "Descubre Attach Media: la división de Attach Group especializada en maximizar el impacto de tu inversión en medios on y off.",
  openGraph: {
    images: [{ url: "/images/opengraph/Attach_media.webp" }],
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}