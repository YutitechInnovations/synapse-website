"use client";
import { Suspense } from "react";
import Navbar from "@/components/Navbar/Navbar";

function CareersContent() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen w-full bg-[#F6F6F3]">
      <Navbar />
      <main className="w-full max-w-7xl lg:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto px-4">
        <h2 className="mt-[180px] text-[2.875rem] font-bold text-[#004C44] text-center mb-6 leading-[1.1]">
          Careers{" "}
        </h2>
        <div className="w-full bg-white border border-[#195B48] rounded-xl py-16 mt-10 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold text-[#004C44]">
            Coming Soon!
          </h3>
        </div>
      </main>
    </div>
  );
}

export default function Career() {
  return (
    <Suspense>
      <CareersContent />
    </Suspense>
  );
}
