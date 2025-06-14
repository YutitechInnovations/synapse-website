"use client";

import Navbar from "@/components/Navbar/Navbar";

export default function RewardProgram() {
  const rewardHistory = [
    {
      date: "2025 - 04 - 05",
      description: "Case completion: Patient #A12345",
      type: "Earned",
      points: "+ 250 pts",
    },
    {
      date: "2025 - 04 - 05",
      description: "Case completion: Patient #B54321",
      type: "Earned",
      points: "+ 250 pts",
    },
    {
      date: "2025 - 04 - 05",
      description: "Referral bonus: Dr. Smith",
      type: "Earned",
      points: "+ 500 pts",
    },
    {
      date: "2025 - 04 - 05",
      description: "Product purchase: Orthodontic Instrument Set",
      type: "Redeemed",
      points: "- 400 pts",
    },
    {
      date: "2025 - 04 - 05",
      description: "Case completion: Patient #C98765",
      type: "Earned",
      points: "+ 250 pts",
    },
    {
      date: "2025 - 04 - 05",
      description: "Referral bonus: Dr. Smith",
      type: "Earned",
      points: "+ 500 pts",
    },
    {
      date: "2025 - 04 - 05",
      description: "Annual loyalty bonus",
      type: "Earned",
      points: "+ 400 pts",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF9]">
      <Navbar />
      <main className="flex-grow w-full pt-[100px]">
        <div className="max-w-screen-lg mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl leading-[1.2] font-semibold text-[#004C44] text-center mt-20 md:mt-40 mb-4">
            Doctor Reward Program
          </h1>
          <p className="text-center text-base sm:text-lg md:text-xl text-[#004C44] mt-4 mb-8 md:mb-16">
            Track your reward points, redeem them for products, and view your
            reward history.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-16">
            <div className="bg-white rounded-xl border border-[#006D38]/20 p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-[14px] font-medium text-[#006D38] mb-1">
                    Current Balance
                  </h3>
                  <p className="text-[14px] text-[#006D38]/70">
                    Available reward points
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <svg
                    width="25"
                    height="34"
                    viewBox="0 0 25 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.54252 16.1034C2.89992 16.4608 3.09727 16.9355 3.09727 17.441V19.1092C3.09727 20.7401 4.42415 22.067 6.05509 22.067H6.18844V32.4661C6.18844 32.6581 6.29113 32.8341 6.45782 32.9301C6.62451 33.0248 6.82853 33.0235 6.9939 32.9248L12.3322 29.7483L17.6705 32.9248C17.7545 32.9755 17.8491 32.9995 17.9438 32.9995C18.0345 32.9995 18.1252 32.9768 18.2079 32.9301C18.3746 32.8355 18.4772 32.6581 18.4772 32.4661V22.067H18.6106C20.2415 22.067 21.5684 20.7402 21.5684 19.1092V17.441C21.5684 16.9356 21.7658 16.4608 22.1232 16.1034L23.302 14.9246C24.4555 13.7711 24.4555 11.8948 23.302 10.7412L22.1232 9.56237C21.7711 9.21033 21.5684 8.72225 21.5684 8.22481V6.55655C21.5684 4.92564 20.2415 3.59874 18.6106 3.59874H16.9423C16.4369 3.59874 15.9622 3.40137 15.6048 3.04398L14.4259 1.86514C13.2724 0.711621 11.3948 0.711621 10.2412 1.86514L9.06237 3.04398C8.70497 3.40138 8.23023 3.59874 7.72481 3.59874H6.05655C4.42564 3.59874 3.09874 4.92561 3.09874 6.55655V8.22481C3.09874 8.72221 2.89604 9.21029 2.54398 9.56237L1.36514 10.7412C0.211621 11.8947 0.211621 13.771 1.36514 14.9246L2.54398 16.1034L2.54252 16.1034ZM17.4103 31.53L12.6056 28.6709C12.4376 28.5709 12.2282 28.5709 12.0602 28.6709L7.25548 31.53V22.0685H7.72489C8.23031 22.0685 8.70504 22.2658 9.06244 22.6219L10.2413 23.8021C10.8174 24.3795 11.5748 24.6676 12.3336 24.6676C13.0911 24.6676 13.8485 24.3795 14.4259 23.8021L15.6048 22.6219C15.9622 22.2645 16.4369 22.0685 16.9423 22.0685H17.4118V31.53H17.4103ZM2.11852 11.4947L3.29736 10.3158C3.85611 9.75709 4.16418 9.0143 4.16418 8.22351V6.55525C4.16418 5.51242 5.01232 4.66427 6.05516 4.66427H7.72342C8.51288 4.66427 9.257 4.35623 9.81575 3.79746L10.9946 2.61861C11.7321 1.88115 12.9322 1.88115 13.6697 2.61861L14.8485 3.79746C15.4073 4.3562 16.1501 4.66427 16.9408 4.66427H18.6091C19.6519 4.66427 20.5001 5.51242 20.5001 6.55525V8.22351C20.5001 9.01297 20.8081 9.75709 21.3669 10.3158L22.5457 11.4947C23.2832 12.2322 23.2832 13.4323 22.5457 14.1698L21.3669 15.3486C20.8082 15.9074 20.5001 16.6501 20.5001 17.4409V19.1092C20.5001 20.152 19.6519 21.0002 18.6091 21.0002H17.953C17.949 21.0002 17.9463 20.9975 17.9423 20.9975C17.9383 20.9975 17.9357 21.0002 17.9317 21.0002H16.9395C16.1501 21.0002 15.4059 21.3082 14.8472 21.867L13.6683 23.0472C12.9309 23.7846 11.7307 23.7846 10.9933 23.0472L9.81441 21.867C9.25567 21.3082 8.51288 21.0002 7.72209 21.0002H6.72995C6.72594 21.0002 6.72328 20.9975 6.71928 20.9975C6.71528 20.9975 6.71261 21.0002 6.70861 21.0002H6.0525C5.00966 21.0002 4.16152 20.152 4.16152 19.1092V17.4409C4.16152 16.6515 3.85347 15.9074 3.2947 15.3486L2.11585 14.1698C1.37839 13.4323 1.37839 12.2321 2.11585 11.4947H2.11852Z"
                      fill="#9B87F5"
                      stroke="#9B87F5"
                      strokeWidth="0.3"
                    />
                    <path
                      d="M12.3321 19.3893C15.9487 19.3893 18.8905 16.4474 18.8905 12.8309C18.8905 9.21427 15.9487 6.27246 12.3321 6.27246C8.71549 6.27246 5.77368 9.21427 5.77368 12.8309C5.77368 16.4474 8.71549 19.3893 12.3321 19.3893ZM12.3321 7.34066C15.3592 7.34066 17.8236 9.80371 17.8236 12.8322C17.8236 15.8594 15.3606 18.3238 12.3321 18.3238C9.30493 18.3238 6.84052 15.8607 6.84052 12.8322C6.84052 9.80507 9.30356 7.34066 12.3321 7.34066Z"
                      fill="#9B87F5"
                      stroke="#9B87F5"
                      strokeWidth="0.3"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-[32px] leading-[1.2] font-semibold text-[#006D38] mt-3">
                1250 pts
              </p>
            </div>

            <div className="bg-white rounded-xl border border-[#006D38]/20 p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-[14px] font-medium text-[#006D38] mb-1">
                    Total Earned
                  </h3>
                  <p className="text-[14px] text-[#006D38]/70">
                    Lifetime points points
                  </p>
                </div>
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M37.2448 36.4885H13.5128V12.7564C13.5128 12.3391 13.1736 12 12.7564 12C12.3391 12 12 12.3391 12 12.7564V37.2436C12 37.6609 12.3391 38 12.7564 38H37.2436C37.6609 38 38 37.6609 38 37.2436C38.0013 36.8263 37.6621 36.4885 37.2448 36.4885Z"
                    fill="#22C55D"
                  />
                  <path
                    d="M17.163 31.6477C17.5197 31.8658 17.9849 31.7536 18.203 31.3981L21.1074 26.6545H29.082C29.3745 26.6545 29.6405 26.4856 29.7653 26.2209L33.8482 17.5844L34.0361 18.0659C34.1874 18.4554 34.626 18.6471 35.0156 18.4958C35.4051 18.3445 35.5967 17.9058 35.4454 17.5163L34.5781 15.2938C34.4269 14.9043 33.9882 14.7127 33.5986 14.864L31.3762 15.7313C30.9867 15.8826 30.7951 16.3212 30.9463 16.7108C31.0976 17.1003 31.5363 17.2919 31.9258 17.1406L32.4881 16.9213L28.6016 25.1405H20.6825C20.4191 25.1405 20.1745 25.2779 20.0371 25.5023L16.9121 30.6076C16.694 30.9631 16.8062 31.4296 17.163 31.6477Z"
                    fill="#22C55D"
                  />
                </svg>
              </div>
              <p className="text-[32px] leading-[1.2] font-semibold text-[#006D38] mt-3">
                1650 pts
              </p>
            </div>

            <div className="bg-white rounded-xl border border-[#006D38]/20 p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-[14px] font-medium text-[#006D38] mb-1">
                    Total Redeemed
                  </h3>
                  <p className="text-[14px] text-[#006D38]/70">
                    Points used for rewards
                  </p>
                </div>
                <svg
                  width="26"
                  height="28"
                  viewBox="0 0 26 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.12007 28H22.8799C24.6004 28 26 26.5953 26 24.8687V10.2564C26 8.52973 24.6004 7.12507 22.8799 7.12507H18.089C19.3851 6.54422 20.2899 5.2416 20.2899 3.72493C20.2896 1.66756 18.6281 0 16.5781 0C14.8654 0 13.4273 1.16604 12.9998 2.74929C12.5721 1.16604 11.134 0 9.42129 0C7.37162 0 5.70975 1.66756 5.70975 3.72493C5.70975 5.2416 6.61462 6.54422 7.9107 7.12507H3.12007C1.39962 7.12507 0 8.52973 0 10.2564V24.8687C0 26.5953 1.39962 28 3.12007 28ZM3.12007 26.9562C1.9731 26.9562 1.04002 26.0198 1.04002 24.8687V13.5613H10.1256V26.9562H3.12007ZM11.1656 8.16885H14.8338V12.5176H11.1656V8.16885ZM14.8338 13.5613V26.7823H11.1656V13.5613H14.8338ZM24.9597 24.8687C24.9597 26.0198 24.0266 26.9562 22.8796 26.9562H15.8738V13.5613H24.9597V24.8687ZM22.8796 8.16885C24.0266 8.16885 24.9597 9.10529 24.9597 10.2564V12.5176H15.8738V8.16885H22.8796ZM13.9066 3.72493C13.9066 2.24653 15.105 1.04378 16.5781 1.04378C18.0512 1.04378 19.2496 2.24653 19.2496 3.72493C19.2496 5.20333 18.0512 6.40609 16.5781 6.40609H13.9066V3.72493ZM6.74978 3.72493C6.74978 2.24653 7.94821 1.04378 9.42129 1.04378C10.8944 1.04378 12.0928 2.24653 12.0928 3.72493V6.40609H9.42129C7.94821 6.40609 6.74978 5.20333 6.74978 3.72493ZM1.04002 10.2564C1.04002 9.10529 1.9731 8.16885 3.12007 8.16885H10.1259V12.5176H1.04002V10.2564Z"
                    fill="#F59E0C"
                  />
                </svg>
              </div>
              <p className="text-[32px] leading-[1.2] font-semibold text-[#006D38] mt-3">
                400 pts
              </p>
            </div>
          </div>

          <div className="mb-8 md:mb-16">
            <h2 className="text-lg sm:text-xl md:text-2xl leading-[1.2] font-semibold text-[#004C44] mb-4 md:mb-6">
              Reward History
            </h2>
            <div className="bg-white rounded-xl border border-[#004C44]/20 overflow-x-auto">
              <table className="w-full border-spacing-0 min-w-[600px]">
                <thead>
                  <tr>
                    <th className="text-left py-4 px-6 text-[14px] font-medium text-[#004C44] border-b border-[#004C44]/10">
                      Date
                    </th>
                    <th className="text-left py-4 px-6 text-[14px] font-medium text-[#004C44] border-b border-[#004C44]/10">
                      Description
                    </th>
                    <th className="text-left py-4 px-6 text-[14px] font-medium text-[#004C44] border-b border-[#004C44]/10">
                      Type
                    </th>
                    <th className="text-left py-4 px-6 text-[14px] font-medium text-[#004C44] border-b border-[#004C44]/10">
                      Points
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rewardHistory.map((item, index) => (
                    <tr key={index}>
                      <td className="py-4 px-6 text-[14px] text-[#004C44] border-b border-[#004C44]/10">
                        {item.date}
                      </td>
                      <td className="py-4 px-6 text-[14px] text-[#004C44] border-b border-[#004C44]/10">
                        {item.description}
                      </td>
                      <td className="py-4 px-6 border-b border-[#004C44]/10">
                        <span
                          className={`inline-block px-4 py-1 rounded-full text-[14px] font-medium ${
                            item.type === "Earned"
                              ? "bg-[#22C55D]/10 text-[#22C55D]"
                              : "bg-[#F59E0C]/10 text-[#F59E0C]"
                          }`}
                        >
                          {item.type}
                        </span>
                      </td>
                      <td
                        className={`py-4 px-6 text-[14px] font-medium border-b border-[#004C44]/10 ${
                          item.type === "Earned"
                            ? "text-[#22C55D]"
                            : "text-[#F59E0C]"
                        }`}
                      >
                        {item.points}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="p-4 text-center">
                <button className="px-4 sm:px-8 py-2.5 border border-[#004C44] text-[#004C44] rounded-lg text-[14px] font-medium hover:bg-[#004C44]/5 transition-colors">
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
