"use client";

import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import styles from "./education.module.css";

export default function Education() {
  const insightCards = [
    {
      title: "Blogs",
      description: "Articles from our team to spark thought and conversation in oral care.",
      image: "/images/education-blogs.png",
      link: "/blogs",
    },
    {
      title: "Materials & Data",
      description: "Access material safety data sheets (MSDS), technical specifications, and reference documents for clinical materials.",
      image: "/images/education-material.png",
      link: "/materials",
    },
    {
      title: "Research Papers",
      description: "Summaries and access to relevant scientific literature that inform and validate clinical practices.",
      image: "/images/education-research.png",
      link: "/research",
    },
    {
      title: "Patients' FAQs",
      description: "Clear, straightforward answers to common patient questions, designed to support clinician–patient communication.",
      image: "/images/education-faq.png",
      link: "/faq",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF9]">
      <Navbar />
      <div
        className={`${styles.educationContainer} mt-16 sm:mt-24 md:mt-36 mb-20`}
        style={{ background: "#F6F6F3", borderRadius: "20px" }}
      >
        <h2 className="text-[32px] md:text-[36px] lg:text-[38px] font-semibold text-[#004C44] mb-10 text-left">
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[50px] gap-y-[32px] ">
          {insightCards.map((card, index) => (
            <a
              key={index}
              href={card.link}
              className={`${styles.cardLink} group relative w-full rounded-[20px] overflow-hidden shadow-lg bg-white cursor-pointer transition-transform hover:scale-[1.02]`}
            >
              <Image
                src={card.image}
                width={595}
                height={448}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Gradient overlay for text visibility */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/90 to-transparent z-10" />
              <div className="absolute bottom-8 left-8 z-20 max-w-[80%]">
                <h3 className="text-[28px] font-bold text-[#004C44] drop-shadow-none mb-2">
                  {card.title}
                </h3>
                <p className="text-[#004C44] text-sm md:text-base">
                  {card.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
