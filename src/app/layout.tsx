import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import GAAnalytics from "@/components/GAAnalytics";
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/favicon-attachgroup.png",
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
      <head>
        {/* Preconnect para orígenes críticos en Home (mejora LCP en móvil) */}
        <link rel="preconnect" href="https://cdn.growthbook.io" crossOrigin="" />
        <link rel="preconnect" href="https://sgtm.attachmedia.com" crossOrigin="" />
        <link rel="preconnect" href="https://api_tracardi.expiera.com" crossOrigin="" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {/* Google Analytics 4 (habilitar cuando NEXT_PUBLIC_GA_ID esté definido) */}
        {process.env.NEXT_PUBLIC_GA_ID && (
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
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { page_path: window.location.pathname });
              `}
            </Script>
            <GAAnalytics />
          </>
        )}
        {/* Google Tag Manager (habilitar sólo cuando NEXT_PUBLIC_ENABLE_GTM === 'true') */}
        {process.env.NEXT_PUBLIC_ENABLE_GTM === 'true' && (
          <>
            <Script id="gtm-script" strategy="afterInteractive">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID || 'GTM-T5JRQCJ'}');`}
            </Script>
            {/* Google Tag Manager (noscript) */}
            <noscript>
              <iframe 
                src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID || 'GTM-T5JRQCJ'}`}
                height="0" 
                width="0" 
                style={{display:'none',visibility:'hidden'}}
              />
            </noscript>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
