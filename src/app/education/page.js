'use client';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Connection from '@/components/doctorLandingPage/Connection';
import Aboutus from '@/components/doctorLandingPage/Aboutus';

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
      link: '/blogs?tab=materials'
    },
    {
      title: 'Research Papers',
      image: '/researchpapers.png',
      link: '/blogs?tab=research'
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
      {/* Hero/Header Section */}
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center" >
        {/* Background Image */}
        <img
          src="/images/bg2.jpg"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
          alt="Education Hero"
        />
        {/* Content */}
        <div className="relative z-10 max-w-xl ml-8 md:ml-24">
          <h1 className="text-2xl md:text-4xl lg:text-[46px] font-semibold mb-4 md:mb-6 text-[#004C44]">
            Empowering Dental Professionals with Knowledge
          </h1>
          <p className="font-medium text-base md:text-xl mb-4 md:mb-6 text-[#004C44]">
            Access the latest research, materials, and educational resources to stay at the forefront of orthodontic care. Our curated content helps you grow your expertise and deliver the best outcomes for your patients.
          </p>
        </div>
      </section>
      {/* Where Care Meets Connection Section */}
      <Connection />
      {/* About Us Section */}
      <Aboutus />
      <main className="flex-grow w-full">
        <div className="max-w-[1240px] mx-auto px-4 md:px-8 lg:px-0 py-16" style={{ background: '#F6F6F3', borderRadius: '20px' }}>
          <h2 className="text-[32px] md:text-[36px] lg:text-[38px] font-semibold text-[#004C44] mb-10 text-left">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[50px] gap-y-[32px] justify-items-center">
            {insightCards.map((card, index) => (
              <a
                key={index}
                href={card.link}
                className="group relative w-full max-w-[595px] h-[448px] rounded-[20px] overflow-hidden shadow-lg bg-white"
              >
                <img
                  src={card.image}
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
      <Footer />
    </div>
  );
} 