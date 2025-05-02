export default function FeatureSection() {
  return (
    <section className="py-10 md:py-16 lg:py-20 px-4 md:px-8">
      <div className="justify-center text-center px-2 md:px-16 lg:px-32 mb-8 md:mb-12">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-6">
          Synapse - Your Partner in Ortho
        </h2>
        <p className="text-base md:text-xl font-normal">
          Synapse is at the forefront of orthodontic innovation, combining
          cutting-edge technology with clinical expertise to transform patient
          care.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
        {/* Feature 1 */}
        <div className="card">
          <div className="mb-5 flex justify-start">
            <div className="bg-[#F1E5FA] rounded-full p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5C1E8A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-5 text-start">
            Premiere Aligners
          </h3>
          <p className=" text-sm font-normal">
            Engineered for precision, comfort, and aesthetics, ClearCurve
            aligners are the ultimate orthodontic tool for your practice. Built
            from decades of material science research and innovation, our
            aligners combine our proprietary ClearMatch technology, Performative
            Timelines, and scientifically-proven &quot;AttractiveFit&quot; materials to
            help your patients achieve their orthodontic goals.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="card">
          <div className="mb-5 flex justify-start">
            <div className="bg-[#F1E5FA] rounded-full p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5C1E8A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 20V10"></path>
                <path d="M18 20V4"></path>
                <path d="M6 20v-6"></path>
              </svg>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-5 text-start">
            Empowering digital workflow
          </h3>
          <p className=" text-sm font-normal">
            OrthoConnect&apos;s powerful digital tools give you control and
            flexibility over your treatments while improving productivity. With
            intuitive interfaces, seamless integration with healthcare
            solutions, and advanced clinical planning tools, creating and
            editing optimal treatment plans has never been easier.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="card">
          <div className="mb-5 flex justify-start">
            <div className="bg-[#F1E5FA] rounded-full p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5C1E8A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-5 text-start">
            Partners in clinical excellence
          </h3>
          <p className="text-[#5C1E8A] text-sm mb-4">
            Combining our clinical expertise with our commitment to education,
            global support, and collaboration, we offer bespoke customized plans
            to support OrthoConnect users and help you unlock the potential your
            practice and ultimately, of people&apos;s lives.
          </p>
        </div>
      </div>
    </section>
  );
}
