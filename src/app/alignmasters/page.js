"use client";
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

export default function AlignMasters() {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  // Close modal on Esc
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') setShowModal(false);
    }
    if (showModal) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showModal]);

  // Close modal on outside click
  function handleBackdropClick(e) {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowModal(false);
    }
  }

  const testimonials = [
    {
      name: 'Dr. Ayushi',
      role: 'Customer Success Manager',
      date: '26 Jan 2025',
      avatar: '/avatars/ayushi.png',
      gender: 'female',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Present auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, ut tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
      image: null,
      video: null
    },
    {
      name: 'Dr Harmeet Kaur',
      role: 'Manager, Clinical & Education',
      date: '26 Jan 2025',
      avatar: '/avatars/harmeet.png',
      gender: 'female',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Present auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, ut tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
      image: '/images/img_1.png',
      video: null
    },
    {
      name: 'Sujit Hota',
      role: 'CEO & MD',
      date: '26 Jan 2025',
      avatar: '/avatars/sujit.png',
      gender: 'male',
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
          <button onClick={() => setShowModal(true)} className="bg-[#184C3A] text-white font-semibold rounded-lg px-6 py-2 shadow-md transition text-base hover:bg-[#21725a] hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#184C3A] focus:ring-offset-2">+ Share your Experience</button>
        </div>
      </div>
      {/* Testimonials */}
      <div className="flex flex-col gap-[30px] pb-16">
        {testimonials.map((t, idx) => (
          <div key={idx} className="w-[1240px] max-w-full mx-[100px] bg-white border border-[#D1D5DB] rounded-[20px] p-[30px] flex flex-col gap-4" style={{height: 'auto'}}>
            {/* Header */}
            <div className="flex items-center gap-3 mb-1">
              <span className="w-12 h-12 rounded-full flex items-center justify-center relative">
                {/* Gender-based SVG background */}
                {t.gender === 'female' ? (
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="absolute left-0 top-0 w-full h-full">
                    <rect width="50" height="50" rx="25" fill="url(#pattern0_708_3735)"/>
                    <defs>
                      <pattern id="pattern0_708_3735" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_708_3735" transform="scale(0.005)"/>
                      </pattern>
                      <image id="image0_708_3735" width="200" height="200" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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"/>
                    </defs>
                  </svg>
                ) : (
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="absolute left-0 top-0 w-full h-full">
                    <rect width="50" height="50" rx="25" fill="#B2AD96"/>
                    <rect width="50" height="50" rx="25" fill="url(#pattern0_714_3832)"/>
                    <defs>
                      <pattern id="pattern0_714_3832" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_714_3832" transform="scale(0.005)"/>
                      </pattern>
                      <image id="image0_714_3832" width="200" height="200" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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"/>
                    </defs>
                  </svg>
                )}
                {t.avatar && (
                  <Image src={t.avatar} alt="" width={40} height={40} className="rounded-full object-cover relative z-10" />
                )}
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
      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30" onClick={handleBackdropClick}>
          <div ref={modalRef} className="bg-white rounded-[20px] w-[545px] max-w-full mx-2 p-[30px] shadow-xl relative flex flex-col gap-[30px] animate-fadeIn">
            {/* Close button */}
            <button onClick={() => setShowModal(false)} aria-label="Close" className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-[#F6F6F3] hover:bg-[#e0e0e0] transition shadow focus:outline-none focus:ring-2 focus:ring-[#184C3A] z-10">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#184C3A" strokeWidth="2"><path d="M6 6l8 8M6 14L14 6" strokeLinecap="round"/></svg>
            </button>
            <h2 className="text-2xl md:text-3xl font-bold text-[#184C3A] mb-1">Share your Experiences</h2>
            <p className="text-[#184C3A] text-base md:text-lg mb-6">Tell the community about your experience with Synapse.</p>
            <form className="flex flex-col gap-[30px]">
              <div>
                <label className="block text-[#184C3A] font-semibold mb-2" htmlFor="testimonial-text">Your Experience</label>
                <textarea id="testimonial-text" rows={5} className="w-full border border-[#184C3A] rounded-lg p-4 text-[#184C3A] placeholder:text-[#184C3A]/40 focus:outline-none focus:ring-2 focus:ring-[#184C3A] resize-none" placeholder="Type Something here...." />
              </div>
              <div>
                <label className="block text-[#184C3A] font-semibold mb-2">Add Photos or Videos</label>
                <div className="w-full h-48 border border-[#184C3A] rounded-lg flex items-center justify-center cursor-pointer" onClick={() => fileInputRef.current && fileInputRef.current.click()}>
                  <span className="flex items-center justify-center w-12 h-12 border-2 border-[#184C3A] rounded-lg">
                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#184C3A" strokeWidth="2"><path d="M12 6v12M6 12h12"/></svg>
                  </span>
                  <input
                    type="file"
                    accept="image/*,video/*"
                    multiple
                    ref={fileInputRef}
                    className="hidden"
                    onChange={e => setSelectedFiles(Array.from(e.target.files))}
                  />
                </div>
                {selectedFiles.length > 0 && (
                  <div className="mt-2 text-sm text-[#184C3A]">
                    {selectedFiles.map((file, idx) => (
                      <div key={idx}>{file.name}</div>
                    ))}
                  </div>
                )}
              </div>
              <button type="submit" className="w-full bg-[#08544A] text-white font-semibold rounded-lg py-3 mt-2 text-base md:text-lg shadow hover:bg-[#184C3A] transition">Submit Testimonial</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 