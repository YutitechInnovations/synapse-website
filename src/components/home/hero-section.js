"use client";

import Link from "next/link";
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full hero-section">
      {/* Background Image */}
      <div className="absolute w-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] max-h-[44rem]">
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
      <div className="relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px] max-h-[44rem] flex flex-col items-start justify-center pt-8 md:pt-20 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="max-w-3xl w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-[#184C3A]">
            Designed for the<br />Smiles You Shape
          </h1>
          <p className="text-sm sm:text-base md:text-xl font-medium text-[#184C3A] leading-relaxed sm:leading-normal">
            At Synapse, biomechanical insights and personalized workflows come together to support your clinical precision and elevate every treatment journey. From meticulous treatment planning to diligent manufacturing, each solution is crafted for comfort, control, and optimal outcomes. Backed by the latest in 3D technology, our partnership is built around your expertise—and every smile you help create.
          </p>
        </div>
      </div>
      <style jsx global>{`
        @media (max-width: 768px) {
          .hero-section > div:first-child {
            z-index: 0;
          }
          .hero-section > div:nth-child(2) {
            z-index: 10;
            position: relative;
          }
        }
      `}</style>
    </section>
  );
}
