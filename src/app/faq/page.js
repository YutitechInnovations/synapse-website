import FaqSection from "@/components/FAQ/FaqSection.js";
import Footer from "../../components/footer/Footer.js";
import Navbar from "../../components/navbar/Navbar.js";
import Head from 'next/head';

export default function FAQ() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen w-full">
      <Navbar />

      <main
        className="flex flex-col
      items-center justify-center"
      >
        <FaqSection />
      </main>

      <Footer />
    </div>
  );
}
