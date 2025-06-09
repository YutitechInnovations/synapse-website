import Image from 'next/image';
import Navbar from '../../components/navbar/Navbar';
import styles from './styles.module.css';
import LayersImage from '../../assets/layers.png';
import PatientImage from '../../assets/patient.jpg'

export default function BioSmartT() {
  return (
    <>
      <Navbar />
      <div className="bg-[#F6F6F3] min-h-screen w-full">
        {/* Hero Section */}
        <section className={`${styles.heroSection}               `}>

          {/* Content */}
          <div className="relative min-h-[200px] container mx-auto h-[40vw] max-h-[44rem] flex flex-col items-start justify-center pt-8 md:pt-20 ">
            <div className="max-w-3xl w-full">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[#184C3A]">
                BioSmart™ T
              </h1>
              <p className="text-base md:text-xl font-medium text-[#184C3A]">
                Thermoformed. But Not Traditional.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Sections (Figma style) */}
        <section className="w-full bg-[#F6F6F3] flex justify-center items-center py-8 md:py-16 ">
          <div className="w-full container px-12 flex items-center justify-center mx-auto" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: '100%' }}>
            <p className="text-[#195B48] text-left w-full px-12">
              BioSmart™ T brings together advanced material science and precision modeling for aligners that are anything but old-school. This is tried-and-true—reimagined for today&apos;s practice.
            </p>
          </div>
        </section>

        <section className="w-full flex flex-col items-center px-4 md:px-0 bg-white">
          <div className="max-w-6xl w-full mt-8 md:mt-16 mb-8 md:mb-16 flex flex-col gap-12 md:gap-24">
            {/* Models That Keep Up */}
            <div className="container mx-auto  mb-8 md:mb-12">
              <h2 className="text-2xl md:text-[28px] font-bold text-[#004C44] mb-4 leading-tight text-left">Models That Keep Up.</h2>
              <p className="text-base md:text-lg text-[#195B48] text-left">Faster printing. Smoother finishes. Cleaner thermoforming. Our modeling process accelerates delivery without compromising accuracy.</p>
            </div>

            {/* The Strength Is in the Layers */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 px-4 md:px-0">
              <div className="flex-1 flex flex-col justify-center">
                <h2 className="text-2xl md:text-[28px] font-bold text-[#004C44] mb-2 leading-tight">The Strength Is in the Layers.</h2>
                <p className="text-base md:text-lg text-[#195B48] max-w-md">A multi-layered sheet structure with a responsive core offers higher durability, better elasticity, and reduced initial force—all engineered for smooth, controlled movement.</p>
              </div>
              <div className="flex-1 flex justify-center md:justify-end items-center">
                <div className="relative w-full max-w-[500px] h-[456px] md:ml-[63px]">
                  <Image
                    src={LayersImage}
                    alt="Layered Structure"
                    fill
                    className="object-contain rounded-[16px]"
                  />
                </div>
              </div>
            </div>

            {/* Force That Lasts. Comfort That Stays. */}
            <div className="container mx-auto  mb-8 md:mb-6">
              <h2 className="text-2xl md:text-[28px] font-bold text-[#004C44] mb-4 leading-tight text-left">Force That Lasts. Comfort That Stays.</h2>
              <p className="text-base md:text-lg text-[#195B48] text-left">Sustained force levels lead to better tracking, while low initial pressure enhances patient comfort and compliance—especially in longer wear intervals.</p>
            </div>

            {/* Patient-Friendly, Clinician-Ready */}
            <div className="w-full container mx-auto rounded-[20px] bg-white flex flex-col md:flex-row justify-between items-center py-8 md:py-[10px]">
              <div className="flex-1 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#004C44] mb-6 leading-tight">Patient-Friendly,<br />Clinician-Ready.</h2>
                <p className="text-lg md:text-xl text-[#195B48]">Built for flexibility and strength, these aligners handle complex movements with confidence—while offering a break-resistant, attachment-compatible surface clinicians trust.</p>
              </div>
              <div className="flex-1 h-full flex items-center justify-center md:justify-end">
                <div className="relative w-full max-w-[625px] h-[456px]">
                  <Image
                    src={PatientImage}
                    alt="Patient Friendly"
                    fill
                    className="object-cover  rounded-[20px]"
                  />
                </div>
              </div>
            </div>

            {/* Consistency You Can Feel */}
            <div className="container mx-auto px-4 mb-8 md:mb-16">
              <h2 className="text-2xl md:text-[28px] font-bold text-[#004C44] mb-4 leading-tight text-left">Consistency You Can Feel.</h2>
              <p className="text-base md:text-lg text-[#195B48] text-left">From high-precision models to stable force zones, BioSmart™ T ensures predictability and control—at every stage of treatment.</p>
            </div>
          </div>
        </section>

        {/* Table Section */}
        <section className="w-full flex flex-col items-center px-4 md:px-0 bg-[#F6F6F3] py-8 md:py-16 pb-[150px]">
          <div className="max-w-7xl w-full mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#195B48] mb-4 leading-tight">Thermoformed Aligners.<br />Classic. Reinforced. Reliable.</h2>
            <p className="mb-8 text-[#195B48] text-base md:text-lg">Please choose your desired Tier of BioSmart™ T based on your case specifications as per the below table.</p>
            <div className="overflow-x-auto">
              <table className="min-w-full w-full border border-[#B6C3C7] rounded-[10px] overflow-hidden" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
                <thead>
                  <tr className='text-center'>
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