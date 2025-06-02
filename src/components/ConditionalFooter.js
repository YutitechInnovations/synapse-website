"use client";
import { usePathname } from "next/navigation";
import Footer from "./footer/Footer";

export default function ConditionalFooter() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;
  return <Footer />;
} 