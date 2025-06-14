"use client";
import Navbar from "@/components/Navbar/Navbar";
import { Suspense } from "react";

function RxTrackContent() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen w-full bg-[#F8FAF9]">
      <Navbar />
      <main className="w-full max-w-7xl mx-auto px-4">
        <h2 className="mt-[180px] text-[2.875rem] font-bold text-[#004C44] text-center mb-6 leading-[1.1]">
          RxTrack™{" "}
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

export default function RxTrack() {
  return (
    <Suspense>
      <RxTrackContent />
    </Suspense>
  );
}
