"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const leftLinks = [
  { label: "OrthoSync™", href: "/orthosync" },
  { label: "RxTrack™", href: "/rxtrack" },
  { label: "AlignMasters™", href: "/alignmasters" },
  { label: "E-Shop", href: "/e-shop" },
];

const rightLinksStatic = [
  { label: "Education", href: "/education" },
  { label: "FAQs", href: "/faq" },
  { label: "Careers", href: "/careers" },
];

const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);

    if (!hasMounted) return null;
    
  const homeLink = { label: "Home", href: isLoggedIn ? "/home" : "/welcome" };
  const rightLinks = [homeLink, ...rightLinksStatic];

  const showLoginButton = [
    "/welcome",
    "/signup",
    "/aboutus",
    "/aligners",
    "/aligners-biosmart-sm",
    "/aligners-biosmart-t",
    "/login",
  ].includes(pathname);

  return (
    <footer className="w-full bg-[#004C44]">
      <div className="w-full max-w-[85rem] mx-auto flex flex-col md:flex-row justify-between items-start px-4 md:px-12 py-10 gap-8">
        {/* Left: Logo and Login */}
        <div className="flex flex-col w-full md:w-1/3">
          <Image
            src="/images/logo.png"
            alt="Synapse Logo"
            width={200}
            height={40}
            className="mb-4"
          />
          {showLoginButton && (
            <a href="/login" className="w-full md:w-auto">
              <button className="bg-white text-[#08544A] font-semibold rounded-lg px-16 py-2 shadow-md hover:bg-gray-100 transition cursor-pointer text-lg">
                Login
              </button>
            </a>
          )}
        </div>

        {/* Center: Quick Links */}
        <div className="flex flex-col w-full md:w-1/3">
          <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
          <div className="flex flex-col md:flex-row gap-2 md:gap-16">
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

        {/* Right: Contact Info */}
        <div className="flex flex-col w-full md:w-1/3">
          <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
          <div className="text-white text-base leading-relaxed space-y-2">
            <p>
              <span className="underline">Toll Free Number:</span> 1800 202 3282
            </p>
            <p>
              <span className="underline">Email ID:</span>{" "}
              support@synapsehealthtech.in
            </p>
            <p>
              <span className="underline">Corporate Office Address:</span>
              <br />
              No.10, Flex CoWorks, 2nd Floor, 71, 15th Cross Road,
              <br />
              Sarakki Industrial Layout, J P Nagar 3rd phase,
              <br />
              Bangalore – 560078
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-white py-4">
        <div className="w-full max-w-[85rem] mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-12">
          <p className="text-[#08544A] text-sm text-center md:text-left mb-2 md:mb-0">
            © 2025 Synapse. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="/privacy"
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
