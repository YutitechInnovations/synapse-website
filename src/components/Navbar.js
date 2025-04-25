'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Education', href: '/education' },
  { name: 'Smile Analysis', href: '/smile-analysis' },
  { name: 'OrthoSync', href: '/orthosync' },
  { name: 'Reward Program', href: '/reward-program' },
  { name: 'Community', href: '/community' },
  { name: 'E-Shop', href: '/e-shop' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="mt-[30px] px-[100px]">
      <div className="max-w-[1400px] mx-auto">
        <div className="bg-[#00BF934D] rounded-2xl px-6 py-3 flex items-center">
          <Link href="/" className="text-teal-900 font-semibold text-[24px]">
            SYNAPSE
          </Link>
          
          <div className="h-5 w-[1px] bg-teal-900/20 ml-[30px]" />

          <div className="flex items-center ml-[30px]">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-[16px] ${
                  pathname === item.href
                    ? 'text-teal-900 font-medium'
                    : 'text-teal-900/70'
                } ${
                  index === 0 ? '' : 'ml-[30px]'
                } ${
                  item.name === 'E-Shop' ? 'mr-[129px]' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Link
            href="/login"
            className="px-6 py-2 text-[16px] font-medium text-white bg-teal-700 rounded-lg ml-auto hover:bg-teal-800 transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
} 