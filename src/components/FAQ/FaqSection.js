// eslint-disable-next-line react/display-name
const FaqSection = () => {
  return (
    <section className="relative w-full">
      <div className="faq-hero">
        <div className="faq-header">
          <h1>Frequently Asked Questions</h1>
          <p>Answers to the questions your patients ask the most</p>
          <div className="relative w-full">
            <input 
              type="text" 
              placeholder="Search" 
              className="faq-search"
              aria-label="Search FAQs"
            />
            <svg
              className="faq-search-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#006D38"
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
      </div>

      <div className="w-full max-w-[798px] mx-auto px-4 py-16 space-y-4">
        <details className="card card-p-0 card2 border-light group cursor-pointer">
          <summary className="flex justify-between items-center">
            <span className="font-semibold text-lg">Is Aligner treatment painful?</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#006D38"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-200 mr-4"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </summary>
          <div>
            <p>Some discomfort or tooth soreness is common, especially when starting a new set of aligners. This is a normal sign that your teeth are shifting as planned. The discomfort usually fades within a few days. If it persists, contact your doctor.</p>
          </div>
        </details>

        <details className="card card-p-0 border-light group cursor-pointer">
          <summary className="flex justify-between items-center">
            <span className="font-semibold text-lg">Are there food restrictions during aligner treatment?</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#006D38"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-200 mr-4"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </summary>
          <div>
            <p>No food restrictions! Just remove your aligners before eating or drinking anything except water. Remember to brush your teeth before putting them back in.</p>
          </div>
        </details>

        <details className="card card-p-0 card2 border-light group cursor-pointer">
          <summary className="flex justify-between items-center">
            <span className="font-semibold text-lg">Can I drink hot or cold beverages while wearing my aligners?</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#006D38"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-200 mr-4"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </summary>
          <div>
            <p>It&apos;s recommended to only drink water while wearing your aligners. Hot beverages can warp the plastic, and other drinks can stain them or get trapped between your teeth and aligners.</p>
          </div>
        </details>

        <details className="card card-p-0 card2 border-light group cursor-pointer">
          <summary className="flex justify-between items-center">
            <span className="font-semibold text-lg">Can I chew gum while wearing aligners?</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#006D38"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-200 mr-4"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </summary>
          <div>
            <p>No, you should not chew gum while wearing aligners. Gum can stick to them and damage the plastic. Remove your aligners if you want to chew gum.</p>
          </div>
        </details>

        <details className="card card-p-0  card2 border-light group cursor-pointer">
          <summary className="flex justify-between items-center">
            <span className="font-semibold text-lg">Will smoking or chewing tobacco stain my aligners?</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#006D38"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-200 mr-4"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </summary>
          <div>
            <p>Yes, smoking or using tobacco products can stain your aligners. We recommend removing aligners when smoking and cleaning them thoroughly before putting them back in.</p>
          </div>
        </details>

        <details className="card card-p-0 card-p-0 card2 border-light group cursor-pointer">
          <summary className="flex justify-between items-center">
            <span className="font-semibold text-lg">How much should I soak direct aligner in hot water?</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#006D38"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-200 mr-4"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </summary>
          <div>
            <p>Follow your doctor&apos;s specific instructions for soaking aligners. Generally, use lukewarm (not hot) water and approved cleaning solutions only.</p>
          </div>
        </details>

        <details className="card card-p-0 card2 border-light group cursor-pointer">
          <summary className="flex justify-between items-center">
            <span className="font-semibold text-lg">What should I do if I lose or break an aligner?</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#006D38"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-200 mr-4"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </summary>
          <div>
            <p>Contact your doctor immediately if you lose or break an aligner. They will advise whether to move to the next set or order a replacement.</p>
          </div>
        </details>

        <details className="card card-p-0 card2 border-light group cursor-pointer">
          <summary className="flex justify-between items-center">
            <span className="font-semibold text-lg">What happens if I lose or break an attachment?</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#006D38"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-200 mr-4"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </summary>
          <div>
            <p>If an attachment falls off or breaks, schedule an appointment with your doctor as soon as possible to have it replaced.</p>
          </div>
        </details>
      </div>
    </section>
  );
};

export default FaqSection;
