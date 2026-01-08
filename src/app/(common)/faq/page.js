"use client";
import Navbar from "../../../components/Navbar/Navbar.js";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { getAllFaqs } from "../../../services/faqs";

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [faqs, setFaqs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const itemsPerPage = 10;

  const fetchFaqs = useCallback(async () => {
    try {
      setIsLoading(true);
      setError("");
      const offset = (currentPage - 1) * itemsPerPage;
      const response = await getAllFaqs({
        limit: itemsPerPage,
        offset,
        query: searchQuery,
      });

      if (response.status === "success") {
        setFaqs(response.data || []);
        setTotalCount(response.resp_count || response.data?.length || 0);
      } else {
        setError("Failed to load FAQs");
      }
    } catch (error) {
      console.error("Error fetching FAQs:", error);
      setError("Failed to load FAQs. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, searchQuery]);

  useEffect(() => {
    fetchFaqs();
  }, [fetchFaqs]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearchQuery(searchTerm);
      setCurrentPage(1);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const totalPages = Math.ceil(totalCount / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen w-full">
      <Navbar />
      <section className="relative w-full">
        <div className="faq-hero">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/faq-hero-bg.png"
              alt="FAQ Background"
              fill
              className="object-cover opacity-50"
              priority
            />
          </div>
          <div className="faq-header">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg md:text-xl">
              Answers to the questions your patients ask the most
            </p>
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="faq-search w-full max-w-lg mx-auto"
                aria-label="Search FAQs"
              />
              <div className="faq-search-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#006D38"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center px-2 sm:px-4 py-8 sm:py-16">
          <div className="space-y-4 w-full max-w-5xl 3xl:max-w-6xl">
            {isLoading ? (
              <div className="text-center py-8">
                <div className="inline-block w-12 h-12 border-4 border-[#006D38]/20 border-t-[#006D38] rounded-full animate-spin"></div>
                <p className="text-lg text-gray-600 mt-4">Loading FAQs...</p>
              </div>
            ) : error ? (
              <div className="text-center py-8">
                <p className="text-lg text-red-600">{error}</p>
              </div>
            ) : faqs.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-lg text-gray-600">
                  {searchTerm
                    ? `No FAQs found matching "${searchTerm}". Try a different search term.`
                    : "No FAQs available at the moment."}
                </p>
              </div>
            ) : (
              <>
                {faqs.map((faq, index) => (
                  <details
                    key={faq.faq_id || faq.id || index}
                    className="card card-p-0 card2 border-[#004C44] group cursor-pointer"
                    style={{
                      borderRadius: "20px",
                      borderWidth: "1px",
                      padding: "30px",
                    }}
                  >
                    <summary className="flex justify-between items-center">
                      <span className="font-semibold text-lg">
                        {faq.question}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#006D38"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-200 mr-4"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </summary>
                    <div>
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                ))}

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-4 py-2 rounded-lg border border-[#006D38] text-[#006D38] hover:bg-[#006D38] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[#006D38]"
                    >
                      Previous
                    </button>

                    <div className="flex gap-2">
                      {[...Array(totalPages)].map((_, index) => {
                        const pageNumber = index + 1;
                        // Show first page, last page, current page, and pages around current
                        if (
                          pageNumber === 1 ||
                          pageNumber === totalPages ||
                          (pageNumber >= currentPage - 1 &&
                            pageNumber <= currentPage + 1)
                        ) {
                          return (
                            <button
                              key={pageNumber}
                              onClick={() => handlePageChange(pageNumber)}
                              className={`px-4 py-2 rounded-lg border transition-colors ${
                                currentPage === pageNumber
                                  ? "bg-[#006D38] text-white border-[#006D38]"
                                  : "border-[#006D38] text-[#006D38] hover:bg-[#006D38] hover:text-white"
                              }`}
                            >
                              {pageNumber}
                            </button>
                          );
                        } else if (
                          pageNumber === currentPage - 2 ||
                          pageNumber === currentPage + 2
                        ) {
                          return (
                            <span
                              key={pageNumber}
                              className="px-2 py-2 text-gray-500"
                            >
                              ...
                            </span>
                          );
                        }
                        return null;
                      })}
                    </div>

                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 rounded-lg border border-[#006D38] text-[#006D38] hover:bg-[#006D38] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[#006D38]"
                    >
                      Next
                    </button>
                  </div>
                )}

                {/* Results info */}
                {totalCount > 0 && (
                  <div className="text-center text-gray-600 mt-4">
                    Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                    {Math.min(currentPage * itemsPerPage, totalCount)} of{" "}
                    {totalCount} FAQs
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
