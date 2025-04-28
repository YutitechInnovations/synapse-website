'use client';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Education() {
  const insightCards = [
    {
      title: 'Blogs',
      image: '/blogs.png',
      link: '/blogs'
    },
    {
      title: 'Materials & Data',
      image: '/materials&data.png',
      link: '/materials'
    },
    {
      title: 'Research Papers',
      image: '/researchpapers.png',
      link: '/research'
    },
    {
      title: 'Patients\' FAQs',
      image: '/faq.png',
      link: '/faq'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow overflow-hidden">
        {/* Hero Section */}
        <div className="faq-hero">
        <div className="faq-header h1">
          <h1>Latest Insights</h1>
                   <div className="relative w-full">
            <input 
              type="text" 
              placeholder="Search" 
              className="faq-search search1"
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

        {/* Cards Grid */}
        <div className="max-w-[1240px] mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[50px] gap-y-[32px] justify-items-center">
            {insightCards.map((card, index) => (
              <a
                key={index}
                href={card.link}
                className="group relative w-[595px] h-[448px] rounded-[20px] overflow-hidden"
              >
                <div className="absolute inset-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004C44]/80 to-transparent" />
                </div>
                <div className="absolute bottom-8 left-8">
                  <h2 className="text-[32px] font-semibold text-white">
                    {card.title}
                  </h2>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 