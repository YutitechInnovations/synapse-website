"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  const pathname = usePathname();
  const showLoginButton = ["/", "/login", "/signup", "/aboutus"].includes(pathname);
  return (
    <footer className="w-full items-center justify-items-center">
      <div className="bg-[#004C44] p-[20px] md:py-[50px] md:py-0 w-full  gap-[50px]">
        <div className="container mx-auto flex flex-col md:flex-row justify-between text-white space-y-8 md:space-y-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Left Section */}
          <div className="mb-6 md:mb-10 w-full md:w-[365px] lg:w-[300px] col-span-2 md:col-span-3 lg:col-span-1">
            <h2 className="text-2xl font-bold">SYNAPSE</h2>
            <p className="mt-5 text-lg md:text-xl font-normal">
              Bringing technology and expertise in orthodontic solutions.
            </p>
            {showLoginButton && (
              <Link href="/coming-soon" key="footer-login">
                <button className="mt-8 px-10 py-4 bg-white text-[var(--primary)] font-semibold rounded-lg shadow-md hover:bg-gray-100 transition cursor-pointer">
                  Login
                </button>
              </Link>
            )}
          </div>

          {/* Quick Links Section */}
          <div className="mb-6 md:mb-0 text-base w-full md:w-auto">
            <h3 className="font-bold">Quick Links</h3>
            <ul className="mt-[13px] flex flex-col font-normal">
              <li className="mt-[13px]">
                <Link href="/" key="footer-home" className="hover:underline">Home</Link>
              </li>
              <li className="mt-[13px]">
                <Link href="/coming-soon" key="footer-education" className="hover:underline">Education</Link>
              </li>
              <li className="mt-[13px]">
                <Link href="/coming-soon" key="footer-community" className="hover:underline">Community</Link>
              </li>
              <li className="mt-[13px]">
                <Link href="/coming-soon" key="footer-eshop" className="hover:underline">E-Shop</Link>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="mb-6 md:mb-0 text-base w-full md:w-auto">
            <h3 className="font-bold">Services</h3>
            <ul className="mt-[13px] flex flex-col font-normal">
              <li className="mt-[13px]">
                <Link href="/coming-soon" key="footer-smile-analysis" className="hover:underline">Smile Analysis</Link>
              </li>
              <li className="mt-[13px]">
                <Link href="/coming-soon" key="footer-patient-management" className="hover:underline">Patient Management</Link>
              </li>
              <li className="mt-[13px]">
                <Link href="/coming-soon" key="footer-doctor-rewards" className="hover:underline">Doctor Rewards</Link>
              </li>
              <li className="mt-[13px]">
                <Link href="/coming-soon" key="footer-patient-rewards" className="hover:underline">Patient Rewards</Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="mb-6 md:mb-0 text-base w-full md:w-auto">
            <h3 className="font-bold">Contact Us</h3>
            <ul className="mt-[13px] flex flex-col font-normal">
              <li className="mt-[13px]">Email: info@synapse.com</li>
              <li className="mt-[13px]">Phone: +1 (555) 123-4567</li>
              <li className="mt-[13px]">Address: 123 Education St, Learning City</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full h-auto md:h-[108px] px-5 md:px-25 pt-[30px] pb-[52px]">
        <p className="text-sm font-normal text-center md:text-left">
          &copy; 2025 Synapse. All rights reserved.
        </p>
        <div className="flex space-x-5 mt-4 md:mt-0">
          <Link href="/coming-soon" key="footer-privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/coming-soon" key="footer-terms" className="hover:underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
