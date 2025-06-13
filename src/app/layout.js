"use client";
import "./globals.css";
import ConditionalNavbar from "../components/ConditionalNavbar";
import ConditionalFooter from "../components/ConditionalFooter";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { AuthProvider } from "@/context/AuthContext";


import { Poppins, Sora } from 'next/font/google';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const sora = Sora({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});


export default function RootLayout({ children }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <html lang="en" className={`${poppins.variable} ${sora.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/tabIcon.png" type="image/png" />
      </head>
      <body
        className={`antialiased [overflow-anchor:none]`}
      >
        <Toaster />
        <ConditionalNavbar />
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            {" "}
            <main>{children}</main>
          </AuthProvider>
        </QueryClientProvider>
        <ConditionalFooter />
      </body>
    </html>
  );
}
