import Image from 'next/image';
import Navbar from '../../components/navbar/Navbar';

export default function BioSmartT() {
  return (
    <>
      <Navbar />
      <div className="bg-[#F6F6F3] min-h-screen w-full">
        {/* Hero Section */}
        <section className="relative w-full hero-section">
          {/* Background Image */}
          <div className="absolute w-full min-h-[200px] h-[40vw] max-h-[44rem]">
            <Image
              src="/images/biot.jpg"
              fill
              className="w-full h-full object-cover object-center"
              alt="BioSmart T Hero Background"
              priority
            />
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-white/60" />
          </div>
          {/* Content */}
          <div className="relative min-h-[200px] h-[40vw] max-h-[44rem] flex flex-col items-start justify-center pt-8 md:pt-20 px-4 sm:px-6 md:px-8 lg:px-16">
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
        <section className="w-full bg-[#F6F6F3] flex justify-center items-center py-8 md:py-16">
          <div className="w-full max-w-[976px] px-4 md:px-0 flex items-center justify-center mx-auto" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: '100%' }}>
            <p className="text-[#195B48] text-center w-full">
              BioSmart™ T brings together advanced material science and precision modeling for aligners that are anything but old-school. This is tried-and-true—reimagined for today's practice.
            </p>
          </div>
        </section>

        <section className="w-full flex flex-col items-center px-4 md:px-0 bg-white">
          <div className="max-w-5xl w-full mt-8 md:mt-16 mb-8 md:mb-16 flex flex-col gap-12 md:gap-24">
            {/* Models That Keep Up */}
            <div className="max-w-[900px] mx-auto px-4 md:pl-12 mb-8 md:mb-16">
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
                <img 
                  src="/images/layers.png" 
                  alt="Layered Structure" 
                  className="w-full max-w-[500px] h-auto md:h-[456px] md:ml-[63px] object-contain rounded-[16px]"
                />
              </div>
            </div>

            {/* Force That Lasts. Comfort That Stays. */}
            <div className="max-w-[900px] mx-auto px-4 md:pl-12 mb-8 md:mb-16">
              <h2 className="text-2xl md:text-[28px] font-bold text-[#004C44] mb-4 leading-tight text-left">Force That Lasts. Comfort That Stays.</h2>
              <p className="text-base md:text-lg text-[#195B48] text-left">Sustained force levels lead to better tracking, while low initial pressure enhances patient comfort and compliance—especially in longer wear intervals.</p>
            </div>

            {/* Patient-Friendly, Clinician-Ready */}
            <div className="w-full max-w-[1240px] rounded-[20px] bg-white flex flex-col md:flex-row justify-between items-center mx-auto px-4 md:px-0 py-8 md:py-[100px]">
              <div className="flex-1 flex flex-col justify-center px-4 md:pl-12 md:pr-8 mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-[#004C44] mb-6 leading-tight">Patient-Friendly,<br />Clinician-Ready.</h2>
                <p className="text-lg md:text-xl text-[#195B48]">Built for flexibility and strength, these aligners handle complex movements with confidence—while offering a break-resistant, attachment-compatible surface clinicians trust.</p>
              </div>
              <div className="flex-1 h-full flex items-center justify-center md:justify-end">
                <img 
                  src="/images/patient.jpg" 
                  alt="Patient Friendly" 
                  className="w-full max-w-[625px] h-auto md:h-[456px] object-cover rounded-[20px]"
                />
              </div>
            </div>

            {/* Consistency You Can Feel */}
            <div className="max-w-[900px] mx-auto px-4 md:pl-12 mb-8 md:mb-16">
              <h2 className="text-2xl md:text-[28px] font-bold text-[#004C44] mb-4 leading-tight text-left">Consistency You Can Feel.</h2>
              <p className="text-base md:text-lg text-[#195B48] text-left">From high-precision models to stable force zones, BioSmart™ T ensures predictability and control—at every stage of treatment.</p>
            </div>
          </div>
        </section>

        {/* Table Section */}
        <section className="w-full flex flex-col items-center px-4 md:px-0 bg-[#F6F6F3] py-8 md:py-16 pb-[150px]">
          <div className="max-w-[1169px] w-full mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#195B48] mb-4 leading-tight">Thermoformed Aligners.<br />Classic. Reinforced. Reliable.</h2>
            <p className="mb-8 text-[#195B48] text-base md:text-lg">Please choose your desired Tier of BioSmart™ T based on your case specifications as per the below table.</p>
            <div className="overflow-x-auto">
              <table className="min-w-full w-full border border-[#B6C3C7] rounded-[10px] overflow-hidden" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
                <thead>
                  <tr>
                    <th className="px-4 py-3 font-bold text-[#004C44] text-base md:text-lg border-b border-r border-[#B6C3C7] bg-white first:rounded-tl-[10px] last:rounded-tr-[10px]">Tier</th>
                    <th className="px-4 py-3 font-bold text-[#004C44] text-base md:text-lg border-b border-r border-[#B6C3C7] bg-white">RxLite</th>
                    <th className="px-4 py-3 font-bold text-[#004C44] text-base md:text-lg border-b border-r border-[#B6C3C7] bg-white">RxPro</th>
                    <th className="px-4 py-3 font-bold text-[#004C44] text-base md:text-lg border-b border-[#B6C3C7] bg-white last:rounded-tr-[10px]">RxPro+</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
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