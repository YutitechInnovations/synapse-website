import React from 'react';
import Image from 'next/image';
import styles from './ServicesOffered.module.css';

export default function ServicesOffered() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Synapse - Services Offered</h2>
        <p className={styles.paragraph}>
          Our range of services designed to support your practice, enhance patient journeys, and empower every smile you shape.
        </p>
        <p className={styles.paragraph}>
          In line with the above objective, we offer the below services and you can feel free to reach out to us for more details !
        </p>
        <div className={styles.circlesContainer}>
          <div className={styles.circles}>
            {/* Bottom circle (largest) */}
            <Image
              src="/images/frame2.png"
              alt="Integrated Align 360"
              width={595}
              height={595}
              className={styles.circleBottom}
              priority
            />
            {/* Middle circle */}
            <Image
              src="/images/frame1.png"
              alt="Plan Fabrication"
              width={446}
              height={446}
              className={styles.circleMiddle}
              priority
            />
            {/* Top circle (smallest) */}
            <Image
              src="/images/frame3.png"
              alt="Treatment Planning"
              width={335}
              height={335}
              className={styles.circleTop}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 