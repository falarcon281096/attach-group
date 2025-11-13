import type { Metadata } from "next";
import Script from "next/script";
import GAAnalytics from "../components/GAAnalytics";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    default: "Attach Group",
    template: "%s | Attach Group",
  },
  description: "Impulsa tu negocio con Attach Group, consultora líder en estrategia digital. Transformamos tu presencia online para alcanzar resultados reales.",
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
    images: [{ url: "/images/general/attach_cross_blue_to_purple.png" }],
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
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);} 
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
            <GAAnalytics />
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
