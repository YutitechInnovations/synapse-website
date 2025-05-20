export default function ComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#004C44] to-[#195B48]">
      <div className="text-center text-white p-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Coming Soon</h1>
        <p className="text-xl md:text-2xl mb-8">We&apos;re working hard to bring you something amazing!</p>
        <div className="animate-pulse">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full mx-auto animate-spin"></div>
        </div>
      </div>
    </div>
  );
} 