"use client";
import { useEffect } from "react";


export default function AdminDashboard() {

    useEffect(() => {
      const handlePopState = (event) => {
        history.pushState(null, "", window.location.href);
      };

      history.pushState(null, "", window.location.href);
      window.addEventListener("popstate", handlePopState);

      return () => {
        window.removeEventListener("popstate", handlePopState);
      };
    }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#F8FAF9]">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#195B48] mb-4">Coming Soon</h1>
        <p className="text-lg text-[#184C3A]">
          Dashboard will be available shortly.
        </p>
      </div>
    </div>
  );
}
