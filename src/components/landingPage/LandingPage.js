"use client";

import EngagementSection from "../home/engagement-section.js";
import FeatureSection from "../home/feature-section.js";
import HeroSection from "../home/hero-section.js";
import { default as Hero2 } from "../doctorLandingPage/HeroSection.js";
import { useState } from "react";
import Services from "../doctorLandingPage/Services.js";
import MissionNVision from "../doctorLandingPage/MissionNVision.js";
import Aboutus from "../doctorLandingPage/Aboutus.js";

export const LandingPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <>
      {isAdmin ? (
        <>
          <HeroSection />
          <FeatureSection />
          <EngagementSection />
        </>
      ) : (
        <>
          <Hero2 />
          <Services />
          <MissionNVision />
          <Aboutus />
        </>
      )}
    </>
  );
};
