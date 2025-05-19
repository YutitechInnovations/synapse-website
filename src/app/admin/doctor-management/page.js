"use client";
import { useState, useRef, useEffect } from "react";

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
  ios: [
    "98765",
    "12345",
    "12345",
    "09876",
    "87665",
    "53453",
    "24654",
    "24654",
    "24654",
    "24654",
    "24654",
    "24654",
  ][i],
  status: "Pending",
}));

function StatusDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    if (open) document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [open]);
  const options = ["Approve", "In Progress", "Reject"];
  return (
    <div className="relative inline-block" ref={ref}>
      <button
        className="border border-[#195B48] bg-white px-6 py-2 rounded-full text-[#195B48] font-semibold flex items-center gap-2 min-w-[120px] justify-between focus:outline-none transition-colors duration-150 hover:bg-[#E6F2EF] hover:border-[#004C44] hover:text-[#004C44]"
        onClick={() => { console.log('Dropdown button clicked'); setOpen((v) => !v); }}
        type="button"
      >
        {value} <span className="text-lg">▼</span>
      </button>
      {open && (
        <div className="absolute left-0 mt-2 w-full bg-white border border-[#C7D7CB] rounded-xl shadow z-50 flex flex-col text-[#195B48] text-[15px] font-semibold overflow-hidden">
          {options.map((opt) => (
            <button
              key={opt}
              className="px-4 py-2 text-left border-b last:border-0 border-[#C7D7CB] transition-colors duration-150 hover:bg-[#E6F2EF] hover:text-[#195B48]"
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
  const [doctors, setDoctors] = useState(mockDoctors);
  function handleStatusChange(idx, newStatus) {
    setDoctors((prev) => prev.map((doc, i) => i === idx ? { ...doc, status: newStatus } : doc));
  }
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <StatCard label="Total Doctors" value={125} />
        <StatCard label="Active Doctors" value={85} />
        <StatCard label="Inactive Doctors" value={40} />
      </div>
      <div className="bg-white rounded-[12px] border border-[#C7D7CB] p-0 overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-[#C7D7CB] bg-[#F8FAF9] text-[#195B48] text-[15px] font-semibold">
              <th className="py-3 px-4">S. No.</th>
              <th className="py-3 px-4">Doctor Name</th>
              <th className="py-3 px-4">Email Id</th>
              <th className="py-3 px-4">Mobile Number</th>
              <th className="py-3 px-4">iOS Number</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doc, i) => (
              <tr key={i} className="border-b border-[#C7D7CB] last:border-0 text-[#195B48] text-[15px]">
                <td className="py-3 px-4 font-medium">{String(i + 1).padStart(2, "0")}</td>
                <td className="py-3 px-4">{doc.name}</td>
                <td className="py-3 px-4">{doc.email}</td>
                <td className="py-3 px-4">{doc.mobile}</td>
                <td className="py-3 px-4">{doc.ios}</td>
                <td className="py-3 px-4">
                  <StatusDropdown value={doc.status} onChange={(val) => handleStatusChange(i, val)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
    <div className="flex-1 bg-white rounded-[12px] border border-[#C7D7CB] p-6 flex flex-col items-start justify-center min-w-[220px] max-w-[300px]">
      <div className="text-[#195B48] text-[15px] font-semibold mb-2">{label}</div>
      <div className="text-[32px] font-bold text-[#195B48]">{value}</div>
    </div>
  );
} 