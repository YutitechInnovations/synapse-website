"use client";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminHeader from "../../components/admin/AdminHeader";

export default function AdminLayout({ children }) {
  return (
    <div className="w-full min-h-screen">
      <div className="fixed left-0 top-0 h-screen z-30">
        <AdminSidebar />
      </div>
      <main className="ml-[181px] bg-[#F8FAF9] min-h-screen p-8">
        <AdminHeader />
        {children}
      </main>
    </div>
  );
} 