"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from '../../assets/logo.png'

const leftLinks = [
  { label: "OrthoSync™", href: "/orthosync" },
  { label: "RxTrack™", href: "/rxtrack" },
  { label: "AlignMasters™", href: "/alignmasters" },
  { label: "E-Shop", href: "/e-shop" },
];
const rightLinks = [
  { label: "Home", href: "/" },
  { label: "Education", href: "/education" },
  { label: "FAQs", href: "/faq" },
  { label: "Careers", href: "/careers" },
];

const Footer = () => {
  const pathname = usePathname();
  const showLoginButton = [
    "/",
    "/careers",
    "/signup",
    "/aboutus",
    "/education",
    "/aligners",
    "/aligners-biosmart-sm",
    "/aligners-biosmart-t",
    "/e-shop",
    "/login",
  ].includes(pathname);
  return (
    <footer className="w-full bg-[#004C44]">
      <div className="w-full max-w-[85rem] mx-auto flex flex-col md:flex-row justify-between items-center md:items-center md:gap-12 px-4 md:px-12 py-8">
        {/* Left: Logo and tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-6 md:mb-0 w-full md:w-1/3 md:max-w-xs">
          <Image
            src={Logo}
            alt="Synapse Logo"
            width={160}
            height={40}
            className="mb-4 mx-auto md:mx-0"
          />
          <p className="text-white text-lg mb-4 mx-auto md:mx-0 break-words truncate whitespace-normal">
            Bridging technology and expertise.
          </p>
          {showLoginButton && (
            <a
              href="/login"
              className="w-full flex justify-center md:justify-start"
            >
              <button className="bg-white text-[#08544A] font-semibold rounded-lg px-16 py-2 shadow-md hover:bg-gray-100 transition cursor-pointer text-lg">
                Login
              </button>
            </a>
          )}
        </div>
        {/* Center: Quick Links */}
        <div className="flex flex-col items-center md:items-center text-center md:text-left mb-6 md:mb-0 w-full md:w-1/3">
          <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
          <div className="flex flex-col md:flex-row gap-2 md:gap-16 w-full md:w-auto items-center md:items-start">
            <ul className="space-y-2 text-base font-normal">
              {leftLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white no-underline hover:underline hover:text-[#7fdcc9] transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="space-y-2 text-base font-normal">
              {rightLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white no-underline hover:underline hover:text-[#7fdcc9] transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Right: Contact Us */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right w-full md:w-1/3">
          <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
          <div>
            <p className="text-white text-base mb-1">+1 (555) 123-4567</p>
            <p className="text-white text-base mb-1">contact@synapse.com</p>
            <p className="text-white text-base">
              123 Technology Drive,
              <br />
              Suite 400 San
              <br />
              Francisco, CA 94107
            </p>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="w-full bg-white mt-0 py-4">
        <div className="w-full max-w-[85rem] mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-12">
          <p className="text-[#08544A] text-sm text-center md:text-left mb-2 md:mb-0">
            © 2025 Synapse. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-0 md:mt-0">
            <a
              href="/privacy-policy"
              className="text-[#08544A] text-sm hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-[#08544A] text-sm hover:underline"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
