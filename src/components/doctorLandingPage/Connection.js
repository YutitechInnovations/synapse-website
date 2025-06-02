import React from "react";
import Image from 'next/image';

const Connection = () => {
  return (
    <section className="w-full py-10 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16" style={{ background: '#F6F6F3' }}>
      <div className="justify-center text-center px-0 mb-6 md:mb-8">
        <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold mb-4 md:mb-6">
          Where Care Meets Connection
        </h2>
        <p className="text-base md:text-xl font-normal">
          An ecosystem of engagement that brings patients, doctors, and
          Orthodontic minds closer than ever
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-stretch">
        <div className="card flex flex-col h-full min-h-[24rem] justify-between items-center text-center py-6 px-2 border border-[#C7D7CB] rounded-2xl bg-white">
          <div>
            <div className="mb-1 flex justify-center items-center">
              <div className="bg-[#004C44] rounded-full px-6 py-2 flex items-center justify-center" style={{minWidth: '120px', minHeight: '48px'}}>
                <span className="text-white font-bold text-lg">OrthoSync</span>
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#004C44]">OrthoSync™</h3>
            <div className="text-base md:text-lg font-bold text-[#004C44] mt-1">Aligner Treatment Management Solution</div>
          </div>
          <p className="text-xs md:text-sm font-normal text-[#004C44] max-w-xs mx-auto mt-1">
            A powerful tool for doctors to manage the entire aligner journey—from case uploads and plan approvals to phased shipments and retainer tracking. Kindly login to access the same.
          </p>
        </div>
        <div className="card flex flex-col h-full min-h-[24rem] justify-between items-center text-center py-6 px-2 border border-[#C7D7CB] rounded-2xl bg-white">
          <div>
            <div className="mb-1 flex justify-center items-center">
              <div className="bg-[#C7D7CB] rounded-full p-4 flex items-center justify-center">
              <Image
                src="/images/img5.jpg"
                width={40}
                height={40}
                className="w-8 h-8 md:w-[31px] md:h-[31px]"
                alt="manufacture Icon"
              />
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#004C44]">RxTrack™</h3>
            <div className="text-base md:text-lg font-bold text-[#004C44] mt-1">Patient Engagement Solution</div>
          </div>
          <p className="text-xs md:text-sm font-normal text-[#004C44] max-w-xs mx-auto mt-1">
            Motivate patients with a smart rewards system that tracks compliance - after all better habits lead to better outcomes. Kindly login to access the same.
          </p>
        </div>
        <div className="card flex flex-col h-full min-h-[24rem] justify-between items-center text-center py-6 px-2 border border-[#C7D7CB] rounded-2xl bg-white">
          <div>
            <div className="mb-1 flex justify-center items-center">
              <div className="bg-[#C7D7CB] rounded-full p-4 flex items-center justify-center">
              <Image
                src="/images/img4.jpg"
                width={40}
                height={40}
                className="w-8 h-8 md:w-[31px] md:h-[31px]"
                alt="shake-hand Icon"
              />
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#004C44]">AlignMasters™</h3>
            <div className="text-base md:text-lg font-bold text-[#004C44] mt-1">Community Engagement Platform</div>
          </div>
          <p className="text-xs md:text-sm font-normal text-[#004C44] max-w-xs mx-auto mt-1">
            An exclusive space for orthodontists to ask, share, and learn—upload cases, exchange insights, and grow together. Kindly login to access the same.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Connection;
