import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Cursia Enterprise Pitch",
  description: "Entrenamiento inteligente. Impacto medible.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={clsx(inter.variable, "font-sans antialiased bg-white text-black h-screen w-screen overflow-hidden")}>
        {children}
      </body>
    </html>
  );
}
