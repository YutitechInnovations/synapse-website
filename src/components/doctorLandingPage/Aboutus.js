import React from "react";

const Aboutus = () => {
  return (
    <section className="w-full py-10 md:py-16 lg:py-20" style={{ background: '#FFFFFF' }}>
      <div className="max-w-screen-lg mx-auto px-4 md:px-8 flex flex-col items-start justify-center gap-4 md:gap-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#004C44] mb-2 md:mb-4">About Us</h2>
        <p className="text-sm md:text-base lg:text-lg text-[#004C44] mb-8 md:mb-12 max-w-3xl">
          Led by an experienced team with a strong background in the oral care industry, we aim to combine practical insights and a clear direction to support modern dental practices.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
          <div className="border rounded-[1rem] p-4 md:p-6 bg-white flex gap-4 md:gap-6 items-center">
            <img src="/images/doc.jpg" className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-[0.625rem] object-cover" alt="Sujit Hota" />
            <div>
              <div className="font-bold text-[#004C44] text-base md:text-lg mb-1">Sujit Hota</div>
              <div className="font-semibold text-[#004C44] text-sm md:text-base mb-1">CEO & MD</div>
              <div className="text-[#004C44] text-xs md:text-sm">IIM C Alum (&gt;25 years of dental industry experience)</div>
            </div>
          </div>
          <div className="border rounded-[1rem] p-4 md:p-6 bg-white flex gap-4 md:gap-6 items-center">
            <img src="/images/doc2.jpg" className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-[0.625rem] object-cover" alt="Prabakar KP" />
            <div>
              <div className="font-bold text-[#004C44] text-base md:text-lg mb-1">Prabakar KP</div>
              <div className="font-semibold text-[#004C44] text-sm md:text-base mb-1">COO & Co-Founder</div>
              <div className="text-[#004C44] text-xs md:text-sm">IIML Alum (&gt;15 years of dental + software experience)</div>
            </div>
          </div>
          <div className="border rounded-[1rem] p-4 md:p-6 bg-white flex gap-4 md:gap-6 items-center">
            <img src="/images/doc3.jpg" className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-[0.625rem] object-cover" alt="Dr Harmeet Kaur" />
            <div>
              <div className="font-bold text-[#004C44] text-base md:text-lg mb-1">Dr Harmeet Kaur</div>
              <div className="font-semibold text-[#004C44] text-sm md:text-base mb-1">Manager, Clinical & Education</div>
              <div className="text-[#004C44] text-xs md:text-sm">Orthodontist (&gt;8 years of experience)</div>
            </div>
          </div>
          <div className="border rounded-[1rem] p-4 md:p-6 bg-white flex gap-4 md:gap-6 items-center">
            <img src="/images/doc4.jpg" className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-[0.625rem] object-cover" alt="Dr Ayushi" />
            <div>
              <div className="font-bold text-[#004C44] text-base md:text-lg mb-1">Dr Ayushi</div>
              <div className="font-semibold text-[#004C44] text-sm md:text-base mb-1">Customer Success Manager</div>
              <div className="text-[#004C44] text-xs md:text-sm">Orthodontist (&gt;3 years of experience)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
