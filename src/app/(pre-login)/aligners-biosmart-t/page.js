"use client";

import Navbar from "../../../components/Navbar/Navbar";
import styles from "./styles.module.css";
import Image from "next/image";

export const biosmartTBenefits = [
  {
    title: "Gentle Start. Controlled Progress.",
    desc: "Lower initial force reduces biological stress while maintaining consistent pressure for efficient tipping and rotation.",
  },
  {
    title: "Smart Retention. Smooth Progress.",
    desc: "Optimized material properties and staging retain force for continuous, controlled tooth movement.",
  },
  {
    title: "Durable Structure. Versatile Performance.",
    desc: "Balanced rigidity and flex resist deformation, minimizing force loss and mid-treatment refinements while supporting varied movements and attachment use.",
  },
  {
    title: "Precision Forming. Accurate Fit.",
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
              force systems shaped by the RₓF.O.R.C.E™ approach. Each stage is
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

        {/* Treatment Plan Table Section (copied from BioSmart™ SM) */}
        <section className="w-full flex flex-col items-center px-4 md:px-0 bg-white py-8 md:py-16">
          <div className="w-full max-w-[1240px] mx-auto relative mb-[100px]" style={{ minWidth: '0', minHeight: '0' }}>
            <div className="overflow-x-auto">
              {/* Table Heading and Subheading (Figma accurate) */}
              <div className="w-full max-w-[1240px] mx-auto mb-8 pt-8 px-8">
                <h2 className="text-[#004C44] text-[36px] font-extrabold leading-tight mb-4">
                BioSmart™ T Thermoformed Aligners. <br/>
                Trusted Craft. Smartly Evolved.
                </h2>
                <p className="text-[#195B48] text-[20px] font-normal leading-relaxed text-left mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                The BioSmart™ T Thermoformed Aligner System offers four treatment options, giving you control to manage each case in line with your clinical preferences
                </p>
              </div>
              <table className="min-w-full text-center border-separate border-spacing-y-4 px-8">
                <thead>
                  <tr>
                    <th className="py-4 px-4 text-base md:text-lg font-semibold text-left  rounded-tl-xl">Treatment Plan</th>
                    <th className="py-4 px-4 text-base md:text-lg font-semibold">Steps</th>
                    <th className="py-4 px-4 text-base md:text-lg font-semibold">Months</th>
                    <th className="py-4 px-4 text-base md:text-lg font-semibold">Retainers</th>
                    <th className="py-4 px-4 text-base md:text-lg font-semibold  rounded-tr-xl">Refinement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#aafff3]">
                    <td className="py-4 px-4 font-semibold text-left">RₓLinte</td>
                    <td className="py-4 px-4">Up to 12</td>
                    <td className="py-4 px-4">6</td>
                    <td className="py-4 px-4">1</td>
                    <td className="py-4 px-4">0</td>
                  </tr>
                  <tr className="bg-[#1ec9a8] text-white">
                    <td className="py-4 px-4 font-semibold text-left">RₓPro</td>
                    <td className="py-4 px-4">Up to 24</td>
                    <td className="py-4 px-4">12</td>
                    <td className="py-4 px-4">1</td>
                    <td className="py-4 px-4">1</td>
                  </tr>
                  <tr className="bg-[#009e87] text-white">
                    <td className="py-4 px-4 font-semibold text-left">RₓPro+</td>
                    <td className="py-4 px-4">Up to 48</td>
                    <td className="py-4 px-4">24</td>
                    <td className="py-4 px-4">2</td>
                    <td className="py-4 px-4">2</td>
                  </tr>
                  <tr className="bg-[#003c36] text-white">
                    <td className="py-4 px-4 font-semibold text-left">RₓMax</td>
                    <td className="py-4 px-4">Comprehensive</td>
                    <td className="py-4 px-4">36</td>
                    <td className="py-4 px-4">3</td>
                    <td className="py-4 px-4">3</td>
                  </tr>
                </tbody>
              </table>
              {/* Bottom left note text (not absolute, sits above image) */}
              <div className="pl-8 pt-4">
                <span className="text-[#195B48] text-sm italic">
                  *Mid-Course correction is quarterly across all plans
                </span>
              </div>
            </div>
            {/* Power Icon absolutely positioned just below the card, bottom right */}
            <Image
              src="/images/power.png"
              alt="Power Icon"
              width={134}
              height={116}
              className="absolute right-0 -bottom-14 z-10"
            />
          </div>
        </section>
      </div>
    </>
  );
}
