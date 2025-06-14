"use client";

import Image from "next/image";
import Navbar from "../../../components/Navbar/Navbar";
import styles from "./styles.module.css";

export const biosmartSMBenefits = [
  {
    title: "Strong Structure. Safer Outcomes.",
    desc: "Nitrogen curing achieves near 100% polymerization, while next-gen resin enhances durability and is certified for biocompatibility.",
  },
  {
    title: "Clarity Maintained. Precision Preserved.",
    desc: "Uncompromised BioSmart\u2122 SM workflows enhance aligner transparency, making them discreet and aesthetically pleasing.",
  },
  {
    title: "Minimal Add-Ons. Maximum Control.",
    desc: "Fewer attachments and integrated features support simplified workflows and clinical control.",
  },
];

export default function BioSmartSM() {
  return (
    <>
      <Navbar />
      <div className="bg-[#F6F6F3] min-h-screen w-full">
        {/* Hero Section */}
        <section className={`${styles.heroSection}`}>
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-4">
            <div className="min-h-[200px] h-[40vw] max-h-[44rem] flex flex-col justify-center pt-8 md:pt-20">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-[#004C44] leading-tight">
                BioSmart™ SM{" "}
              </h1>
              <p className="text-base md:text-xl font-medium text-[#184C3A]">
                The Future of Aligners is Here—And It&apos;s Smart Memory.{" "}
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="w-full bg-[#F6F6F3] flex justify-center items-center py-16 md:py-20">
          <div className="w-full container px-4 text-[18px] md:text-[20px] leading-relaxed text-[#004C44]">
            <p className="text-left">
              With BioSmart™ SM (Smart Memory) aligners, you&apos;re not just
              upgrading materials—you&apos;re advancing toward what is
              biologically and physiologically achievable. Engineered for
              precision and efficiency, BioSmart™ SM applies RxF.O.R.C.E™ to
              deliver consistent, accurate forces through smart material
              behaviour and digital control. This supports faster tooth
              movement, reduced treatment times, and streamlined clinical
              workflows.
            </p>
          </div>
        </section>

        {/* Feature Row 1 */}
        <section className="w-full bg-white flex justify-center py-16 px-4">
          <div className="max-w-[1240px] w-full flex flex-col gap-20">
            <div className="flex flex-col md:flex-row items-start gap-12">
              <div className="flex-1 w-full flex flex-col gap-8">
                <div>
                  <h3 className="text-xl md:text-3xl font-semibold text-[#004C44] mb-4">
                    Contour-Aligned. <br className="hidden md:block" /> Accuracy
                    Assured.
                  </h3>
                  <p className="text-base md:text-[20px] text-[#004C44] mb-4">
                    Direct-printing captures occlusal anatomy and surface detail
                    with high fidelity for precise fit.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl md:text-3xl font-semibold text-[#004C44] mb-4">
                    Tailored Thickness. <br className="hidden md:block" />{" "}
                    Targeted Pressure.
                  </h3>
                  <p className="text-base md:text-[20px] text-[#004C44] mb-4">
                    Digitally customized thickness, pressure points and
                    trimlines deliver targeted pressure and enhanced
                    biomechanical outcomes.
                  </p>
                </div>
              </div>
              <div className="flex-1 w-full">
                <Image
                  src="/images/bio-smart-sm-1.png"
                  alt="Contour and Thickness"
                  width={500}
                  height={300}
                  className="w-full max-w-[500px] object-contain mx-auto"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row items-start gap-12">
              <div className="flex-1 w-full">
                <h3 className="text-xl md:text-3xl font-semibold text-[#004C44] mb-8">
                  Steady Force. <br className="hidden md:block" /> Reliable
                  Results.
                </h3>
                <p className="text-base md:text-[20px] text-[#004C44] mb-4">
                  Smart memory aligner maintains consistent force for efficient
                  translatory movement and rotation.
                </p>
              </div>
              <div className="flex-1 w-full">
                <Image
                  src="/images/bio-smart-sm-2.png"
                  alt="Steady Force"
                  width={400}
                  height={300}
                  className="w-full max-w-[400px] object-contain mx-auto"
                />
              </div>
            </div>

            {/* Benefit Bullets */}
            <div className="flex flex-col gap-8">
              {biosmartSMBenefits.map((item, i) => (
                <div key={i}>
                  <h3 className="text-xl md:text-3xl font-semibold text-[#004C44] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-base md:text-[20px] text-[#004C44] mb-4">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="w-full bg-[#F6F6F3] flex justify-center items-center py-16 md:py-20">
          <div className="max-w-[1270px] w-full px-4 text-[#004C44]">
            <p className="text-xl md:text-2xl italic leading-snug mb-6 font-[600]">
              &quot;The innovative advantage of the new aligner material is the
              continuous power transmission thanks to its memory effect.&quot;
            </p>
            <p className="text-sm md:text-base text-[#004C44] font-[400]">
              – Dr. Björn Ludwig, Assistant Professor, University of
              Homburg/Saar, Department of Orthodontics
            </p>
          </div>
        </section>

        {/* Table Section */}
        <section className="w-full flex flex-col items-center px-4 md:px-0 bg-white py-8 md:py-16 pb-[150px]">
          <div className="max-w-[1240px] w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-[600] text-[#195B48] mb-4 leading-tight">
              BioSmart ™ SM Smart Memory Aligners. <br /> Precision-Built.
              Future-Ready
            </h2>
            <p className="mb-8 text-[#195B48] text-base md:text-lg">
              The BioSmart™ SM Smart Memory Aligner System offers four treatment
              options, giving you control to manage each case in line with your
              clinical preferences.
            </p>
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
                  -Mid-Course correction is quarterly across all plans
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
