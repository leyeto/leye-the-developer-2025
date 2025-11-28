import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";

const poppinsSan = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
// Poppins for Headings, Roboto for Body
const roboto = Roboto({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leye the Developer",
  description: "Leye the Developer Freelance Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppinsSan.className} ${roboto.className}`}>
      <body className={`${poppinsSan.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
