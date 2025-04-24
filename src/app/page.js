import Navbar from "../components/navbar/Navbar.js";
import Footer from "../components/footer/Footer.js";

import { LandingPage } from "../components/landingPage/LandingPage.js";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen w-full">
      <Navbar />

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
