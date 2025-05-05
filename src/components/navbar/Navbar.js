"use client";

import NavLink from "../navlink/NavLink.js";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMinimalPage = pathname === "/" || pathname === "/login" || pathname === "/signup" || pathname === "/aboutus" || pathname === "/education";

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Home, signup, login pages links
  const minimalLinks = [
    { href: "/", label: "Home" },
    { href: "/education", label: "Education" },
    { href: "/aboutus", label: "About us" },
    { href: "/careers", label: "Careers" },
  ];

  // Figma design links
  const figmaLinks = [
    { href: "/", label: "Home" },
    { href: "/rxtrack", label: "RxTrack" },
    { href: "/orthosync", label: "OrthoSync" },
    { href: "/reward-program", label: "Doctor Reward Program" },
    { href: "/alignmasters", label: "AlignMasters" },
    { href: "/e-shop", label: "E-Shop" },
    { href: "/careers", label: "Careers" },
  ];

  const links = isMinimalPage ? minimalLinks : figmaLinks;

  return (
    <>
      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
      <div className="flex items-center justify-center w-full fixed top-0 z-50 bg-transparent px-[1.5625rem]">
        <nav className={`${styles.navbar} flex items-center justify-between w-full relative`}>
          <div className="flex items-center gap-[1.875rem]">
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              type="button"
            >
              <span className="block w-7 h-1 bg-white rounded mb-1"></span>
              <span className="block w-7 h-1 bg-white rounded mb-1"></span>
              <span className="block w-7 h-1 bg-white rounded"></span>
            </button>
            <div className="hidden md:flex flex-col gap-1">
              <span className="block w-7 h-1 bg-white rounded"></span>
              <span className="block w-7 h-1 bg-white rounded"></span>
              <span className="block w-7 h-1 bg-white rounded"></span>
            </div>
          </div>

          {/* Mobile menu */}
          <div
            className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center fixed md:static top-0 left-0 w-full h-full md:w-auto md:h-auto bg-[#F8FAF9] md:bg-transparent rounded-none md:rounded-none z-50 transition-all duration-300`}
            style={{}}
          >
            <ul className="flex flex-col md:flex-row items-start justify-start pt-8 space-y-8 md:space-y-0 md:space-x-4 md:gap-[1.875rem] p-8 md:p-0 w-full md:w-auto h-full md:h-auto">
            {links.map((link) => (
                <li key={link.href} className="w-full md:w-auto text-left font-semibold text-[18px] md:text-base text-[#195B48] md:text-white md:font-normal md:text-center">
                  <NavLink href={link.href} onClick={() => setIsMenuOpen(false)}>{link.label}</NavLink>
            </li>
            ))}
            {/* Login button for mobile view */}
            <li className="block md:hidden w-full mt-8">
              <a href="/login">
                <button className="w-full py-3 bg-[var(--primary)] text-white font-bold rounded-xl shadow-md transition cursor-pointer text-[18px]" style={{marginTop: '8px'}}>
                  Login
                </button>
              </a>
            </li>
          </ul>
        </div>

          <div className="flex items-center justify-center h-[2.8125rem] ml-auto">
          <img
            src="/images/logo.png"
            alt="Logo"
              className="h-[2.8125rem] object-contain"
          />
        </div>
      </nav>
    </div>
      {/* Add top padding to main content for mobile so it's not hidden behind navbar */}
      <style jsx global>{`
        @media (max-width: 768px) {
          main {
            padding-top: 4.5rem !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
