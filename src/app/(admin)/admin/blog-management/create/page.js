"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getBlogImagePresignedUrl, uploadImageToCloud, createBlog } from "../../../../../services/blogs";

import { cleanImageUrl } from "../../../../../utils/imageUrlCleaner";

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
        alert("Blog created successfully!");
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
        <h1 className="text-[2rem] font-bold text-[#004C44] leading-tight">Create New Blog Post</h1>
        <p className="text-gray-600 mt-2">
          Create and publish a new blog post for the orthodontic community.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="bg-gradient-to-r from-[#195B48] to-[#144636] px-6 py-4 rounded-t-lg">
          <h2 className="text-xl font-semibold text-white flex items-center">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Blog Details
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
                  <div>
                    <img 
                      src={imagePreview} 
                      alt="Preview" 
                      className="mt-2 rounded-lg max-h-40 object-contain border" 
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
                  Creating...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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