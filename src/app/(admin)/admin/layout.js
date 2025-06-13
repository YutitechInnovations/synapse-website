"use client";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminHeader from "../../components/admin/AdminHeader";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  // Only show sidebar and header if not on /admin (login page)
  const isLoginPage = pathname === "/admin";
  if (isLoginPage) {
    return <>{children}</>;
  }
  return (
    <div className="w-full min-h-screen">
      <div className="fixed left-0 top-0 h-screen z-30">
        <AdminSidebar />
      </div>
      <main className="bg-[#F8FAF9] min-h-screen p-8 md:ml-[181px]">
        <AdminHeader />
        {children}
      </main>
    </div>
  );
} 