import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar";
import {Copyright} from "@mui/icons-material";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Providers } from './components/provider';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Lazaro",
  description: "Portfolio about John Lazaro",
};

/**
 * This is the main layout of all the pages
 * @param param0 
 * @returns 
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavBar />
        <Providers>{children}</Providers>
        <footer className="content-center items-center text-center">
          Developed with Next.js <Copyright /> John Lazaro 2025
          <Link href={process.env.NEXT_PUBLIC_GITHUB as string} target="_blank">
            <Image height={50} width={50} alt='github logo' src='/github-mark-white.png' />
          </Link>
        </footer>
      </body>
    </html>
  );
}
