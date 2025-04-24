// eslint-disable-next-line react/display-name
const FaqSection = () => {
  return (
    <section className="relative w-full">
      <div className="absolute w-full h-[473px] overflow-hidden">
        <img
          src="bg.png"
          className="h-[473px] w-full object-cover"
          alt="Landing Page"
        />
      </div>
      <div className="relative h-[473px] flex flex-col items-center justify-center pt-[190px] pb-[70px]  px-[321px] gap-[30px]">
        <h1 className="font-semibold text-[46px]">
          Frequently Asked Questions
        </h1>
        <p className="text-xl font-normal">
          Answers to the questions your patients ask the most
        </p>
        <input type="text" placeholder="Search" className="frm-input flex w-[601px]" />
      </div>

      <div className="faq-content">
        <details>
          <summary>Is Aligner treatment painful?</summary>
          <p>No, most patients only feel mild discomfort in the beginning.</p>
        </details>
        <details>
          <summary>
            Are there food restrictions during aligner treatment?
          </summary>
          <p>
            Aligners should be removed while eating, so you can eat normally.
          </p>
        </details>
      </div>
    </section>
  );
};
export default FaqSection;
