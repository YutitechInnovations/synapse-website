"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import styles from "./ConnectionFeatureSection.module.css";
import { getOrthoSyncUrl } from "@/services/auth.js";
import { RxTrackIcon } from "@/theme/icons";

const features = [
  {
    title: "OrthoSync™",
    subtitle: "Aligner Treatment Management",
    description:
      "A powerful tool for doctors to manage the entire aligner journey—from case uploads and plan approvals to phased shipments and retainer tracking. Kindly login to access the same.",
    link: "/orthosync",
  },
  {
    title: "RₓTrack™",
    subtitle: "Patient Engagement Solution",
    description:
      "Motivate patients with a smart rewards system that tracks compliance - after all better habits lead to better outcomes. Kindly login to access the same.",
    link: "/rxtrack",
  },
  {
    title: "AlignMasters™",
    subtitle: "Community Engagement Platform",
    description:
      "An exclusive space for orthodontists to ask, share, and learn—upload cases, exchange insights, and grow together. Kindly login to access the same.",
    link: "/alignmasters",
  },
];

export default function ConnectionFeatureSection({
  isLoggedIn,
  onOrthoSyncClick,
}) {
  const router = useRouter();
  const handleOrthoSync = async () => {
    try {
      const response = await getOrthoSyncUrl();
      const url = response?.data?.orthosync_url || response?.url;
      const status = response?.data?.status;
      const message = response?.data?.message;

      if (url) {
        window.open(url, "_blank");
      } else {
        if (status === "failed") {
          toast.error(message || "Unable to open OrthoSync. Please try again.");
        } else {
          toast.error("OrthoSync URL not available.");
        }
      }
    } catch (err) {
      console.log(err);
      const errorMessage =
        err?.response?.data?.message || err?.message || "Something went wrong";
    }
  };
  const handleCardClick = (link) => {
    if (isLoggedIn) {
      if (link === "/orthosync" && typeof onOrthoSyncClick === "function") {
        handleOrthoSync();
      } else {
        router.push(link);
      }
    } else {
      router.push("/login");
      localStorage.setItem(
        "redirectUrl",
        link === "/orthosync" ? "/orthosync" : link
      );
    }
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Where Care Meets Connection</h2>
      <p className={styles.subheading}>
        Our ecosystem of engagement that brings patients, doctors and care
        journeys closer than ever.
      </p>
      <div className={styles.grid}>
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={styles.card}
            onClick={() => handleCardClick(feature.link)}
            tabIndex={0}
            role="button"
            onKeyPress={(e) => {
              if (e.key === "Enter") handleCardClick(feature.link);
            }}
          >
            <div className={styles.pill}>
              {feature.title === "OrthoSync™" && (
                <div className={styles.pillInner}>
                  <Image
                    src="/images/orthosync.png"
                    alt={feature.title}
                    width={120}
                    height={40}
                    className={styles.pillImage}
                  />
                </div>
              )}
              {feature.title === "RₓTrack™" && (
                <div className={styles.pillInner}>
                  <RxTrackIcon className={styles.pillLogo} />
                </div>
              )}
              {feature.title === "AlignMasters™" && (
                <div className={styles.pillInner}>
                  <Image
                    src="/images/align.png"
                    alt={feature.title}
                    width={120}
                    height={40}
                    className={styles.pillImage}
                  />
                </div>
              )}
            </div>
            <h3 className={styles.cardTitle}>{feature.title}</h3>
            <div className={styles.cardSubtitle}>{feature.subtitle}</div>
            <p className={styles.cardDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
