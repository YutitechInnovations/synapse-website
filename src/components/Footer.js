'use client';

import Link from 'next/link';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Education', href: '/education' },
  { name: 'Community', href: '/community' },
  { name: 'E-Shop', href: '/e-shop' },
];

const services = [
  { name: 'Smile Analysis', href: '/smile-analysis' },
  { name: 'Patient Management', href: '/patient-management' },
  { name: 'Doctor Rewards', href: '/reward-program' },
  { name: 'Patient Rewards', href: '/patient-rewards' },
];

export default function Footer() {
  return (
    <footer className="bg-[#F3E5FF] mt-auto">
      <div className="max-w-7xl mx-auto px-[100px] py-16">
        <div className="grid grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h2 className="text-[#4A148C] font-semibold text-lg mb-4">SYNAPSE</h2>
            {/*<p className="text-sm text-[#4A148C]/70">
              Bringing technology and expertise in orthodontic solutions.
            </p>*/}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#4A148C] font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-[#4A148C]/70 hover:text-[#4A148C]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#4A148C] font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-sm text-[#4A148C]/70 hover:text-[#4A148C]"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#4A148C] font-medium mb-2">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-sm text-[#4A148C]/70">Toll Free Number: 1800 202 3282</li>
              <li className="text-sm text-[#4A148C]/70">Email ID: support@synapsehealthtech.in</li>
              <li className="text-sm text-[#4A148C]/70">
               Corporate Office Address: No.10, Flex,
              <br />
              CoWorks, 2nd Floor, 71, 15th Cross Road,
              <br />
              Sarakki Industrial Layout, J P Nagar 3rd
              <br />
              phase, Bangalore – 560078
              <br />
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 flex items-center justify-between pt-8 border-t border-[#4A148C]/20">
          <p className="text-sm text-[#4A148C]/70">© 2025 Synapse. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-sm text-[#4A148C]/70 hover:text-[#4A148C]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-[#4A148C]/70 hover:text-[#4A148C]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 