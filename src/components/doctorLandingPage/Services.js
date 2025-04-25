import React from "react";

const Services = () => {
  return (
    <section className="lg:p-25 md:p-16 sm:p-8 p-6">
      <div className="justify-center text-center lg:px-[234px] md:px-[150px] sm-px[100px] px-20 mb-[50px]">
        <h2 className="lg:text-5xl sm:text-[36px] text-[30px] font-semibold mb-[20px]">
          Synapse - Your Partner in Ortho
        </h2>
        <p className="text-xl font-normal">
          Synapse is at the forefront of orthodontic innovation, combining
          cutting-edge technology with clinical expertise to transform patient
          care.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[50px]">
        {/* Feature 1 */}
        <div className="card  ">
          <div className="mb-5 flex justify-start">
            <div className="bg-(--primary-light) rounded-full p-4">
              <img
                src="/svgs/jaw.svg"
                alt="Jaw Icon"
                className="w-[31px] h-[31px]"
              />
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-5 text-start">
            Aligners Treatment Planning Solutions{" "}
          </h3>
          <li className=" text-sm font-normal">
            Offered by an In-house team of experienced Orthodontists 
          </li>
          <li className=" text-sm font-normal">
            Treatment planning for both direct and indirect print aligners -
            create precise, customized treatment plans based on your material of
            choice{" "}
          </li>
        </div>

        {/* Feature 2 */}
        <div className="card  ">
          <div className="mb-5 flex justify-start">
            <div className="bg-(--primary-light) rounded-full p-4">
              <img
                src="/svgs/manufacture.svg"
                alt="manufacture Icon"
                className="w-[31px] h-[31px]"
              />
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-5 text-start">
            Manufacturing Services{" "}
          </h3>
          <li className=" text-sm font-normal">
            Fabrication of 3D solutions like aligners and surgical guides using
            the best in class printers and consumables 
          </li>
          <li className="text-sm font-normal">
            Transparent production and dispatch tracking offering full status
            visibility
          </li>
        </div>

        {/* Feature 3 */}
        <div className="card  ">
          <div className="mb-5 flex justify-start">
            <div className="bg-(--primary-light) rounded-full p-4">
              <img
                src="/svgs/shake-hand.svg"
                alt="shake-hand Icon"
                className="w-[31px] h-[31px]"
              />
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-5 text-start">
            Marketing Services{" "}
          </h3>
          <li className="text-sm font-normal">
            Personalized customer engagement and marketing support through
            branding and education
          </li>
          <li className="text-sm font-normal">
            OrthoSync™ platform for treatment management and RxTrack™ platform
            for patient compliance tracking
          </li>
          <div className="text-right mt-[15px]">
            <p className="text-sm font-normal  hover:underline cursor-pointer">
              View More
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
