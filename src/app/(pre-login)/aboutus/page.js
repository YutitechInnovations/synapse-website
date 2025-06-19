import Navbar from "../../../components/Navbar/Navbar.js";
import styles from "./aboutus.module.css";
import React from "react";
import Image from "next/image";

const team = [
  {
    name: "Sujit Hota",
    title: "CEO & Co-Founder",
    description: "IIM C Alum",
    experience: "(>25 years of dental industry experience)",
    image: "/images/sujit.png",
  },
  {
    name: "Prabakar KP",
    title: "COO & Co-Founder",
    description: "IIML Alum ",
    experience: "(>15 years of dental industry + software experience)",
    image: "/images/prabhakar.png",
  },
  {
    name: "Dr Harmeet Kaur",
    title: "Manager, Clinical & Education",
    description: "MDS (Orthodontics)",
    experience: "(> 8 years of experience)",
    image: "/images/harmeet.png",
  },
  {
    name: "Dr Ayushi Roy Chowdhury",
    title: "Customer Success Manager",
    description: "MDS (Orthodontics)",
    experience: "(> 3 years of experience)",
    image: "/images/ayushi.png",
  },
];

let items = [
  {
    title: "Vision",
    description:
      "To elevate clinical practices through personalized care solutions that enhance every patient journey.",
    image: "/images/aboutus-vision.png",
  },
  {
    title: "Mission",
    description:
      "Our purpose is to empower dental professionals with evidence-based, personalized solutions that streamline clinical workflows, support continuous learning, and enhance patient outcomes through every stage of care.",
    image: "/images/aboutus-mission.png",
  },
];

const ZigZagCard = ({ items }) => {
  return (
    <div className="card flex flex-col card-p-0 overflow-hidden card-gap-0 rounded-t-[1.25rem] w-full max-w-[1240px] mx-auto">
      {items?.map((item, index) => {
        const isOdd = (index + 1) % 2 !== 0;
        return (
          <div
            key={index}
            className={`w-full flex flex-col ${
              isOdd ? "md:flex-row" : "md:flex-row-reverse"
            } justify-end h-auto md:min-h-[16rem] md:h-[22rem] ${
              index + 1 !== items.length ? "border-b border-[#004C4480]" : ""
            } overflow-hidden`}
          >
            <div className="w-full flex flex-col gap-4 md:gap-6 justify-center items-start px-4 md:px-8 lg:px-10">
              <h2 className="font-semibold text-xl md:text-2xl lg:text-4xl text-left">
                {item.title}
              </h2>
              <p className="text-left text-sm md:text-base lg:text-xl font-normal">
                {item.description}
              </p>
            </div>
            <div className="md:w-1/2 lg:w-[30%] h-[16rem] md:h-full flex items-center justify-center relative">
              <div className="relative w-full h-full">
                <Image
                  src={item.image}
                  fill
                  style={{ objectFit: "cover" }}
                  alt={item.title}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default function About() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen w-full">
      <Navbar />
      <section className={styles.heroSection}>
        <div className="px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl w-full">
            <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-[2.875rem] font-semibold mb-3 md:mb-6 leading-tight">
              About Us
            </h1>
            <p className={`font-medium w-full text-left text-xs sm:text-base md:text-xl mb-3 md:mb-6 ${styles.heroSectionText}`}>
              We are a multidisciplinary team with experience across oral care, medical solutions, clinical operations and process improvement. Our work is grounded in strong fundamentals, combining biomechanical understanding with evidence-based practices to deliver personalized and effective solutions for our customers. In every offering, we aim to support our customers with reliable tools that is tailored to individual patient needs and physiology.<br/>
              Together with clinicians, we strive to make oral care more thoughtful, precise, and human — always keeping the patient&apos;s well-being at the heart of everything we do.</p>
          </div>
        </div>
      </section>{" "}
      <section className="w-full">
        <div className="w-full flex flex-col bg-[#F6F6F3] items-center justify-center py-8 md:py-12 lg:py-16">
          <ZigZagCard items={items} />
        </div>
      </section>{" "}
      <section className="w-full flex flex-col items-center justify-center bg-white">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-0 text-[#184C3A] mt-[40px] max-w-4xl mx-auto px-4">
          Synapse Core Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-[1240px] mx-auto px-2 md:px-0 mt-[32px] mb-[60px]">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-center bg-white border border-[#184C3A] rounded-2xl p-4 md:p-8 min-h-[240px] shadow-sm w-full"
            >
              <div className="flex-shrink-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={100}
                  height={100}
                  className="rounded-lg object-cover w-24 h-24 md:w-[140px] md:h-[140px]"
                />
              </div>
              <div className="mt-4 md:mt-0 ml-0 md:ml-8 flex flex-col justify-center w-full">
                <div className="text-[#184C3A] text-xl md:text-2xl font-[600] mb-1">
                  {member.name}
                </div>
                <div className="text-[#184C3A] text-lg font-[600] mb-1">
                  {member.title}
                </div>
                <div className="text-[#184C3A] text-base font-[400]">
                  {member.description}
                  <br />
                  <span>{member.experience}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>{" "}
    </div>
  );
}
