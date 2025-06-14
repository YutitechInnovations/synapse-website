import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  DashboardIcon,
  DoctorManagementIcon,
  DoctorRewardProgram,
  CommunityManagementIcon,
  EShopInventoryIcon,
  OrderHistoryIcon,
  LogoutIcon,
} from "@/theme/icons";

import { adminLogout } from "@/services/auth";
import { logout } from "@/network/helper";

const navItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: DashboardIcon },
  {
    label: "Doctor Management",
    href: "/admin/doctor-management",
    icon: DoctorManagementIcon,
  },
  {
    label: "Doctor Reward Program",
    href: "/admin/reward-program",
    icon: DoctorRewardProgram,
  },
  {
    label: "Community Management",
    href: "/admin/community-management",
    icon: CommunityManagementIcon,
  },
  {
    label: "E-shop Inventory",
    href: "/admin/e-shop",
    icon: EShopInventoryIcon,
  },
  {
    label: "Order History",
    icon: OrderHistoryIcon,
    href: "/admin/orders",
  },
  ,
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Sidebar content as a function for reuse
  const sidebarContent = (
    <aside
      className="bg-[#004C44] text-white h-screen flex flex-col items-center
    py-2 px-2 fixed top-0 left-0 z-50 transition-all duration-300
    w-full md:w-[200px] md:min-w-[200px] md:max-w-none max-w-full"
    >
      {" "}
      <div className="mb-4 flex flex-col items-center w-full relative">
        {/* Close button for mobile */}
        <button
          className="absolute left-4 top-2 md:hidden text-white text-3xl z-50"
          onClick={() => setOpen(false)}
          aria-label="Close sidebar"
        >
          &times;
        </button>
        <Image
          src="/images/logo.png"
          width={120}
          height={10}
          alt="Synapse Logo"
        />
      </div>
      <nav className="flex-1 flex flex-col gap-y-2 w-full items-center ">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          let Icon = item?.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center transition text-white ${
                isActive
                  ? "bg-white text-[#195B48] shadow font-semibold"
                  : "hover:bg-[#004C44]"
              } `}
              style={{
                width: "149px",
                height: "90px",
                borderRadius: "10px",
                padding: "4px 20px",
                marginBottom: 0,
              }}
              onClick={() => setOpen(false)}
            >
              <span className="mb-1">
                <Icon isActive={isActive} />
              </span>
              <span
                className={`text-[12px] text-center ${
                  isActive ? "text-[#195B48]" : "text-white"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
        <Link
          onClick={() => {
            adminLogout();
            logout();
          }}
          href={"/admin"}
          className={`flex flex-col items-center justify-center transition text-white hover:bg-[#004C44] `}
          style={{
            width: "149px",
            height: "74px",
            borderRadius: "10px",
            padding: "5px 20px",
            marginBottom: 0,
          }}
        >
          <span className="mb-2">
            <LogoutIcon />
          </span>
          <span className={`text-[12px] text-center  text-white`}>Logout</span>
        </Link>
      </nav>
    </aside>
  );

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-[#195B48] p-2 rounded-lg shadow-lg focus:outline-none"
        onClick={() => setOpen(true)}
        aria-label="Open sidebar"
        type="button"
      >
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
          <path
            d="M4 6h16M4 12h16M4 18h16"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 left-0 h-screen z-50 transition-transform duration-300 md:static md:translate-x-0 ${
          open ? "translate-x-0 w-full max-w-xs" : "-translate-x-full"
        } md:block`}
        style={{ width: open ? "100vw" : 181 }}
      >
        {sidebarContent}
      </div>
    </>
  );
}
