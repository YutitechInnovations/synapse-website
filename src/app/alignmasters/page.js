"use client";
import styles from './AlignMasters.module.css';
import Image from 'next/image';
import { useState } from 'react';
import ShareExperienceModal from './ShareExperienceModal';
import ClientOnly from "../../components/ClientOnly";
import Navbar from "../../components/navbar/Navbar.js";
import { useTestimonials } from '@/hooks/useTestimonials';

export default function AlignMasters() {
  const [modalOpen, setModalOpen] = useState(false);

  const { data, isLoading } = useTestimonials('');
  
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen w-full">
      <ClientOnly>
        <Navbar />
      </ClientOnly>
      <main className="w-full min-h-screen flex flex-col bg-[#F8FAF9]">
        {/* Hero Section */}
        <section className="w-full flex flex-col items-center justify-center px-4 md:px-8 bg-[#F8FAF9]">
          <h1 className={styles.heroHeading}>AlignMaster™</h1>
          <p className="text-base md:text-xl text-[#184C3A] mb-10 text-center max-w-2xl font-medium">
            Connect with fellow orthodontic professionals, share experiences, and learn from case studies in our global community.
          </p>
          {/* Tabs in pill-shaped container */}
          <div className={styles.tabContainer}>
            <button className={`${styles.tab} ${styles.selected}`}>Testimonials and Experiences</button>
            <button className={styles.tab}>Case Studies</button>
          </div>
        </section>
        {/* Community Testimonials Section */}
        <section className={styles.section}>
          <div className={styles.communityHeader}>
            <h2 className={styles.communityTitle}>Community Testimonials</h2>
            <button className={styles.shareBtn} onClick={() => setModalOpen(true)}>+ Share your Experience</button>
          </div>
          {/* Testimonial Cards */}
          <div className="flex flex-col gap-0">
            {/* Card 1 */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <Image src="/images/doc.jpg" alt="Dr. Ayushi" width={56} height={56} className={styles.avatar} />
                <div className={styles.cardHeaderText}>
                  <span className={styles.cardName}>Dr. Ayushi</span>
                  <span className={styles.cardRoleDate}>Customer Success Manager &bull; <span className={styles.cardDate}>26 Jan 2025</span></span>
                </div>
              </div>
              <div className={styles.cardContent}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisi, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
              </div>
              <div className={styles.actionRow}>
                <div className={styles.actionLeft}>
                  <button className={styles.actionBtn}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#184C3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 22h10a4 4 0 0 0 4-4v-5a4 4 0 0 0-4-4H5.34l1.13-5.63A2 2 0 0 0 4.5 2H4a2 2 0 0 0-2 2v12a4 4 0 0 0 4 4h1v2a2 2 0 0 0 2 2z" /></svg>
                    Like
                  </button>
                  <button className={styles.actionBtn}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#184C3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                    Comment
                  </button>
                </div>
                <div className={styles.actionRight}>
                  <button className={styles.actionBtn}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#184C3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
                    Share
                  </button>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <Image src="/images/doc.jpg" alt="Dr Harmeet Kour" width={56} height={56} className={styles.avatar} />
                <div className={styles.cardHeaderText}>
                  <span className={styles.cardName}>Dr Harmeet Kour</span>
                  <span className={styles.cardRoleDate}>Manager, Clinical & Education &bull; <span className={styles.cardDate}>26 Jan 2025</span></span>
                </div>
              </div>
              <div className={styles.cardContent}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span style={{ fontWeight: '600' }}>Etiam eu turpis molestie</span>, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. <span style={{ fontWeight: '600' }}>Maecenas eget condimentum velit</span>, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. <span style={{ fontWeight: '600' }}>Praesent auctor purus luctus enim egestas</span>, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisi, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
              </div>
              <Image src="/images/img_1.png" alt="Testimonial" width={420} height={120} className={styles.cardImage} />
              <div className={styles.actionRow}>
                <div className={styles.actionLeft}>
                  <button className={styles.actionBtn}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#184C3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 22h10a4 4 0 0 0 4-4v-5a4 4 0 0 0-4-4H5.34l1.13-5.63A2 2 0 0 0 4.5 2H4a2 2 0 0 0-2 2v12a4 4 0 0 0 4 4h1v2a2 2 0 0 0 2 2z" /></svg>
                    Like
                  </button>
                  <button className={styles.actionBtn}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#184C3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                    Comment
                  </button>
                </div>
                <div className={styles.actionRight}>
                  <button className={styles.actionBtn}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#184C3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
                    Share
                  </button>
                </div>
              </div>
            </div>
            {/* Card 3 (Video) */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <Image src="/images/doc.jpg" alt="Sujit Hota" width={56} height={56} className={styles.avatar} />
                <div className={styles.cardHeaderText}>
                  <span className={styles.cardName}>Sujit Hota</span>
                  <span className={styles.cardRoleDate}>COO & CMO &bull; <span className={styles.cardDate}>26 Jan 2025</span></span>
                </div>
              </div>
              <div className={styles.cardContent}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisi, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
              </div>
              <div className={styles.cardVideo} style={{ position: 'relative' }}>
                <Image src="/images/img_2.png" alt="Video testimonial" width={420} height={180} className={styles.cardImage} />
                <span className={styles.playIcon}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="14" r="14" fill="none" />
                    <path d="M11 9L19 14L11 19V9Z" fill="white" />
                  </svg>
                </span>
              </div>
              <div className={styles.actionRow}>
                <div className={styles.actionLeft}>
                  <button className={styles.actionBtn}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#184C3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 22h10a4 4 0 0 0 4-4v-5a4 4 0 0 0-4-4H5.34l1.13-5.63A2 2 0 0 0 4.5 2H4a2 2 0 0 0-2 2v12a4 4 0 0 0 4 4h1v2a2 2 0 0 0 2 2z" /></svg>
                    Like
                  </button>
                  <button className={styles.actionBtn}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#184C3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                    Comment
                  </button>
                </div>
                <div className={styles.actionRight}>
                  <button className={styles.actionBtn}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#184C3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
                    Share
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
      <ShareExperienceModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
} 