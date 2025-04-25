const RewardSection = () => {
  const rewardHistory = [
    {
      date: '2025 - 04 - 05',
      description: 'Case completion: Patient #A12345',
      type: 'Earned',
      points: '+ 250 pts'
    },
    {
      date: '2025 - 04 - 05',
      description: 'Case completion: Patient #B54321',
      type: 'Earned',
      points: '+ 250 pts'
    },
    {
      date: '2025 - 04 - 05',
      description: 'Referral bonus: Dr.Smith',
      type: 'Earned',
      points: '+ 500 pts'
    },
    {
      date: '2025 - 04 - 05',
      description: 'Product purchase: Orthodontic Instrument Set',
      type: 'Redeemed',
      points: '- 400 pts'
    },
    {
      date: '2025 - 04 - 05',
      description: 'Case completion: Patient #C98765',
      type: 'Earned',
      points: '+ 250 pts'
    },
    {
      date: '2025 - 04 - 05',
      description: 'Referral bonus: Dr.Smith',
      type: 'Earned',
      points: '+ 500 pts'
    },
    {
      date: '2025 - 04 - 05',
      description: 'Annual loyalty bonus',
      type: 'Earned',
      points: '+ 400 pts'
    }
  ];

  return (
    <>
      <div className="bg-[#FCF7FF] px-56 py-34">
        <div className="max-w-[1200px] mx-auto px-8">
          <h1 className="text-[#006D38] text-[46px] leading-[1.2] font-semibold font-sora">Doctor Reward Program</h1>
          <p className="text-[#006D38] text-[20px] leading-[1.4] mt-3 font-poppins">Track your reward points, redeem them for products, and view your reward history.</p>
        </div>
      </div>

      <section className="max-w-[1200px] mx-auto px-8 py-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-white rounded-xl border border-[#006D38]/20">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-[#006D38] text-[16px] font-medium mb-1">Current Balance</h3>
                <p className="text-[#006D38]/70 text-[14px]">Available reward points</p>
              </div>
              <svg className="w-6 h-6 text-[#006D38]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="7" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 15V23M8 19H16" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <p className="text-[#006D38] text-[32px] leading-[1.2] font-semibold mt-4">1250 pts</p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-[#006D38]/20">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-[#006D38] text-[16px] font-medium mb-1">Total Earned</h3>
                <p className="text-[#006D38]/70 text-[14px]">Lifetime points</p>
              </div>
              <svg className="w-6 h-6 text-[#006D38]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M3 15L9 9L15 15L21 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-[#006D38] text-[32px] leading-[1.2] font-semibold mt-4">1650 pts</p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-[#006D38]/20">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-[#006D38] text-[16px] font-medium mb-1">Total Redeemed</h3>
                <p className="text-[#006D38]/70 text-[14px]">Points used for rewards</p>
              </div>
              <svg className="w-6 h-6 text-[#006D38]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-[#006D38] text-[32px] leading-[1.2] font-semibold mt-4">400 pts</p>
          </div>
        </div>

        <div>
          <h2 className="text-[#006D38] text-[24px] leading-[1.2] font-semibold mb-6 font-sora">Reward History</h2>
          <div className="bg-white rounded-xl overflow-hidden border border-[#006D38]/20">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#006D38]/10">
                  <th className="text-left py-4 px-6 text-[#006D38] text-[14px] font-medium">Date</th>
                  <th className="text-left py-4 px-6 text-[#006D38] text-[14px] font-medium">Description</th>
                  <th className="text-left py-4 px-6 text-[#006D38] text-[14px] font-medium">Type</th>
                  <th className="text-right py-4 px-6 text-[#006D38] text-[14px] font-medium">Points</th>
                </tr>
              </thead>
              <tbody>
                {rewardHistory.map((item, index) => (
                  <tr key={index} className="border-b border-[#006D38]/10">
                    <td className="py-4 px-6 text-[#006D38] text-[14px]">{item.date}</td>
                    <td className="py-4 px-6 text-[#006D38] text-[14px]">{item.description}</td>
                    <td className="py-4 px-6">
                      <span className={`inline-block px-4 py-1 rounded-full text-[14px] font-medium ${
                        item.type === 'Earned' ? 'bg-[#006D38]/10 text-[#006D38]' : 'bg-[#FF6B6B]/10 text-[#FF6B6B]'
                      }`}>
                        {item.type}
                      </span>
                    </td>
                    <td className={`py-4 px-6 text-right text-[14px] ${
                      item.type === 'Earned' ? 'text-[#006D38]' : 'text-[#FF6B6B]'
                    }`}>{item.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mt-8">
            <button className="px-8 py-2.5 border border-[#006D38] text-[#006D38] rounded-lg text-[14px] font-medium hover:bg-[#006D38]/5 transition-colors">
              Load More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default RewardSection; 