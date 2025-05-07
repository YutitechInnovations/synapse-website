import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full hero-section">
      {/* Background Image */}
      <div className="absolute w-full min-h-[200px] h-[40vw] max-h-[44rem]">
        <img
          src="/images/landingPage.png"
          className="w-full h-full object-cover object-top opacity-50"
          alt="Landing Page"
        />
      </div>
      {/* Content */}
      <div className="relative min-h-[200px] h-[40vw] max-h-[44rem] flex flex-col items-start justify-center pt-8 md:pt-20 px-2 sm:px-4 md:px-8 lg:px-16">
        <div className="max-w-2xl w-full">
          <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-[2.875rem] font-semibold mb-3 md:mb-6 leading-tight">
            Bridging Technology and<br />Expertise in Orthodontics
          </h1>
          <p className="font-medium text-xs sm:text-base md:text-xl mb-3 md:mb-6">
            Synapse revolutionizes orthodontic care with advanced technology
            solutions, connecting practitioners with innovative tools for superior patient outcomes.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-6 w-full">
            <Link href="/orthosynce">
              <button className="btn-primary cmnbtn w-full sm:w-auto">Access OrthoSync</button>
            </Link>
            <Link href="/smile-analysis">
              <button variant="outline" className="cmnbtn btn-outline w-full sm:w-auto">
                Try Smile Analysis
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
