"use client";
import styles from './hero-section.module.css';

export default function HeroSection() {
  return (
    <section className={`${styles.heroSection} `}>
      {/* Content */}
      <div className={`container mx-auto ${styles.heroContent}`}>
        <div className="max-w-3xl w-full">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-[600] mb-6 leading-tight text-[#184C3A]">
            Designed for the<br />Smiles You Shape
          </h1>
          <p className="text-base md:text-xl lg:text-[1.3rem] font-[500] text-justify text-[#184C3A]">
            At Synapse, biomechanical insights and personalized workflows come together to support your clinical precision and elevate every treatment journey. From meticulous treatment planning to diligent manufacturing, each solution is crafted for comfort, control, and optimal outcomes. Backed by the latest in 3D technology, our partnership is built around your expertise—and every smile you help create.
          </p>
        </div>
      </div>
    </section>
  );
}
