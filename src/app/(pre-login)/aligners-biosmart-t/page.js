"use client";

import Navbar from "../../../components/navbar/Navbar";
import styles from "./styles.module.css";
import Image from "next/image";

export const biosmartTBenefits = [
  {
    title: "Gentle Start. Controlled Progress.",
    desc: "Lower initial force reduces biological stress while maintaining consistent pressure for efficient tipping and rotation.",
  },
  {
    title: "Smart Retention. Smooth Progress",
    desc: "Optimized material properties and staging retain force for continuous, controlled tooth movement.",
  },
  {
    title: "Durable Structure. Versatile Performance",
    desc: "Balanced rigidity and flex resist deformation, minimizing force loss and mid-treatment refinements while supporting varied movements and attachment use.",
  },
  {
    title: "Precision Forming. Accurate Fit",
    desc: "High-resolution models ensure accurate fit, controlled force delivery, and clinical reliability",
  },
];

export default function BioSmartT() {
  return (
    <>
      <Navbar />
      <div className="bg-[#F6F6F3] min-h-screen w-full">
        {/* Hero Section */}
        <section className={`${styles.heroSection}`}>
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-4">
            <div className="min-h-[200px] h-[40vw] max-h-[44rem] flex flex-col justify-center pt-8 md:pt-20">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-[#004C44] leading-tight">
                BioSmart™ T
              </h1>
              <p className="text-base md:text-xl font-medium text-[#184C3A]">
                Thermoformed. But Not Traditional.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full bg-[#F6F6F3] flex justify-center items-center py-16 md:py-20">
          <div className="w-full container px-4 text-[18px] md:text-[20px] leading-relaxed text-[#004C44]">
            <p className="text-left">
              The BioSmart™ T system brings together established thermoforming
              protocols and case-specific force planning, delivering targeted
              force systems shaped by the RxF.O.R.C.E™ approach. Each stage is
              tailored to clinical objectives while maintaining control,
              consistency, and reliability.
            </p>
          </div>
        </section>

        <section className="w-full bg-white flex justify-center py-12 px-4">
          <div className="max-w-[1240px] w-full flex flex-col gap-16">
            {biosmartTBenefits.map((item, i) => (
              <div key={i}>
                <h3 className="text-xl md:text-3xl font-semibold text-[#004C44] mb-4">
                  {item.title}
                </h3>
                <p className="text-base md:text-[20px] text-[#004C44]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Table Section */}
        <section className="w-full flex flex-col items-center px-4 md:px-0 bg-[#F6F6F3] py-8 md:py-16 pb-[150px]">
          <div className="max-w-[1240px] w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-[600] text-[#195B48] mb-4 leading-tight">
              BioSmart™ T Thermoformed Aligners. <br /> Trusted Craft. Smartly
              Evolved.
            </h2>
            <p className="mb-8 text-[#195B48] text-base md:text-lg">
              The BioSmart™ T Thermoformed Aligner System offers four treatment
              options, giving you control to manage each case in line with your
              clinical preferences.
            </p>

            {/* Image Table */}
            <div className="flex flex-col items-center overflow-x-auto w-full">
              <div className="relative">
                <Image
                  src="/images/bio-smart-table.png"
                  alt="BioSmart SM Flow"
                  width={1169}
                  height={390}
                  className="min-w-[700px] w-full h-auto object-contain"
                />
                <p
                  className="absolute text-[#195B48] text-sm"
                  style={{
                    width: "415px",
                    top: "405px",
                    left: "0px",
                  }}
                >
                  - Mid-Course correction is quarterly across all plans
                </p>
              </div>
              <div className="relative w-full mt-4 mb-[150px]">
                <Image
                  src="/images/power.png"
                  alt="Power Icon"
                  width={134}
                  height={116}
                  className="absolute left-[calc(100%-150px)]"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
