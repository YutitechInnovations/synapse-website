

export default function FeatureSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#5C1E8A] mb-6">
          Synapse - Your Partner in Ortho
        </h2>
        <p className="text-[#5C1E8A] text-center max-w-3xl mx-auto mb-16">
          Synapse is at the forefront of orthodontic innovation, combining cutting-edge technology with clinical expertise to transform patient care.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="card">
            <div className="mb-6 flex justify-center">
              <div className="bg-[#F1E5FA] rounded-full p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5C1E8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#5C1E8A] mb-4 text-center">Premiere Aligners</h3>
            <p className="text-[#5C1E8A] text-sm mb-4">
              Engineered for precision, comfort, and aesthetics, ClearCurve aligners are the ultimate orthodontic tool for your practice. Built from decades of material science research and innovation, our aligners combine our proprietary ClearMatch technology, Performative Timelines, and scientifically-proven "AttractiveFit" materials to help your patients achieve their orthodontic goals.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white border border-purple-100 rounded-xl p-8 h-full">
            <div className="mb-6 flex justify-center">
              <div className="bg-[#F1E5FA] rounded-full p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5C1E8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20V10"></path>
                  <path d="M18 20V4"></path>
                  <path d="M6 20v-6"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#5C1E8A] mb-4 text-center">Empowering digital workflow</h3>
            <p className="text-[#5C1E8A] text-sm mb-4">
              OrthoConnect's powerful digital tools give you control and flexibility over your treatments while improving productivity. With intuitive interfaces, seamless integration with healthcare solutions, and advanced clinical planning tools, creating and editing optimal treatment plans has never been easier.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white border border-purple-100 rounded-xl p-8 h-full">
            <div className="mb-6 flex justify-center">
              <div className="bg-[#F1E5FA] rounded-full p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5C1E8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#5C1E8A] mb-4 text-center">Partners in clinical excellence</h3>
            <p className="text-[#5C1E8A] text-sm mb-4">
              Combining our clinical expertise with our commitment to education, global support, and collaboration, we offer bespoke customized plans to support OrthoConnect users and help you unlock the potential your practice and ultimately, of people's lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}