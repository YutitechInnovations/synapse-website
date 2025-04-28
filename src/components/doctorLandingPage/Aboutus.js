import React from "react";

const Aboutus = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col items-center justify-center p-4 md:p-8 lg:p-25 gap-4 md:gap-8 lg:gap-[50px]">
        <div className="flex flex-col items-center justify-center gap-4 md:gap-6 px-4 md:px-8 lg:px-[116px]">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold">About Us</h1>
          <p className="text-sm md:text-base font-normal text-center">
            Led by a seasoned leadership team with deep expertise across
            dentistry, technology, and education, we bring together clinical
            insight and strategic vision to support modern dental practices
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 w-full max-w-[1240px] px-4 md:px-8 lg:px-0">
          <div className="card w-full flex flex-col md:flex-row gap-4 p-4 md:p-6">
            <div className="w-full md:w-[219px] h-[200px] md:h-[202px] rounded-[20px] overflow-hidden">
              <img
                src="/images/doc.jpg"
                className="w-full h-full object-cover"
                alt="Sujit Hota"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">Sujit Hota</h2>
              <h2 className="text-base md:text-lg lg:text-xl font-semibold">CEO & MD</h2>
              <p className="text-xs md:text-sm font-normal">
                IIM C Alum ({">"}25 years of dental industry experience)
              </p>
            </div>
          </div>

          <div className="card w-full flex flex-col md:flex-row gap-4 p-4 md:p-6">
            <div className="w-full md:w-[219px] h-[200px] md:h-[202px] rounded-[20px] overflow-hidden">
              <img
                src="/images/doc2.jpg"
                className="w-full h-full object-cover"
                alt="Prabakar KP"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">Prabakar KP</h2>
              <h2 className="text-base md:text-lg lg:text-xl font-semibold">
                COO & Co-Founder
              </h2>
              <p className="text-xs md:text-sm font-normal">
                IIML Alum ({">"}15 years of dental + software experience)
              </p>
            </div>
          </div>

          <div className="card w-full flex flex-col md:flex-row gap-4 p-4 md:p-6">
            <div className="w-full md:w-[219px] h-[200px] md:h-[202px] rounded-[20px] overflow-hidden">
              <img
                src="/images/doc3.jpg"
                className="w-full h-full object-cover"
                alt="Dr Harmeet Kaur"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
                Dr Harmeet Kaur
              </h2>
              <h2 className="text-base md:text-lg lg:text-xl font-semibold">
                Manager, Clinical & Education
              </h2>
              <p className="text-xs md:text-sm font-normal">
                Orthodontist (&gt;8 years of experience)
              </p>
            </div>
          </div>

          <div className="card w-full flex flex-col md:flex-row gap-4 p-4 md:p-6">
            <div className="w-full md:w-[219px] h-[200px] md:h-[202px] rounded-[20px] overflow-hidden">
              <img
                src="/images/doc4.jpg"
                className="w-full h-full object-cover"
                alt="Dr Ayushi"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">Dr Ayushi</h2>
              <h2 className="text-base md:text-lg lg:text-xl font-semibold">
                Customer Success Manager
              </h2>
              <p className="text-xs md:text-sm font-normal">
                Orthodontist (&gt;3 years of experience)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
