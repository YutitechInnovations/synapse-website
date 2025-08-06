"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getBlogImagePresignedUrl, uploadImageToCloud, createBlog } from "../../../../../services/blogs";
import { cleanImageUrl } from "../../../../../utils/imageUrlCleaner";
import toast from "react-hot-toast";

export default function CreateBlog() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    slug: "",
    date: new Date().toISOString().slice(0, 10),
    summary: "",
    image: "",
    content: "",
  });
  const [error, setError] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        
        if (response.status === "success") {
          const { signed_url, object_key } = response.data;
          
          // Upload directly to cloud storage
          await uploadImageToCloud(signed_url, file);
          
          // Backend always returns the full URL, so use it directly
          console.log("Object key from backend:", object_key);
          const fileUrl = object_key;
          console.log("Using file URL directly:", fileUrl);
          setForm(prev => ({ ...prev, image: fileUrl }));
          
          // Create local preview URL for immediate display
          const localPreviewUrl = URL.createObjectURL(file);
          setImagePreview(localPreviewUrl);
        } else {
          console.error("Response status is not success:", response);
          throw new Error(response.message || "Failed to get upload URL");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        setImagePreview("");
        toast.error(`Failed to upload image: ${error.message}`);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.slug || !form.content) {
      setError("Title, blog link name, and content are required.");
      return;
    }
    
    setIsSubmitting(true);
    setError("");
    
    try {
      // Check if user is authenticated before creating blog
      const token = localStorage.getItem("token") || 
                   localStorage.getItem("access_token") || 
                   document.cookie.split('; ').find(row => row.startsWith('access_token='))?.split('=')[1];
      
      if (!token) {
        setError("Authentication required. Please log in again.");
        router.push("/login");
        return;
      }
      
      console.log("Submitting blog with token:", token ? `${token.substring(0, 20)}...` : "NOT FOUND");
      
      const response = await createBlog({
        title: form.title,
        slug: form.slug,
        date: form.date,
        summary: form.summary,
        image: form.image,
        content: form.content
      });
      
      if (response.status === "success") {
        toast.success("Blog created successfully!");
        router.push("/admin/blog-management");
      } else {
        setError(response.message || "Failed to create blog");
      }
    } catch (error) {
      console.error("Error creating blog:", error);
      
      // Handle authentication errors
      if (error.message.includes("Invalid token") || error.message.includes("401")) {
        setError("Your session has expired. Please log in again.");
        router.push("/login");
      } else {
        setError(error.message || "Failed to create blog. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen p-6">
      {/* Enhanced Header Section */}
      <div className="mb-8">
        <Link 
          href="/admin/blog-management" 
          className="group inline-flex items-center text-[#195B48] hover:text-[#144636] mb-6 transition-all duration-300"
        >
          <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-200 group-hover:shadow-md group-hover:border-[#195B48]/20 transition-all duration-300">
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog Management
          </div>
        </Link>
        
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-[#195B48] to-[#144636] rounded-2xl flex items-center justify-center shadow-lg">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#195B48] leading-tight">
              Create New Blog Post
            </h1>
            <p className="text-gray-600 mt-1">Create and publish a new blog post for the orthodontic community</p>
          </div>
        </div>
      </div>

      {/* Enhanced Main Form Card */}
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-[#195B48] to-[#144636] px-8 py-6">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <svg className="w-7 h-7 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Blog Details
          </h2>
          <p className="text-white/80 mt-1">Fill in the details below to create your new blog post</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          {/* Title Field */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
              <div className="w-8 h-8 bg-[#195B48]/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-[#195B48]/20 transition-colors duration-300">
                <svg className="w-4 h-4 text-[#195B48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              Blog Title *
            </label>
            <input 
              name="title" 
              value={form.title} 
              onChange={handleChange} 
              placeholder="Enter an engaging title for your blog post..." 
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-[#195B48]/20 focus:border-[#195B48] transition-all duration-300 text-lg bg-white hover:border-gray-300" 
              required 
            />
          </div>

          {/* Blog Link Name Field */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
              <div className="w-8 h-8 bg-[#195B48]/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-[#195B48]/20 transition-colors duration-300">
                <svg className="w-4 h-4 text-[#195B48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              Blog Link Name *
            </label>
            <input 
              name="slug" 
              value={form.slug} 
              onChange={handleChange} 
              placeholder="my-awesome-blog-post (no spaces, use hyphens)" 
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-[#195B48]/20 focus:border-[#195B48] transition-all duration-300 bg-white hover:border-gray-300" 
              required 
            />
            <p className="text-sm text-gray-500 mt-2 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              This will be used in the blog&apos;s web address. Use only letters, numbers, and hyphens (no spaces).
            </p>
          </div>

          {/* Date and Image Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <div className="w-8 h-8 bg-[#195B48]/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-[#195B48]/20 transition-colors duration-300">
                  <svg className="w-4 h-4 text-[#195B48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                Publication Date *
              </label>
              <input 
                name="date" 
                value={form.date} 
                onChange={handleChange} 
                type="date" 
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-[#195B48]/20 focus:border-[#195B48] transition-all duration-300 bg-white hover:border-gray-300" 
                required 
              />
            </div>
            
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <div className="w-8 h-8 bg-[#195B48]/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-[#195B48]/20 transition-colors duration-300">
                  <svg className="w-4 h-4 text-[#195B48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z" />
                  </svg>
                </div>
                Featured Image (Upload)
              </label>
              <div className="relative">
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageChange} 
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-[#195B48]/20 focus:border-[#195B48] transition-all duration-300 bg-white hover:border-gray-300 cursor-pointer" 
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
              </div>
              {imagePreview && (
                imagePreview === "loading" ? (
                  <div className="mt-4 rounded-xl max-h-48 border-2 border-gray-200 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="text-center py-8">
                      <div className="relative">
                        <div className="w-8 h-8 border-4 border-[#195B48]/20 border-t-[#195B48] rounded-full animate-spin mx-auto mb-3"></div>
                        <div className="absolute inset-0 w-8 h-8 border-4 border-transparent border-t-[#195B48]/40 rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
                      </div>
                      <p className="text-sm text-gray-600 font-medium">Uploading image...</p>
                    </div>
                  </div>
                ) : (
                  <div className="mt-4">
                    <Image 
                      src={imagePreview} 
                      alt="Preview" 
                      width={400}
                      height={192}
                      className="rounded-xl max-h-48 object-contain border-2 border-gray-200 shadow-md" 
                      onError={(e) => {
                        console.error("Image preview failed to load:", imagePreview);
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div className="mt-2 text-xs text-gray-500" style={{ display: 'none' }}>
                      <p>Image preview not available</p>
                      <p>URL: {imagePreview}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Summary Field */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
              <div className="w-8 h-8 bg-[#195B48]/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-[#195B48]/20 transition-colors duration-300">
                <svg className="w-4 h-4 text-[#195B48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              Brief Summary
            </label>
            <textarea 
              name="summary" 
              value={form.summary} 
              onChange={handleChange} 
              placeholder="A short summary of your blog post (will appear in the blog list)..." 
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-[#195B48]/20 focus:border-[#195B48] transition-all duration-300 resize-none bg-white hover:border-gray-300" 
              rows="3"
            />
          </div>

          {/* Content Field */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
              <div className="w-8 h-8 bg-[#195B48]/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-[#195B48]/20 transition-colors duration-300">
                <svg className="w-4 h-4 text-[#195B48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              Blog Content *
            </label>
            <textarea 
              name="content" 
              value={form.content} 
              onChange={handleChange} 
              placeholder="Write your blog content here. You can use paragraphs by separating them with double line breaks..." 
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-[#195B48]/20 focus:border-[#195B48] transition-all duration-300 resize-none bg-white hover:border-gray-300" 
              rows="12"
              required 
            />
            <p className="text-sm text-gray-500 mt-2 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Use double line breaks to create paragraphs
            </p>
          </div>

          {error && (
            <div className="p-6 bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-200 rounded-xl">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-red-800 font-medium">{error}</span>
              </div>
            </div>
          )}

          <div className="flex gap-6 pt-8">
            <Link 
              href="/admin/blog-management" 
              className="group px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 flex items-center"
            >
              <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Cancel
            </Link>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="group px-8 py-4 bg-gradient-to-r from-[#195B48] to-[#144636] text-white rounded-xl font-semibold hover:from-[#144636] hover:to-[#0f3328] transition-all duration-300 flex items-center shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
            >
              {isSubmitting ? (
                <>
                  <div className="relative">
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin mr-3"></div>
                  </div>
                  Creating...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Publish Blog Post
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 