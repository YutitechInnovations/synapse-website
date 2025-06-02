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
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-[30px] mb-6 gap-4 md:gap-0">
      <h1 className="text-[2rem] font-bold text-[#004C44] leading-tight">{title}</h1>
      <div className="flex gap-[30px] items-center w-full md:w-auto">
        <div className="relative w-full md:w-[473px] h-[45px]">
          <input
            className="border border-[#C7D7CB] rounded-full pl-12 pr-4 h-[45px] w-full text-base focus:outline-none"
            style={{ minWidth: '0', maxWidth: '100%' }}
            placeholder="Search"
          />
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#195B48] text-xl" />
        </div>
        <button
          className="bg-[#195B48] text-white rounded-[10px] font-semibold shadow hover:bg-[#004C44] transition flex items-center gap-[6px] w-full md:w-[138px] h-[45px] px-5 py-3 md:py-0 md:px-5 mt-2 md:mt-0"
          style={{
            borderRadius: '10px',
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