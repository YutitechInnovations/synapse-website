"use client";

import Link from "next/link";
import Image from 'next/image';
import styles from './hero-section.module.css';

export default function HeroSection() {
  return (
    <section className={styles.section}>
      {/* Background Image */}
      <div className={styles.bg}>
        <Image
          src="/images/bg2.jpg"
          fill
          className="w-full h-full object-cover object-center"
          alt="Hero Background"
        />
        {/* Overlay for readability */}
        <div className={styles.overlay} />
      </div>
      {/* Content */}
      <div className={styles.content}>
        <div style={{ maxWidth: '48rem', width: '100%' }}>
          <h1 className={styles.heading}>
            Designed for the<br />Smiles You Shape
          </h1>
          <p className={styles.paragraph}>
            At Synapse, biomechanical insights and personalized workflows come together to support your clinical precision and elevate every treatment journey. From meticulous treatment planning to diligent manufacturing, each solution is crafted for comfort, control, and optimal outcomes. Backed by the latest in 3D technology, our partnership is built around your expertise—and every smile you help create.
          </p>
        </div>
      </div>
    </section>
  );
}
