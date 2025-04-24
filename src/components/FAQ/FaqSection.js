// eslint-disable-next-line react/display-name
const  FaqSection = () => {

    return(
        <section className = "relative w-full">

            <div className="absolute w-full h-[473px]">
            <img
            src="bg.png"
            className="h-[473px] object-cover"
            alt="Landing Page"
            />
            </div>
            <div className="relative h-[473px] flex flex-col items-start justify-start pt-42 px-25">
                <h1>Frequently Asked Questions</h1>
                <p>Answers to the questions your patients ask the most</p>
                <input type="text" placeholder="Search" className="faq-search" />
            </div>
            
        

            <div className="faq-content">
                <details>
                <summary>Is Aligner treatment painful?</summary>
                <p>No, most patients only feel mild discomfort in the beginning.</p>
                </details>
                <details>
                <summary>Are there food restrictions during aligner treatment?</summary>
                <p>Aligners should be removed while eating, so you can eat normally.</p>
                </details>
            </div>
      </section>
    );
};
export default FaqSection