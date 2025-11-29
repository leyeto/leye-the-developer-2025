import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppinsSan = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
// Poppins for Headings, Roboto for Body
const roboto = Roboto({
  variable: "--font-roboto",
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
      <body className={`antialiased`}>
        <div className="mx-auto max-w-[1270px]">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
