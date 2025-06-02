"use client";
import { usePathname } from "next/navigation";
import Navbar from "./navbar/Navbar";

export default function ConditionalNavbar() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;
  return <Navbar />;
} 