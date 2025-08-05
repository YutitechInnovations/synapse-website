"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Navbar from "../../../../components/Navbar/Navbar";
import Link from "next/link";
import instance from "../../../../network";
import { cleanImageUrl } from "../../../../utils/imageUrlCleaner";

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Convert slug to blog_id (since we're using blog_id for routing)
  const blogId = slug;



  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setIsLoading(true);
        
        // First, get all blogs to find the target blog
        const response = await instance.get("/blogs/get_all_blogs");
        
        if (response.data.status === "success" && response.data.data) {
          // Clean any malformed image URLs
          const cleanedBlogs = response.data.data.map(blog => {
            const cleanedImage = cleanImageUrl(blog.image);
            return {
              ...blog,
              image: cleanedImage
            };
          });
          setBlogs(cleanedBlogs); // Store all blogs for related articles
          const foundBlog = cleanedBlogs.find(b => b.blog_id === blogId);
          
          if (foundBlog) {
            // Try to get the full blog content using a specific endpoint
            try {
              const fullBlogResponse = await instance.get(`/blogs/get_blog_by_id?blog_id=${blogId}`);
              
              if (fullBlogResponse.data.status === "success" && fullBlogResponse.data.data) {
                const fullBlog = {
                  ...foundBlog,
                  ...fullBlogResponse.data.data // Merge with additional fields
                };
                setBlog(fullBlog);
              } else {
                setBlog(foundBlog);
              }
            } catch (fullBlogError) {
              setBlog(foundBlog);
            }
          } else {
            setError("Blog not found");
          }
        } else {
          setError("Failed to load blog");
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
        setError("Failed to load blog. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  // Calculate reading time (average 200 words per minute)
  const wordCount = blog?.content?.split(/\s+/).length || 0;
  const readingTime = Math.ceil(wordCount / 200);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F8FAF9] to-[#E8F5E8]">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen mt-28">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#195B48] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading blog...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F8FAF9] to-[#E8F5E8]">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen mt-28">
          <div className="text-center">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {error === "Blog not found" ? "Blog Not Found" : "Error Loading Blog"}
            </h2>
            <p className="text-gray-600 mb-8 max-w-md">
              {error === "Blog not found" 
                ? "The blog post you're looking for doesn't exist or may have been moved."
                : error || "Something went wrong while loading the blog."
              }
            </p>
            <Link 
              href="/blogs" 
              className="inline-flex items-center px-6 py-3 bg-[#195B48] text-white rounded-lg font-semibold hover:bg-[#144636] transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAF9] to-[#E8F5E8]">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-10 mt-28">
        {/* Back Button */}
        <Link 
          href="/blogs" 
          className="inline-flex items-center text-[#195B48] hover:text-[#144636] mb-8 transition-colors group"
        >
          <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blogs
        </Link>

        {/* Blog Header */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-8">
          {blog.image && (
            <div className="w-full h-80 relative">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error("Blog detail image failed to load:", blog.image);
                  e.target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          )}
          
          <div className="p-8">
            {/* Meta Information */}
            <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(blog.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {readingTime} min read
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-[#195B48] mb-4 leading-tight">
              {blog.title}
            </h1>

            {/* Summary */}
            {blog.summary && (
              <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-[#195B48] pl-6 mb-6">
                {blog.summary}
              </p>
            )}

            {/* Tags/Categories */}
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-[#195B48]/10 text-[#195B48] rounded-full text-sm font-medium">
                Orthodontics
              </span>
              <span className="px-3 py-1 bg-[#195B48]/10 text-[#195B48] rounded-full text-sm font-medium">
                Technology
              </span>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8">
            <article className="prose prose-lg max-w-none">
              <div className="text-gray-800 leading-relaxed space-y-6">
                {(blog.content || blog.body || blog.text) ? (
                  (blog.content || blog.body || blog.text).split("\n\n").map((paragraph, idx) => (
                    <p key={idx} className="text-lg leading-8">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-lg leading-8 text-gray-500">
                    Content not available for this blog post.
                  </p>
                )}
              </div>
            </article>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-[#195B48] mb-2">Share this article</h3>
                  <p className="text-gray-600 text-sm">Help others discover this valuable content</p>
                </div>
                <div className="flex space-x-3">
                  <button className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </button>
                  <button className="p-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </button>
                  <button className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles Suggestion */}
        {blogs.filter(b => b.blog_id !== blog.blog_id).length > 0 && (
          <div className="mt-8 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#195B48] mb-6">Continue Reading</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogs
                  .filter(b => b.blog_id !== blog.blog_id)
                  .slice(0, 2)
                  .map((relatedBlog) => (
                    <Link
                      key={relatedBlog.blog_id}
                      href={`/blogs/${relatedBlog.blog_id}`}
                      className="group block p-4 rounded-lg border border-gray-200 hover:border-[#195B48] hover:shadow-md transition-all duration-200"
                    >
                      <h4 className="font-semibold text-[#195B48] group-hover:text-[#144636] mb-2">
                        {relatedBlog.title}
                      </h4>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {relatedBlog.summary}
                      </p>
                      <div className="text-xs text-gray-500 mt-2">
                        {new Date(relatedBlog.date).toLocaleDateString()}
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 