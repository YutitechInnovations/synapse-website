import React from "react";

const Connection = () => {
  return (
    <section className="w-full py-10 md:py-16 lg:py-20 px-4 md:px-8" style={{ background: '#F6F6F3' }}>
      <div className="justify-center text-center lg:px-40 md:px-20 px-2 mb-8 md:mb-12">
        <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold mb-4 md:mb-6">
          Where Care Meets Connection
        </h2>
        <p className="text-base md:text-xl font-normal">
          An ecosystem of engagement that brings patients, doctors, and
          Orthodontic minds closer than ever
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
        <div className="card flex flex-col h-full min-h-[26rem] justify-between items-center text-center py-8 px-4 border border-[#C7D7CB] rounded-2xl bg-white">
          <div>
            <div className="mb-6 flex justify-center items-center">
              <div className="bg-[#C7D7CB] rounded-full p-4 flex items-center justify-center">
              <img
                src="/svgs/jaw.svg"
                alt="Jaw Icon"
                  className="w-8 h-8 md:w-[31px] md:h-[31px]"
              />
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#004C44] mb-2">OrthoSync™</h3>
            <div className="text-base md:text-lg font-bold text-[#004C44] mb-3">Aligner Treatment Management Solution</div>
          </div>
          <p className="text-xs md:text-sm font-normal text-[#004C44] max-w-xs mx-auto mt-4">
            A powerful tool for doctors to manage the entire aligner journey—from case uploads and plan approvals to phased shipments and retainer tracking. Kindly login to access the same.
          </p>
        </div>
        <div className="card flex flex-col h-full min-h-[26rem] justify-between items-center text-center py-8 px-4 border border-[#C7D7CB] rounded-2xl bg-white">
          <div>
            <div className="mb-6 flex justify-center items-center">
              <div className="bg-[#C7D7CB] rounded-full p-4 flex items-center justify-center">
              <img
                src="/svgs/manufacture.svg"
                alt="manufacture Icon"
                  className="w-8 h-8 md:w-[31px] md:h-[31px]"
              />
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#004C44] mb-2">RxTrack™</h3>
            <div className="text-base md:text-lg font-bold text-[#004C44] mb-3">Patient Engagement Solution</div>
          </div>
          <p className="text-xs md:text-sm font-normal text-[#004C44] max-w-xs mx-auto mt-4">
            Motivate patients with a smart rewards system that tracks compliance - after all better habits lead to better outcomes. Kindly login to access the same.
          </p>
        </div>
        <div className="card flex flex-col h-full min-h-[26rem] justify-between items-center text-center py-8 px-4 border border-[#C7D7CB] rounded-2xl bg-white">
          <div>
            <div className="mb-6 flex justify-center items-center">
              <div className="bg-[#C7D7CB] rounded-full p-4 flex items-center justify-center">
              <img
                src="/svgs/shake-hand.svg"
                alt="shake-hand Icon"
                  className="w-8 h-8 md:w-[31px] md:h-[31px]"
              />
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#004C44] mb-2">AlignMasters™</h3>
            <div className="text-base md:text-lg font-bold text-[#004C44] mb-3">Community Engagement Platform</div>
          </div>
          <p className="text-xs md:text-sm font-normal text-[#004C44] max-w-xs mx-auto mt-4">
            An exclusive space for orthodontists to ask, share, and learn—upload cases, exchange insights, and grow together. Kindly login to access the same.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Connection;
