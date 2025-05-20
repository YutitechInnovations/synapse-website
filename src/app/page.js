import Navbar from "../components/navbar/Navbar.js";
import Footer from "../components/footer/Footer.js";
import HeroSection from "../components/doctorLandingPage/HeroSection.js";
import Services from "../components/doctorLandingPage/Services.js";
import Connection from "../components/doctorLandingPage/Connection.js";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen w-full">
      <Navbar />
      <main className="flex flex-col items-center justify-center">
        <HeroSection />
        <Services />
        <Connection />
      </main>
      <Footer />
    </div>
  );
}
