"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import instance from "../../../../network";
import { deleteBlog } from "../../../../services/blogs";
import { cleanImageUrl } from "../../../../utils/imageUrlCleaner";

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

  const handleDeleteBlog = async (blog) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        const blogId = blog.id || blog.blog_id;
        const blogSlug = blog.slug;
        
        
        if (!blogId && !blogSlug) {
          alert("Blog ID or slug not found. Cannot delete this blog.");
          return;
        }

        // Try using slug first, then fallback to blog_id
        const identifier = blogSlug || blogId;
        
        // Use the deleteBlog service function
        const response = await deleteBlog(identifier);
        
        if (response.status === "success") {
          // Remove the blog from the local state
          setBlogs(prevBlogs => prevBlogs.filter(b => (b.id || b.blog_id) !== blogId));
          alert("Blog deleted successfully!");
        } else {
          alert(response.message || "Failed to delete blog");
        }
      } catch (error) {
        console.error("Error deleting blog:", error);
        alert(error.message || "Failed to delete blog. Please try again.");
      }
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 md:gap-0">
        <h1 className="text-[2rem] font-bold text-[#004C44] leading-tight">
          Blog Management
        </h1>
        <Link 
          href="/admin/blog-management/create" 
          className="px-6 py-3 bg-[#195B48] text-white rounded-lg font-semibold hover:bg-[#144636] transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Create New Blog
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">All Blogs</h2>
          <p className="text-gray-600 mt-1">Manage and edit your blog posts</p>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#195B48] mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading blogs...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Error Loading Blogs</h3>
            <p className="text-gray-600 mb-6">{error}</p>
            <button
              onClick={fetchBlogs}
              className="inline-flex items-center px-4 py-2 bg-[#195B48] text-white rounded-lg font-semibold hover:bg-[#144636] transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Try Again
            </button>
          </div>
        ) : blogs.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Blog
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {blogs.map((blog) => (
                  <tr key={blog.blog_id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-12 w-12">
                          <div className="h-12 w-12 rounded-lg bg-gray-200 flex items-center justify-center overflow-hidden">
                            {blog.image ? (
                              <img 
                                src={blog.image} 
                                alt={blog.title} 
                                className="h-12 w-12 object-cover rounded-lg"
                                onError={(e) => {
                                  console.error("Image failed to load:", blog.image);
                                  e.target.style.display = 'none';
                                }}
                              />
                            ) : (
                              <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z" />
                              </svg>
                            )}
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {blog.title}
                          </div>
                          <div className="text-sm text-gray-500">
                            {blog.summary?.substring(0, 60)}...
                          </div>
                          {blog.image && (
                            <div className="text-xs text-gray-400 mt-1">
                              Image: {blog.image.substring(0, 50)}...
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {blog.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        Published
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/blog-management/edit/${blog.blog_id}`}
                          className="text-blue-600 hover:text-blue-900 transition-colors"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDeleteBlog(blog)}
                          className="text-red-600 hover:text-red-900 transition-colors"
                        >
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
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No blogs yet</h3>
            <p className="text-gray-500 mb-6">Get started by creating your first blog post.</p>
            <Link
              href="/admin/blog-management/create"
              className="inline-flex items-center px-4 py-2 bg-[#195B48] text-white rounded-lg font-semibold hover:bg-[#144636] transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Create First Blog
            </Link>
          </div>
        )}
      </div>
    </div>
  );
} 