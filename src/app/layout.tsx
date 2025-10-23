import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local'
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
  title: "Attach Group",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable}   antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
