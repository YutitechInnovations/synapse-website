import Image from "next/image";
import Link from "next/link";
import styles from "./aligners.module.css";
import DoctorAligner from "../../assets/rxf.png";

export default function Aligners() {
  return (
    <>
      {/* Hero Section */}
      <section className={`${styles.heroSection} mt-12 md:mt-0 `}>
        {/* Content */}
        <div className={`container w-full ${styles.heroContent} `}>
          <div className="max-w-3xl w-full">
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-[600] mb-6 leading-tight text-[#184C3A]">
              R<sub className="text-base font-[600] align-super">x</sub>
              .F.O.R.C.E™
            </h1>
            <p className=" text-[1rem] md:text-xl font-[400] text-[#184C3A]">
              Orthodontic treatment is most effective when it&apos;s
              biomechanically intelligent. That&apos;s the idea behind R
              <sub className="text-base align-super">x</sub>.F.O.R.C.E™ —{" "}
              <span className="italic">
                our Force Optimized Responsive Corrective Engine
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Smart Force Section */}
      <section className={styles.centerSection}>
        <div className={styles.centerContent}>
          <h2 className="text-4xl text-center md:text-5xl lg:text-[2rem]  font-[600] text-[#195B48]">
            Smart Force, Thoughtfully Applied
          </h2>
          <p className="text-[1rem] lg:text-[1.1rem] text-justify md:text-xl text-[#195B48]">
            R<sub className="text-base align-super">x</sub>.F.O.R.C.E™ applies
            the right force at the right time by adjusting material behavior and
            thickness stage by stage. It&apos;s a precision-driven philosophy
            designed to guide each tooth gently and effectively, ensuring
            consistency, control, and reduced need for refinements.
          </p>
          <p className="text-[1rem] lg:text-[1.1rem] text-justify md:text-xl text-[#195B48]">
            The result? Improved predictability and better outcomes—from
            straightforward alignments to complex cases.
          </p>
        </div>
      </section>

      {/* BioSmart Systems Section */}
      <section className="w-full bg-white my-14">
        <div>
          <div className="w-full flex justify-center items-center text-center flex-col px-2 sm:px-4 md:px-8 lg:px-0">
            <h2 className="text-3xl md:text-4xl font-[600] text-[#195B48] text-left mb-4">
              BioSmart™ Systems: Powered by{" "}
              <span className="font-[600]">
                R<sub className="text-base align-super">x</sub>.F.O.R.C.E
                <sup className="text-base">™</sup>
              </span>
            </h2>
            <p className="text-lg text-[#195B48] mt-3 font-[400] mb-10">
              Our aligner systems are available in two options depending on your
              treatment philosophy – click on each of the systems to know more.
            </p>
            {/* Variant Container */}
            {/* <div className={styles.variantContainer}>
            <div className={styles.variantText}>
              <p className="text-lg text-[#195B48] mb-4">
                And each system is available in three variants tailored
                <br />
                to case complexity:
              </p>
              <ul className="text-lg text-[#195B48] list-disc pl-6">
                <li>
                  <span className="font-[400]">RxLight</span> – For mild to
                  moderate cases
                </li>
                <li>
                  <span className="font-[400]">RxPro</span> – For moderate to
                  advanced corrections
                </li>
                <li>
                  <span className="font-[400]">RxPro+</span> – For complex,
                  multi-phase treatments
                </li>
              </ul>
            </div>
            <div className={styles.variantImage}>
              <Image
                src={DoctorAligner}
                alt="Doctor with aligner"
                fill
                className="object-cover object-center md:rounded-r-[20px]"
              />
            </div>
          </div> */}
          </div>
          <div className={styles.cardsRow}>
            <Link href="/aligners-biosmart-sm" className="flex-1">
              <div className={styles.card}>
                <div className="text-[1.4rem] font-[600] text-[#195B48] mb-4 text-center">
                  BioSmart™ SM
                </div>
                <div className="text-[.9rem] font-semibold text-[#195B48] text-center">
                  Our Shape Memory Aligner Option
                </div>
              </div>
            </Link>
            <Link href="/aligners-biosmart-t" className="flex-1">
              <div className={styles.card}>
                <div className="text-[1.4rem] font-[600] text-[#195B48] mb-4 text-center">
                  BioSmart™ T
                </div>
                <div className="text-[.9rem] font-semibold text-[#195B48] text-center">
                  Our Thermoformed Aligner Option
                </div>
              </div>
            </Link>
          </div>
          <div className="mt-8 flex justify-center items-center px-4 md:px-8 lg:px-0 mb-[100px]">
            <Image 
              src="/images/image37.png" 
              alt="Aligners Overview"
              width={1240}
              height={606}
              className="w-full h-auto rounded-[20px] max-w-[1240px] object-cover"
              style={{ height: 'auto', maxHeight: '606px' }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
