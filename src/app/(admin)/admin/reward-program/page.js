"use client";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaStar, FaChartBar } from "react-icons/fa";

const mockDoctors = Array.from({ length: 12 }, (_, i) => ({
  name: [
    "Dr. John Doe",
    "Dr. Joe Doe",
    "Dr. Jane Doe",
    "Dr. Jane Doe",
    "Dr. John Doe",
    "Dr. Joe Doe",
    "Dr. Smith",
    "Dr. Smith",
    "Dr. Smith",
    "Dr. Smith",
    "Dr. Smith",
    "Dr. Smith",
  ][i],
  email: "smith.hskk@gmail.com",
  mobile: "+91 9876543210",
  rewards: [1234, 4321, 1234, 4321, 543, 1234, 4321, 654, 1234, 5432, 123, 4567][i],
}));

export default function DoctorRewardProgram() {
  const [search, setSearch] = useState("");
  // Filter doctors based on search
  const filteredDoctors = mockDoctors.filter(doc =>
    doc.name.toLowerCase().includes(search.toLowerCase()) ||
    doc.email.toLowerCase().includes(search.toLowerCase()) ||
    doc.mobile.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="w-full min-h-screen">
      {/* Search Bar */}
      <div className="flex gap-4 items-center w-full md:w-auto mb-8">
        <div className="relative w-full md:w-[320px] h-[45px]">
          <input
            className="border border-[#C7D7CB] rounded-full pl-12 pr-4 h-[45px] w-full text-base focus:outline-none"
            style={{ minWidth: '0', maxWidth: '100%' }}
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#195B48] text-xl" />
        </div>
      </div>
      {/* Stats Cards */}
      <div className="flex flex-col md:flex-row gap-6 mb-8 flex-wrap">
        <StatCard label="Total Doctors" value={125} />
        <StatCard label="Active Doctors" value={85} />
        <StatCard label="Inactive Doctors" value={40} />
      </div>
      {/* Table */}
      <div className="bg-white rounded-[12px] border border-[#C7D7CB] p-0 overflow-x-auto">
        <div style={{ maxHeight: "400px", overflowY: "auto", width: "100%" }}>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[#C7D7CB] bg-[#F8FAF9] text-[#195B48] text-[15px] font-semibold">
                <th className="py-3 px-4">S. No.</th>
                <th className="py-3 px-4">Doctor Name</th>
                <th className="py-3 px-4">Email Id</th>
                <th className="py-3 px-4">Mobile Number</th>
                <th className="py-3 px-4">Rewards Points</th>
                <th className="py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredDoctors.map((doc, i) => (
                <tr key={i} className="border-b border-[#C7D7CB] last:border-0 text-[#195B48] text-[15px]">
                  <td className="py-3 px-4 font-medium">{String(i + 1).padStart(2, "0")}</td>
                  <td className="py-3 px-4">{doc.name}</td>
                  <td className="py-3 px-4">{doc.email}</td>
                  <td className="py-3 px-4">{doc.mobile}</td>
                  <td className="py-3 px-4">{doc.rewards}</td>
                  <td className="py-3 px-4 flex gap-3 items-center">
                    <button className="text-[#195B48] hover:text-yellow-500"><FaStar /></button>
                    <button className="text-[#195B48] hover:text-[#004C44]"><FaChartBar /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 px-4 pb-4">
          <div className="flex items-center gap-2">
            <select className="border border-[#C7D7CB] rounded px-2 py-1 text-sm">
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>
            <span className="text-sm text-[#195B48]">Showing 1 to 10 of 350 records</span>
          </div>
          <div className="flex items-center gap-1">
            <button className="px-3 py-2 rounded bg-[#195B48] text-white">1</button>
            <button className="px-3 py-2 rounded text-[#195B48]">2</button>
            <button className="px-3 py-2 rounded text-[#195B48]">3</button>
            <span className="text-[#195B48]">...</span>
            <button className="px-3 py-2 rounded text-[#195B48]">35</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div
      className="bg-white rounded-[12px] border border-[#C7D7CB] flex flex-col items-start justify-center"
      style={{
        width: "369.67px",
        minHeight: "102px",
        height: "auto",
        padding: "24px",
        boxSizing: "border-box"
      }}
    >
      <div className="text-[#195B48] text-[15px] font-semibold mb-2">{label}</div>
      <div className="text-[32px] font-bold text-[#195B48]">{value}</div>
    </div>
  );
} 