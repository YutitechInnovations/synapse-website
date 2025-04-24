import Image from "next/image";
import Navbar from "../components/navbar/Navbar.js";
import Footer from "../components/footer/Footer.js";
import FeatureSection from "@/components/home/feature-section.js";
import EngagementSection from "@/components/home/engagement-section.js";
import HeroSection from "@/components/home/hero-section.js";

export default function LandingPage() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen w-full">
      <Navbar />

      <main className="flex items-center justify-center pt-35 pb-12 px-4">
        {/* <HeroSection />
        <FeatureSection /> */}
        <EngagementSection />
        

       
      </main>

      <Footer />
    </div>
  );
}
