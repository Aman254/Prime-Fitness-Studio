import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { inter } from "@/app/components/ui/fonts";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Prime Fitness Studio",
  description: "A Gym website for workout.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
