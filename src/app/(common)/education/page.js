"use client";

import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import styles from "./education.module.css";

export default function Education() {
  const insightCards = [
    {
      title: "Blogs",
      description: "Articles from our team to spark thought and conversation in oral care.",
      image: "/images/education-blogs1.png",
      link: "/blogs",
    },
    {
      title: "Materials & Data",
      description: "Access material safety data sheets (MSDS), technical specifications, and reference documents for clinical materials.",
      image: "/images/education-material1.png",
      link: "/materials",
    },
    {
      title: "Research Papers",
      description: "Summaries and access to relevant scientific literature that inform and validate clinical practices.",
      image: "/images/education-research1.png",
      link: "/research",
    },
    {
      title: "Patients' FAQs",
      description: "Clear, straightforward answers to common patient questions, designed to support clinician–patient communication.",
      image: "/images/education-faq1.png",
      link: "/faq",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF9]">
      <Navbar />
      <div
        className={`${styles.educationContainer} mt-24 sm:mt-32 md:mt-40 mb-20`}
      >
        <h2 className="text-[32px] md:text-[36px] lg:text-[38px] font-semibold text-[#004C44] mb-10 text-left mt-16">
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[50px] gap-y-[32px] ">
          {insightCards.map((card, index) => (
            <div
              key={index}
              className={`${styles.eduCard} w-full rounded-2xl shadow-md bg-white flex flex-col overflow-hidden`}
            >
              <Image
                src={card.image}
                width={595}
                height={380}
                alt={card.title}
                className="w-full h-[380px] object-cover rounded-t-2xl"
              />
              <div className="flex flex-col flex-1 justify-between p-6">
                <div>
                  <h3 className="text-xl font-bold text-[#004C44] mb-2">{card.title}</h3>
                  <p className="text-[#004C44] text-base mb-6">{card.description}</p>
                </div>
                <a href={card.link} className={`${styles.goLink} flex items-center text-[#00715D] font-semibold text-base hover:underline w-fit`}>
                  Go <span className="ml-1 text-lg">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
