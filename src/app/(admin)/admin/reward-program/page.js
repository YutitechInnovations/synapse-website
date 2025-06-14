"use client";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaStar, FaChartBar } from "react-icons/fa";
import { mockDoctors } from "@/constant/mockDoctors";

const PAGE_SIZE_OPTIONS = [10, 20, 50];

export default function DoctorRewardProgram() {
  const [search, setSearch] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredDoctors = mockDoctors.filter(
    (doc) =>
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.email.toLowerCase().includes(search.toLowerCase()) ||
      doc.mobile.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredDoctors.length / pageSize);
  const paginatedDoctors = filteredDoctors.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="w-full min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 md:gap-0">
        <h1 className="text-[2rem] font-bold text-[#004C44] leading-tight">
          Doctor Reward Program
        </h1>
        <div className="relative w-full md:w-[320px] h-[45px]">
          <input
            className="border border-[#C7D7CB] rounded-full pl-12 pr-4 h-[45px] w-full text-base focus:outline-none"
            placeholder="Search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#195B48] text-xl" />
        </div>
      </div>

      {/* Stat Cards */}
      <div className="flex flex-col md:flex-row gap-6 mb-8 flex-wrap">
        <StatCard label="Total Doctors" value={mockDoctors.length} />
        <StatCard label="Active Doctors" value={35} />
        <StatCard label="Inactive Doctors" value={15} />
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
              {paginatedDoctors.length > 0 ? (
                paginatedDoctors.map((doc, i) => (
                  <tr
                    key={i}
                    className="border-b border-[#C7D7CB] text-[#195B48] text-[15px]"
                  >
                    <td className="py-3 px-4 font-medium">
                      {String((currentPage - 1) * pageSize + i + 1).padStart(
                        2,
                        "0"
                      )}
                    </td>
                    <td className="py-3 px-4">{doc.name}</td>
                    <td className="py-3 px-4">{doc.email}</td>
                    <td className="py-3 px-4">{doc.mobile}</td>
                    <td className="py-3 px-4">{doc.rewards}</td>
                    <td className="py-3 px-4 flex gap-3 items-center">
                      <button className="text-[#195B48] hover:text-yellow-500">
                        <FaStar />
                      </button>
                      <button className="text-[#195B48] hover:text-[#004C44]">
                        <FaChartBar />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center text-[#195B48] py-6 font-medium text-base"
                  >
                    No search results found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 px-4 pb-4">
          <div className="flex items-center gap-2">
            <select
              className="border border-[#C7D7CB] rounded px-2 py-1 text-sm"
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setCurrentPage(1);
              }}
            >
              {PAGE_SIZE_OPTIONS.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <span className="text-sm text-[#195B48]">
              Showing {(currentPage - 1) * pageSize + 1} to{" "}
              {Math.min(currentPage * pageSize, filteredDoctors.length)} of{" "}
              {filteredDoctors.length} records
            </span>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(totalPages).keys()].slice(0, 5).map((n) => (
              <button
                key={n}
                className={`px-3 py-2 rounded ${
                  n + 1 === currentPage
                    ? "bg-[#195B48] text-white"
                    : "text-[#195B48]"
                }`}
                onClick={() => handlePageChange(n + 1)}
              >
                {n + 1}
              </button>
            ))}
            {totalPages > 5 && <span className="text-[#195B48]">...</span>}
            {totalPages > 5 && (
              <button
                className="px-3 py-2 rounded text-[#195B48]"
                onClick={() => handlePageChange(totalPages)}
              >
                {totalPages}
              </button>
            )}
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
        padding: "24px",
        boxSizing: "border-box",
      }}
    >
      <div className="text-[#195B48] text-[15px] font-semibold mb-2">
        {label}
      </div>
      <div className="text-[32px] font-bold text-[#195B48]">{value}</div>
    </div>
  );
}
