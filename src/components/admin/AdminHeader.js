import React from "react";
import { usePathname } from "next/navigation";
import { FiSearch } from "react-icons/fi";

const pageTitles = {
  "/admin/dashboard": "Dashboard",
  "/admin/doctor-management": "Doctor Management",
  "/admin/reward-program": "Doctor Reward Program",
  "/admin/community": "Community Management",
  "/admin/eshop": "E-shop Inventory",
  "/admin/orders": "Order History",
};

export default function AdminHeader() {
  const pathname = usePathname();
  const title = pageTitles[pathname] || "Dashboard";
  return (
    <div className="flex justify-between items-center mt-[30px] mb-6">
      <h1 className="text-[2rem] font-bold text-[#004C44] leading-tight">{title}</h1>
      <div className="flex gap-[30px] items-center">
        <div className="relative" style={{ width: '473px', height: '45px' }}>
          <input
            className="border border-[#C7D7CB] rounded-full pl-12 pr-4 h-[45px] w-full text-base focus:outline-none"
            style={{ minWidth: '0', maxWidth: '100%' }}
            placeholder="Search"
          />
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#195B48] text-xl" />
        </div>
        <button
          className="bg-[#195B48] text-white rounded-[10px] font-semibold shadow hover:bg-[#004C44] transition flex items-center gap-[6px]"
          style={{
            width: '138px',
            height: '45px',
            borderRadius: '10px',
            paddingTop: '15px',
            paddingBottom: '15px',
            paddingLeft: '20px',
            paddingRight: '20px',
            opacity: 0.9923,
            fontSize: '15px',
          }}
        >
          Add Doctors
        </button>
      </div>
    </div>
  );
} 