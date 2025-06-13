"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";

export default function Settings() {
  const [originalData, setOriginalData] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    practiceType: "",
    iosReg: "",
    practiceAddress: "",
  });
  useEffect(() => {
    const stored = localStorage.getItem("loggedUser");
    if (stored) {
      const user = JSON.parse(stored);
      const populated = {
        fullName: user.full_name || "",
        email: user.email || "",
        mobile: user.mobile_number || "",
        practiceType: user.role || "",
        iosReg: user.ios_number || "",
        practiceAddress: "",
      };
      setFormData(populated);
      setOriginalData(populated);
    }
  }, []);
    
  const isFormChanged =
    JSON.stringify(formData) !== JSON.stringify(originalData);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF9]">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1 w-full mt-12 px-2 sm:px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#184C3A] mb-6 text-center">
          Settings
        </h1>
        <div className="w-full max-w-4xl bg-white border border-[#184C3A] rounded-2xl p-6 mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-[#184C3A] mb-1">
            Profile Information
          </h2>
          <p className="text-[#184C3A] text-base mb-6">
            Update your personal information and preferences
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label
                className="font-semibold text-[#184C3A]"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                className="border border-[#B6C3C7] rounded-lg px-4 py-2 text-[#184C3A] bg-white"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[#184C3A]" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                disabled
                onChange={handleChange}
                className="border border-[#B6C3C7] rounded-lg px-4 py-2 text-[#6B7280] bg-[#F0F0F0] cursor-not-allowed opacity-80"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[#184C3C]" htmlFor="mobile">
                Mobile Number
              </label>
              <input
                id="mobile"
                name="mobile"
                type="text"
                value={formData.mobile}
                onChange={handleChange}
                className="border border-[#B6C3C7] rounded-lg px-4 py-2 text-[#184C3C] bg-white"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="font-semibold text-[#184C3C]"
                htmlFor="practiceType"
              >
                Practice Type
              </label>
              <input
                id="practiceType"
                name="practiceType"
                type="text"
                value={formData.practiceType}
                onChange={handleChange}
                className="border border-[#B6C3C7] rounded-lg px-4 py-2 text-[#184C3C] bg-white"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[#184C3C]" htmlFor="iosReg">
                iOS Registration Number
              </label>
              <input
                id="iosReg"
                name="iosReg"
                type="text"
                value={formData.iosReg}
                onChange={handleChange}
                className="border border-[#B6C3C7] rounded-lg px-4 py-2 text-[#184C3C] bg-white"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="font-semibold text-[#184C3C]"
                htmlFor="practiceAddress"
              >
                Practice Address
              </label>
              <input
                id="practiceAddress"
                name="practiceAddress"
                type="text"
                value={formData.practiceAddress}
                onChange={handleChange}
                className="border border-[#B6C3C7] rounded-lg px-4 py-2 text-[#184C3C] bg-white"
              />
            </div>
            <div className="md:col-span-2 flex justify-start mt-2">
              <button
                disabled={!isFormChanged}
                type="submit"
                className={`bg-[#08544A] text-white font-semibold rounded-[10px] px-10 py-3 shadow-md transition text-base ${
                  isFormChanged
                    ? "hover:bg-[#184C3A] active:scale-95"
                    : "opacity-70 cursor-not-allowed"
                }`}
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
