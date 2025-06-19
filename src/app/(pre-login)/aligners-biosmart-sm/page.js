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

        {/* Treatment Plan Table Section */}
        <section className="w-full flex flex-col items-center px-4 md:px-0 bg-white py-8 md:py-16">
          <div className="w-full max-w-[1240px] mx-auto relative mb-[100px]" style={{ minWidth: '0', minHeight: '0' }}>
            <div className="overflow-x-auto">
              {/* Table Heading and Subheading (Figma accurate) */}
              <div className="w-full max-w-[1240px] mx-auto mb-8 pt-8 px-8">
                <h2 className="text-[#004C44] text-[36px] font-extrabold leading-tight mb-4">
                  BioSmart™ SM Smart Memory Aligners.<br />
                  Precision-Built. Future-Ready
                </h2>
                <p className="text-[#195B48] text-[20px] font-normal leading-relaxed text-left mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  The BioSmart™ SM Smart Memory Aligner System offers four treatment options, giving you control to manage each case in line with your clinical preferences.
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
                    <td className="py-4 px-4 font-semibold text-left">RₓLite</td>
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
