"use client";

import Link from "next/link";
import Image from 'next/image';
import styles from './hero-section.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
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
      <div className={styles.heroContent}>
        <div className="max-w-3xl w-full">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[#184C3A]">
            Designed for the<br />Smiles You Shape
          </h1>
          <p className="text-base md:text-xl font-medium text-[#184C3A]">
            At Synapse, biomechanical insights and personalized workflows come together to support your clinical precision and elevate every treatment journey. From meticulous treatment planning to diligent manufacturing, each solution is crafted for comfort, control, and optimal outcomes. Backed by the latest in 3D technology, our partnership is built around your expertise—and every smile you help create.
          </p>
        </div>
      </div>
    </section>
  );
}
