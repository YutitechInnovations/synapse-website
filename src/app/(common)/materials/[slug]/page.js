"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Navbar from "../../../../components/Navbar/Navbar";
import Link from "next/link";
import Image from "next/image";
import { getAllArticles, getArticleById } from "../../../../services/articles";
import { cleanImageUrl } from "../../../../utils/imageUrlCleaner";

export default function BlogDetail() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Convert slug to article_id (since we're using article_id for routing)
  const articleId = slug;

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setIsLoading(true);

        // Try to get the specific article by ID first
        try {
          const articleResponse = await getArticleById(articleId);

          if (articleResponse.status === "success" && articleResponse.data) {
            const articleData = articleResponse.data;
            // Clean the image URL
            const cleanedArticle = {
              ...articleData,
              image: cleanImageUrl(articleData.image),
            };
            setArticle(cleanedArticle);
          } else {
            setError("Article not found");
          }
        } catch (articleError) {
          console.error("Error fetching specific article:", articleError);
          setError("Failed to load article");
        }

        // Fetch all articles for related articles section
        try {
          const allArticlesResponse = await getAllArticles(100, 0);

          if (
            allArticlesResponse.status === "success" &&
            allArticlesResponse.data
          ) {
            const cleanedArticles = allArticlesResponse.data.map((article) => ({
              ...article,
              image: cleanImageUrl(article.image),
            }));
            setArticles(cleanedArticles);
          }
        } catch (relatedError) {
          console.error("Error fetching related articles:", relatedError);
          // Don't set error here as the main article might have loaded
        }
      } catch (error) {
        console.error("Error fetching article:", error);
        setError("Failed to load article. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      fetchArticle();
    }
  }, [slug, articleId]);

  // Calculate reading time (average 200 words per minute)
  const wordCount = article?.content?.split(/\s+/).length || 0;
  const readingTime = Math.ceil(wordCount / 200);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F8FAF9] to-[#E8F5E8]">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen mt-28">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#195B48] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading article...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F8FAF9] to-[#E8F5E8]">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen mt-28">
          <div className="text-center">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-12 h-12 text-red-500"
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {error === "Article not found"
                ? "Article Not Found"
                : "Error Loading Article"}
            </h2>
            <p className="text-gray-600 mb-8 max-w-md">
              {error === "Article not found"
                ? "The article you're looking for doesn't exist or may have been moved."
                : error || "Something went wrong while loading the article."}
            </p>
            <Link
              href="/materials"
              className="inline-flex items-center px-6 py-3 bg-[#195B48] text-white rounded-lg font-semibold hover:bg-[#144636] transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
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
              Back to Materials
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
          href="/materials"
          className="inline-flex items-center text-[#195B48] hover:text-[#144636] mb-8 transition-colors group"
        >
          <svg
            className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
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
          Back to Materials
        </Link>

        {/* Article Header */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-8">
          {article.image && (
            <div className="w-full h-80 relative">
              <Image
                src={article.image}
                alt={article.title}
                width={800}
                height={320}
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error(
                    "Article detail image failed to load:",
                    article.image
                  );
                  e.target.style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          )}

          <div className="p-8">
            {/* Meta Information */}
            <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-[#195B48] mb-4 leading-tight">
              {article.title}
            </h1>

            {/* Summary */}
            {article.summary && (
              <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-[#195B48] pl-6 mb-6">
                {article.summary}
              </p>
            )}
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8">
            <article className="prose prose-lg max-w-none">
              <div className="text-gray-800 leading-relaxed space-y-6">
                {(() => {
                  const content =
                    article.content || article.body || article.text;

                  if (content) {
                    // Handle different content formats
                    if (typeof content === "string") {
                      // Split by double newlines for paragraphs
                      const paragraphs = content.split("\n\n");

                      // If there's only one paragraph (no double newlines), split by single newlines
                      if (paragraphs.length === 1 && content.includes("\n")) {
                        const lines = content.split("\n");
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
                        <p className="text-lg leading-8">{String(content)}</p>
                      );
                    }
                  } else {
                    return (
                      <p className="text-lg leading-8 text-gray-500">
                        Content not available for this article.
                      </p>
                    );
                  }
                })()}
              </div>
            </article>
          </div>
        </div>

        {/* Related Articles Suggestion */}
        {articles.filter((a) => a.article_id !== article.article_id).length >
          0 && (
          <div className="mt-8 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#195B48] mb-6">
                Continue Reading
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles
                  .filter((a) => a.article_id !== article.article_id)
                  .slice(0, 2)
                  .map((relatedArticle) => (
                    <Link
                      key={relatedArticle.article_id}
                      href={`/materials/${relatedArticle.article_id}`}
                      className="group block p-4 rounded-lg border border-gray-200 hover:border-[#195B48] hover:shadow-md transition-all duration-200"
                    >
                      <h4 className="font-semibold text-[#195B48] group-hover:text-[#144636] mb-2">
                        {relatedArticle.title}
                      </h4>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {relatedArticle.summary}
                      </p>
                      <div className="text-xs text-gray-500 mt-2">
                        {new Date(relatedArticle.date).toLocaleDateString()}
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
