import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const ppFormula = localFont({
  src: [
    {
      path: './fonts/PPFormula-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/PPFormula-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/PPFormula-Extrabold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-pp-formula',
  display: 'swap',
})
export const metadata: Metadata = {
  title: "DayByMe",
  description: "Ďakujeme za vašu priazeň.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ppFormula.variable}`}>
        {children}
      </body>
    </html>
  );
}
