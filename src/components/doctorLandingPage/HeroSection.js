"use client";
import { usePathname } from "next/navigation";

const HeroSection = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isAbout = pathname === "/aboutus";

  return (
    <section className="relative w-full">
      {/* Background Image */}
      <div className="absolute w-full min-h-[200px] h-[40vw] max-h-[44rem]">
        <img
          src={`/images/${isHome ? "bg2.jpg" : isAbout ? "bg3.jpg" : "landingPage3.png"}`}
          className="w-full h-full object-cover object-top opacity-50"
          alt="Landing Page"
        />
      </div>
      {/* Content */}
      <div className="relative min-h-[200px] h-[40vw] max-h-[44rem] flex flex-col items-start justify-center pt-8 md:pt-32 px-2 sm:px-4 md:px-8 lg:px-16">
        <div className="max-w-xl w-full">
          <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-[2.875rem] font-semibold mb-3 md:mb-6 leading-tight">
            {isHome
              ? "Welcome to a New Kind of Dental Partnership"
              : "About Us"}
          </h1>
          <p className="font-medium text-xs sm:text-base md:text-xl mb-3 md:mb-6">
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
