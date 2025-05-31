import Image from "next/image";

export default function PostLoginHome() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#F8FAF9]">
      {/* Hero Section */}
      <section className="relative w-full hero-section">
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
        <div className="relative min-h-[200px] h-[40vw] max-h-[44rem] flex flex-col items-start justify-center pt-8 md:pt-20 px-2 sm:px-4 md:px-8 lg:px-16">
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
      <section className="w-full flex flex-col items-center py-16 bg-[#F8FAF9]">
        <h2 className="text-[40px] md:text-[48px] font-bold text-[#004C44] mb-6 text-center">Reward Program</h2>
        <p className="text-[#004C44] text-lg md:text-xl mb-12 text-center max-w-2xl">Track your reward points, redeem them for products, and view your reward history.</p>
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center">
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
            <span className="text-[#004C44] text-[32px] font-extrabold leading-tight">1250 pts</span>
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
            <span className="text-[#004C44] text-[32px] font-extrabold leading-tight">1650 pts</span>
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
            <span className="text-[#004C44] text-[32px] font-extrabold leading-tight">400 pts</span>
          </div>
        </div>
      </section>

      {/* Where Care Meets Connection Section */}
      <section className="w-full flex flex-col items-center py-12 bg-[#F8FAF9]">
        <h2 className="text-2xl md:text-3xl font-bold text-[#184C3A] mb-2">Where Care Meets Connection</h2>
        <p className="text-[#184C3A] mb-8 text-center max-w-xl">Our ecosystem of engagement that brings patients, doctors and care journeys closer than ever</p>
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center">
          {/* OrthoSync Card - Updated to match design */}
          <div className="flex-1 bg-white border border-[#184C3A] rounded-[16px] flex flex-col items-center justify-start p-8 min-w-[320px] max-w-[340px] h-[342px] mx-auto" style={{boxShadow: '0 2px 8px 0 rgba(16, 24, 40, 0.04)'}}>
            <div className="flex justify-center items-center w-full mb-6 mt-2">
              <span className="bg-[#184C3A] rounded-full flex items-center justify-center px-6 py-2" style={{minWidth: '120px', minHeight: '48px'}}>
                <svg width="104" height="23" viewBox="0 0 104 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.94459 4.41016C9.30929 4.41016 10.5058 4.69756 11.5343 5.27042C12.5607 5.84524 13.3565 6.6449 13.9195 7.67135C14.4826 8.69389 14.7642 9.88849 14.7642 11.2532C14.7485 12.5886 14.4533 13.7597 13.8804 14.7646C13.3056 15.7715 12.5118 16.5595 11.4951 17.1265C10.4785 17.6895 9.29365 17.9711 7.94459 17.9711C6.61509 17.9711 5.43613 17.6895 4.40968 17.1265C3.38127 16.5595 2.58161 15.7715 2.00875 14.7646C1.4398 13.7597 1.14848 12.5886 1.13284 11.2532C1.13284 9.88849 1.41634 8.69389 1.98529 7.67135C2.55815 6.6449 3.35585 5.84524 4.3784 5.27042C5.40485 4.69756 6.59358 4.41016 7.94459 4.41016ZM7.94459 15.4059C9.10595 15.4059 10.0327 15.0227 10.7209 14.2563C11.413 13.486 11.761 12.4849 11.761 11.2532C11.761 9.99212 11.413 8.96566 10.7209 8.17187C10.0327 7.37417 9.10595 6.97532 7.94459 6.97532C6.80278 6.97532 5.87995 7.37417 5.1761 8.17187C4.47615 8.96566 4.12814 9.99212 4.12814 11.2532C4.12814 12.4849 4.47615 13.486 5.1761 14.2563C5.87995 15.0227 6.80278 15.4059 7.94459 15.4059Z" fill="white" fillOpacity="0.4"/>
                  <path d="M20.3247 4.66797C20.7822 4.66797 21.1478 4.76768 21.4196 4.96515C21.6953 5.15871 21.8341 5.47936 21.8341 5.92709C21.8341 6.33376 21.6953 6.65831 21.4196 6.89684C21.1478 7.13733 20.7822 7.25659 20.3247 7.25659C19.2455 7.25659 18.4869 7.64371 18.0489 8.41404C17.6149 9.18046 17.3998 10.2206 17.3998 11.5345V16.4067C17.3998 16.7821 17.261 17.0949 16.9853 17.3452C16.7135 17.5915 16.3831 17.7127 15.9921 17.7127C15.5483 17.7127 15.1885 17.5915 14.9128 17.3452C14.6411 17.0949 14.5062 16.7821 14.5062 16.4067V5.97401C14.5062 5.56343 14.6626 5.24278 14.9754 5.01208C15.2921 4.78332 15.6323 4.66797 15.9921 4.66797C16.3518 4.66797 16.6744 4.78137 16.9618 5.00425C17.2532 5.22323 17.3998 5.54779 17.3998 5.97401V6.13042C17.7752 5.63577 18.2092 5.2682 18.7058 5.02772C19.2005 4.78919 19.7401 4.66797 20.3247 4.66797Z" fill="white" fillOpacity="0.4"/>
                  <path d="M26.6763 15.2803C27.0712 15.0574 27.427 14.9792 27.7399 15.0457C28.0566 15.1141 28.3127 15.2647 28.5063 15.4993C28.7038 15.73 28.8035 15.9978 28.8035 16.3048C28.8035 16.5238 28.735 16.7467 28.6001 16.9695C28.4633 17.1944 28.2502 17.3821 27.9588 17.5326C27.5835 17.736 27.2413 17.8572 26.9343 17.9002C26.6254 17.9471 26.2657 17.9706 25.8551 17.9706C24.7446 17.9706 23.8882 17.7399 23.2899 17.2824C22.6956 16.819 22.285 16.2188 22.0621 15.4836C21.8431 14.7485 21.7336 13.9723 21.7336 13.1531V7.09994H20.7561C20.2751 7.09994 19.9212 6.97285 19.6925 6.71673C19.4637 6.46256 19.3484 6.18884 19.3484 5.89556C19.3484 5.5886 19.4696 5.30706 19.7081 5.05094C19.9466 4.79677 20.2966 4.66773 20.7561 4.66773H21.7336V2.46232C21.7336 2.02045 21.8764 1.68808 22.1638 1.4691C22.4551 1.24621 22.7894 1.13281 23.1648 1.13281C23.5246 1.13281 23.8569 1.24621 24.1659 1.4691C24.4728 1.68808 24.6273 2.02045 24.6273 2.46232V4.66773H26.6293C27.0712 4.66773 27.4134 4.79677 27.6538 5.05094C27.8924 5.30706 28.0136 5.5886 28.0136 5.89556C28.0136 6.20448 27.8924 6.48211 27.6538 6.73237C27.4134 6.97872 27.0712 7.09994 26.6293 7.09994H24.6273V13.1531C24.6273 13.5285 24.6527 13.8921 24.7055 14.2402C24.7563 14.5901 24.8717 14.8814 25.0496 15.1161C25.2255 15.3468 25.4954 15.4602 25.8551 15.4602C25.9959 15.4602 26.1464 15.4406 26.3087 15.3976C26.469 15.3507 26.5922 15.3116 26.6763 15.2803Z" fill="white" fillOpacity="0.4"/>
                  <path d="M35.5718 4.40965C36.7645 4.40965 37.7792 4.67164 38.614 5.19171C39.4528 5.71373 40.0941 6.43518 40.5379 7.35802C40.9856 8.28085 41.2105 9.35814 41.2105 10.5879V16.383C41.2105 16.774 41.0854 17.0947 40.8351 17.3449C40.5887 17.5913 40.227 17.7125 39.748 17.7125C39.3199 17.7125 38.9679 17.5913 38.6923 17.3449C38.4205 17.0947 38.2856 16.774 38.2856 16.383V10.5332C38.2856 9.47545 38.0314 8.61713 37.527 7.9602C37.0265 7.30327 36.2366 6.97481 35.1573 6.97481C34.8328 6.97481 34.4535 7.0491 34.0155 7.19378C33.5815 7.34042 33.1592 7.57504 32.7486 7.89764C32.3419 8.22219 31.9998 8.6406 31.7241 9.15676C31.4523 9.66901 31.3174 10.2986 31.3174 11.0493V16.383C31.3174 16.774 31.1923 17.0947 30.942 17.3449C30.6957 17.5913 30.3418 17.7125 29.8784 17.7125C29.419 17.7125 29.0514 17.5913 28.7757 17.3449C28.504 17.0947 28.369 16.774 28.369 16.383V2.36065C28.369 1.96962 28.5255 1.66852 28.8383 1.45346C29.155 1.24035 29.4952 1.13281 29.855 1.13281C30.2304 1.13281 30.5666 1.24035 30.8638 1.45346C31.1649 1.66852 31.3174 1.96962 31.3174 2.36065V5.84864C32.0154 5.25036 32.7408 4.86129 33.4915 4.68337C34.2423 4.50154 34.9344 4.40965 35.5718 4.40965Z" fill="white" fillOpacity="0.4"/>
                  <path d="M48.5336 4.41016C49.8983 4.41016 51.0949 4.69756 52.1233 5.27042C53.1498 5.84524 53.9455 6.6449 54.5086 7.67135C55.0717 8.69389 55.3532 9.88849 55.3532 11.2532C55.3376 12.5886 55.0423 13.7597 54.4695 14.7646C53.8947 15.7715 53.1009 16.5595 52.0842 17.1265C51.0675 17.6895 49.8827 17.9711 48.5336 17.9711C47.2041 17.9711 46.0252 17.6895 44.9987 17.1265C43.9703 16.5595 43.1707 15.7715 42.5978 14.7646C42.0289 13.7597 41.7375 12.5886 41.7219 11.2532C41.7219 9.88849 42.0054 8.69389 42.5743 7.67135C43.1472 6.6449 43.9449 5.84524 44.9674 5.27042C45.9939 4.69756 47.1826 4.41016 48.5336 4.41016ZM48.5336 15.4059C49.695 15.4059 50.6217 15.0227 51.31 14.2563C52.0021 13.486 52.3501 12.4849 52.3501 11.2532C52.3501 9.99212 52.0021 8.96566 51.31 8.17187C50.6217 7.37417 49.695 6.97532 48.5336 6.97532C47.3918 6.97532 46.469 7.37417 45.7651 8.17187C45.0652 8.96566 44.7172 9.99212 44.7172 11.2532C44.7172 12.4849 45.0652 13.486 45.7651 14.2563C46.469 15.0227 47.3918 15.4059 48.5336 15.4059Z" fill="white" fillOpacity="0.4"/>
                </svg>
              </span>
            </div>
            <div className="flex flex-col items-center w-full">
              <h3 className="text-[22px] font-bold text-[#184C3A] mb-2 text-center">OrthoSync™</h3>
              <div className="text-[16px] font-bold text-[#184C3A] mb-3 text-center">Aligner Treatment Management</div>
              <p className="text-[15px] text-[#184C3A] text-center font-normal leading-snug">A powerful tool for doctors to manage the entire aligner journey—from case uploads and plan approvals to phased shipments and retainer tracking. Kindly login to access the same.</p>
            </div>
          </div>
          <div className="flex-1 bg-[#F8FAF9] rounded-xl shadow p-8 flex flex-col items-center min-w-[220px]">
            <div className="mb-4"><span className="bg-[#184C3A] text-white px-4 py-2 rounded-full text-lg font-bold">Rx</span></div>
            <h3 className="text-xl font-bold text-[#184C3A] mb-2">RxTrack™</h3>
            <p className="text-[#184C3A] text-center">Patient Engagement Solution<br />Motivate patients with a smart rewards system that tracks compliance—after all, better plans lead to better outcomes. Kindly login to access the same.</p>
          </div>
          <div className="flex-1 bg-[#F8FAF9] rounded-xl shadow p-8 flex flex-col items-center min-w-[220px]">
            <div className="mb-4"><span className="bg-[#184C3A] text-white px-4 py-2 rounded-full text-lg font-bold">AlignMasters</span></div>
            <h3 className="text-xl font-bold text-[#184C3A] mb-2">AlignMasters™</h3>
            <p className="text-[#184C3A] text-center">Community Engagement Platform<br />An exclusive space for orthodontists to ask, share and learn—upload cases, exchange insights, and grow together. Kindly login to access the same.</p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="w-full flex flex-col items-center py-16 bg-[#F8FAF9] px-4 md:px-0">
        <div className="w-full max-w-[1240px] mx-auto">
          <h2 className="text-[32px] md:text-[36px] lg:text-[38px] font-semibold text-[#004C44] mb-8 text-left">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[50px] gap-y-[32px] justify-items-center">
            {/* Blogs Card */}
            <a href="/login" className="group block rounded-[20px] overflow-hidden shadow-md bg-white transition-transform hover:scale-[1.02] w-[595px] h-[448px]">
              <div className="relative w-full h-full">
                <img src="/blogs.png" alt="Blogs" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/80 to-transparent z-10" />
                <span className="absolute bottom-8 left-8 z-20 text-[28px] font-bold text-[#004C44]">Blogs</span>
              </div>
            </a>
            {/* Materials & Data Card */}
            <a href="/login" className="group block rounded-[20px] overflow-hidden shadow-md bg-white transition-transform hover:scale-[1.02] w-[595px] h-[448px]">
              <div className="relative w-full h-full">
                <img src="/materials&data.png" alt="Materials & Data" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/80 to-transparent z-10" />
                <span className="absolute bottom-8 left-8 z-20 text-[28px] font-bold text-[#004C44]">Materials & Data</span>
          </div>
            </a>
            {/* Research Papers Card */}
            <a href="/login" className="group block rounded-[20px] overflow-hidden shadow-md bg-white transition-transform hover:scale-[1.02] w-[595px] h-[448px]">
              <div className="relative w-full h-full">
                <img src="/researchpapers.png" alt="Research Papers" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/80 to-transparent z-10" />
                <span className="absolute bottom-8 left-8 z-20 text-[28px] font-bold text-[#004C44]">Research Papers</span>
          </div>
            </a>
            {/* Patients' FAQs Card */}
            <a href="/login" className="group block rounded-[20px] overflow-hidden shadow-md bg-white transition-transform hover:scale-[1.02] w-[595px] h-[448px]">
              <div className="relative w-full h-full">
                <img src="/faq.png" alt="Patients' FAQs" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/80 to-transparent z-10" />
                <span className="absolute bottom-8 left-8 z-20 text-[28px] font-bold text-[#004C44]">Patients' FAQs</span>
          </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 