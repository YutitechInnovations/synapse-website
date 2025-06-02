import Image from 'next/image';
import Link from 'next/link';
import styles from './aligners.module.css';

export default function Aligners() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        {/* Background Image */}
        <div className="absolute w-full min-h-[200px] h-[40vw] max-h-[44rem]">
          <Image
            src="/images/back1.jpg"
            fill
            className="w-full h-full object-cover object-center"
            alt="Aligner Hero Background"
            priority
          />
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-white/60" />
        </div>
        {/* Content */}
        <div className={styles.heroContent}>
          <div className="max-w-3xl w-full">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[#184C3A]">
              R<sub className="text-base align-super">x</sub>.F.O.R.C.E™
            </h1>
            <p className="text-base md:text-xl font-medium text-[#184C3A]">
              Orthodontic treatment is most effective when it&apos;s biomechanically intelligent. That&apos;s the idea behind R<sub className="text-base align-super">x</sub>.F.O.R.C.E™ — <span className="italic">our Force Optimized Responsive Corrective Engine</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Smart Force Section */}
      <section className={styles.centerSection}>
        <div className={styles.centerContent}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#195B48]">
            Smart Force, Thoughtfully Applied
          </h2>
          <p className="text-lg md:text-xl text-[#195B48]">
            R<sub className="text-base align-super">x</sub>.F.O.R.C.E™ applies the right force at the right time by adjusting material behavior and thickness stage by stage. It&apos;s a precision-driven philosophy designed to guide each tooth gently and effectively, ensuring consistency, control, and reduced need for refinements.
          </p>
          <p className="text-lg md:text-xl text-[#195B48]">
            The result? Improved predictability and better outcomes—from straightforward alignments to complex cases.
          </p>
        </div>
      </section>

      {/* BioSmart Systems Section */}
      <section className="w-full flex justify-center mt-[100px] mb-[100px]">
        <div className="w-full max-w-[1082px] flex flex-col items-center px-2 sm:px-4 md:px-8 lg:px-0">
          <h2 className="text-3xl md:text-4xl font-bold text-[#195B48] text-center mb-4">
            BioSmart™ Systems: Powered by <span className="font-bold">R<sub className="text-base align-super">x</sub>.F.O.R.C.E<sup className="text-base">™</sup></span>
          </h2>
          <p className="text-lg text-[#195B48] text-center mb-10">
            Click on the system that fits your treatment philosophy to know more
          </p>
          {/* Cards Row */}
          <div className={styles.cardsRow}>
            <Link href="/aligners-biosmart-sm" className="flex-1">
              <div className={styles.card}>
                <div className="text-2xl font-bold text-[#195B48] mb-2 text-center">BioSmart™ SM</div>
                <div className="text-base font-semibold text-[#195B48] text-center">Our Shape Memory Aligner Option</div>
            </div>
            </Link>
            <Link href="/aligners-biosmart-t" className="flex-1">
              <div className={styles.card}>
                <div className="text-2xl font-bold text-[#195B48] mb-2 text-center">BioSmart™ T</div>
                <div className="text-base font-semibold text-[#195B48] text-center">Our Thermoformed Aligner Option</div>
            </div>
            </Link>
          </div>
          {/* Variant Container */}
          <div className={styles.variantContainer}>
            <div className={styles.variantText}>
              <p className="text-xl text-[#195B48] mb-4">
                And each system is available in three variants tailored<br />
                to case complexity:
              </p>
              <ul className="text-lg text-[#195B48] list-disc pl-6">
                <li><span className="font-bold">RxLight</span> – For mild to moderate cases</li>
                <li><span className="font-bold">RxPro</span> – For moderate to advanced corrections</li>
                <li><span className="font-bold">RxPro+</span> – For complex, multi-phase treatments</li>
              </ul>
            </div>
            <div className={styles.variantImage}>
              <Image
                src="/images/rxf.png"
                alt="Doctor with aligner"
                fill
                className="object-cover object-center rounded-r-[20px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 