"use client";
import Navbar from "@/components/navbar/Navbar";

export default function Settings() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF9]">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1 w-full pt-[205px] pb-12 px-2 sm:px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#184C3A] mb-10 text-center">Settings</h1>
        <div className="w-full max-w-4xl bg-white border border-[#184C3A] rounded-2xl p-6 md:p-10 mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-[#184C3A] mb-1">Profile Information</h2>
          <p className="text-[#184C3A] text-base mb-6">Update your personal information and preferences</p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[#184C3A]" htmlFor="fullName">Full Name</label>
              <input id="fullName" type="text" className="border border-[#B6C3C7] rounded-lg px-4 py-2 text-[#184C3A] bg-white" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[#184C3A]" htmlFor="email">Email</label>
              <input id="email" type="email" className="border border-[#B6C3C7] rounded-lg px-4 py-2 text-[#184C3A] bg-white" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[#184C3A]" htmlFor="mobile">Mobile Number</label>
              <input id="mobile" type="text" className="border border-[#B6C3C7] rounded-lg px-4 py-2 text-[#184C3A] bg-white" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[#184C3A]" htmlFor="practiceType">Practice Type</label>
              <input id="practiceType" type="text" className="border border-[#B6C3C7] rounded-lg px-4 py-2 text-[#184C3A] bg-white" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[#184C3A]" htmlFor="iosReg">iOS Registration Number</label>
              <input id="iosReg" type="text" className="border border-[#B6C3C7] rounded-lg px-4 py-2 text-[#184C3A] bg-white" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[#184C3A]" htmlFor="practiceAddress">Practice Address</label>
              <input id="practiceAddress" type="text" className="border border-[#B6C3C7] rounded-lg px-4 py-2 text-[#184C3A] bg-white" />
            </div>
            <div className="md:col-span-2 flex justify-start mt-2">
              <button type="submit" className="bg-[#08544A] text-white font-semibold rounded-lg px-8 py-3 shadow-md hover:bg-[#184C3A] transition text-base">Save Changes</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
} 