import React from 'react';
import styles from './ServicesOffered.module.css';

export default function ServicesOffered() {
  return (
    <section className={` container mx-auto ${styles.section}`}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Synapse - Services Offered</h2>
        <p className={`${styles.paragraph_styles} md:text-[1.3rem] text-[1rem] lg:text-[1.3rem]`}>
          Our range of services designed to support your practice, enhance patient journeys, and empower every smile you shape.
        </p>
        <p className={`${styles.paragraph_styles} md:text-[1.3rem] lg:text-[1.3rem] text-[1rem]`}>
          In line with the above objective, we offer the below services and you can feel free to reach out to us for more details !
        </p>
        <div className={styles.circlesContainer}>
          <div className={styles.circles}>
            <div className={styles.first_circle}>
              <span> Treatment Planning </span>
            </div>
            <div className={styles.second_circle}>
              <span> Plan Fabrication </span>
            </div>
            <div className={styles.third_circle}>
              <span>
                Integrated Align 360
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 