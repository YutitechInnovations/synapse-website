import React from "react";
import Image from "next/image";

const team = [
  {
    name: "Sujit Hota",
    title: "CEO & Co-Founder",
    description: "IIM C Alum (>25 years of dental industry experience)",
    image: "/images/sujit.png",
  },
  {
    name: "Prabakar KP",
    title: "COO & Co-Founder",
    description: "IIML Alum (>15 years of dental + software experience)",
    image: "/images/prabhakar.png",
  },
  {
    name: "Dr Harmeet Kaur",
    title: "Manager, Clinical & Education",
    description: "Orthodontist (>8 years of experience)",
    image: "/images/harmeet.png",
  },
  {
    name: "Dr Ayushi",
    title: "Customer Success Manager",
    description: "Orthodontist (>3 years of experience)",
    image: "/images/ayushi.png",
  },
];

const Aboutus = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-0 text-[#184C3A]"
        style={{ marginTop: 100, marginLeft: 176, marginRight: 176 }}
      >
        Synapse Core Team
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full"
        style={{ marginTop: 50, marginLeft: 100, marginRight: 100, marginBottom: 100 }}
      >
        {team.map((member, idx) => (
          <div key={idx} className="flex flex-row items-center bg-white border border-[#184C3A] rounded-2xl p-8 min-h-[240px] shadow-sm">
            <div className="flex-shrink-0">
              <Image
                src={member.image}
                alt={member.name}
                width={140}
                height={140}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="ml-8 flex flex-col justify-center">
              <div className="text-[#184C3A] text-xl md:text-2xl font-bold mb-1">{member.name}</div>
              <div className="text-[#184C3A] text-lg font-bold mb-1">{member.title}</div>
              <div className="text-[#184C3A] text-base font-normal">{member.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Aboutus;
