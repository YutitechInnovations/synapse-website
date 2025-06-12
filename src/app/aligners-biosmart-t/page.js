import Navbar from '../../components/navbar/Navbar';
import styles from './styles.module.css';
import Image from 'next/image';


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
          <div className="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-4">
            <div className="min-h-[200px] h-[40vw] max-h-[44rem] flex flex-col justify-center pt-8 md:pt-20">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-[#004C44] leading-tight">
                BioSmart™ T
              </h1>
              <p className="text-base md:text-xl font-medium text-[#184C3A]">
                Thermoformed. But Not Traditional.{" "}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Sections (Figma style) */}
        <section className="w-full bg-[#F6F6F3] flex justify-center items-center py-16 md:py-20 ">
          <div
            className="w-full container px-4 flex items-center justify-center"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "100%",
            }}
          >
            <p className="text-[#004C44] text-left w-full ">
              The BioSmart™ T system brings together established thermoforming
              protocols and case-specific force planning, delivering targeted
              force systems shaped by the RxF.O.R.C.E™ approach. Each stage is
              tailored to clinical objectives while maintaining control,
              consistency, and reliability.{" "}
            </p>
          </div>
        </section>
        <section className="w-full bg-white flex justify-center py-12">
          <div className="max-w-[1240px] w-full flex flex-col gap-18">
            {/* Section Blocks */}
            {biosmartTBenefits.map((item, i) => (
              <div key={i}>
                <h3 className="text-xl md:text-3xl font-semibold text-[#004C44] mb-8">
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
          <div className="max-w-[1240px]  w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-[600] text-[#195B48] mb-4 leading-tight">
              BioSmart™ T Thermoformed Aligners.  <br />
              Trusted Craft. Smartly Evolved.{" "}
            </h2>
            <p className="mb-8 text-[#195B48] text-base md:text-lg">
              The BioSmart™ T Thermoformed Aligner System offers four treatment
              options, giving you control to manage each case in line with your
              clinical preferences.
            </p>
            {/*<div className="overflow-x-auto">
              <table
                className="min-w-full w-full border border-[#B6C3C7] rounded-[10px] overflow-hidden"
                style={{ borderCollapse: "separate", borderSpacing: 0 }}
              >
                <thead>
                  <tr className="text-center">
                    <th className="px-4 py-3 font-bold text-[#004C44] text-base md:text-lg border-b border-r border-[#B6C3C7]  first:rounded-tl-[10px] last:rounded-tr-[10px]">
                      Tier
                    </th>
                    <th className="px-4 py-3 font-bold text-[#004C44] text-base md:text-lg border-b border-r border-[#B6C3C7] ">
                      RxLite
                    </th>
                    <th className="px-4 py-3 font-bold text-[#004C44] text-base md:text-lg border-b border-r border-[#B6C3C7] ">
                      RxPro
                    </th>
                    <th className="px-4 py-3 font-bold text-[#004C44] text-base md:text-lg border-b border-r border-[#B6C3C7] ">
                      RxPro+
                    </th>
                  </tr>
                </thead>
                <tbody className=" text-center">
                  <tr>
                    <td className="border-t border-r border-[#B6C3C7] px-4 py-3 font-semibold text-[#195B48] text-base">
                      Crowding/Spacing
                    </td>
                    <td className="border-t border-r border-[#B6C3C7] px-4 py-3 text-[#195B48] text-base">
                      ≤ 2–3 mm
                    </td>
                    <td className="border-t border-r border-[#B6C3C7] px-4 py-3 text-[#195B48] text-base">
                      3–5 mm
                    </td>
                    <td className="border-t border-[#B6C3C7] px-4 py-3 text-[#195B48] text-base">
                      &gt; 5 mm
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-r border-[#B6C3C7] px-4 py-3 font-semibold text-[#195B48] text-base">
                      Tooth Rotations
                    </td>
                    <td className="border-t border-r border-[#B6C3C7] px-4 py-3 text-[#195B48] text-base">
                      Minor (&lt; 20°)
                    </td>
                    <td className="border-t border-r border-[#B6C3C7] px-4 py-3 text-[#195B48] text-base">
                      Moderate rotations
                    </td>
                    <td className="border-t border-[#B6C3C7] px-4 py-3 text-[#195B48] text-base">
                      Severe rotations, tipping, intrusion/ extrusion
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-r border-[#B6C3C7] px-4 py-3 font-semibold text-[#195B48] text-base">
                      Bite Issues
                    </td>
                    <td className="border-t border-r border-[#B6C3C7] px-4 py-3 text-[#195B48] text-base">
                      Minimal/None
                    </td>
                    <td className="border-t border-r border-[#B6C3C7] px-4 py-3 text-[#195B48] text-base">
                      Mild overbite/overjet, minor midline shifts
                    </td>
                    <td className="border-t border-[#B6C3C7] px-4 py-3 text-[#195B48] text-base">
                      Complex bite (Class III/III, deep/open bite), extractions
                      likely
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-r border-[#B6C3C7] px-4 py-3 font-semibold text-[#195B48] text-base">
                      Treatment Needs
                    </td>
                    <td className="border-t border-r border-[#B6C3C7] px-4 py-3 text-[#195B48] text-base">
                      Basic aligners only; no attachments or IPR
                    </td>
                    <td className="border-t border-r border-[#B6C3C7] px-4 py-3 text-[#195B48] text-base">
                      Attachments, IPR; possible elastics
                    </td>
                    <td className="border-t border-[#B6C3C7] px-4 py-3 text-[#195B48] text-base">
                      Attachments, elastics, auxiliaries; possibly not suitable
                      for aligners alone
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-r border-b border-[#B6C3C7] px-4 py-3 font-semibold text-[#195B48] text-base rounded-bl-[10px]">
                      Estimated Duration
                    </td>
                    <td className="border-t border-r border-b border-[#B6C3C7] px-4 py-3 text-[#195B48] text-base">
                      4–6 months
                    </td>
                    <td className="border-t border-r border-b border-[#B6C3C7] px-4 py-3 text-[#195B48] text-base">
                      8–12 months
                    </td>
                    <td className="border-t border-b border-[#B6C3C7] px-4 py-3 text-[#195B48] text-base rounded-br-[10px]">
                      12–24 months
                    </td>
                  </tr>
                </tbody>
              </table>*/}
               <section className="w-full flex flex-col items-center px-4 md:px-0 py-8 md:py-16 pb-[150px]">
          <div className="max-w-[1240px]  w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-[600] text-[#195B48] mb-4 leading-tight">
              BioSmart ™ SM Smart Memory Aligners. 
              <br />
              Precision-Built. Future-Ready{" "}
            </h2>
            <p className="mb-8 text-[#195B48] text-base md:text-lg">
              The BioSmart™ SM Smart Memory Aligner System offers four treatment
              options, giving you control to manage each case in line with your
              clinical preferences.
            </p>
            <div className="flex flex-col items-center -ml-[2px]">
              <div className="relative">
                <Image 
                  src="/images/frame34.png"
                  alt="BioSmart SM Flow"
                  width={1169}
                  height={390}
                  className="w-[1169px] h-auto"
                  style={{ height: '390px', objectFit: 'contain' }}
                />
                <p 
                  className="absolute text-[#195B48]"
                  style={{ 
                    width: '415px',
                    height: '24px',
                    top: '405px',
                    left: '-0.5px'
                  }}
                >
                  -Mid-Course correction is quarterly across all plans
                </p>
              </div>
              
            </div>
          </div>
        </section>
            </div>
          
        </section>
      </div>
    </>
  );
} 