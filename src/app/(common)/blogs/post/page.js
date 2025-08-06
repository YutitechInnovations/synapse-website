"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import mockBlogs from "../../../../constant/mockBlogs";
import Navbar from "../../../../components/Navbar/Navbar";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "../../../../context/AuthContext";

export default function PostBlog() {
  const router = useRouter();
  const { isLoggedIn } = useAuth();
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

  // Redirect to login if not authenticated
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F8FAF9] to-[#E8F5E8]">
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 py-10 mt-28">
          <div className="text-center">
            <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-[#195B48] mb-4">Authentication Required</h1>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Only logged-in users can post blogs. Please sign in to your account to create and publish blog posts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/login" 
                className="inline-flex items-center px-6 py-3 bg-[#195B48] text-white rounded-lg font-semibold hover:bg-[#144636] transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Sign In
              </Link>
              <Link 
                href="/blogs" 
                className="inline-flex items-center px-6 py-3 border border-[#195B48] text-[#195B48] rounded-lg font-semibold hover:bg-[#195B48] hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Blogs
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((prev) => ({ ...prev, image: reader.result }));
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.slug || !form.content) {
      setError("Title, blog link name, and content are required.");
      return;
    }
    mockBlogs.unshift({ ...form });
    router.push("/blogs");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAF9] to-[#E8F5E8]">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-10 mt-28">
        <div className="text-center mb-8">
          <Link href="/blogs" className="inline-flex items-center text-[#195B48] hover:text-[#144636] mb-4 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blogs
          </Link>
          <h1 className="text-4xl font-bold text-[#195B48] mb-2">Create New Blog Post</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Share your insights and expertise with the orthodontic community. Fill out the form below to publish your blog post.
          </p>
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg inline-block">
            <p className="text-sm text-green-800">
              <span className="font-semibold">Welcome!</span> You&apos;re logged in and can post blogs.
            </p>
          </div>
          <div className="mt-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg inline-block">
            <p className="text-sm text-yellow-800">
              <span className="font-semibold">Demo Mode:</span> Blogs will not persist after page reload.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-[#195B48] to-[#144636] px-6 py-4">
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
              <p className="text-xs text-gray-500 mt-1">This will be used in the blog&apos;s web address. Use only letters, numbers, and hyphens (no spaces).</p>
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
                  <Image src={imagePreview} alt="Preview" width={400} height={160} className="mt-2 rounded-lg max-h-40 object-contain border" />
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
            <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
              <Link 
                href="/blogs" 
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Cancel
              </Link>
              <button 
                type="submit" 
                className="px-8 py-3 bg-gradient-to-r from-[#195B48] to-[#144636] text-white rounded-lg font-semibold hover:from-[#144636] hover:to-[#0f3528] transition-all duration-200 flex items-center shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Publish Blog Post
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
} 