'use client';

import Navbar from '@/components/navbar/Navbar';
import Image from 'next/image';

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
      link: null
    },
    {
      title: 'Research Papers',
      image: '/researchpapers.png',
      link: null
    },
    {
      title: "Patients' FAQs",
      image: '/faq.png',
      link: '/faq'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF9]">
      <Navbar />
      <main className="flex-grow w-full pt-[100px]">
        <div className="max-w-[1240px] mx-auto px-4 md:px-8 lg:px-0 py-16" style={{ background: '#F6F6F3', borderRadius: '20px' }}>
          <h2 className="text-[32px] md:text-[36px] lg:text-[38px] font-semibold text-[#004C44] mb-10 text-left">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[50px] gap-y-[32px] justify-items-center">
            {insightCards.map((card, index) => (
              <a
                key={index}
                href="/login"
                className="group relative w-full max-w-[595px] h-[448px] rounded-[20px] overflow-hidden shadow-lg bg-white"
              >
                <Image
                  src={card.image}
                  width={595}
                  height={448}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Gradient overlay for text visibility */}
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/80 to-transparent z-10" />
                <div className="absolute bottom-8 left-8 z-20">
                  <h3 className="text-[28px] font-bold text-[#004C44] drop-shadow-none">
                    {card.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 