"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Navbar from "../../../../components/Navbar/Navbar";
import Link from "next/link";
import Image from "next/image";
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
  }, [slug, blogId]);

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
              <Image 
                src={blog.image} 
                alt={blog.title} 
                width={800}
                height={320}
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


          </div>
        </div>

        {/* Blog Content */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8">
            <article className="prose prose-lg max-w-none">
              <div className="text-gray-800 leading-relaxed space-y-6">
                {(() => {
                  const content = blog.content || blog.body || blog.text;
                  
                  if (content) {
                    // Handle different content formats
                    if (typeof content === 'string') {
                      // Split by double newlines for paragraphs
                      const paragraphs = content.split("\n\n");
                      
                      // If there's only one paragraph (no double newlines), split by single newlines
                      if (paragraphs.length === 1 && content.includes('\n')) {
                        const lines = content.split('\n');
                        return lines.map((line, idx) => (
                          <p key={idx} className="text-lg leading-8">
                            {line}
                          </p>
                        ));
                      }
                      
                      // Otherwise, display as paragraphs
                      return paragraphs.map((paragraph, idx) => (
                        <p key={idx} className="text-lg leading-8">
                          {paragraph}
                        </p>
                      ));
                    } else {
                      // If content is not a string, try to convert it
                      return (
                        <p className="text-lg leading-8">
                          {String(content)}
                        </p>
                      );
                    }
                  } else {
                    return (
                      <p className="text-lg leading-8 text-gray-500">
                        Content not available for this blog post.
                      </p>
                    );
                  }
                })()}
              </div>
            </article>


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