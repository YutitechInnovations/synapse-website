import ClientOnly from "../components/ClientOnly";
import Navbar from "../components/navbar/Navbar.js";
import Footer from "../components/footer/Footer.js";

import HeroSection from "../components/doctorLandingPage/HeroSection.js";
import Services from "../components/doctorLandingPage/Services.js";
import MissionNVision from "../components/doctorLandingPage/MissionNVision.js";
import Aboutus from "../components/doctorLandingPage/Aboutus.js";
import { LandingPage } from "../components/landingPage/LandingPage.js";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen w-full">
      <ClientOnly>
        <Navbar />
      </ClientOnly>

      <main
        className="flex flex-col
      items-center justify-center"
      >
        <LandingPage />
      </main>

      <Footer />
    </div>
  );
}
