"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import instance from "../../../../network";
import { deleteBlog } from "../../../../services/blogs";
import toast from "react-hot-toast";

export default function BlogManagement() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setIsLoading(true);
      const response = await instance.get("/blogs/get_all_blogs");
      
      if (response.data.status === "success") {
        // Use the image URLs as they are from the backend
        setBlogs(response.data.data || []);
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

  const handleDeleteBlog = async (blog) => {
    const blogId = blog.id || blog.blog_id;
    const blogSlug = blog.slug;
    
    if (!blogId && !blogSlug) {
      toast.error("Blog ID or slug not found. Cannot delete this blog.");
      return;
    }

    // Use toast.promise for confirmation
    const promise = new Promise(async (resolve, reject) => {
      try {
        // Try using slug first, then fallback to blog_id
        const identifier = blogSlug || blogId;
        
        // Use the deleteBlog service function
        const response = await deleteBlog(identifier);
        
        if (response.status === "success") {
          // Remove the blog from the local state
          setBlogs(prevBlogs => prevBlogs.filter(b => (b.id || b.blog_id) !== blogId));
          resolve("Blog deleted successfully!");
        } else {
          reject(new Error(response.message || "Failed to delete blog"));
        }
      } catch (error) {
        console.error("Error deleting blog:", error);
        reject(new Error(error.message || "Failed to delete blog. Please try again."));
      }
    });

    toast.promise(
      promise,
      {
        loading: 'Deleting blog...',
        success: (message) => message,
        error: (err) => err.message,
      }
    );
  };

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen p-6">
      {/* Enhanced Header Section */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-gradient-to-br from-[#195B48] to-[#144636] rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#195B48] leading-tight">
                Blog Management
              </h1>
              <p className="text-gray-600 mt-1">Manage and organize your blog content</p>
            </div>
          </div>
          
          <Link 
            href="/admin/blog-management/create" 
            className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#195B48] to-[#144636] text-white rounded-xl font-semibold hover:from-[#144636] hover:to-[#0f3328] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Create New Blog
          </Link>
        </div>
      </div>

      {/* Enhanced Main Content Card */}
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        <div className="p-8 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#195B48] mb-2">All Blogs</h2>
              <p className="text-gray-600">Manage and edit your blog posts with ease</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-[#195B48]/10 text-[#195B48] px-4 py-2 rounded-full text-sm font-medium">
                {blogs.length} {blogs.length === 1 ? 'Blog' : 'Blogs'}
              </div>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-20">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-[#195B48]/20 border-t-[#195B48] rounded-full animate-spin mx-auto mb-6"></div>
              <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-[#195B48]/40 rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
            </div>
            <p className="text-gray-600 text-lg font-medium">Loading blogs...</p>
            <p className="text-gray-400 text-sm mt-2">Preparing your content management dashboard</p>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#195B48] mb-4">Oops! Something went wrong</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">{error}</p>
            <button
              onClick={fetchBlogs}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#195B48] to-[#144636] text-white rounded-xl font-semibold hover:from-[#144636] hover:to-[#0f3328] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Try Again
            </button>
          </div>
        ) : blogs.length > 0 ? (
          <div className="w-full">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Blog
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider hidden lg:table-cell">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider hidden md:table-cell">
                    Status
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {blogs.map((blog, index) => (
                  <tr 
                    key={blog.blog_id} 
                    className="group hover:bg-gradient-to-r hover:from-[#195B48]/5 hover:to-[#195B48]/10 transition-all duration-300 transform hover:scale-[1.01]"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animationName: 'fadeInUp',
                      animationDuration: '0.6s',
                      animationTimingFunction: 'ease-out',
                      animationFillMode: 'forwards'
                    }}
                  >
                    <td className="px-6 py-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-16 w-16">
                          <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
                            {blog.image ? (
                              <Image 
                                src={blog.image} 
                                alt={blog.title} 
                                width={64}
                                height={64}
                                className="h-16 w-16 object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
                                onError={(e) => {
                                  console.error("Image failed to load:", blog.image);
                                  e.target.style.display = 'none';
                                }}
                              />
                            ) : (
                              <svg className="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z" />
                              </svg>
                            )}
                          </div>
                        </div>
                        <div className="ml-4 min-w-0 flex-1">
                          <div className="text-lg font-semibold text-gray-900 group-hover:text-[#195B48] transition-colors duration-300 break-words leading-tight">
                            {blog.title}
                          </div>
                          <div className="text-sm text-gray-600 mt-1 line-clamp-2 break-words">
                            {blog.summary?.substring(0, 60)}...
                          </div>
                          <div className="text-xs text-gray-400 mt-2 flex items-center lg:hidden">
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {new Date(blog.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6 hidden lg:table-cell">
                      <div className="text-sm text-gray-600">
                        {new Date(blog.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>

                    </td>
                    <td className="px-6 py-6 hidden md:table-cell">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-green-100 to-green-200 text-green-800 shadow-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        Published
                      </span>
                    </td>
                    <td className="px-6 py-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/blog-management/edit/${blog.blog_id}`}
                          className="group/edit inline-flex items-center px-3 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-sm"
                        >
                          <svg className="w-4 h-4 mr-1 group-hover/edit:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDeleteBlog(blog)}
                          className="group/delete inline-flex items-center px-3 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-medium hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-sm"
                        >
                          <svg className="w-4 h-4 mr-1 group-hover/delete:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#195B48] mb-4">No blogs yet</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">Get started by creating your first blog post to share insights with your audience.</p>
            <Link
              href="/admin/blog-management/create"
              className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#195B48] to-[#144636] text-white rounded-xl font-semibold hover:from-[#144636] hover:to-[#0f3328] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Create First Blog
            </Link>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
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