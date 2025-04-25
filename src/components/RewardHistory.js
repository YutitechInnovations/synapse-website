const rewardHistoryData = [
  {
    date: '2025 - 04 - 05',
    description: 'Case completion: Patient #A12345',
    type: 'Earned',
    points: '+250'
  },
  {
    date: '2025 - 04 - 05',
    description: 'Case completion: Patient #B54321',
    type: 'Earned',
    points: '+250'
  },
  {
    date: '2025 - 04 - 05',
    description: 'Referral bonus: Dr. Smith',
    type: 'Earned',
    points: '+500'
  },
  {
    date: '2025 - 04 - 05',
    description: 'Product purchase: Orthodontic Instrument Set',
    type: 'Redeemed',
    points: '-400'
  },
  {
    date: '2025 - 04 - 05',
    description: 'Case completion: Patient #C98765',
    type: 'Earned',
    points: '+250'
  },
  {
    date: '2025 - 04 - 05',
    description: 'Referral bonus: Dr. Smith',
    type: 'Earned',
    points: '+500'
  },
  {
    date: '2025 - 04 - 05',
    description: 'Annual loyalty bonus',
    type: 'Earned',
    points: '+400'
  }
];

export default function RewardHistory() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-[#4A148C] mb-6">Reward History</h2>
      
      <div className="bg-white rounded-xl border border-purple-100 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-purple-100">
              <th className="px-6 py-4 text-left text-sm font-medium text-[#4A148C]/70">Date</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-[#4A148C]/70">Description</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-[#4A148C]/70">Type</th>
              <th className="px-6 py-4 text-right text-sm font-medium text-[#4A148C]/70">Points</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-purple-100">
            {rewardHistoryData.map((item, index) => (
              <tr key={index} className="hover:bg-purple-50/30">
                <td className="px-6 py-4 text-sm text-[#4A148C]">{item.date}</td>
                <td className="px-6 py-4 text-sm text-[#4A148C]">{item.description}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    item.type === 'Earned' 
                      ? 'bg-green-100/50 text-green-700' 
                      : 'bg-orange-100/50 text-orange-700'
                  }`}>
                    {item.type}
                  </span>
                </td>
                <td className={`px-6 py-4 text-sm text-right font-medium ${
                  item.type === 'Earned' ? 'text-green-600' : 'text-orange-600'
                }`}>
                  {item.points} pts
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="px-6 py-4 border-t border-purple-100">
          <button className="w-full text-center text-sm font-medium text-[#4A148C] hover:text-[#4A148C]/80">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
} 