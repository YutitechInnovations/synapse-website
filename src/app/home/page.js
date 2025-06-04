import Image from "next/image";
import styles from './home.module.css';
import ConnectionFeatureSection from '../../components/home/ConnectionFeatureSection';
import ClientOnly from "../../components/ClientOnly";
import Navbar from "../../components/navbar/Navbar.js";

export default function PostLoginHome() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen w-full">
      <ClientOnly>
        <Navbar />
      </ClientOnly>
      <main className="w-full min-h-screen flex flex-col bg-[#F8FAF9]">
      {/* Hero Section */}
      <section className={styles.heroSection}>
        {/* Background Image */}
        <div className="absolute w-full min-h-[200px] h-[40vw] max-h-[44rem]">
          <Image
            src="/images/bg2.jpg"
            fill
            className="w-full h-full object-cover object-center"
            alt="Hero Background"
          />
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-white/60" />
        </div>
        {/* Content */}
        <div className={styles.heroContent}>
          <div className="max-w-3xl w-full">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[#184C3A]">
              Welcome to a New Kind of Dental Partnership
            </h1>
            <p className="text-base md:text-xl font-medium text-[#184C3A]">
              Our workflow has been designed to support your orthodontic expertise with dependable high-quality solutions ranging from aligners to advanced lab services, all crafted with the latest in 3D manufacturing and with precision and care.
            </p>
          </div>
        </div>
      </section>

      {/* Reward Program Section */}
      <section className={styles.rewardSection}>
        <h2 className="text-[40px] md:text-[48px] font-bold text-[#004C44] mb-6 text-center">Reward Program</h2>
        <p className="text-[#004C44] text-lg md:text-xl mb-12 text-center max-w-2xl">Track your reward points, redeem them for products, and view your reward history.</p>
        <div className={styles.rewardCards}>
          {/* Current Balance Card */}
          <div className="flex-1 bg-white rounded-xl border border-[#004C44] p-8 flex flex-col justify-between min-w-[260px] max-w-[400px] transition-shadow hover:shadow-lg">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-[#004C44] text-lg font-bold block mb-1">Current Balance</span>
                <span className="text-[#004C44] text-base font-normal">Available reward points</span>
              </div>
              <span>
                {/* SVG for Current Balance */}
                <svg width="25" height="34" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.04252 16.1034C3.39992 16.4608 3.59727 16.9355 3.59727 17.441V19.1092C3.59727 20.7401 4.92415 22.067 6.55509 22.067H6.68844V32.4661C6.68844 32.6581 6.79113 32.8341 6.95782 32.9301C7.12451 33.0248 7.32853 33.0235 7.4939 32.9248L12.8322 29.7483L18.1705 32.9248C18.2545 32.9755 18.3491 32.9995 18.4438 32.9995C18.5345 32.9995 18.6252 32.9768 18.7079 32.9301C18.8746 32.8355 18.9772 32.6581 18.9772 32.4661V22.067H19.1106C20.7415 22.067 22.0684 20.7402 22.0684 19.1092V17.441C22.0684 16.9356 22.2658 16.4608 22.6232 16.1034L23.802 14.9246C24.9555 13.7711 24.9555 11.8948 23.802 10.7412L22.6232 9.56237C22.2711 9.21033 22.0684 8.72225 22.0684 8.22481V6.55655C22.0684 4.92564 20.7415 3.59874 19.1106 3.59874H17.4423C16.9369 3.59874 16.4622 3.40137 16.1048 3.04398L14.9259 1.86514C13.7724 0.711621 11.8948 0.711621 10.7412 1.86514L9.56237 3.04398C9.20497 3.40138 8.73023 3.59874 8.22481 3.59874H6.55655C4.92564 3.59874 3.59874 4.92561 3.59874 6.55655V8.22481C3.59874 8.72221 3.39604 9.21029 3.04398 9.56237L1.86514 10.7412C0.711621 11.8947 0.711621 13.771 1.86514 14.9246L3.04398 16.1034L3.04252 16.1034ZM17.9103 31.53L13.1056 28.6709C12.9376 28.5709 12.7282 28.5709 12.5602 28.6709L7.75548 31.53V22.0685H8.22489C8.73031 22.0685 9.20504 22.2658 9.56244 22.6219L10.7413 23.8021C11.3174 24.3795 12.0748 24.6676 12.8336 24.6676C13.5911 24.6676 14.3485 24.3795 14.9259 23.8021L16.1048 22.6219C16.4622 22.2645 16.9369 22.0685 17.4423 22.0685H17.9118V31.53H17.9103ZM2.61852 11.4947L3.79736 10.3158C4.35611 9.75709 4.66418 9.0143 4.66418 8.22351V6.55525C4.66418 5.51242 5.51232 4.66427 6.55516 4.66427H8.22342C9.01288 4.66427 9.757 4.35623 10.3157 3.79746L11.4946 2.61861C12.2321 1.88115 13.4322 1.88115 14.1697 2.61861L15.3485 3.79746C15.9073 4.3562 16.6501 4.66427 17.4408 4.66427H19.1091C20.1519 4.66427 21.0001 5.51242 21.0001 6.55525V8.22351C21.0001 9.01297 21.3081 9.75709 21.8669 10.3158L23.0457 11.4947C23.7832 12.2322 23.7832 13.4323 23.0457 14.1698L21.8669 15.3486C21.3082 15.9074 21.0001 16.6501 21.0001 17.4409V19.1092C21.0001 20.152 20.1519 21.0002 19.1091 21.0002H18.453C18.449 21.0002 18.4463 20.9975 18.4423 20.9975C18.4383 20.9975 18.4357 21.0002 18.4317 21.0002H17.4395C16.6501 21.0002 15.9059 21.3082 15.3472 21.867L14.1683 23.0472C13.4309 23.7846 12.2307 23.7846 11.4933 23.0472L10.3144 21.867C9.75567 21.3082 9.01288 21.0002 8.22209 21.0002H7.22995C7.22594 21.0002 7.22328 20.9975 7.21928 20.9975C7.21528 20.9975 7.21261 21.0002 7.20861 21.0002H6.5525C5.50966 21.0002 4.66152 20.152 4.66152 19.1092V17.4409C4.66152 16.6515 4.35347 15.9074 3.7947 15.3486L2.61585 14.1698C1.87839 13.4323 1.87839 12.2321 2.61585 11.4947H2.61852Z" fill="#9B87F5" stroke="#9B87F5" strokeWidth="0.3"/>
                  <path d="M12.8321 19.3893C16.4487 19.3893 19.3905 16.4474 19.3905 12.8309C19.3905 9.21427 16.4487 6.27246 12.8321 6.27246C9.21549 6.27246 6.27368 9.21427 6.27368 12.8309C6.27368 16.4474 9.21549 19.3893 12.8321 19.3893ZM12.8321 7.34066C15.8592 7.34066 18.3236 9.80371 18.3236 12.8322C18.3236 15.8594 15.8606 18.3238 12.8321 18.3238C9.80493 18.3238 7.34052 15.8607 7.34052 12.8322C7.34052 9.80507 9.80356 7.34066 12.8321 7.34066Z" fill="#9B87F5" stroke="#9B87F5" strokeWidth="0.3"/>
                </svg>
              </span>
            </div>
            <span className="text-[#004C44] text-[40px] font-extrabold leading-tight">1250 pts</span>
          </div>
          {/* Total Earned Card */}
          <div className="flex-1 bg-white rounded-xl border border-[#004C44] p-8 flex flex-col justify-between min-w-[260px] max-w-[400px] transition-shadow hover:shadow-lg">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-[#004C44] text-lg font-bold block mb-1">Total Earned</span>
                <span className="text-[#004C44] text-base font-normal">Lifetime points points</span>
              </div>
              <span>
                {/* SVG for Total Earned */}
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.2448 24.4885H1.51276V0.756378C1.51276 0.339108 1.17365 0 0.756378 0C0.339108 0 0 0.339108 0 0.756378V25.2436C0 25.6609 0.339108 26 0.756378 26H25.2436C25.6609 26 26 25.6609 26 25.2436C26.0013 24.8263 25.6621 24.4885 25.2448 24.4885Z" fill="#22C55D"/>
                  <path d="M5.16298 19.6479C5.51975 19.866 5.98491 19.7538 6.203 19.3983L9.10743 14.6548H17.082C17.3745 14.6548 17.6405 14.4858 17.7653 14.2211L21.8482 5.58462L22.0361 6.06618C22.1874 6.45569 22.626 6.64732 23.0156 6.49603C23.4051 6.34474 23.5967 5.90608 23.4454 5.51653L22.5781 3.29409C22.4269 2.90458 21.9882 2.71295 21.5986 2.86424L19.3762 3.73153C18.9867 3.8828 18.7951 4.32149 18.9463 4.71103C19.0976 5.10058 19.5363 5.29218 19.9258 5.14089L20.4881 4.92154L16.6016 13.1408H8.68255C8.41908 13.1408 8.17453 13.2782 8.03712 13.5025L4.91208 18.6079C4.694 18.9634 4.80624 19.4299 5.16298 19.6479Z" fill="#22C55D"/>
                </svg>
              </span>
            </div>
            <span className="text-[#004C44] text-[40px] font-extrabold leading-tight">1650 pts</span>
          </div>
          {/* Total Redeemed Card */}
          <div className="flex-1 bg-white rounded-xl border border-[#004C44] p-8 flex flex-col justify-between min-w-[260px] max-w-[400px] transition-shadow hover:shadow-lg">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-[#004C44] text-lg font-bold block mb-1">Total Redeemed</span>
                <span className="text-[#004C44] text-base font-normal">Points used for rewards</span>
              </div>
              <span>
                {/* SVG for Total Redeemed */}
                <svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.12007 28H22.8799C24.6004 28 26 26.5953 26 24.8687V10.2564C26 8.52973 24.6004 7.12507 22.8799 7.12507H18.089C19.3851 6.54422 20.2899 5.2416 20.2899 3.72493C20.2896 1.66756 18.6281 0 16.5781 0C14.8654 0 13.4273 1.16604 12.9998 2.74929C12.5721 1.16604 11.134 0 9.42129 0C7.37162 0 5.70975 1.66756 5.70975 3.72493C5.70975 5.2416 6.61462 6.54422 7.9107 7.12507H3.12007C1.39962 7.12507 0 8.52973 0 10.2564V24.8687C0 26.5953 1.39962 28 3.12007 28ZM3.12007 26.9562C1.9731 26.9562 1.04002 26.0198 1.04002 24.8687V13.5613H10.1256V26.9562H3.12007ZM11.1656 8.16885H14.8338V12.5176H11.1656V8.16885ZM14.8338 13.5613V26.7823H11.1656V13.5613H14.8338ZM24.9597 24.8687C24.9597 26.0198 24.0266 26.9562 22.8796 26.9562H15.8738V13.5613H24.9597V24.8687ZM22.8796 8.16885C24.0266 8.16885 24.9597 9.10529 24.9597 10.2564V12.5176H15.8738V8.16885H22.8796ZM13.9066 3.72493C13.9066 2.24653 15.105 1.04378 16.5781 1.04378C18.0512 1.04378 19.2496 2.24653 19.2496 3.72493C19.2496 5.20333 18.0512 6.40609 16.5781 6.40609H13.9066V3.72493ZM6.74978 3.72493C6.74978 2.24653 7.94821 1.04378 9.42129 1.04378C10.8944 1.04378 12.0928 2.24653 12.0928 3.72493V6.40609H9.42129C7.94821 6.40609 6.74978 5.20333 6.74978 3.72493ZM1.04002 10.2564C1.04002 9.10529 1.9731 8.16885 3.12007 8.16885H10.1259V12.5176H1.04002V10.2564Z" fill="#F59E0C"/>
                </svg>
              </span>
            </div>
            <span className="text-[#004C44] text-[40px] font-extrabold leading-tight">400 pts</span>
          </div>
        </div>
      </section>

      {/* Where Care Meets Connection Section */}
      <ConnectionFeatureSection isLoggedIn={true} />

      {/* Education Section */}
      <section className={styles.educationSection}>
        <div className="w-full max-w-[1240px] mx-auto">
          <h2 className="text-[32px] md:text-[36px] lg:text-[38px] font-semibold text-[#004C44] mb-8 text-left">Education</h2>
          <div className={styles.educationGrid}>
            {/* Blogs Card */}
            <a href="/blogs" className={styles.educationCard + " group block transition-transform hover:scale-[1.02]"}>
              <div className="relative w-full h-full">
                  <Image
                    src="/blogs.png"
                    alt="Blogs"
                    fill
                    className="object-cover"
                  />
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/80 to-transparent z-10" />
                <span className="absolute bottom-8 left-8 z-20 text-[28px] font-bold text-[#004C44]">Blogs</span>
              </div>
            </a>
            {/* Materials & Data Card */}
            <a href="#" className={styles.educationCard + " group block transition-transform hover:scale-[1.02]"}>
              <div className="relative w-full h-full">
                  <Image
                    src="/materials.png"
                    alt="Materials & Data"
                    fill
                    className="object-cover"
                  />
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/80 to-transparent z-10" />
                <span className="absolute bottom-8 left-8 z-20 text-[28px] font-bold text-[#004C44]">Materials & Data</span>
              </div>
            </a>
            {/* Research Papers Card */}
            <a href="#" className={styles.educationCard + " group block transition-transform hover:scale-[1.02]"}>
              <div className="relative w-full h-full">
                  <Image
                    src="/researchpapers.png"
                    alt="Research Papers"
                    fill
                    className="object-cover"
                  />
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/80 to-transparent z-10" />
                <span className="absolute bottom-8 left-8 z-20 text-[28px] font-bold text-[#004C44]">Research Papers</span>
              </div>
            </a>
              {/* Patients&apos; FAQs Card */}
            <a href="/faq" className={styles.educationCard + " group block transition-transform hover:scale-[1.02]"}>
              <div className="relative w-full h-full">
                  <Image
                    src="/faq.png"
                    alt="Patients' FAQs"
                    fill
                    className="object-cover"
                  />
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/80 to-transparent z-10" />
                  <span className="absolute bottom-8 left-8 z-20 text-[28px] font-bold text-[#004C44]">Patients&apos; FAQs</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
} 