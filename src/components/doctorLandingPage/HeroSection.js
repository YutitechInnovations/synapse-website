import Link from "next/link.js";

const HeroSection = () => {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <div className="absolute w-full h-[664px]">
        <img
          src="/images/landingPage.png"
          className="h-[664px]"
          alt="Landing Page"
        />
      </div>
      {/* Content */}
      <div className="relative h-[664px] flex items-start justify-start pt-42 px-25">
        <div className="max-w-2xl">
          <h1 className="text-[46px] font-semibold mb-6">
            Welcome to a New Kind
            <br />
            of Dental Partnership
          </h1>
          <p className="font-medium text-xl mb-6">
            We’re here to support your practice with dependable, high-quality
            solutions—from aligners to advanced lab services—all crafted with
            care, precision, and the latest in 3D manufacturing. Our focus on
            quality materials, thoughtful planning, and consistency means you
            can stay confident in every case you deliver.
          </p>

          <div className="flex flex-wrap gap-6">
            <Link href="/orthosynce">
              <button className="btn-primary cmnbtn">Access OrthoSync</button>
            </Link>
            <Link href="/smile-analysis">
              <button variant="outline" className="cmnbtn btn-outline">
                Try Smile Analysis
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
