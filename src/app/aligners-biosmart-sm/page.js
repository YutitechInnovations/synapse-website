import Image from 'next/image';
import Navbar from '../../components/navbar/Navbar';

export default function BioSmartSM() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full hero-section">
        {/* Background Image */}
        <div className="absolute w-full min-h-[200px] h-[40vw] max-h-[44rem]">
          <Image
            src="/images/biosm.jpg"
            fill
            className="w-full h-full object-cover object-center"
            alt="BioSmart SM Hero Background"
            priority
          />
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-white/60" />
        </div>
        {/* Content */}
        <div className="relative min-h-[200px] h-[40vw] max-h-[44rem] flex flex-col items-start justify-center pt-8 md:pt-20 px-2 sm:px-4 md:px-8 lg:px-16">
          <div className="max-w-3xl w-full">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[#184C3A]">
              BioSmart™ SM
            </h1>
            <p className="text-base md:text-xl font-medium text-[#184C3A]">
              The Future of Aligners is Here—And It's Shape Memory.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections (copy structure from screenshot) */}
      <section className="w-full bg-[#F6F6F3] flex justify-center items-center py-16">
        <div className="w-[976px] h-[90px] flex items-center justify-center mx-auto" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: 20, lineHeight: '100%' }}>
          <p className="text-[#195B48] text-center w-full">
            Forget the old rules. With Bio… Shape Memory Aligners by Synapse, you're not just upgrading materials—you're upgrading possibilities. Designed for precision, built for consistency, and aligned with sustainability, this is innovation at its most responsive.
          </p>
        </div>
      </section>

      {/* Main Content Sections (Figma style) */}
      <section className="w-full flex flex-col items-center px-4 md:px-0 bg-white">
        <div className="max-w-5xl w-full mt-16 mb-16 flex flex-col gap-24">
          {/* No Resin Models */}
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 flex justify-end">
              <div className="max-w-md">
                <h2 className="text-2xl md:text-[28px] font-bold text-[#195B48] mb-2 leading-tight">No Resin Models.<br />Just Pure Precision.</h2>
                <p className="text-base md:text-lg text-[#195B48]">Our digital process ensures each aligner mirrors the occlusal surface with accuracy—without the need for physical resin models.</p>
              </div>
            </div>
            <div className="flex-1 flex justify-start items-center">
              <img 
                src="/images/resin.png" 
                alt="Resin Precision" 
                style={{ width: '600.91px', height: '284px', marginTop: '70px', marginLeft: '12.04px', objectFit: 'contain' }}
              />
            </div>
          </div>

          {/* Force Where It Matters Most */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl md:text-[28px] font-bold text-[#195B48] mb-2 leading-tight">Force Where It Matters Most.</h2>
              <p className="text-base md:text-lg text-[#195B48]">Using our R.FORCE™ philosophy, we digitally adjust shape and thickness for targeted orthodontic pressure, helping reduce the need for attachments.</p>
            </div>
            <div className="flex-1" />
          </div>

          {/* Memory That Moves With You */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl md:text-[28px] font-bold text-[#195B48] mb-2 leading-tight">Memory That Moves<br />With You.</h2>
              <p className="text-base md:text-lg text-[#195B48]">Our shape memory polymer maintains steady force over time—longer, more consistent, more controlled. That sustained force plays a key role in reducing unnecessary refinements and improving treatment rhythm.</p>
            </div>
            <div className="flex-1 flex justify-center">
              <img src="/images/smp.png" alt="Shape Memory Polymer" className="max-w-[320px] w-full h-auto" />
            </div>
          </div>

          {/* Smarter Attachments (Or Fewer!) */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl md:text-[28px] font-bold text-[#195B48] mb-2 leading-tight">Smarter Attachments (Or Fewer!).</h2>
              <p className="text-base md:text-lg text-[#195B48]">With built-in structural design, many cases require fewer external attachments. Better fit, smoother workflow.</p>
            </div>
            <div className="flex-1" />
          </div>

          {/* Cured in Confidence */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl md:text-[28px] font-bold text-[#195B48] mb-2 leading-tight">Cured in Confidence.</h2>
              <p className="text-base md:text-lg text-[#195B48]">Our nitrogen-based curing process minimizes oxygen interference, delivering clarity and long-term durability.</p>
            </div>
            <div className="flex-1 flex justify-center">
              <img src="/images/nbcp.png" alt="Curing Chart" className="max-w-[320px] w-full h-auto" />
            </div>
          </div>

          {/* Stronger Bonds, Lower Risk */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl md:text-[28px] font-bold text-[#195B48] mb-2 leading-tight">Stronger Bonds, Lower Risk.</h2>
              <p className="text-base md:text-lg text-[#195B48]">High cross-linking density reduces residue and virtually eliminates exfoliation.</p>
            </div>
            <div className="flex-1" />
          </div>

          {/* Green is the New Clear */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl md:text-[28px] font-bold text-[#195B48] mb-2 leading-tight">Green is the New Clear.</h2>
              <p className="text-base md:text-lg text-[#195B48]">No resin models means less process waste—better for your workflow and better for the planet. Your eco-conscious patients will appreciate it, too.</p>
            </div>
            <div className="flex-1" />
          </div>
        </div>
      </section>

      {/* Table Section */}
      <section className="w-full flex flex-col items-center px-4 md:px-0 bg-[#F6F6F3] py-16 pb-[150px]">
        <div className="max-w-[1169px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#195B48] mb-4 leading-tight">Shape Memory Aligners.<br />Smart. Seamless. Seriously Capable.</h2>
          <p className="mb-8 text-[#195B48] text-lg">Please choose your desired Tier of BioSmart™ SM based on your case specifications as per the below table.</p>
          <table className="min-w-full w-full h-[330px] border border-[#B6C3C7] rounded-[10px] overflow-hidden" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
            <thead>
              <tr>
                <th className="px-4 py-3 font-bold text-[#004C44] text-lg border-b border-r border-[#B6C3C7] bg-white first:rounded-tl-[10px] last:rounded-tr-[10px]">Tier</th>
                <th className="px-4 py-3 font-bold text-[#004C44] text-lg border-b border-r border-[#B6C3C7] bg-white">RxLite</th>
                <th className="px-4 py-3 font-bold text-[#004C44] text-lg border-b border-r border-[#B6C3C7] bg-white">RxPro</th>
                <th className="px-4 py-3 font-bold text-[#004C44] text-lg border-b border-[#B6C3C7] bg-white last:rounded-tr-[10px]">RxPro+</th>
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
      </section>
    </>
  );
} 