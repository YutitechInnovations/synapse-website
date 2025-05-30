import Image from 'next/image';

export default function AlignMasters() {
  const testimonials = [
    {
      name: 'Dr. Ayushi',
      role: 'Customer Success Manager',
      date: '26 Jan 2025',
      avatar: '/avatars/ayushi.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Present auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, ut tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
      image: null,
      video: null
    },
    {
      name: 'Dr Harmeet Kaur',
      role: 'Manager, Clinical & Education',
      date: '26 Jan 2025',
      avatar: '/avatars/harmeet.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Present auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, ut tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
      image: '/images/img_1.png',
      video: null
    },
    {
      name: 'Sujit Hota',
      role: 'CEO & MD',
      date: '26 Jan 2025',
      avatar: '/avatars/sujit.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Present auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, ut tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
      image: '/images/img_2.png',
      video: null
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF9]">
      {/* Header */}
      <div className="w-full max-w-4xl mx-auto pt-[205px] pb-4 px-4">
        <h1 className="text-[40px] md:text-[48px] font-bold text-center text-[#184C3A] mb-6">AlignMaster™</h1>
        <p className="text-center text-[#184C3A]/80 text-[20px] mb-12 max-w-[700px] mx-auto font-medium leading-snug">
          Connect with fellow orthodontic professionals, share experiences, and learn from case studies in our global community.
        </p>
        {/* Tabs Row */}
        <div className="flex flex-1 justify-center md:justify-center mb-6">
          <div className="flex w-[724px] h-[70px] bg-[#F6F6F3] border border-[#E0E0E0] rounded-[20px] p-[10px] gap-[10px] shadow-sm items-center justify-center">
            <button className="h-full px-6 py-2 rounded-full bg-white text-[#184C3A] font-semibold shadow border border-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#184C3A] ring-offset-2 transition-colors duration-150 z-10">Testimonials and Experiences</button>
            <button className="h-full px-6 py-2 rounded-full bg-transparent text-[#184C3A]/60 font-semibold border-none z-0">Case Studies</button>
          </div>
        </div>
        {/* Community Testimonials Heading + Share Button Row */}
        <div className="flex items-center justify-between mb-4 mt-2">
          <h2 className="text-[20px] font-bold text-[#184C3A] text-left">Community Testimonials</h2>
          <button className="bg-[#184C3A] text-white font-semibold rounded-lg px-6 py-2 shadow-md hover:bg-[#195B48] transition text-base">+ Share your Experience</button>
        </div>
      </div>
      {/* Testimonials */}
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-8 px-4 pb-16">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white border border-[#D1D5DB] rounded-2xl shadow-sm p-6 flex flex-col gap-4">
            {/* Header */}
            <div className="flex items-center gap-3 mb-1">
              <span className="w-12 h-12 rounded-full flex items-center justify-center relative">
                {/* SVG background */}
                <svg width="48" height="48" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 top-0 w-full h-full">
                  <rect width="50" height="50" rx="25" fill="#B2AD96"/>
                </svg>
                <Image src={t.avatar} alt={t.name} width={40} height={40} className="rounded-full object-cover relative z-10" />
              </span>
              <div className="flex flex-col">
                <span className="font-bold text-[#184C3A] text-base leading-tight">{t.name}</span>
                <span className="text-xs text-[#184C3A] font-medium leading-tight">{t.role} &nbsp;•&nbsp; {t.date}</span>
              </div>
            </div>
            {/* Text */}
            <div className="text-[#184C3A] text-[15px] leading-relaxed">{t.text}</div>
            {/* Image or Video */}
            {t.image && (
              <div className="w-full flex justify-start">
                <Image src={t.image} alt="testimonial" width={320} height={180} className="rounded-lg object-cover max-h-[200px]" />
              </div>
            )}
            {t.video && (
              <div className="w-full flex justify-center relative">
                <Image src={t.video} alt="testimonial video" width={320} height={180} className="rounded-lg object-cover max-h-[200px]" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#184C3A" fillOpacity="0.7"/>
                    <polygon points="20,16 34,24 20,32" fill="white"/>
                  </svg>
                </span>
              </div>
            )}
            {/* Actions */}
            <div className="flex items-center gap-6 mt-2 text-[#184C3A]/80 text-sm">
              <button className="flex items-center gap-1 hover:text-[#184C3A]">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M7 22v-2a4 4 0 0 1 4-4h5a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Like
              </button>
              <button className="flex items-center gap-1 hover:text-[#184C3A]">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Comment
              </button>
              <span className="flex-1" />
              <button className="flex items-center gap-1 hover:text-[#184C3A]">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><polyline points="16 6 12 2 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 