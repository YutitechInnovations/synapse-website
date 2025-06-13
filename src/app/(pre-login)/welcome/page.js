import ClientOnly from "../../../components/ClientOnly";
import Navbar from "../../../components/navbar/Navbar.js";
import ServicesOffered from "../../../components/home/ServicesOffered.js";
import ConnectionFeatureSection from "../../../components/home/ConnectionFeatureSection";
import styles from "./hero-section.module.css"

export const metadata = {
  title: "Synapse",
  description: "Synapse - Your Orthodontic Connection",
  icons: {
    icon: "/tabIcon.png",
  },
};

export default function Welcome() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen w-full">
      <ClientOnly>
        <Navbar />
      </ClientOnly>
      <section className={`${styles.heroSection} hidden md:block pt-[4rem]`}>
        <div className={`container ${styles.heroContent}`}>
          <div className="max-w-5xl w-full">
            <h1 className="text-2xl sm:text-[2.25rem] md:text-[2.875rem] lg:text-[2.875rem] font-semibold mb-6 leading-tight text-[#004C44]">
              Designed for the
              <br />
              Smiles You Shape
            </h1>
            <p className="text-base md:text-[1.25rem] lg:text-[1.25rem] font-medium text-justify text-[#004C44]">
              At Synapse, biomechanical insights and personalized workflows
              <br />
              come together to support your clinical precision and elevate
              <br />
              every treatment journey.
              <br />
              From meticulous treatment planning to diligent manufacturing,
              <br />
              each solution is crafted for comfort, control, and optimal
              <br />
              outcomes. Backed by the latest in 3D technology, our partnership
              <br />
              is built around your expertise—and every smile you help create.
            </p>
          </div>
        </div>
      </section>

      {/* Mobile view (sm and below) */}
      <section
        className={`${styles.heroSection} block md:hidden px-4 pt-[6rem]`}
      >
        <div className="max-w-lg mx-auto text-left">
          <h1 className="text-2xl font-bold mb-4 text-[#004C44]">
            Designed for the Smiles You Shape
          </h1>
          <p className="text-base font-medium text-[#004C44] leading-relaxed">
            At Synapse, biomechanical insights and personalized workflows come
            together to support your clinical precision and elevate every
            treatment journey. From treatment planning to manufacturing, each
            solution is crafted for comfort and control. Backed by the latest in
            3D technology, our partnership is built around your expertise—and
            every smile you help create.
          </p>
        </div>
      </section>

      <ServicesOffered />
      <ConnectionFeatureSection isLoggedIn={false} />
    </div>
  );
}
