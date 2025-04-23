
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3845766/pexels-photo-3845766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] 
          bg-cover bg-center"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-14 md:py-20">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Bridging Technology and<br />Expertise in Orthodontics
          </h1>
          <p className="text-white mb-8 max-w-lg text-lg">
            Synapse revolutionizes orthodontic care with advanced 
            technology solutions, connecting practitioners with 
            innovative tools for superior patient outcomes.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/orthosynce">
              <button className="bg-white hover:bg-gray-100 text-purple-900 rounded-md">
                Access OrthoSync
              </button>
            </Link>
            <Link href="/smile-analysis">
              <button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-purple-900 rounded-md"
              >
                Try Smile Analysis
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
