"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { getFaqById, updateFaq } from "../../../../../../services/faqs";
import toast from "react-hot-toast";

export default function EditFaq() {
  const router = useRouter();
  const { slug } = useParams();
  const [form, setForm] = useState({
    question: "",
    answer: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const loadFaq = () => {
      try {
        // Get cached data from the parent page
        const cachedData = sessionStorage.getItem("editFaqData");

        if (cachedData) {
          const faqData = JSON.parse(cachedData);
          setForm({
            question: faqData.question || "",
            answer: faqData.answer || "",
          });
          // Clear the cached data after using it
          sessionStorage.removeItem("editFaqData");
        }
      } catch (error) {
        console.error("Error loading FAQ:", error);
        setError("Failed to load FAQ. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      loadFaq();
    }
  }, [slug]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.question || !form.answer) {
      setError("Both question and answer are required.");
      return;
    }

    if (!slug) {
      setError("FAQ ID not found. Please refresh the page and try again.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await updateFaq(slug, {
        question: form.question,
        answer: form.answer,
      });

      if (response.status === "success") {
        toast.success("FAQ updated successfully!");
        router.push("/admin/faq-management");
      } else {
        setError(response.message || "Failed to update FAQ");
      }
    } catch (error) {
      console.error("Error updating FAQ:", error);
      setError(error.message || "Failed to update FAQ. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen p-3 sm:p-4 md:p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-12 h-12 md:w-16 md:h-16 border-4 border-[#195B48]/20 border-t-[#195B48] rounded-full animate-spin mx-auto mb-4 md:mb-6"></div>
            <div
              className="absolute inset-0 w-12 h-12 md:w-16 md:h-16 border-4 border-transparent border-t-[#195B48]/40 rounded-full animate-spin mx-auto"
              style={{
                animationDirection: "reverse",
                animationDuration: "1.5s",
              }}
            ></div>
          </div>
          <p className="text-gray-600 text-base md:text-lg font-medium">
            Loading FAQ...
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Preparing the edit form for you
          </p>
        </div>
      </div>
    );
  }

  if (error && error === "FAQ not found") {
    return (
      <div className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen p-3 sm:p-4 md:p-6">
        <div className="mb-6 md:mb-8">
          <Link
            href="/admin/faq-management"
            className="group inline-flex items-center text-[#195B48] hover:text-[#144636] mb-4 md:mb-6 transition-all duration-300"
          >
            <div className="flex items-center bg-white/80 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2 rounded-full shadow-sm border border-gray-200 group-hover:shadow-md group-hover:border-[#195B48]/20 transition-all duration-300">
              <svg
                className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="text-sm md:text-base">
                Back to FAQ Management
              </span>
            </div>
          </Link>
        </div>
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl border border-gray-100 p-8 md:p-12 text-center max-w-md mx-auto">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-lg">
            <svg
              className="w-10 h-10 md:w-12 md:h-12 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-[#195B48] mb-4">
            FAQ Not Found
          </h2>
          <p className="text-gray-600 mb-6 md:mb-8">
            The FAQ you&apos;re trying to edit doesn&apos;t exist.
          </p>
          <Link
            href="/admin/faq-management"
            className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-[#195B48] to-[#144636] text-white rounded-lg md:rounded-xl font-semibold hover:from-[#144636] hover:to-[#0f3328] transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base"
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to FAQ Management
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen p-3 sm:p-4 md:p-6">
      {/* Enhanced Header Section */}
      <div className="mb-6 md:mb-8">
        <Link
          href="/admin/faq-management"
          className="group inline-flex items-center text-[#195B48] hover:text-[#144636] mb-4 md:mb-6 transition-all duration-300"
        >
          <div className="flex items-center bg-white/80 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2 rounded-full shadow-sm border border-gray-200 group-hover:shadow-md group-hover:border-[#195B48]/20 transition-all duration-300">
            <svg
              className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="text-sm md:text-base">Back to FAQ Management</span>
          </div>
        </Link>

        <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#195B48] to-[#144636] rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
            <svg
              className="w-6 h-6 md:w-7 md:h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#195B48] leading-tight">
              Edit FAQ
            </h1>
            <p className="text-sm md:text-base text-gray-600 mt-1">
              Update the FAQ details below
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Main Form Card */}
      <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-[#195B48] to-[#144636] px-4 md:px-6 lg:px-8 py-4 md:py-6">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center">
            <svg
              className="w-6 h-6 md:w-7 md:h-7 mr-2 md:mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            Edit FAQ
          </h2>
          <p className="text-white/80 mt-1 text-sm md:text-base">
            Update the question and answer below
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8"
        >
          {/* Question Field */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2 md:mb-3 flex items-center">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-[#195B48]/10 rounded-lg flex items-center justify-center mr-2 md:mr-3 group-hover:bg-[#195B48]/20 transition-colors duration-300">
                <svg
                  className="w-3 h-3 md:w-4 md:h-4 text-[#195B48]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              Question *
            </label>
            <input
              name="question"
              value={form.question}
              onChange={handleChange}
              placeholder="Enter the FAQ question..."
              className="w-full px-4 md:px-6 py-3 md:py-4 border-2 border-gray-200 rounded-lg md:rounded-xl focus:ring-4 focus:ring-[#195B48]/20 focus:border-[#195B48] transition-all duration-300 bg-white hover:border-gray-300"
              required
            />
          </div>

          {/* Answer Field */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2 md:mb-3 flex items-center">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-[#195B48]/10 rounded-lg flex items-center justify-center mr-2 md:mr-3 group-hover:bg-[#195B48]/20 transition-colors duration-300">
                <svg
                  className="w-3 h-3 md:w-4 md:h-4 text-[#195B48]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>
              Answer *
            </label>
            <textarea
              name="answer"
              value={form.answer}
              onChange={handleChange}
              placeholder="Enter the answer to this question..."
              className="w-full px-4 md:px-6 py-3 md:py-4 border-2 border-gray-200 rounded-lg md:rounded-xl focus:ring-4 focus:ring-[#195B48]/20 focus:border-[#195B48] transition-all duration-300 resize-none bg-white hover:border-gray-300"
              rows="6"
              required
            />
          </div>

          {error && (
            <div className="p-4 md:p-6 bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-200 rounded-lg md:rounded-xl">
              <div className="flex items-center">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-red-100 rounded-lg flex items-center justify-center mr-2 md:mr-3">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-red-800 font-medium text-sm md:text-base">
                  {error}
                </span>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-6 md:pt-8">
            <Link
              href="/admin/faq-management"
              className="group px-6 md:px-8 py-3 md:py-4 border-2 border-gray-300 text-gray-700 rounded-lg md:rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 flex items-center justify-center text-sm md:text-base"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Cancel
            </Link>
            <button
              type="submit"
              disabled={isSubmitting}
              className="group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#195B48] to-[#144636] text-white rounded-lg md:rounded-xl font-semibold hover:from-[#144636] hover:to-[#0f3328] transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 text-sm md:text-base"
            >
              {isSubmitting ? (
                <>
                  <div className="relative">
                    <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2 md:mr-3"></div>
                  </div>
                  Updating...
                </>
              ) : (
                <>
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:rotate-12 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Update FAQ
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
