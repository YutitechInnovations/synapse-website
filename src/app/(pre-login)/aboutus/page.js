import Aboutus from "../../../components/doctorLandingPage/Aboutus.js";
import MissionNVision from "../../../components/doctorLandingPage/MissionNVision.js";
import HeroSection from "../../../components/doctorLandingPage/HeroSection.js";
import Navbar from "../../../components/navbar/Navbar.js";

export default function About() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen w-full">
      <Navbar />

      <main
        className="flex flex-col
          items-center justify-center"
      >
        <HeroSection />
        <MissionNVision />
        <Aboutus />
      </main>
    </div>
  );
}
