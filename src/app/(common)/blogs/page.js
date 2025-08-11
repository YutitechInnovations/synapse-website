"use client";
import Navbar from "../../../components/Navbar/Navbar";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import instance from "../../../network";
import { cleanImageUrl } from "../../../utils/imageUrlCleaner";

const TABS = [
  {
    key: "blogs",
    label: "Blogs",
    heroTitle: "Blogs",
    heroSubtitle:
      "Fresh takes and expert insights from the world of clinical care",
    gridTitle: "Blogs",
  },
];

// Sort options configuration
const SORT_OPTIONS = [
  { key: "newest", label: "Newest", icon: "↓" },
  { key: "oldest", label: "Oldest", icon: "↑" },
  { key: "title", label: "Title A-Z", icon: "A→Z" },
  { key: "title-desc", label: "Title Z-A", icon: "Z→A" },
];

function BlogsContent() {
  const searchParams = useSearchParams();
  const [blogs, setBlogs] = useState([]);
  const [originalBlogs, setOriginalBlogs] = useState([]); // Keep original order
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [sortBy, setSortBy] = useState("newest"); // Default sort
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  
  const initialTab = (() => {
    const tabParam = searchParams.get("tab");
    if (tabParam === "materials") return "materials";
    if (tabParam === "research") return "research";
    return "blogs";
  })();
  const [activeTab, setActiveTab] = useState(initialTab);
  
  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam === "materials" && activeTab !== "materials")
      setActiveTab("materials");
    if (tabParam === "research" && activeTab !== "research")
      setActiveTab("research");
    if (!tabParam && activeTab !== "blogs") setActiveTab("blogs");
  }, [searchParams, activeTab]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true);
        const response = await instance.get("/blogs/get_all_blogs");
        
        if (response.data.status === "success") {
          // Clean any malformed image URLs
          const cleanedBlogs = response.data.data.map(blog => ({
            ...blog,
            image: cleanImageUrl(blog.image)
          }));
          setOriginalBlogs(cleanedBlogs || []); // Store original order
          setBlogs(cleanedBlogs || []);
        } else {
          setError("Failed to load blogs");
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError("Failed to load blogs. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Sort blogs based on selected option
  useEffect(() => {
    if (originalBlogs.length === 0) return;

    const sortedBlogs = [...originalBlogs].sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.date) - new Date(a.date);
        case "oldest":
          return new Date(a.date) - new Date(b.date);
        case "title":
          return a.title.localeCompare(b.title);
        case "title-desc":
          return b.title.localeCompare(a.title);
        default:
          return new Date(b.date) - new Date(a.date);
      }
    });

    setBlogs(sortedBlogs);
  }, [sortBy, originalBlogs]);

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
    setShowSortDropdown(false);
  };

  const currentTab = TABS.find((tab) => tab.key === activeTab);
  const currentSortOption = SORT_OPTIONS.find(option => option.key === sortBy);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navbar />
      <main className="w-full max-w-7xl 3xl:max-w-screen-xl mx-auto px-4 py-12 md:py-16 mt-28">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#195B48] mb-6 leading-tight">
            {currentTab.heroTitle}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {currentTab.heroSubtitle}
          </p>
        </div>

        {/* Enhanced Controls Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#195B48] to-[#144636] rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#195B48]">
                {currentTab.gridTitle}
              </h2>
              <p className="text-gray-600 text-sm">Discover insights and expertise</p>
            </div>
          </div>
          
          {/* Enhanced Sort Dropdown */}
          <div className="relative">
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <span className="text-[#195B48] font-medium text-sm">Sort by:</span>
              <button 
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="px-4 py-2 rounded-full border border-[#195B48] bg-gradient-to-r from-[#195B48] to-[#144636] text-white font-semibold flex items-center gap-2 hover:from-[#144636] hover:to-[#0f3328] transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                {currentSortOption?.label || "Newest"}
                <svg className={`w-4 h-4 transition-transform duration-300 ${showSortDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </button>
            </div>

            {/* Sort Dropdown Menu */}
            {showSortDropdown && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50">
                {SORT_OPTIONS.map((option) => (
                  <button
                    key={option.key}
                    onClick={() => handleSortChange(option.key)}
                    className={`w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 ${
                      sortBy === option.key ? 'bg-[#195B48]/10 text-[#195B48] font-semibold' : 'text-gray-700'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {option.label}
                    </span>
                    {sortBy === option.key && (
                      <svg className="w-4 h-4 text-[#195B48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Enhanced Blog List Grid */}
        {isLoading ? (
          <div className="text-center py-20">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-[#195B48]/20 border-t-[#195B48] rounded-full animate-spin mx-auto mb-6"></div>
              <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-[#195B48]/40 rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
            </div>
            <p className="text-gray-600 text-lg font-medium">Loading articles...</p>
            <p className="text-gray-400 text-sm mt-2">Preparing amazing content for you</p>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <div className="w-32 h-32 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <svg className="w-16 h-16 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-[#195B48] mb-4">Oops! Something went wrong</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#195B48] to-[#144636] text-white rounded-xl font-semibold hover:from-[#144636] hover:to-[#0f3328] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Try Again
            </button>
          </div>
        ) : blogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <Link
                key={blog.blog_id}
                href={`/blogs/${blog.blog_id}`}
                className="group relative bg-white rounded-3xl border border-gray-200 overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:border-[#195B48]/30"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationName: 'fadeInUp',
                  animationDuration: '0.6s',
                  animationTimingFunction: 'ease-out',
                  animationFillMode: 'forwards'
                }}
              >
                {/* Enhanced Image Container */}
                <div className="relative w-full h-48 overflow-hidden">
                  {blog.image ? (
                    <Image 
                      src={blog.image} 
                      alt={blog.title} 
                      width={400}
                      height={192}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        console.error("Public blog image failed to load:", blog.image);
                        e.target.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <svg className="h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Date badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 shadow-sm">
                    {new Date(blog.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                  
                  {/* Read more indicator */}
                  <div className="absolute bottom-4 right-4 bg-[#195B48] text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Enhanced Content */}
                <div className="p-6">
                  <div className="flex items-center text-xs text-gray-500 mb-3 space-x-3">
                    <div className="flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {new Date(blog.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>

                  </div>
                  
                  <h3 className="text-xl font-bold text-[#195B48] mb-3 line-clamp-2 leading-tight group-hover:text-[#144636] transition-colors duration-300">
                    {blog.title}
                  </h3>
                  
                  <p className="text-gray-600 line-clamp-3 leading-relaxed mb-4">
                    {blog.summary}
                  </p>
                  
                  {/* Enhanced Read More */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-[#195B48] font-medium text-sm group-hover:text-[#144636] transition-colors duration-300">
                      Read Article
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    
                    {/* Category tags */}
                    <div className="flex space-x-2">
                      <span className="px-2 py-1 bg-[#195B48]/10 text-[#195B48] rounded-full text-xs font-medium">
                        Article
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#195B48]/5 to-[#195B48]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-[#195B48] mb-4">No Articles Yet</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
              Be the first to share insights and expertise with the orthodontic community. 
              Start writing and inspire others with your knowledge.
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-sm mx-auto border border-gray-200">
              <div className="text-sm text-gray-500">
                <p className="font-medium">Check back soon for new articles from our experts</p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Click outside to close dropdown */}
      {showSortDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowSortDropdown(false)}
        />
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
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
