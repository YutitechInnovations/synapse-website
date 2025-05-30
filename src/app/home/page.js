import Footer from "@/components/footer/Footer";
import Image from "next/image";

export default function PostLoginHome() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#F8FAF9]">
      {/* Hero Section */}
      <section className="relative w-full hero-section">
        {/* Background Image */}
        <div className="absolute w-full min-h-[200px] h-[40vw] max-h-[44rem]">
          <Image
            src="/images/bg2.jpg"
            fill
            className="w-full h-full object-cover object-center"
            alt="Hero Background"
          />
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-white/60" />
        </div>
        {/* Content */}
        <div className="relative min-h-[200px] h-[40vw] max-h-[44rem] flex flex-col items-start justify-center pt-8 md:pt-20 px-2 sm:px-4 md:px-8 lg:px-16">
          <div className="max-w-3xl w-full">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[#184C3A]">
              Welcome to a New Kind of Dental Partnership
            </h1>
            <p className="text-base md:text-xl font-medium text-[#184C3A]">
              Our workflow has been designed to support your orthodontic expertise with dependable high-quality solutions ranging from aligners to advanced lab services, all crafted with the latest in 3D manufacturing and with precision and care.
            </p>
          </div>
        </div>
      </section>

      {/* Reward Program Section */}
      <section className="w-full flex flex-col items-center py-12 bg-[#F8FAF9]">
        <h2 className="text-2xl md:text-3xl font-bold text-[#184C3A] mb-2">Reward Program</h2>
        <p className="text-[#184C3A] mb-8 text-center max-w-xl">Track your reward points, redeem them for products, and view your reward history.</p>
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl justify-center">
          <div className="flex-1 bg-white rounded-xl shadow p-6 flex flex-col items-center min-w-[200px]">
            <span className="text-[#184C3A] text-base mb-2">Current Balance</span>
            <span className="text-3xl font-bold text-[#184C3A]">1250 pts</span>
          </div>
          <div className="flex-1 bg-white rounded-xl shadow p-6 flex flex-col items-center min-w-[200px]">
            <span className="text-[#184C3A] text-base mb-2">Total Earned</span>
            <span className="text-3xl font-bold text-[#184C3A]">1650 pts</span>
          </div>
          <div className="flex-1 bg-white rounded-xl shadow p-6 flex flex-col items-center min-w-[200px]">
            <span className="text-[#184C3A] text-base mb-2">Total Redeemed</span>
            <span className="text-3xl font-bold text-[#184C3A]">400 pts</span>
          </div>
        </div>
      </section>

      {/* Where Care Meets Connection Section */}
      <section className="w-full flex flex-col items-center py-12 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-[#184C3A] mb-2">Where Care Meets Connection</h2>
        <p className="text-[#184C3A] mb-8 text-center max-w-xl">Our ecosystem of engagement that brings patients, doctors and care journeys closer than ever</p>
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center">
          <div className="flex-1 bg-[#F8FAF9] rounded-xl shadow p-8 flex flex-col items-center min-w-[220px]">
            <div className="mb-4"><span className="bg-[#184C3A] text-white px-4 py-2 rounded-full text-lg font-bold">orthosync</span></div>
            <h3 className="text-xl font-bold text-[#184C3A] mb-2">OrthoSync™</h3>
            <p className="text-[#184C3A] text-center">Aligner Treatment Management<br />A powerful tool for doctors to manage the entire aligner journey—from case uploads and plan approval to packed shipments and retainer tracking. Kindly login to access the same.</p>
          </div>
          <div className="flex-1 bg-[#F8FAF9] rounded-xl shadow p-8 flex flex-col items-center min-w-[220px]">
            <div className="mb-4"><span className="bg-[#184C3A] text-white px-4 py-2 rounded-full text-lg font-bold">Rx</span></div>
            <h3 className="text-xl font-bold text-[#184C3A] mb-2">RxTrack™</h3>
            <p className="text-[#184C3A] text-center">Patient Engagement Solution<br />Motivate patients with a smart rewards system that tracks compliance—after all, better plans lead to better outcomes. Kindly login to access the same.</p>
          </div>
          <div className="flex-1 bg-[#F8FAF9] rounded-xl shadow p-8 flex flex-col items-center min-w-[220px]">
            <div className="mb-4"><span className="bg-[#184C3A] text-white px-4 py-2 rounded-full text-lg font-bold">AlignMasters</span></div>
            <h3 className="text-xl font-bold text-[#184C3A] mb-2">AlignMasters™</h3>
            <p className="text-[#184C3A] text-center">Community Engagement Platform<br />An exclusive space for orthodontists to ask, share and learn—upload cases, exchange insights, and grow together. Kindly login to access the same.</p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="w-full flex flex-col items-center py-12 bg-[#F8FAF9]">
        <h2 className="text-2xl md:text-3xl font-bold text-[#184C3A] mb-8">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          <div className="bg-white rounded-xl shadow p-0 overflow-hidden flex flex-col">
            <Image src="/images/education-blogs.jpg" width={600} height={300} alt="Blogs" className="w-full h-48 object-cover" />
            <span className="p-6 text-xl font-bold text-[#184C3A]">Blogs</span>
          </div>
          <div className="bg-white rounded-xl shadow p-0 overflow-hidden flex flex-col">
            <Image src="/images/education-materials.jpg" width={600} height={300} alt="Materials & Data" className="w-full h-48 object-cover" />
            <span className="p-6 text-xl font-bold text-[#184C3A]">Materials & Data</span>
          </div>
          <div className="bg-white rounded-xl shadow p-0 overflow-hidden flex flex-col">
            <Image src="/images/education-research.jpg" width={600} height={300} alt="Research Papers" className="w-full h-48 object-cover" />
            <span className="p-6 text-xl font-bold text-[#184C3A]">Research Papers</span>
          </div>
          <div className="bg-white rounded-xl shadow p-0 overflow-hidden flex flex-col">
            <Image src="/images/education-faq.jpg" width={600} height={300} alt="Patients' FAQs" className="w-full h-48 object-cover" />
            <span className="p-6 text-xl font-bold text-[#184C3A]">Patients' FAQs</span>
          </div>
        </div>
      </section>

      {/* Footer (no login button) */}
      <Footer />
    </div>
  );
} 