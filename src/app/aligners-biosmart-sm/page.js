import Image from 'next/image';
import Navbar from '../../components/navbar/Navbar';
import styles from './styles.module.css';
import ResinImage from '../../assets/resin.png';
import SmpImage from '../../assets/smp.png';
import NbcpImage from '../../assets/nbcp.png'

export default function BioSmartSM() {
  return (
    <>
      <Navbar />
      <div className="bg-[#F6F6F3] min-h-screen w-full">
        {/* Hero Section */}
        <section className={`${styles.heroSection}               `}>

          {/* Content */}
          <div className="relative container mx-auto min-h-[200px] h-[40vw] max-h-[44rem] flex flex-col items-start justify-center pt-8 md:pt-20 ">
            <div className="max-w-3xl w-full">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[#184C3A]">
                BioSmart™ SM
              </h1>
              <p className="text-base md:text-xl font-medium text-[#184C3A]">
                Shape Memory. But Not Traditional.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Sections (Figma style) */}
        <section className="w-full bg-[#F6F6F3] flex justify-center items-center py-8 md:py-16">
          <div className="w-full max-w-[1200px]  px-4 md:px-0 flex items-center justify-center mx-auto" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: 'clamp(16px, 2vw, 20px)', }}>
            <p className="text-[#195B48] text-left w-full">
              Forget the old rules. With Bio… Shape Memory Aligners by Synapse, you&apos;re not just upgrading materials—you&apos;re upgrading possibilities. Designed for precision, built for consistency, and aligned with sustainability, this is innovation at its most responsive.
            </p>
          </div>
        </section>

        <section className="w-full flex flex-col items-center px-4 md:px-0 bg-white">
          <div className="max-w-7xl mx-auto mt-8 md:mt-16 mb-8 md:mb-16 flex flex-col gap-12 md:gap-24">
            {/* No Resin Models */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="w-[50%]">
                <div className="max-w-md">
                  <h2 className="text-2xl md:text-[28px] font-bold text-[#195B48] mb-2 leading-tight">No Resin Models.<br />Just Pure Precision.</h2>
                  <p className="text-base md:text-lg text-[#195B48]">Our digital process ensures each aligner mirrors the occlusal surface with accuracy—without the need for physical resin models.</p>
                </div>
              </div>
              <div className="flex-1 flex justify-center md:justify-start items-center">
                <div className="relative w-full max-w-[600.91px] h-[284px] md:mt-[70px] md:ml-[12.04px]">
                  <Image
                    src={ResinImage}
                    alt="Resin Precision"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Force Where It Matters Most */}
            <div className="w-full max-w-7xl mx-auto px-4 md:px-0 mb-8 md:mb-16">
              <h2 className="text-2xl md:text-[28px] font-bold text-[#195B48] mb-2 leading-tight text-left">
                Force Where It Matters Most.
              </h2>
              <p className="text-base md:text-lg text-[#195B48] text-left">
                Using our R.FORCE™ philosophy, we digitally adjust shape and thickness for targeted orthodontic pressure, helping reduce the need for attachments.
              </p>
            </div>

            {/* Memory That Moves With You */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 px-4 md:px-0 my-8">
              <div className="flex-1 flex flex-col justify-center">
                <h2 className="text-2xl md:text-[28px] font-bold text-[#195B48] mb-2 leading-tight">Memory That Moves<br />With You.</h2>
                <p className="text-base md:text-lg text-[#195B48]">Our shape memory polymer maintains steady force over time—longer, more consistent, more controlled. That sustained force plays a key role in reducing unnecessary refinements and improving treatment rhythm.</p>
              </div>
              <div className="flex-1 flex justify-center items-center">
                <div className=" relative w-full max-w-[320px] h-[320px]">
                  <Image
                    src={SmpImage}
                    alt="Shape Memory Polymer"
                    fill
                    className="object-contain aspect-video"
                  />
                </div>
              </div>
            </div>

            {/* Cured in Confidence */}
            <div className="flex flex-col md:flex-row items-center gap-8 px-4 md:px-0">
              <div className="flex-1">
                <h2 className="text-2xl md:text-[28px] font-bold text-[#195B48] mb-2 leading-tight">Cured in Confidence.</h2>
                <p className="text-base md:text-lg text-[#195B48]">Our nitrogen-based curing process minimizes oxygen interference, delivering clarity and long-term durability.</p>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="relative w-full max-w-[320px] h-[320px]">
                  <Image
                    src={NbcpImage}
                    alt="Curing Chart"
                    fill
                    className="object-contain aspect-video"
                  />
                </div>
              </div>
            </div>

            {/* Stronger Bonds, Lower Risk */}
            <div className="flex flex-col md:flex-row items-center gap-8 px-4 md:px-0">
              <div className="flex-1">
                <h2 className="text-2xl md:text-[28px] font-bold text-[#195B48] mb-2 leading-tight">Stronger Bonds, Lower Risk.</h2>
                <p className="text-base md:text-lg text-[#195B48]">High cross-linking density reduces residue and virtually eliminates exfoliation.</p>
              </div>
              <div className="flex-1" />
            </div>

            {/* Green is the New Clear */}
            <div className="flex flex-col md:flex-row items-center gap-8 px-4 md:px-0">
              <div className="flex-1">
                <h2 className="text-2xl md:text-[28px] font-bold text-[#195B48] mb-2 leading-tight">Green is the New Clear.</h2>
                <p className="text-base md:text-lg text-[#195B48]">No resin models means less process waste—better for your workflow and better for the planet. Your eco-conscious patients will appreciate it, too.</p>
              </div>
              <div className="flex-1" />
            </div>
          </div>
        </section>

        {/* Table Section */}
        <section className="w-full flex flex-col items-center px-4 md:px-0 bg-[#F6F6F3] py-8 md:py-16 pb-[150px]">
          <div className="max-w-[1169px] w-full mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#195B48] mb-4 leading-tight">Shape Memory Aligners.<br />Smart. Seamless. Seriously Capable.</h2>
            <p className="mb-8 text-[#195B48] text-base md:text-lg">Please choose your desired Tier of BioSmart™ SM based on your case specifications as per the below table.</p>
            <div className="overflow-x-auto">
              <table className="min-w-full w-full border border-[#B6C3C7] rounded-[10px] overflow-hidden" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
                <thead className='text-center'>
                  <tr>
                    <th className="px-4 py-3 font-bold text-[#004C44] text-base md:text-lg border-b border-r border-[#B6C3C7]  first:rounded-tl-[10px] last:rounded-tr-[10px]">Tier</th>
                    <th className="px-4 py-3 font-bold text-[#004C44] text-base md:text-lg border-b border-r border-[#B6C3C7] ">RxLite</th>
                    <th className="px-4 py-3 font-bold text-[#004C44] text-base md:text-lg border-b border-r border-[#B6C3C7] ">RxPro</th>
                    <th className="px-4 py-3 font-bold text-[#004C44] text-base md:text-lg border-b border-[#B6C3C7]  last:rounded-tr-[10px]">RxPro+</th>
                  </tr>
                </thead>
                <tbody className=" text-center">
                  <tr>
                    <td className="border-t border-r border-[#B6C3C7] px-4 py-3 font-semibold text-[#195B48] text-base">Crowding/Spacing</td>
                    <td className="border-t border-r border-[#B6C3C7] px-4 py-3 text-[#195B48] text-base">≤ 2–3 mm</td>
                    <td className="border-t border-r border-[#B6C3C7] px-4 py-3 text-[#195B48] text-base">3–5 mm</td>
                    <td className="border-t border-[#B6C3C7] px-4 py-3 text-[#195B48] text-base">&gt; 5 mm</td>
                  </tr>
                  <tr>
                    <td className="border-t border-r border-[#B6C3C7] px-4 py-3 font-semibold text-[#195B48] text-base">Tooth Rotations</td>
                    <td className="border-t border-r border-[#B6C3C7] px-4 py-3 text-[#195B48] text-base">Minor (&lt; 20°)</td>
                    <td className="border-t border-r border-[#B6C3C7] px-4 py-3 text-[#195B48] text-base">Moderate rotations</td>
                    <td className="border-t border-[#B6C3C7] px-4 py-3 text-[#195B48] text-base">Severe rotations, tipping, intrusion/ extrusion</td>
                  </tr>
                  <tr>
                    <td className="border-t border-r border-[#B6C3C7] px-4 py-3 font-semibold text-[#195B48] text-base">Bite Issues</td>
                    <td className="border-t border-r border-[#B6C3C7] px-4 py-3 text-[#195B48] text-base">Minimal/None</td>
                    <td className="border-t border-r border-[#B6C3C7] px-4 py-3 text-[#195B48] text-base">Mild overbite/overjet, minor midline shifts</td>
                    <td className="border-t border-[#B6C3C7] px-4 py-3 text-[#195B48] text-base">Complex bite (Class III/III, deep/open bite), extractions likely</td>
                  </tr>
                  <tr>
                    <td className="border-t border-r border-[#B6C3C7] px-4 py-3 font-semibold text-[#195B48] text-base">Treatment Needs</td>
                    <td className="border-t border-r border-[#B6C3C7] px-4 py-3 text-[#195B48] text-base">Basic aligners only; no attachments or IPR</td>
                    <td className="border-t border-r border-[#B6C3C7] px-4 py-3 text-[#195B48] text-base">Attachments, IPR; possible elastics</td>
                    <td className="border-t border-[#B6C3C7] px-4 py-3 text-[#195B48] text-base">Attachments, elastics, auxiliaries; possibly not suitable for aligners alone</td>
                  </tr>
                  <tr>
                    <td className="border-t border-r border-b border-[#B6C3C7] px-4 py-3 font-semibold text-[#195B48] text-base rounded-bl-[10px]">Estimated Duration</td>
                    <td className="border-t border-r border-b border-[#B6C3C7] px-4 py-3 text-[#195B48] text-base">4–6 months</td>
                    <td className="border-t border-r border-b border-[#B6C3C7] px-4 py-3 text-[#195B48] text-base">8–12 months</td>
                    <td className="border-t border-b border-[#B6C3C7] px-4 py-3 text-[#195B48] text-base rounded-br-[10px]">12–24 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 