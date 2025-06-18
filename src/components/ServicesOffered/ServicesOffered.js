"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ServicesOffered.module.css";

const ServiceCircle = () => {
  const [active, setActive] = useState(null);
  const circlesRef = useRef(null);

  const descriptions = {
    planning: {
      title: "Aligner Treatment Planning",
      text: `Every great aligner outcome begins with a precise plan.\n
With our proprietary RₓF.O.R.C.E™ philosophy, we engineer treatment plans that deliver the right force at the right time—leveraging material behaviour and thickness control to gently and accurately guide each tooth. Whether you choose smart memory or thermoformed aligners, every stage is personalized for predictable, patient-friendly movement.`,
    },
    fabrication: {
      title: "Plan Fabrication",
      text: `A well-crafted plan deserves world-class execution.\n 
      We bring your approved plans to life with precision fabrication powered by advanced 3D printing systems and consumables sourced from the USA, Germany, and Korea. With full transparency—from material selection to dispatch tracking—you stay informed and in control at every stage.`,
    },
    integrated: {
      title: "Integrated Align 360",
      text: [
        "Planning and manufacturing are just the beginning. Complete the circle with connected care.",
        "We help extend the impact of your care with integrated engagement tools designed to keep both you and your patients connected.",
      ],
      bullets: [
        "OrthoSync™ streamlines treatment management at your fingertips.",
        "RxTrack™ ensures real-time patient compliance and motivation.",
        "Our Personal Branding services* puts your identity front and center—boosting visibility, building trust, and helping your practice grow.",
      ],
      footnote: "* Basis pre-defined criteria for selection",
    },
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is within any of the circles
      const isClickInCircle = event.target.closest(`.${styles.first_circle}, .${styles.second_circle}, .${styles.third_circle}`);
      
      if (!isClickInCircle) {
        setActive(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Synapse – Services Offered</h2>

        <p className={styles.paragraph_styles}>
          Our range of services are designed to support your practice, enhance
          patient journeys, and empower every smile you shape.
        </p>
        <p className={styles.paragraph_styles}>
          In line with the above objective, we offer the below services and you
          can feel free to reach out to us for more details!
        </p>
        <p className={styles.paragraph_styles}>
          <b>Click on the dots to know more.</b>
        </p>

        <div className={styles.circlesContainer} ref={circlesRef}>
          <div className={styles.circles}>
            <div 
              className={styles.third_circle}
              onClick={() => setActive(active === "integrated" ? null : "integrated")}
            >
              <div className={styles.dot} />
              <span>Integrated Align 360</span>
              {active === "integrated" && (
                <div
                  className={`${styles.descriptionCard} ${styles.cardIntegrated}`}
                >
                  {descriptions.integrated.text.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}

                  <ul className={styles.bulletList}>
                    {descriptions.integrated.bullets.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>

                  <p className={styles.footnote}>
                    {descriptions.integrated.footnote}
                  </p>
                </div>
              )}
            </div>

            <div 
              className={styles.second_circle}
              onClick={() => setActive(active === "fabrication" ? null : "fabrication")}
            >
              <div className={styles.dot} />
              <span>Plan Fabrication</span>
              {active === "fabrication" && (
                <div
                  className={`${styles.descriptionCard} ${styles.cardFabrication}`}
                >
                  <p>{descriptions.fabrication.text}</p>
                </div>
              )}
            </div>

            <div 
              className={styles.first_circle}
              onClick={() => setActive(active === "planning" ? null : "planning")}
            >
              <div className={styles.dot} />
              <span>
                {" "}
                Aligner Treatment
                <br />
                Planning
              </span>
              {active === "planning" && (
                <div
                  className={`${styles.descriptionCard} ${styles.cardPlanning}`}
                >
                  <p>{descriptions.planning.text}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCircle;
