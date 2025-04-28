import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <div className="absolute w-full h-[664px]">
        <image
          src="/images/landingPage.png"
          className="h-[664px]"
          alt="Landing Page"
        />
      </div>
      {/* Content */}
      <div className="relative h-[664px] flex items-start justify-start pt-42 px-25">
        <div className="max-w-2xl">
          <h1 className="text-[46px] font-semibold mb-6">
            Bridging Technology and
            <br />
            Expertise in Orthodontics
          </h1>
          <p className="font-medium text-xl mb-6">
            Synapse revolutionizes orthodontic care with advanced technology
            solutions, connecting practitioners with <br />
            innovative tools for superior patient outcomes.
          </p>

          <div className="flex flex-wrap gap-6">
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
