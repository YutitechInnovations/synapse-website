"use client";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";
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
  },
  {
    key: "materials",
    label: "Materials & Data",
    heroTitle: "Materials & Data",
    heroSubtitle: "Quick snapshots of product details, made simple and clear",
    gridTitle: "Materials & Data",
  },
  {
    key: "research",
    label: "Research Papers",
    heroTitle: "Research Papers",
    heroSubtitle: "Peer-reviewed science to back your clinical decisions",
    gridTitle: "Research Papers",
  },
];

export default function Blogs() {
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
      <div className="w-full bg-white relative">
        <div className="w-full h-[615px] relative flex items-center justify-center">
          <Image
            src="/images/blg.jpg"
            alt="Blogs Hero"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10">
            <h1 className="text-5xl font-bold text-[#195B48] mb-4">{currentTab.heroTitle}</h1>
            <p className="text-lg text-[#195B48] mb-6 text-center max-w-xl">
              {currentTab.heroSubtitle}
            </p>
            <div className="flex flex-col items-center w-full">
              <div className="flex items-center w-[500px] max-w-full mb-6 relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-4 py-3 rounded-lg border border-[#195B48] focus:outline-none focus:ring-2 focus:ring-[#195B48] bg-white shadow text-[#195B48] text-lg pr-12"
                />
                <span className="absolute right-4 text-[#195B48] text-2xl cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                  </svg>
                </span>
              </div>
              <div className="flex gap-6">
                {TABS.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`px-8 py-3 rounded-lg border-2 transition-all duration-150 outline-none font-bold
                      ${activeTab === tab.key
                        ? 'bg-white border-[#195B48] text-[#195B48] shadow-md'
                        : 'bg-[#F8FAF9] border-[#D9E3DF] text-[#195B48] opacity-80'}
                    `}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="w-full max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-[#195B48]">{currentTab.gridTitle}</h2>
          <div className="flex items-center gap-2">
            <span className="text-[#195B48] font-medium">Sort by:</span>
            <button className="px-4 py-1 rounded-lg border border-[#195B48] bg-white text-[#195B48] font-semibold flex items-center gap-1">
              Newest
              <span className="inline-block rotate-180">⇅</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {blogData.map((blog, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-[#195B48] bg-white p-6 flex flex-col min-h-[240px] transition-all duration-150"
              style={{ boxShadow: 'none' }}
            >
              <div className="w-full h-36 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                {/* Placeholder for blog image */}
                <span className="text-gray-300 text-2xl">Image</span>
              </div>
              <div className="text-xs text-gray-500 mb-1">
                {blog.date} &nbsp;•&nbsp; {blog.readTime}
              </div>
              <div className="text-lg font-bold text-[#195B48]">
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