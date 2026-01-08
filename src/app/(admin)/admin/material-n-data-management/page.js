"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllArticles, deleteArticle } from "../../../../services/articles";
import toast from "react-hot-toast";

export default function MaterialNDataManagement() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchArticles();
  }, []);

  useEffect(() => {
    const handlePopState = (event) => {
      history.pushState(null, "", window.location.href);
    };

    history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const fetchArticles = async () => {
    try {
      setIsLoading(true);
      const response = await getAllArticles(100, 0);

      if (response.status === "success") {
        setArticles(response.data || []);
      } else {
        setError("Failed to load materials and data");
      }
    } catch (error) {
      console.error("Error fetching materials and data:", error);
      setError("Failed to load materials and data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteArticle = async (article) => {
    const articleId = article.article_id || article.id;

    if (!articleId) {
      toast.error("Article ID not found. Cannot delete this article.");
      return;
    }

    const promise = new Promise(async (resolve, reject) => {
      try {
        const response = await deleteArticle(articleId);

        if (response.status === "success") {
          setArticles((prevArticles) =>
            prevArticles.filter((a) => (a.article_id || a.id) !== articleId)
          );
          resolve("Material deleted successfully!");
        } else {
          reject(new Error(response.message || "Failed to delete material"));
        }
      } catch (error) {
        console.error("Error deleting material:", error);
        reject(
          new Error(
            error.message || "Failed to delete material. Please try again."
          )
        );
      }
    });

    toast.promise(promise, {
      loading: "Deleting material...",
      success: (message) => message,
      error: (err) => err.message,
    });
  };

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen p-3 sm:p-4 md:p-6">
      {/* Enhanced Header Section */}
      <div className="mb-6 md:mb-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-6">
          <div className="flex items-center space-x-3 md:space-x-4">
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
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#195B48] leading-tight">
                Materials and Data Management
              </h1>
              <p className="text-sm md:text-base text-gray-600 mt-1">
                Manage and organize your materials and data files
              </p>
            </div>
          </div>

          <Link
            href="/admin/material-n-data-management/create"
            className="group inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-[#195B48] to-[#144636] text-white rounded-lg md:rounded-xl font-semibold hover:from-[#144636] hover:to-[#0f3328] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base w-full sm:w-auto justify-center"
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:rotate-90 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Create New Material
          </Link>
        </div>
      </div>

      {/* Enhanced Main Content Card */}
      <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl border border-gray-100 overflow-hidden">
        <div className="p-4 md:p-6 lg:p-8 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#195B48] mb-2">
                All Materials and Data
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                Manage and edit your materials and data files with ease
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-[#195B48]/10 text-[#195B48] px-3 py-2 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
                {articles.length}{" "}
                {articles.length === 1 ? "Material" : "Materials"}
              </div>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-12 md:py-20">
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
              Loading Materials and Data...
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Preparing your materials management dashboard
            </p>
          </div>
        ) : error ? (
          <div className="text-center py-12 md:py-20">
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
            <h3 className="text-xl md:text-2xl font-bold text-[#195B48] mb-4">
              Oops! Something went wrong
            </h3>
            <p className="text-gray-600 mb-6 md:mb-8 max-w-md mx-auto px-4">
              {error}
            </p>
            <button
              onClick={fetchArticles}
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
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Try Again
            </button>
          </div>
        ) : articles.length > 0 ? (
          <div className="w-full overflow-x-auto">
            {/* Desktop Table View */}
            <table className="w-full hidden lg:table">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                <tr>
                  <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Material / Data
                  </th>
                  <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 md:px-6 py-3 md:py-4 text-right text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {articles.map((article, index) => (
                  <tr
                    key={article.article_id || article.id}
                    className="group hover:bg-gradient-to-r hover:from-[#195B48]/5 hover:to-[#195B48]/10 transition-all duration-300 transform hover:scale-[1.01]"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animationName: "fadeInUp",
                      animationDuration: "0.6s",
                      animationTimingFunction: "ease-out",
                      animationFillMode: "forwards",
                    }}
                  >
                    <td className="px-4 md:px-6 py-4 md:py-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-12 w-12 md:h-16 md:w-16">
                          <div className="h-12 w-12 md:h-16 md:w-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
                            {article.image ? (
                              <Image
                                src={article.image}
                                alt={article.title}
                                width={64}
                                height={64}
                                className="h-12 w-12 md:h-16 md:w-16 object-cover rounded-xl md:rounded-2xl group-hover:scale-110 transition-transform duration-500"
                                onError={(e) => {
                                  console.error(
                                    "Image failed to load:",
                                    article.image
                                  );
                                  e.target.style.display = "none";
                                }}
                              />
                            ) : (
                              <svg
                                className="h-6 w-6 md:h-8 md:w-8 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                              </svg>
                            )}
                          </div>
                        </div>
                        <div className="ml-3 md:ml-4 min-w-0 flex-1">
                          <div className="text-sm md:text-lg font-semibold text-gray-900 group-hover:text-[#195B48] transition-colors duration-300 break-words leading-tight">
                            {article.title}
                          </div>
                          <div className="text-xs md:text-sm text-gray-600 mt-1 line-clamp-2 break-words">
                            {article.summary?.substring(0, 60)}...
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-4 md:py-6">
                      <div className="text-xs md:text-sm text-gray-600">
                        {new Date(article.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-4 md:py-6">
                      <span className="inline-flex items-center px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-green-100 to-green-200 text-green-800 shadow-sm">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full mr-1.5 md:mr-2"></div>
                        Published
                      </span>
                    </td>
                    <td className="px-4 md:px-6 py-4 md:py-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/material-n-data-management/edit/${
                            article.article_id || article.id
                          }`}
                          className="group/edit inline-flex items-center px-2 py-1.5 md:px-3 md:py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-xs md:text-sm"
                        >
                          <svg
                            className="w-3 h-3 md:w-4 md:h-4 mr-1 group-hover/edit:rotate-12 transition-transform duration-300"
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
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDeleteArticle(article)}
                          className="group/delete inline-flex items-center px-2 py-1.5 md:px-3 md:py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-medium hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-xs md:text-sm"
                        >
                          <svg
                            className="w-3 h-3 md:w-4 md:h-4 mr-1 group-hover/delete:rotate-12 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Mobile Card View */}
            <div className="lg:hidden">
              {articles.map((article, index) => (
                <div
                  key={article.article_id || article.id}
                  className="p-4 border-b border-gray-100 hover:bg-gradient-to-r hover:from-[#195B48]/5 hover:to-[#195B48]/10 transition-all duration-300"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animationName: "fadeInUp",
                    animationDuration: "0.6s",
                    animationTimingFunction: "ease-out",
                    animationFillMode: "forwards",
                  }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 h-16 w-16">
                      <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden shadow-md">
                        {article.image ? (
                          <Image
                            src={article.image}
                            alt={article.title}
                            width={64}
                            height={64}
                            className="h-16 w-16 object-cover rounded-xl"
                            onError={(e) => {
                              console.error(
                                "Image failed to load:",
                                article.image
                              );
                              e.target.style.display = "none";
                            }}
                          />
                        ) : (
                          <svg
                            className="h-8 w-8 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-gray-900 leading-tight mb-1">
                        {article.title}
                      </h3>
                      <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                        {article.summary?.substring(0, 80)}...
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-500">
                            {new Date(article.date).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              }
                            )}
                          </span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-green-100 to-green-200 text-green-800">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></div>
                            Published
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Link
                            href={`/admin/material-n-data-management/edit/${
                              article.article_id || article.id
                            }`}
                            className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded text-xs font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                          >
                            <svg
                              className="w-3 h-3 mr-1"
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
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDeleteArticle(article)}
                            className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-red-500 to-red-600 text-white rounded text-xs font-medium hover:from-red-600 hover:to-red-700 transition-all duration-300"
                          >
                            <svg
                              className="w-3 h-3 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12 md:py-20">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-lg">
              <svg
                className="w-10 h-10 md:w-12 md:h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#195B48] mb-4">
              No Materials yet
            </h3>
            <p className="text-gray-600 mb-6 md:mb-8 max-w-md mx-auto px-4">
              Get started by creating your first material to share with your
              audience.
            </p>
            <Link
              href="/admin/material-n-data-management/create"
              className="group inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-[#195B48] to-[#144636] text-white rounded-lg md:rounded-xl font-semibold hover:from-[#144636] hover:to-[#0f3328] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:rotate-90 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Create First Material
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
