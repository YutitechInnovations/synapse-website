'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Education', href: '/education' },
  { label: 'Smile Analysis', href: '/smile-analysis' },
  { label: 'OrthoSync', href: '/orthosync' },
  { label: 'Reward Program', href: '/reward-program' },
  { label: 'Community', href: '/community' },
  { label: 'E-Shop', href: '/e-shop' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-purple-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/home" className="text-[#47126B] font-bold text-xl">
              SYNAPSE
            </Link>
            
            <div className="hidden md:block ml-10">
              <div className="flex space-x-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      pathname === item.href
                        ? 'text-[#47126B] bg-purple-200'
                        : 'text-[#47126B] hover:bg-purple-200'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <Link
              href="/login"
              className="bg-[#47126B] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-800"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 