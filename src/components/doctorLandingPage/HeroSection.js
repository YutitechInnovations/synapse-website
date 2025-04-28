import Link from "next/link.js";

const HeroSection = () => {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <div className="absolute w-full h-[705px]">
        <img
          src="/images/landingPage3.png"
          className="h-[705px] w-full object-cover opacity-50"
          alt="Landing Page"
        />
      </div>
      {/* Content */}
      <div className="relative h-[705px] flex items-start justify-start pt-42 px-25">
        <div className="max-w-xl">
          <h1 className="text-[46px] font-semibold mb-6">
            Welcome to a New Kind of Dental Partnership
          </h1>
          <p className="font-medium text-xl mb-6">
            Our workflow has been designed to support your orthodontic expertise
            with dependable high-quality solutions ranging from aligners to
            advanced lab services, all crafted with the latest in 3D
            manufacturing and with precision and care.
          </p>

          {/* <div className="flex flex-wrap gap-6">
            <Link href="/orthosynce">
              <button className="btn-primary cmnbtn">Access OrthoSync</button>
            </Link>
            <Link href="/smile-analysis">
              <button variant="outline" className="cmnbtn btn-outline">
                Try Smile Analysis
              </button>
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
