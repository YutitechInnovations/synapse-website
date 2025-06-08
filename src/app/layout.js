"use client"

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConditionalNavbar from "../components/ConditionalNavbar";
import ConditionalFooter from "../components/ConditionalFooter";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased [overflow-anchor:none]`}
      >
        <Toaster />
        <ConditionalNavbar />
        <QueryClientProvider client={queryClient}>
          <main>{children}</main>
        </QueryClientProvider>
        <ConditionalFooter />
      </body>
    </html>
  );
}
