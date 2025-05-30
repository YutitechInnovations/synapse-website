"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children, className = '', ...props }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={`${isActive ? "font-semibold" : ""} ${className}`} {...props}>
      {children}
    </Link>
  );
}
