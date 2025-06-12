"use client";
import styles from "./aboutus.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      {/* Content */}
      <div className="   container relative  min-h-[200px]   h-[45vw] md:h-[45vw] max-h-[44rem] flex flex-col items-start justify-center pt-8 md:pt-32 px-[6rem] sm:px[6rem] md:px-[6rem] lg:px-[6rem] z-10">
        <div className="max-w-xl w-full">
          <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-[2.875rem] font-semibold mb-3 md:mb-6 leading-tight">
            About Us
          </h1>
          <p className="font-medium w-[80%] text-justify text-xs sm:text-base md:text-xl mb-3 md:mb-6">
            Our workflow has been designed to support your orthodontic expertise
            with dependable high-quality solutions ranging from aligners to
            advanced lab services, all crafted with the latest in 3D
            manufacturing and with precision and care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
