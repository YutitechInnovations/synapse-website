"use client";
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './ConnectionFeatureSection.module.css';
import RxTrackLogo from '../svg/rxTrack';

const features = [
  {
    title: 'OrthoSync™',
    subtitle: 'Aligner Treatment Management',
    description:
      'A powerful tool for doctors to manage the entire aligner journey—from case uploads and plan approvals to phased shipments and retainer tracking. Kindly login to access the same.',
    link: '/orthosync',
  },
  {
    title: 'RₓTrack™',
    subtitle: 'Patient Engagement Solution',
    description:
      'Motivate patients with a smart rewards system that tracks compliance - after all better habits lead to better outcomes. Kindly login to access the same.',
    link: '/rxtrack',
  },
  {
    title: 'AlignMasters™',
    subtitle: 'Community Engagement Platform',
    description:
      'An exclusive space for orthodontists to ask, share, and learn—upload cases, exchange insights, and grow together. Kindly login to access the same.',
    link: '/alignmasters',
  },
];

export default function ConnectionFeatureSection({ isLoggedIn, onOrthoSyncClick }) {
  const router = useRouter();
  const handleCardClick = (link) => {
    if (isLoggedIn) {
      if (link === '/orthosync' && onOrthoSyncClick) {
        onOrthoSyncClick();
      } else {
        router.push(link);
      }
    }
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Where Care Meets Connection</h2>
      <p className={styles.subheading}>
        Our ecosystem of engagement that brings patients, doctors and care journeys closer than ever.
      </p>
      <div className={styles.grid}>
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={styles.card}
            onClick={() => handleCardClick(feature.link)}
            tabIndex={0}
            role="button"
            onKeyPress={e => { if (e.key === 'Enter') handleCardClick(feature.link); }}
          >
            <div className={styles.pill}>
              {feature.title === 'OrthoSync™' && (
                <span className={styles.pillText}>OrthoSync</span>
              )}
              {feature.title === 'RₓTrack™' && (
                <RxTrackLogo />
              )}
              {feature.title === 'AlignMasters™' && (
                <Image src={"/images/align.png"} alt={feature.title} width={120} height={40} className="object-contain" />
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