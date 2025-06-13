import FaqSection from "@/components/FAQ/FaqSection.js";
import Navbar from "../../../components/navbar/Navbar.js";

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
    </div>
  );
}
