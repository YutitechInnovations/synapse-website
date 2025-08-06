"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getBlogImagePresignedUrl, uploadImageToCloud, updateBlog } from "../../../../../../services/blogs";
import instance from "../../../../../../network";
import toast from "react-hot-toast";

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
  // const [imagePreview, setImagePreview] = useState(""); // Disabled for image lock
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [blogId, setBlogId] = useState("");
  // const [newImageUploaded, setNewImageUploaded] = useState(false); // Disabled for image lock

  // Function to clean up duplicated URLs (kept for loading existing images)
  const cleanImageUrl = (url) => {
    if (!url) return "";
    
    // Check if URL contains the S3 base URL twice
    const baseUrl = "https://synapse-blogs.s3.ap-south-1.amazonaws.com/blogs/";
    if (url.includes(baseUrl + baseUrl)) {
      // Remove the duplicate base URL
      return url.replace(baseUrl + baseUrl, baseUrl);
    }
    
    return url;
  };

  // Image upload and reset functions disabled for image lock
  // const resetImage = () => { ... };
  // const handleImageChange = async (e) => { ... };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // The slug parameter is actually the blog_id
        const blogId = slug;
        
        // Fetch the specific blog using the blog_id
        const blogResponse = await instance.get(`/blogs/get_blog_by_id?blog_id=${blogId}`);
        
        if (blogResponse.data.status === "success" && blogResponse.data.data) {
          const blogData = blogResponse.data.data;
          console.log("Blog data received:", blogData);
          console.log("Image URL from backend:", blogData.image);
          console.log("Image URL type:", typeof blogData.image);
          console.log("Image URL length:", blogData.image?.length);
          
          // Use the image URL as is from the backend
          const imageUrl = cleanImageUrl(blogData.image || "");
          
          // For preview, try the backend URL first, but we'll handle errors gracefully
          
          setForm({
            title: blogData.title || "",
            slug: blogData.slug || "",
            date: blogData.date || "",
            summary: blogData.summary || "",
            image: imageUrl,
            content: blogData.content || "",
          });
          // setImagePreview(imageUrl); // Disabled for image lock
          setBlogId(blogId); // Store the blog ID for update
        } else {
          setError("Failed to load blog details");
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

  // Image upload function disabled for image lock
  /*
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
          
          console.log("Response from getBlogImagePresignedUrl:", response);
          console.log("Signed URL:", signed_url);
          console.log("Object key:", object_key);
          
          // Upload directly to cloud storage
          await uploadImageToCloud(signed_url, file);
          
          // Check if object_key is already a full URL
          let fileUrl;
          if (object_key.startsWith('http')) {
            // If object_key is already a full URL, use it as is
            fileUrl = cleanImageUrl(object_key);
            console.log("Object key is already a full URL, using as is:", fileUrl);
          } else {
            // If object_key is just a filename, construct the full URL
            fileUrl = `https://synapse-blogs.s3.ap-south-1.amazonaws.com/blogs/${object_key}`;
            console.log("Object key is filename, constructing full URL:", fileUrl);
          }
          
          setForm(prev => ({ ...prev, image: fileUrl }));
          setNewImageUploaded(true); // Mark that a new image was uploaded
          
          // Create local preview URL for immediate display
          const localPreviewUrl = URL.createObjectURL(file);
          setImagePreview(localPreviewUrl);
        } else {
          throw new Error(response.message || "Failed to get upload URL");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        setImagePreview("");
        toast.error(`Failed to upload image: ${error.message}`);
      }
    }
  };
  */

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
      // Prepare update data - only include image if a new one was uploaded
      const updateData = {
        title: form.title,
        slug: form.slug,
        date: form.date,
        summary: form.summary,
        content: form.content
        // Note: Image field excluded to prevent URL duplication issues
      };
      
      const response = await updateBlog(blogId, updateData);
      
      if (response.status === "success") {
        toast.success("Blog updated successfully!");
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
      <div className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-[#195B48]/20 border-t-[#195B48] rounded-full animate-spin mx-auto mb-6"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-[#195B48]/40 rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          </div>
          <p className="text-gray-600 text-lg font-medium">Loading blog...</p>
          <p className="text-gray-400 text-sm mt-2">Preparing the edit form for you</p>
        </div>
      </div>
    );
  }

  if (error && error === "Blog not found") {
    return (
      <div className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen p-6">
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
        </div>
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-12 text-center max-w-md mx-auto">
          <div className="w-24 h-24 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
            <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[#195B48] mb-4">Blog Not Found</h2>
          <p className="text-gray-600 mb-8">The blog post you&apos;re trying to edit doesn&apos;t exist.</p>
          <Link
            href="/admin/blog-management"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#195B48] to-[#144636] text-white rounded-xl font-semibold hover:from-[#144636] hover:to-[#0f3328] transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog Management
          </Link>
        </div>
      </div>
    );
  }

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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#195B48] leading-tight">
              Edit Blog Post
            </h1>
            <p className="text-gray-600 mt-1">Update the blog post content and details</p>
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
            Edit Blog Details
          </h2>
          <p className="text-white/80 mt-1">Update the details below to modify your blog post</p>
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
                Featured Image
              </label>
              
              {/* Current Image Display */}
              {form.image && (
                <div className="relative">
                  <Image 
                    src={form.image} 
                    alt="Current Blog Image" 
                    width={400}
                    height={192}
                    className="w-full rounded-xl max-h-48 object-contain border-2 border-gray-200 shadow-md" 
                    onError={(e) => {
                      console.error("Current image failed to load:", form.image);
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="mt-2 text-xs text-gray-500" style={{ display: 'none' }}>
                    <p>Image preview not available</p>
                    <p>URL: {form.image}</p>
                  </div>
                </div>
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
                  Updating...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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