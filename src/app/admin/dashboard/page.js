"use client";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import styles from './dashboard.module.css';

const mockDoctors = Array.from({ length: 12 }, (_, i) => ({
  name: ["Dr. John Doe", "Dr. Joe Doe", "Dr. Jane Doe", "Dr. Jane Doe", "Dr. John Doe", "Dr. Joe Doe", "Dr. Smith", "Dr. Smith", "Dr. Smith", "Dr. Smith", "Dr. Smith", "Dr. Smith"][i],
  email: "smith.hskk@gmail.com",
  mobile: "+91 9876543210",
  ios: ["98765", "12345", "12345", "09876", "87665", "53453", "24654", "24654", "24654", "24654", "24654", "24654"][i],
  status: "Pending"
}));

export default function AdminDashboard() {
  return (
    <div className={styles.dashboardContainer}>
      {/* Example Stats Row */}
      <div className={styles.statsRow}>
        <StatCard label="Total Doctors" value={12} />
        <StatCard label="Pending Approvals" value={5} />
        <StatCard label="Active Cases" value={23} />
      </div>
      {/* Example Responsive Doctor Table */}
      <div className="overflow-x-auto w-full">
        <table className={styles.doctorTable + " min-w-full"}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>IOS</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {mockDoctors.map((doc, i) => (
              <tr key={i}>
                <td data-label="Name">{doc.name}</td>
                <td data-label="Email">{doc.email}</td>
                <td data-label="Mobile">{doc.mobile}</td>
                <td data-label="IOS">{doc.ios}</td>
                <td data-label="Status">{doc.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
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