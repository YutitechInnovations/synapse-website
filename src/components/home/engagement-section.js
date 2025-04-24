import Link from "next/link";

export default function EngagementSection() {
  return (
    <>
      <div className="relative w-full h-[672px]">
        <img
          src="/images/landingPage2.png"
          className="h-[672px]"
          alt="Landing Page"
        />
      </div>
      <section className="w-full">
        <div className="p-25">
          {/* Aligner Image */}

          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#5C1E8A] mb-4">
            Our Engagement Strategies
          </h2>
          <p className="text-[#5C1E8A] text-center max-w-3xl mx-auto mb-12">
            Synapse employs four key strategies to enhance orthodontic practice
            and patient outcomes, creating a comprehensive ecosystem for modern
            care.
          </p>

          <div className="flex gap-[30px]">
            {/* 3D Printing */}
            <div className="bg-white border border-purple-100 rounded-xl p-6 h-full">
              <div className="mb-4 flex justify-center">
                <div className="bg-[#F1E5FA] rounded-full p-3">
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
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#5C1E8A] mb-2 text-center">
                3D Printing
              </h3>
              <p className="text-[#5C1E8A] text-sm mb-4">
                State-of-the-art 3D printing technology for creating precise
                dental models, aligners, and treatment tools.
              </p>
              <Link
                href="/learn-more"
                className="text-[#5C1E8A] text-sm flex items-center justify-center"
              >
                Learn More{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>

            {/* OrthoSync */}
            <div className="card ">
              <div className="mb-4 flex justify-center">
                <div className="bg-[#F1E5FA] rounded-full p-3">
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#5C1E8A] mb-2 text-center">
                OrthoSync
              </h3>
              <p className="text-[#5C1E8A] text-sm mb-4">
                Comprehensive patient management system designed specifically
                for orthodontic practices.
              </p>
              <Link
                href="/learn-more"
                className="text-[#5C1E8A] text-sm flex items-center justify-center"
              >
                Learn More{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>

            {/* Education */}
            <div className="card ">
              <div className="mb-4 flex justify-center">
                <div className="bg-[#F1E5FA] rounded-full p-3">
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
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#5C1E8A] mb-2 text-center">
                Education
              </h3>
              <p className="text-[#5C1E8A] text-sm mb-4">
                Continuing education resources, research papers, and
                professional development opportunities.
              </p>
              <Link
                href="/learn-more"
                className="text-[#5C1E8A] text-sm flex items-center justify-center"
              >
                Learn More{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>

            {/* Community */}
            <div className="card ">
              <div className="mb-4 flex justify-center">
                <div className="bg-[#F1E5FA] rounded-full p-3">
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
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
              </div>
              <h3 className="card text-lg font-semibold text-[#5C1E8A] mb-2 text-center">
                Community
              </h3>
              <p className="text-[#5C1E8A] text-sm mb-4">
                Connect with a global network of orthodontic professionals to
                share knowledge and experiences.
              </p>
              <Link
                href="/learn-more"
                className="text-[#5C1E8A] text-sm flex items-center justify-center"
              >
                Learn More{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
