// eslint-disable-next-line react/display-name
const FaqSection = () => {
  return (
    <section className="relative w-full">
      <div className="absolute w-full h-[473px] overflow-hidden">
        <img
          src="/bg.png"
          className="h-[473px] w-full object-cover opacity-50"
          alt="FAQ Background"
        />
      </div>
      <div className="relative h-[473px] flex flex-col items-center justify-center pt-[190px] pb-[70px] px-4 md:px-[321px] gap-[30px]">
        <h1 className="font-semibold text-3xl md:text-[46px] text-[#3D0B6D] text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-lg md:text-xl font-normal text-[#3D0B6D] text-center px-4">
          Answers to the questions your patients ask the most
        </p>
        <div className="relative w-full max-w-[601px] px-4 md:px-0">
          <input 
            type="text" 
            placeholder="Search" 
            className="frm-input w-full pl-12" 
            aria-label="Search FAQs"
          />
          <svg
            className="absolute left-7 md:left-4 top-1/2 -translate-y-1/2"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C2A4D8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
      </div>

      <div className="relative px-4 md:px-[321px] py-[50px] flex flex-col gap-[20px]">
        <details className="group">
          <summary className="flex items-center justify-between p-5 md:p-[30px] cursor-pointer bg-white rounded-[10px] border border-[#C2A4D8] hover:bg-[#F8F2FF] transition-colors duration-200">
            <span className="text-[#3D0B6D] text-lg md:text-xl font-medium pr-4">Is Aligner treatment painful?</span>
            <svg
              className="w-6 h-6 transition-transform duration-200 group-open:rotate-180 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3D0B6D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </summary>
          <div className="p-5 md:p-[30px] bg-white rounded-b-[10px] border-x border-b border-[#C2A4D8] mt-[-10px]">
            <p className="text-[#3D0B6D] text-base">
              Some discomfort or tooth soreness is common, especially when starting a new set of aligners. This is a normal sign that your teeth are shifting as planned. The discomfort usually fades within a few days. If it persists, contact your doctor.
            </p>
          </div>
        </details>

        <details className="group">
          <summary className="flex items-center justify-between p-5 md:p-[30px] cursor-pointer bg-white rounded-[10px] border border-[#C2A4D8] hover:bg-[#F8F2FF] transition-colors duration-200">
            <span className="text-[#3D0B6D] text-lg md:text-xl font-medium pr-4">Are there food restrictions during aligner treatment?</span>
            <svg
              className="w-6 h-6 transition-transform duration-200 group-open:rotate-180 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3D0B6D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </summary>
          <div className="p-5 md:p-[30px] bg-white rounded-b-[10px] border-x border-b border-[#C2A4D8] mt-[-10px]">
            <p className="text-[#3D0B6D] text-base">
              No, there are no food restrictions with aligners because you remove them before eating. However, you should always brush your teeth before putting your aligners back in to maintain good oral hygiene and prevent staining.
            </p>
          </div>
        </details>

        <details className="group">
          <summary className="flex items-center justify-between p-5 md:p-[30px] cursor-pointer bg-white rounded-[10px] border border-[#C2A4D8] hover:bg-[#F8F2FF] transition-colors duration-200">
            <span className="text-[#3D0B6D] text-lg md:text-xl font-medium pr-4">Can I drink hot or cold beverages while wearing my aligners?</span>
            <svg
              className="w-6 h-6 transition-transform duration-200 group-open:rotate-180 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3D0B6D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </summary>
          <div className="p-5 md:p-[30px] bg-white rounded-b-[10px] border-x border-b border-[#C2A4D8] mt-[-10px]">
            <p className="text-[#3D0B6D] text-base">
              It&apos;s recommended to remove your aligners when consuming any beverages except water. Hot beverages can warp the aligners, while sugary or colored drinks can get trapped between your teeth and aligners, potentially causing decay or staining.
            </p>
          </div>
        </details>

        <details className="group">
          <summary className="flex items-center justify-between p-5 md:p-[30px] cursor-pointer bg-white rounded-[10px] border border-[#C2A4D8] hover:bg-[#F8F2FF] transition-colors duration-200">
            <span className="text-[#3D0B6D] text-lg md:text-xl font-medium pr-4">How long should I wear my aligners each day?</span>
            <svg
              className="w-6 h-6 transition-transform duration-200 group-open:rotate-180 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3D0B6D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </summary>
          <div className="p-5 md:p-[30px] bg-white rounded-b-[10px] border-x border-b border-[#C2A4D8] mt-[-10px]">
            <p className="text-[#3D0B6D] text-base">
              For optimal results, you should wear your aligners for 20-22 hours per day. Only remove them for eating, drinking (except water), and cleaning your teeth.
            </p>
          </div>
        </details>
      </div>
    </section>
  );
};

export default FaqSection;
