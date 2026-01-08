"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ContentManagement() {
  const router = useRouter();

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

  const managementCards = [
    {
      title: "Blog Management",
      description: "Create, edit, and manage blog posts",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
            stroke="#9B87F5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 7H17"
            stroke="#9B87F5"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M7 11H17"
            stroke="#9B87F5"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M7 15H13"
            stroke="#9B87F5"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      path: "/admin/blog-management",
      color: "#9B87F5",
    },
    {
      title: "Research Paper Management",
      description: "Manage research papers and publications",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
            stroke="#22C55D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 2V8H20"
            stroke="#22C55D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 18V12"
            stroke="#22C55D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 15H15"
            stroke="#22C55D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      path: "/admin/research-paper-management",
      color: "#22C55D",
    },
    {
      title: "Materials and Data Management",
      description: "Manage materials, data files, and resources",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 2V9H20"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      path: "/admin/material-n-data-management",
      color: "#3B82F6",
    },
    {
      title: "FAQ Management",
      description: "Create and manage frequently asked questions",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="#F59E0B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13"
            stroke="#F59E0B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 17H12.01"
            stroke="#F59E0B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      path: "/admin/faq-management",
      color: "#F59E0B",
    },
  ];

  const handleCardClick = (path) => {
    router.push(path);
  };

  return (
    <div className="w-full min-h-screen bg-[#F8FAF9] p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-[2rem] md:text-[2.5rem] font-bold text-[#004C44] mb-2">
          Content Management
        </h1>
        <p className="text-[#004C44] text-lg md:text-xl mb-12">
          Manage all your content from one central location
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {managementCards.map((card, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(card.path)}
              className="bg-white rounded-xl border-2 border-[#004C44] p-8 flex flex-col justify-between min-h-[200px] transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1">
                  <h2 className="text-[#004C44] text-xl md:text-2xl font-bold mb-2">
                    {card.title}
                  </h2>
                  <p className="text-[#004C44] text-base font-normal">
                    {card.description}
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0">{card.icon}</div>
              </div>
              <div className="flex items-center justify-end mt-4">
                <span
                  className="text-sm font-semibold flex items-center gap-2"
                  style={{ color: card.color }}
                >
                  Manage
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 5L19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
