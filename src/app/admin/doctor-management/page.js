/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Loader from "@/components/loader";
import { useDoctors, useHandleDoctorStatus } from "@/hooks/useDoctors";
import { useState, useRef, useEffect } from "react";

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
  const options = ["Approve", "Reject"];
  return (
    <div className="relative inline-block" ref={ref}>
      <button
        className="border border-[#195B48] bg-white px-6 py-2 rounded-full text-[#195B48] font-semibold flex items-center gap-2 min-w-[120px] justify-between focus:outline-none transition-colors duration-150 hover:bg-[#E6F2EF] hover:border-[#004C44] hover:text-[#004C44]"
        onClick={() => {
          console.log("Dropdown button clicked");
          setOpen((v) => !v);
        }}
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
  const [filterString, setFilterString] = useState({
    limit: 10,
    offset: 1,
    query: "",
  });
  const [queryString, setQueryString] = useState("?limit=10&offset=0");
  const { data: doctorsDetails, isLoading, error } = useDoctors(queryString);
  const { mutate: handleStatusChange, isPending } =
    useHandleDoctorStatus(queryString);

  useEffect(() => {
    const params = new URLSearchParams();
    // Always include limit and offset
    params.append("limit", filterString.limit);
    params.append("offset", filterString.offset);

    // Include query only if it's not empty
    if (filterString?.query?.trim() !== "") {
      params.append("query", filterString.query.trim());
    }

    const queryString = `?${params.toString()}`;
    setQueryString(queryString);
    console.log(filterString, queryString)
  }, [filterString]);

  useEffect(() => {
    const handler = (e) => {
      setFilterString({ ...filterString, query: e.detail.value });
      // You can now use this in useEffect or fetch logic
    };

    window.addEventListener("Doctor Management", handler);

    return () => {
      window.removeEventListener("Doctor Management", handler);
    };
  }, []);

  if (isLoading || isPending) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="w-full text-center text-red-500 p-4">
        Error loading doctors: {error.message}
      </div>
    );
  }

  if (!doctorsDetails || !doctorsDetails.data) {
    return (
      <div className="w-full text-center text-gray-500 p-4">
        No doctors data available
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-6 mb-8 flex-wrap">
        <StatCard
          label="Total Doctors"
          value={doctorsDetails.stats?.total_users}
        />
        <StatCard
          label="Active Doctors"
          value={doctorsDetails.stats?.active_users}
        />
        <StatCard
          label="Inactive Doctors"
          value={doctorsDetails.stats?.inactive_users}
        />
      </div>
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
              {doctorsDetails.data.map((doc, i) => (
                <tr
                  key={i}
                  className="border-b border-[#C7D7CB] last:border-0 text-[#195B48] text-[15px]"
                >
                  <td className="py-3 px-4 font-medium">
                    {String(i + 1).padStart(2, "0")}
                  </td>
                  <td className="py-3 px-4">{doc.full_name}</td>
                  <td className="py-3 px-4">{doc.email}</td>
                  <td className="py-3 px-4">{doc.mobile_number}</td>
                  <td className="py-3 px-4">{doc.ios_number}</td>
                  <td className="py-3 px-4">
                    <StatusDropdown
                      value={doc.status}
                      onChange={(val) =>
                        handleStatusChange({ userId: doc.user_id, status: val })
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-4 px-4 pb-4">
          {doctorsDetails?.stats?.total_users > 10 && (
            <>
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
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                </select>
                <span className="text-sm text-[#195B48]">
                  Showing {filterString.offset} to{" "}
                  {Math.min(
                    filterString.offset + filterString.limit - 1,
                    doctorsDetails.stats.total_users
                  )}{" "}
                  of {doctorsDetails.stats.total_users} records
                </span>
              </div>

              <div className="flex items-center gap-1">
                {Array.from(
                  {
                    length: Math.ceil(
                      doctorsDetails.stats.total_users / filterString.limit
                    ),
                  },
                  (_, index) => {
                    const pageNumber = index + 1;
                    return (
                      <button
                        key={pageNumber}
                        onClick={() =>
                          setFilterString({
                            ...filterString,
                            offset: (pageNumber - 1) * filterString.limit + 1,
                          })
                        }
                        className={`px-3 py-2 cursor-pointer rounded ${filterString.offset ===
                          (pageNumber - 1) * filterString.limit + 1
                          ? "bg-[#195B48] text-white"
                          : "text-[#195B48]"
                          }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  }
                )}
              </div>
            </>
          )}
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
