"use client";
import React from "react";
import { useRouter } from 'next/navigation';
import styles from "./ConnectionFeatureSection.module.css";
import { getOrthoSyncUrl } from "@/services/auth.js";
import { toast } from "react-hot-toast";

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
  const handleCardClick = async (link) => {
    if (isLoggedIn) {
      // Check approval for all cards
      try {
        const response = await getOrthoSyncUrl();
        const url = response?.data?.orthosync_url || response?.url;
        const status = response?.data?.status;
        const message = response?.data?.message;
        // If not approved, show toast and do not navigate
        if (!url) {
          if (status === "failed" && message && message.toLowerCase().includes("admin approval required")) {
            toast.error("Synapse Admin Approval Required");
            return;
          } else if (status === "failed") {
            toast.error(message || "Unable to open OrthoSync. Please try again.");
            return;
          } else {
            toast.error("Synapse Admin Approval Required");
            return;
          }
        }
        // If approved, navigate as normal
        if (link === "/orthosync" && typeof onOrthoSyncClick === "function") {
          window.open(url, "_blank");
        } else {
          router.push(link);
        }
      } catch (err) {
        const errorMessage = err?.response?.data?.message || err?.message || "Something went wrong";
        toast.error(errorMessage);
      }
    } else {
      toast.error('Please sign in or register to access this feature.');
    }
  };

  return (
    <section className={styles.section}>
      <div style={{ textAlign: 'center' }}>
        <h2 className={styles.heading}>Where Care Meets Connection</h2>
        <p className={styles.subheading}>
          Our ecosystem of engagement that brings patients, doctors and care journeys closer than ever.
        </p>
      </div>
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
            <h3 className={styles.cardTitle}>{feature.title}</h3>
            <div className={styles.cardSubtitle}>{feature.subtitle}</div>
            <p className={styles.cardDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
