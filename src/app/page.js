import ClientOnly from "../components/ClientOnly";
import Navbar from "../components/navbar/Navbar.js";
import HeroSection from "../components/home/hero-section.js";
import ServicesOffered from "../components/home/ServicesOffered.js";
import PreLoginFeatureSection from "../components/home/PreLoginFeatureSection.js";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen w-full">
      <ClientOnly>
        <Navbar />
      </ClientOnly>
      <main className="flex flex-col items-center justify-center w-full px-2 sm:px-4 md:px-8 lg:px-16">
        <HeroSection />
        <ServicesOffered />
        <PreLoginFeatureSection />
      </main>
    </div>
  );
}
