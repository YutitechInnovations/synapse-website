import ClientOnly from "../components/ClientOnly";
import Navbar from "../components/navbar/Navbar.js";
import HeroSection from "../components/home/hero-section.js";
import ServicesOffered from "../components/home/ServicesOffered.js";
import ConnectionFeatureSection from '../components/home/ConnectionFeatureSection';


export const metadata = {
  title: "Synapse",
  description: "Synapse - Your Orthodontic Connection",
};

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen w-full">
      <ClientOnly>
        <Navbar />
      </ClientOnly>
      <main className="flex flex-col items-center justify-center w-full">
        <HeroSection />
        <ServicesOffered />
        <ConnectionFeatureSection isLoggedIn={false} />
      </main>
    </div>
  );
}
