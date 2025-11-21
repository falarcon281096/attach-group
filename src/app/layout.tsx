import type { Metadata } from "next";
import Script from "next/script";
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
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T5JRQCJ');`}
        </Script>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-T5JRQCJ"
            height="0" 
            width="0" 
            style={{display:'none',visibility:'hidden'}}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
