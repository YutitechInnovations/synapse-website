"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { mockDoctorList } from "@/constant/mockDoctorManagement";

function StatusDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const options = ["Pending", "Approved", "Rejected"];

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div className="relative inline-block" ref={ref}>
      <button
        className="w-[200px] min-w-[200px] max-w-[200px] h-[45px] border border-[#195B48] rounded-full bg-white text-[#195B48] font-semibold px-4 flex items-center justify-between gap-2 focus:outline-none transition duration-150 hover:bg-[#E6F2EF] hover:border-[#004C44]"
        onClick={() => setOpen((v) => !v)}
        type="button"
      >
        <span className="truncate">{value}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 9l6 6l6 -6" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-[160px] bg-white border border-[#C7D7CB] rounded-xl shadow z-50 text-[#195B48] text-[15px] font-semibold overflow-hidden">
          {options.map((opt) => (
            <button
              key={opt}
              className="w-full px-4 py-2 text-left border-b last:border-0 border-[#C7D7CB] transition-colors duration-150 hover:bg-[#E6F2EF]"
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              type="button"
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function DoctorManagement() {
  const [filterString, setFilterString] = useState({
    limit: 10,
    offset: 1,
    query: "",
  });

  const [filteredData, setFilteredData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const start = (filterString.offset - 1) * filterString.limit;
    const end = start + filterString.limit;

    const filtered = mockDoctorList.filter((doc) => {
      const q = filterString.query.toLowerCase();
      return (
        doc.full_name.toLowerCase().includes(q) ||
        doc.email.toLowerCase().includes(q) ||
        doc.mobile_number.toLowerCase().includes(q)
      );
    });

    setTotalCount(filtered.length);
    setFilteredData(filtered.slice(start, end));
  }, [filterString]);

  const handleStatusChange = ({ userId, status }) => {
    setFilteredData((prev) =>
      prev.map((doc) =>
        doc.user_id === userId ? { ...doc, status: status.toLowerCase() } : doc
      )
    );

    console.log(`User ${userId} status changed to ${status}`);
  };
  

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 md:gap-0">
        <h1 className="text-[2rem] font-bold text-[#004C44] leading-tight">
          Doctor Management
        </h1>
        <div className="relative w-full md:w-[320px] h-[45px]">
          <input
            className="border border-[#C7D7CB] rounded-full pl-12 pr-4 h-[45px] w-full text-base focus:outline-none"
            placeholder="Search"
            onChange={(e) =>
              setFilterString({
                ...filterString,
                query: e.target.value,
                offset: 1,
              })
            }
          />
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#195B48] text-xl" />
        </div>
      </div>

      {/* Stats */}
      <div className="flex flex-col md:flex-row gap-6 mb-8 flex-wrap">
        <StatCard label="Total Doctors" value={totalCount} />
        <StatCard label="Active Doctors" value={42} />
        <StatCard label="Inactive Doctors" value={17} />
      </div>

      {/* Table */}
      <div className="bg-white rounded-[12px] border border-[#C7D7CB] p-0 overflow-hidden">
        <div className="overflow-y-auto max-h-[calc(100vh-25rem)]">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-[#F8FAF9] z-10">
              <tr className="border-b border-[#C7D7CB] text-[#195B48] text-[15px] font-semibold">
                <th className="py-3 px-4">S. No.</th>
                <th className="py-3 px-4">Doctor Name</th>
                <th className="py-3 px-4">Email Id</th>
                <th className="py-3 px-4">Mobile Number</th>
                <th className="py-3 px-4">iOS Number</th>
                <th className="py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((doc, i) => (
                  <tr
                    key={doc.user_id}
                    className="border-b border-[#C7D7CB] last:border-0 text-[#195B48] text-[15px]"
                  >
                    <td className="py-3 px-4 font-medium">
                      {String(
                        (filterString.offset - 1) * filterString.limit + i + 1
                      ).padStart(2, "0")}
                    </td>
                    <td className="py-3 px-4">{doc.full_name}</td>
                    <td className="py-3 px-4">{doc.email}</td>
                    <td className="py-3 px-4">{doc.mobile_number}</td>
                    <td className="py-3 px-4">{doc.ios_number}</td>
                    <td className="py-3 px-4">
                      <StatusDropdown
                        value={
                          doc.status.charAt(0).toUpperCase() +
                          doc.status.slice(1)
                        }
                        onChange={(val) => {
                          const normalized = val.toLowerCase();
                          handleStatusChange({
                            userId: doc.user_id,
                            status: normalized,
                          });
                        }}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-6 text-[#195B48]">
                    No search results found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 px-4 pb-4">
          {/* Page size selector */}
          <div className="flex items-center gap-2">
            <select
              onChange={(e) =>
                setFilterString({
                  ...filterString,
                  limit: parseInt(e.target.value),
                  offset: 1,
                })
              }
              className="border border-[#C7D7CB] rounded px-2 py-1 text-sm"
              value={filterString.limit}
            >
              {[10, 20, 50].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <span className="text-sm text-[#195B48]">
              Showing {(filterString.offset - 1) * filterString.limit + 1} to{" "}
              {Math.min(filterString.offset * filterString.limit, totalCount)}{" "}
              of {totalCount} records
            </span>
          </div>

          {/* Pagination */}
          <div className="flex items-center gap-1 text-[#195B48]">
            {/* Prev button */}
            <button
              onClick={() =>
                filterString.offset > 1 &&
                setFilterString({
                  ...filterString,
                  offset: filterString.offset - 1,
                })
              }
              className="px-3 py-2"
            >
              &lt;
            </button>

            {/* Dynamic pagination numbers */}
            {(() => {
              const totalPages = Math.ceil(totalCount / filterString.limit);
              const current = filterString.offset;
              const visiblePages = [];

              const addPage = (page) => {
                visiblePages.push(
                  <button
                    key={page}
                    onClick={() =>
                      setFilterString({ ...filterString, offset: page })
                    }
                    className={`px-3 py-1 rounded-md ${
                      current === page
                        ? "bg-[#195B48] text-white"
                        : "border-transparent hover:border-[#195B48]"
                    }`}
                  >
                    {page}
                  </button>
                );
              };

              if (totalPages <= 7) {
                for (let i = 1; i <= totalPages; i++) addPage(i);
              } else {
                const first = 1;
                const last = totalPages;
                const showLeftDots = current > 4;
                const showRightDots = current < totalPages - 3;

                if (!showLeftDots && showRightDots) {
                  for (let i = 1; i <= 5; i++) addPage(i);
                  visiblePages.push(<span key="dots-right">...</span>);
                  addPage(totalPages);
                } else if (showLeftDots && !showRightDots) {
                  addPage(1);
                  visiblePages.push(<span key="dots-left">...</span>);
                  for (let i = totalPages - 4; i <= totalPages; i++) addPage(i);
                } else {
                  addPage(1);
                  visiblePages.push(<span key="dots-left">...</span>);
                  for (let i = current - 1; i <= current + 1; i++) addPage(i);
                  visiblePages.push(<span key="dots-right">...</span>);
                  addPage(totalPages);
                }
              }

              return visiblePages;
            })()}

            {/* Next button */}
            <button
              onClick={() => {
                const totalPages = Math.ceil(totalCount / filterString.limit);
                if (filterString.offset < totalPages) {
                  setFilterString({
                    ...filterString,
                    offset: filterString.offset + 1,
                  });
                }
              }}
              className="px-3 py-2"
            >
              &gt;
            </button>
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
