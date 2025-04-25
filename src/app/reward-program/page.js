'use client';

import RewardStats from '@/components/RewardStats';
import RewardHistory from '@/components/RewardHistory';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RewardProgram() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-teal-900 to-green-900 py-16">
          <div className="max-w-7xl mx-auto px-[100px]">
            <h1 className="text-4xl font-bold text-white text-center mb-4">
              Doctor Reward Program
            </h1>
            <p className="text-center text-white/80 mb-12">
              Track your reward points, redeem them for products, and view your reward history.
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-[100px] py-16 bg-gray-50">
          <RewardStats />
          <RewardHistory />
        </div>
      </main>
      <Footer />
    </div>
  );
} 