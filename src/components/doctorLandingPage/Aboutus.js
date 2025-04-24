import React from "react";

const Aboutus = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col items-center justify-center p-25 gap-[50px]">
        <div className="flex flex-col items-center justify-center  gap-[30px]">
          <h1 className="text-4xl font-semibold">About Us</h1>
          <p className="text-base font-normal text-center">
            Led by a seasoned leadership team with deep expertise across
            dentistry, technology, and education, we bring together clinical
            insight and strategic vision to support modern dental practices
          </p>
        </div>
        <div className="flex gap-[50px] ">
          <div className="card w-[279px] h-[420px] flex flex-col card-gap-20 ">
            <div className="w-[219px] h-[202px] rounded-[20px] overflow-hidden">
              <img src="/images/doc.jpg" className=" h-[202px] object-cover" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-black">Sujit Hota</h2>
              <h2 className="text-xl font-semibold text-black">CEO & MD</h2>
              <p className="text-sm font-normal text-black">
                IIM C Alum ({">"}25 years of dental industry experience)
              </p>
            </div>
          </div>

          <div className="card w-[279px] h-[420px] flex flex-col card-gap-20 ">
            <div className="w-[219px] h-[202px] rounded-[20px] overflow-hidden">
              <img src="/images/doc2.jpg" className=" w-[219px] object-cover" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-black">Prabakar KP</h2>
              <h2 className="text-xl font-semibold text-black">
                COO & Co-Founder
              </h2>
              <p className="text-sm font-normal text-black">
                IIML Alum ({">"}15 years of dental + software experience)
              </p>
            </div>
          </div>

          <div className="card w-[279px] h-[420px] flex flex-col card-gap-20 ">
            <div className="w-[219px] h-[202px] rounded-[20px] overflow-hidden">
              <img src="/images/doc3.jpg" className=" w-[219px] object-cover" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-black">
                Dr Harmeet Kaur
              </h2>
              <h2 className="text-xl font-semibold text-black">
                Manager, Clinical & Education
              </h2>
              <p className="text-sm font-normal text-black">
                Orthodontist (&gt;8 years of experience)
              </p>
            </div>
          </div>

          <div className="card w-[279px] h-[420px] flex flex-col card-gap-20 ">
            <div className="w-[219px] h-[202px] rounded-[20px] overflow-hidden">
              <img src="/images/doc4.jpg" className=" h-[202px] object-cover" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-black">Dr Ayushi</h2>
              <h2 className="text-xl font-semibold text-black">
                Customer Success Manager
              </h2>
              <p className="text-sm font-normal text-black">
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
