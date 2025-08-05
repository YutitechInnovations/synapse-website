"use client";
import Navbar from "../../../components/Navbar/Navbar";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
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

function BlogsContent() {
  const searchParams = useSearchParams();
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  
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
  
  const currentTab = TABS.find((tab) => tab.key === activeTab);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen w-full bg-[#F8FAF9]">
      <Navbar />
      <main className="w-full max-w-7xl 3xl:max-w-screen-xl mx-auto px-4 py-8 md:py-40">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-10 gap-4 md:gap-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#195B48]">
            {currentTab.gridTitle}
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-[#195B48] font-medium">Sort by:</span>
            <button className="px-3 sm:px-4 py-1 rounded-lg border border-[#195B48] bg-white text-[#195B48] font-semibold flex items-center gap-1">
              Newest
              <span className="inline-block rotate-180">⇅</span>
            </button>
          </div>
        </div>

        {/* Blog List Grid */}
        {isLoading ? (
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#195B48] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading blogs...</p>
          </div>
        ) : error ? (
          <div className="text-center py-16">
            <div className="w-32 h-32 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-16 h-16 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#195B48] mb-4">Error Loading Blogs</h3>
            <p className="text-gray-600 mb-8">{error}</p>
          </div>
        ) : blogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
            {blogs.map((blog) => (
              <Link
                key={blog.blog_id}
                href={`/blogs/${blog.blog_id}`}
                className="rounded-xl border border-[#195B48] bg-white p-4 sm:p-6 flex flex-col min-h-[180px] sm:min-h-[240px] transition-all duration-150 hover:shadow-lg"
                style={{ boxShadow: 'none' }}
              >
                <div className="w-full h-28 sm:h-36 bg-gray-200 rounded-lg mb-4 sm:mb-6 flex items-center justify-center overflow-hidden">
                  {blog.image ? (
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        console.error("Public blog image failed to load:", blog.image);
                        e.target.style.display = 'none';
                      }}
                    />
                  ) : (
                    <svg className="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z" />
                    </svg>
                  )}
                </div>
                <div className="text-xs text-gray-500 mb-1">
                  {blog.date}
                </div>
                <div className="text-base sm:text-lg font-bold text-[#195B48] mb-2">
                  {blog.title}
                </div>
                <div className="text-sm text-gray-700 line-clamp-2">
                  {blog.summary}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#195B48] mb-4">No Blogs Yet</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Be the first to share insights and expertise with the orthodontic community. 
              Start writing and inspire others with your knowledge.
            </p>
            <div className="text-center">
              <div className="text-sm text-gray-500">
                <p>Check back soon for new blog posts from our experts</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
    // <div className="grid grid-rows-[auto_1fr_auto] min-h-screen w-full bg-[#F8FAF9]">
    //   <Navbar />
    //   <div style={{ height: "110px" }}></div>
    //   <main className="w-full max-w-7xl mx-auto px-4 py-8 md:py-10">
    //     <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-10 gap-4 md:gap-0">
    //       <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#195B48]">{currentTab.gridTitle}</h2>
    //       <div className="flex items-center gap-2">
    //         <span className="text-[#195B48] font-medium">Sort by:</span>
    //         <button className="px-3 sm:px-4 py-1 rounded-lg border border-[#195B48] bg-white text-[#195B48] font-semibold flex items-center gap-1">
    //           Newest
    //           <span className="inline-block rotate-180">⇅</span>
    //         </button>
    //       </div>
    //     </div>
    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
    //       {blogData.map((blog, idx) => (
    //         <div
    //           key={idx}
    //           className="rounded-xl border border-[#195B48] bg-white p-4 sm:p-6 flex flex-col min-h-[180px] sm:min-h-[240px] transition-all duration-150"
    //           style={{ boxShadow: 'none' }}
    //         >
    //           <div className="w-full h-28 sm:h-36 bg-gray-200 rounded-lg mb-4 sm:mb-6 flex items-center justify-center">
    //             {/* Placeholder for blog image */}
    //             <span className="text-gray-300 text-xl sm:text-2xl">Image</span>
    //           </div>
    //           <div className="text-xs text-gray-500 mb-1">
    //             {blog.date} &nbsp;•&nbsp; {blog.readTime}
    //           </div>
    //           <div className="text-base sm:text-lg font-bold text-[#195B48]">
    //             {blog.title}
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </main>
    // </div>
  );
}

export default function Blogs() {
  return (
    <Suspense>
      <BlogsContent />
    </Suspense>
  );
}
