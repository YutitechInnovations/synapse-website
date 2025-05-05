"use client";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Image from "next/image";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const blogData = Array(8).fill({
  date: "26 Jan 2025",
  readTime: "15 min read",
  title: "Why Direct Print Aligners",
});

const TABS = [
  {
    key: "blogs",
    label: "Blogs",
    heroTitle: "Blogs",
    heroSubtitle: "Fresh takes and expert insights from the world of clinical care",
    gridTitle: "Blogs",
  }
];

function BlogsContent() {
  const searchParams = useSearchParams();
  const initialTab = (() => {
    const tabParam = searchParams.get("tab");
    if (tabParam === "materials") return "materials";
    if (tabParam === "research") return "research";
    return "blogs";
  })();
  const [activeTab, setActiveTab] = useState(initialTab);
  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam === "materials" && activeTab !== "materials") setActiveTab("materials");
    if (tabParam === "research" && activeTab !== "research") setActiveTab("research");
    if (!tabParam && activeTab !== "blogs") setActiveTab("blogs");
  }, [searchParams]);
  const currentTab = TABS.find((tab) => tab.key === activeTab);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen w-full bg-[#F8FAF9]">
      <Navbar />
      <div style={{ height: "110px" }}></div>
      <main className="w-full max-w-7xl mx-auto px-4 py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-10 gap-4 md:gap-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#195B48]">{currentTab.gridTitle}</h2>
          <div className="flex items-center gap-2">
            <span className="text-[#195B48] font-medium">Sort by:</span>
            <button className="px-3 sm:px-4 py-1 rounded-lg border border-[#195B48] bg-white text-[#195B48] font-semibold flex items-center gap-1">
              Newest
              <span className="inline-block rotate-180">⇅</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
          {blogData.map((blog, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-[#195B48] bg-white p-4 sm:p-6 flex flex-col min-h-[180px] sm:min-h-[240px] transition-all duration-150"
              style={{ boxShadow: 'none' }}
            >
              <div className="w-full h-28 sm:h-36 bg-gray-200 rounded-lg mb-4 sm:mb-6 flex items-center justify-center">
                {/* Placeholder for blog image */}
                <span className="text-gray-300 text-xl sm:text-2xl">Image</span>
              </div>
              <div className="text-xs text-gray-500 mb-1">
                {blog.date} &nbsp;•&nbsp; {blog.readTime}
              </div>
              <div className="text-base sm:text-lg font-bold text-[#195B48]">
                {blog.title}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function Blogs() {
  return (
    <Suspense>
      <BlogsContent />
    </Suspense>
  );
} 