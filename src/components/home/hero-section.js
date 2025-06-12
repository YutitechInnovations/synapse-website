"use client";
import styles from './hero-section.module.css';

export default function HeroSection() {
  return (
    <section className={`${styles.heroSection} `}>
      {/* Content */}
      <div className={`container ${styles.heroContent}`}>
        <div className="max-w-5xl w-full">
          <h1 className="text-2xl sm:text-[2.25rem] md:text-[2.875rem] lg:text-[2.875rem] font-semibold mb-6 leading-tight text-[#004C44]">
            Designed for the
            <br />
            Smiles You Shape
          </h1>
          <p className="text-base md:text-[1.25rem] lg:text-[1.25rem] font-medium text-justify text-[#004C44]">
            At Synapse, biomechanical insights and personalized workflows
            <br />
            come together to support your clinical precision and elevate
            <br />
            every treatment journey.
            <br />
            From meticulous treatment planning to diligent manufacturing,
            <br />
            each solution is crafted for comfort, control, and optimal
            <br />
            outcomes. Backed by the latest in 3D technology, our partnership
            <br />
            is built around your expertise—and every smile you help create.
          </p>
        </div>
      </div>
    </section>
  );
}
