import Footer from "../../components/footer/Footer.js";
import Navbar from "../../components/navbar/Navbar.js";
import Head from 'next/head';

export default function FAQ() {
  return (
    <>
      <Head>
        <title>FAQ - Synapse</title>
      </Head>

      <div className="faq-hero">
        <div className="faq-overlay" />
        <Navbar />
        <div className="faq-header">
          <h1>Frequently Asked Questions</h1>
          <p>Answers to the questions your patients ask the most</p>
          <input type="text" placeholder="Search" className="faq-search" />
        </div>
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

      <Footer />
    </>
  );
}
