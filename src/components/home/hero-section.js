import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <div className="absolute w-full min-h-[200px] h-[40vw] max-h-[44rem]">
        <img
          src="/images/landingPage.png"
          className="w-full h-full object-cover object-top opacity-50"
          alt="Landing Page"
        />
      </div>
      {/* Content */}
      <div className="relative min-h-[200px] h-[40vw] max-h-[44rem] flex items-start justify-start pt-10 md:pt-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-2xl">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-[2.875rem] font-semibold mb-4 md:mb-6">
            Bridging Technology and<br />Expertise in Orthodontics
          </h1>
          <p className="font-medium text-sm sm:text-base md:text-xl mb-4 md:mb-6">
            Synapse revolutionizes orthodontic care with advanced technology
            solutions, connecting practitioners with innovative tools for superior patient outcomes.
          </p>

          <div className="flex flex-wrap gap-4 md:gap-6">
            <Link href="/orthosynce">
              <button className="btn-primary cmnbtn">Access OrthoSync</button>
            </Link>
            <Link href="/smile-analysis">
              <button variant="outline" className="cmnbtn btn-outline">
                Try Smile Analysis
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
