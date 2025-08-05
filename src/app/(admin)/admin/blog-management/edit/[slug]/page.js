"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { getBlogImagePresignedUrl, uploadImageToCloud, updateBlog, getBlogBySlug, getAllBlogs } from "../../../../../../services/blogs";
import { cleanImageUrl } from "../../../../../../utils/imageUrlCleaner";
import instance from "../../../../../../network";

export default function EditBlog() {
  const router = useRouter();
  const { slug } = useParams();
  const [form, setForm] = useState({
    title: "",
    slug: "",
    date: "",
    summary: "",
    image: "",
    content: "",
  });
  const [error, setError] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [blogId, setBlogId] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // First, we need to get the blog by slug to get the blog_id
        // We'll need to get all blogs and find the one with matching slug
        const response = await getAllBlogs();
        
        if (response.success && response.data) {
          const blog = response.data.find(b => b.slug === slug);
          
          if (blog) {
            const blogId = blog.id || blog.blog_id;
            
            // Now fetch the specific blog using the blog_id
            const blogResponse = await instance.get(`/blogs/get_blog_by_id?blog_id=${blogId}`);
            
            if (blogResponse.data.success && blogResponse.data.data) {
              const blogData = blogResponse.data.data;
              // Clean any malformed image URLs
              const cleanedImage = cleanImageUrl(blogData.image || "");
              setForm({
                title: blogData.title || "",
                slug: blogData.slug || "",
                date: blogData.date || "",
                summary: blogData.summary || "",
                image: cleanedImage,
                content: blogData.content || "",
              });
              setImagePreview(cleanedImage);
              setBlogId(blogId); // Store the blog ID for update
            } else {
              setError("Failed to load blog details");
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };



  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        // Show loading state for image upload
        setImagePreview("loading");
        
        // Validate file size (5MB limit)
        const maxSize = 5 * 1024 * 1024; // 5MB
        if (file.size > maxSize) {
          throw new Error("File size must be less than 5MB");
        }
        
        // Validate file type
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
        if (!allowedTypes.includes(file.type)) {
          throw new Error("Please upload a valid image file (JPEG, PNG, GIF, or WebP)");
        }
        
        // Request presigned URL from backend
        const response = await getBlogImagePresignedUrl(file.name, file.type, file.size);
        
        if (response.success) {
          const { presignedUrl, fileUrl } = response.data;
          
          // Upload directly to cloud storage
          await uploadImageToCloud(presignedUrl, file);
          
          // Clean and store the final file URL in form
          const cleanedFileUrl = cleanImageUrl(fileUrl);
          setForm(prev => ({ ...prev, image: cleanedFileUrl }));
          setImagePreview(cleanedFileUrl);
        } else {
          throw new Error(response.message || "Failed to get upload URL");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        setImagePreview("");
        alert(`Failed to upload image: ${error.message}`);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.slug || !form.content) {
      setError("Title, blog link name, and content are required.");
      return;
    }
    
    if (!blogId) {
      setError("Blog ID not found. Please refresh the page and try again.");
      return;
    }
    
    setIsSubmitting(true);
    setError("");
    
    try {
      const response = await updateBlog(blogId, {
        title: form.title,
        slug: form.slug,
        date: form.date,
        summary: form.summary,
        image: form.image,
        content: form.content
      });
      
      if (response.success) {
        alert("Blog updated successfully!");
        router.push("/admin/blog-management");
      } else {
        setError(response.message || "Failed to update blog");
      }
    } catch (error) {
      console.error("Error updating blog:", error);
      setError(error.message || "Failed to update blog. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="w-full flex items-center justify-center py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#195B48] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading blog...</p>
        </div>
      </div>
    );
  }

  if (error && error === "Blog not found") {
    return (
      <div className="w-full">
        <div className="mb-6">
          <Link 
            href="/admin/blog-management" 
            className="inline-flex items-center text-[#195B48] hover:text-[#144636] mb-4 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog Management
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Blog Not Found</h2>
          <p className="text-gray-600 mb-6">The blog post you're trying to edit doesn't exist.</p>
          <Link
            href="/admin/blog-management"
            className="inline-flex items-center px-4 py-2 bg-[#195B48] text-white rounded-lg font-semibold hover:bg-[#144636] transition-colors"
          >
            Back to Blog Management
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-6">
        <Link 
          href="/admin/blog-management" 
          className="inline-flex items-center text-[#195B48] hover:text-[#144636] mb-4 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog Management
        </Link>
        <h1 className="text-[2rem] font-bold text-[#004C44] leading-tight">Edit Blog Post</h1>
        <p className="text-gray-600 mt-2">
          Update the blog post content and details.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="bg-gradient-to-r from-[#195B48] to-[#144636] px-6 py-4 rounded-t-lg">
          <h2 className="text-xl font-semibold text-white flex items-center">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Edit Blog Details
          </h2>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Title Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              Blog Title *
            </label>
            <input 
              name="title" 
              value={form.title} 
              onChange={handleChange} 
              placeholder="Enter an engaging title for your blog post..." 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#195B48] focus:border-transparent transition-all duration-200 text-lg" 
              required 
            />
          </div>

          {/* Blog Link Name Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              Blog Link Name *
            </label>
            <input 
              name="slug" 
              value={form.slug} 
              onChange={handleChange} 
              placeholder="my-awesome-blog-post (no spaces, use hyphens)" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#195B48] focus:border-transparent transition-all duration-200" 
              required 
            />
            <p className="text-xs text-gray-500 mt-1">This will be used in the blog's web address. Use only letters, numbers, and hyphens (no spaces).</p>
          </div>

          {/* Date and Image Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Publication Date *
              </label>
              <input 
                name="date" 
                value={form.date} 
                onChange={handleChange} 
                type="date" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#195B48] focus:border-transparent transition-all duration-200" 
                required 
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Featured Image (Upload)
              </label>
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageChange} 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#195B48] focus:border-transparent transition-all duration-200" 
              />
              {imagePreview && (
                imagePreview === "loading" ? (
                  <div className="mt-2 rounded-lg max-h-40 border border-gray-300 flex items-center justify-center bg-gray-50">
                    <div className="text-center py-4">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#195B48] mx-auto mb-2"></div>
                      <p className="text-sm text-gray-600">Uploading image...</p>
                    </div>
                  </div>
                ) : (
                  <img src={imagePreview} alt="Preview" className="mt-2 rounded-lg max-h-40 object-contain border" />
                )
              )}
            </div>
          </div>

          {/* Summary Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              Brief Summary
            </label>
            <textarea 
              name="summary" 
              value={form.summary} 
              onChange={handleChange} 
              placeholder="A short summary of your blog post (will appear in the blog list)..." 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#195B48] focus:border-transparent transition-all duration-200 resize-none" 
              rows="3"
            />
          </div>

          {/* Content Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Blog Content *
            </label>
            <textarea 
              name="content" 
              value={form.content} 
              onChange={handleChange} 
              placeholder="Write your blog content here. You can use paragraphs by separating them with double line breaks..." 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#195B48] focus:border-transparent transition-all duration-200 resize-none" 
              rows="12"
              required 
            />
            <p className="text-xs text-gray-500 mt-1">Use double line breaks to create paragraphs</p>
          </div>

          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-red-800">{error}</span>
              </div>
            </div>
          )}

          <div className="flex gap-4 pt-6">
            <Link 
              href="/admin/blog-management" 
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </Link>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="px-8 py-3 bg-gradient-to-r from-[#195B48] to-[#144636] text-white rounded-lg font-semibold hover:from-[#144636] hover:to-[#0f3528] transition-all duration-200 flex items-center shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Updating...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Update Blog Post
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 