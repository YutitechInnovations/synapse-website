import RewardSection from '@/components/Rewards/RewardSection';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

export default function RewardsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F8F8F8]">
        <RewardSection />
      </main>
      <Footer />
    </>
  );
} 