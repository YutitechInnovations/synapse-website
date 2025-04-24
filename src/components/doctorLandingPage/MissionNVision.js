import React from "react";

const MissionNVision = () => {
  return (
    <section className="w-full">
      <div className="w-full bg-(--background-dark) flex flex-col items-center justify-center card-border-20 p-25 ">
        <div className="card card-background border-light w-[1240px] flex flex-col card-p-0  overflow-hidden card-gap-0 rounded-t-[20px]">
          <div className="w-full flex justify-end h-[424px] border-bottom overflow-hidden">
            <div className="w-full py-[125px] flex flex-col gap-[30px] justify-center items-center px-[134px]">
              <h2 className="font-semibold text-4xl">Vision Statement</h2>
              <p className="text-center text-xl font-normal">
                To redefine how dental practices grow and connect—by enabling a
                future where every patient journey is informed, personalized,
                and seamlessly supported through intelligent, integrated care.
              </p>
            </div>
            <div className="h-[424px]">
              <img
                src="/images/bulb.png"
                className="h-[424px] w-full object-cover"
              />
            </div>
          </div>
          <div className="w-full flex h-[424px] rounded-b-[20px] ">
            <div className="h-[424px]">
              <img
                src="/images/hand-team.png"
                className="h-[424px] w-full object-cover"
              />
            </div>
            <div className="w-full py-[125px] flex flex-col gap-[30px] justify-center items-center px-[134px]">
              <h2 className="font-semibold text-4xl">Mission Statement</h2>
              <p className="text-center text-xl font-normal">
                {" "}
                We are out on a mission to empower dental professionals with
                seamless support across clinical and practice needs—delivering
                reliable, innovative solutions that foster transparency, elevate
                patient experiences, and build enduring relationships through
                informed, personalized care.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="absolute w-full h-[308px]">
          <img
            src="/images/teeth.jpg"
            className="h-[308px] w-full object-cover   opacity-50"
            alt="Landing Page"
          />
        </div>
        <div className=" relative w-full h-[308px] flex  items-center justify-center top-0  p-25">
          <h1 className="text-4xl font-semibold text-start ">
            With a commitment to transparency, innovation, and ongoing
            collaboration.
          </h1>
          <p className="text-xl font-normal ">
            We’re here to ensure that both you and your patients experience care
            that’s thoughtful, informed, and consistently excellent.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionNVision;
