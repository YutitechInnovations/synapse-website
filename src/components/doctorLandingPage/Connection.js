import React from "react";

const Connection = () => {
  return (
    <section className="w-full p-25" style={{ background: '#F6F6F3' }}>
      <div className="justify-center text-center lg:px-[315px] md:px-[160px] sm:px-[50px] px-20 mb-[50px]">
        <h2 className="lg:text-4xl sm:text-[36px] text-[30px] font-semibold mb-[20px]">
          Where Care Meets Connection
        </h2>
        <p className="text-xl font-normal">
          An ecosystem of engagement that brings patients, doctors, and
          Orthodontic minds closer than ever
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
        <div className="card h-[373px]">
          <div className="mb-5 flex justify-start">
            <div className="bg-(--primary-lights) rounded-full p-4">
              <img
                src="/svgs/jaw.svg"
                alt="Jaw Icon"
                className="w-[31px] h-[31px]"
              />
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-5 text-start">
            OrthoSyncTM Aligner Treatment Management Solution
          </h3>
          <p className=" text-sm font-normal">
            A powerful tool for doctors to manage the entire aligner
            journey—from case uploads and plan approvals to phased shipments and
            retainer tracking. Kindly login to access the same.{" "}
          </p>
        </div>
        <div className="card h-[373px] ">
          <div className="mb-5 flex justify-start">
            <div className="bg-(--primary-lights) rounded-full p-4">
              <img
                src="/svgs/manufacture.svg"
                alt="manufacture Icon"
                className="w-[31px] h-[31px]"
              />
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-5 text-start">
            RxTrackTM  Patient Engagement Solution{" "}
          </h3>
          <p className=" text-sm font-normal">
            Motivate patients with a smart rewards system that tracks compliance
            - after all better habits lead to better outcomes. Kindly login to
            access the same.
          </p>
        </div>
        <div className="card h-[373px] ">
          <div className="mb-5 flex justify-start">
            <div className="bg-(--primary-lights) rounded-full p-4">
              <img
                src="/svgs/shake-hand.svg"
                alt="shake-hand Icon"
                className="w-[31px] h-[31px]"
              />
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-5 text-start">
            AlignMastersTM  Community Engagement Platform
          </h3>

          <p className="text-sm font-normal">
            An exclusive space for orthodontists to ask, share, and learn—upload
            cases, exchange insights, and grow together. Kindly login to access
            the same.
          </p>
          {/* <div className="text-right mt-[15px]">
            <p className="text-sm font-normal  hover:underline cursor-pointer">
              View More
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Connection;
