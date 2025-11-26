import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const miFuente = localFont({
//   src: [
//     {
//       path: '/app/fonts/Graphik-Regular-Trial.otf',
//       weight: '400',
//     }
//   ],
//   variable: '--font-atm',
//   display: 'swap',
// });


export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://attach-group.vercel.app"),
  title: {
    default: "Attach Group | Grupo de empresas especializadas en resolver problemas de negocio",
    template: "%s | Attach Group",
  },
  description: "Impulsa tu negocio con Attach Group, holding de empresas especializadas en resolver problemas de negocio con estrategia y tecnología.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Attach Group",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://attach-group.vercel.app",
    locale: "es",
    images: [{ url: "/images/opengraph/Home.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Attach Group",
    description: "Impulsa tu negocio con Attach Group, consultora líder en estrategia digital.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <GoogleTagManager gtmId="GTM-T5JRQCJ" />
        {children}
      </body>
    </html>
  );
}