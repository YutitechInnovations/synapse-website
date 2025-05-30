"use client";

import NavLink from "../navlink/NavLink.js";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Image from 'next/image';

// Minimal, bulletproof mock auth hook
function useMockAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  // Always call both effects
  useEffect(() => {
    setIsLoggedIn(typeof window !== 'undefined' && localStorage.getItem('mockLoggedIn') === 'true');
  }, []);
  useEffect(() => {
    if (typeof window !== 'undefined' && isLoggedIn !== undefined) {
      localStorage.setItem('mockLoggedIn', isLoggedIn ? 'true' : 'false');
    }
  }, [isLoggedIn]);
  return {
    isLoggedIn,
    login: () => setIsLoggedIn(true),
    logout: () => setIsLoggedIn(false)
  };
}

function ProfileDropdown({ onLogout }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);
  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen((v) => !v)} className="flex items-center gap-2 focus:outline-none">
        <Image src="/images/doc.jpg" width={36} height={36} alt="Profile" className="w-9 h-9 rounded-full object-cover border-2 border-white" />
        <svg width="20" height="20" fill="white" viewBox="0 0 20 20"><path d="M5.5 8l4.5 4 4.5-4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg py-2 z-50">
          <a href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</a>
          <a href="/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Settings</a>
          <button onClick={onLogout} className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">Logout</button>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn, login, logout } = useMockAuth();
  // Dropdown state for Product (move up)
  const [productDropdown, setProductDropdown] = useState(false);
  const productRef = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (productRef.current && !productRef.current.contains(e.target)) setProductDropdown(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Only render after login state is known
  if (isLoggedIn === undefined) return null;

  const minimalLinks = [
    { href: "/", label: "Home" },
    { href: "/education", label: "Education" },
    { href: "/aboutus", label: "About us" },
    { href: "/careers", label: "Careers" },
  ];
  const figmaLinks = [
    { href: "/", label: "Home" },
    { href: "/rxtrack", label: "RxTrack" },
    { href: "/orthosync", label: "OrthoSync" },
    { href: "/reward-program", label: "Doctor Reward Program" },
    { href: "/alignmasters", label: "AlignMasters" },
    { href: "/e-shop", label: "E-Shop" },
    { href: "/careers", label: "Careers" },
  ];
  const isMinimalPage = !isLoggedIn && (
    pathname === "/" ||
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/aboutus" ||
    pathname === "/education" ||
    pathname === "/aligners" ||
    pathname === "/aligners-biosmart-sm" ||
    pathname === "/aligners-biosmart-t"
  );
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
      <div className="flex items-center w-full fixed top-0 z-50 bg-transparent px-[1.5625rem] min-w-0">
        <nav className={`${styles.navbar} flex items-center w-full relative min-w-0`}>
          <div className="flex items-center flex-1 min-w-0 justify-between md:justify-start">
            {/* Hamburger for mobile */}
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
            {/* Nav links and menu */}
            <div className="hidden md:flex items-center gap-[1.875rem] min-w-0">
              <ul className="flex flex-row items-center p-0 w-auto min-w-0">
                {/* Home link */}
                <li className="text-left font-semibold text-[18px] md:text-base text-[#195B48] md:text-white md:font-normal md:text-center md:ml-0">
                  <NavLink href="/">Home</NavLink>
                </li>
                {/* Product dropdown */}
                <li
                  className="relative text-left font-semibold text-[18px] md:text-base text-[#195B48] md:text-white md:font-normal md:text-center md:ml-[30px]"
                  ref={productRef}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1 md:px-2 py-1 md:rounded-md transition-colors md:hover:bg-white/20 md:hover:text-[#195B48] focus:outline-none"
                    onClick={() => setProductDropdown((v) => !v)}
                  >
                    Product
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {/* Dropdown menu */}
                  <div
                    className={`${productDropdown ? 'block' : 'hidden'} md:absolute left-0 top-full min-w-[140px]`} style={{ background: '#004c4494', border: '1px solid #195B48', boxShadow: '0 4px 16px rgba(0,0,0,0.10)', borderRadius: '0.5rem', padding: '0.5rem 0', zIndex: 50, display: productDropdown ? 'block' : 'none' }}
                  >
                    <NavLink
                      href="/aligners"
                      className="block px-4 py-2 text-black font-bold hover:bg-[#195B48] hover:text-white transition-colors rounded-md"
                      onClick={() => setProductDropdown(false)}
                    >
                      Aligners
                    </NavLink>
                  </div>
                </li>
                {/* Education link */}
                <li className="text-left font-semibold text-[18px] md:text-base text-[#195B48] md:text-white md:font-normal md:text-center md:ml-[30px]">
                  <NavLink href="/education">Education</NavLink>
                </li>
                {/* About us link */}
                <li className="text-left font-semibold text-[18px] md:text-base text-[#195B48] md:text-white md:font-normal md:text-center md:ml-[30px]">
                  <NavLink href="/aboutus">About us</NavLink>
                </li>
                {/* Careers link */}
                <li className="text-left font-semibold text-[18px] md:text-base text-[#195B48] md:text-white md:font-normal md:text-center md:ml-[30px]">
                  <NavLink href="/careers">Careers</NavLink>
                </li>
                {/* Vertical separator */}
                <li className="flex items-center md:ml-[30px] mx-2">
                  <span className="block h-6 w-px bg-white opacity-40"></span>
                </li>
                {/* Login button */}
                <li className="flex items-center md:ml-[30px]">
                  <a href="/login">
                    <button className="px-6 py-2 bg-[var(--primary)] text-white font-bold rounded-xl shadow-md transition cursor-pointer text-base ml-2">
                      Login
                    </button>
                  </a>
                </li>
              </ul>
            </div>
            {/* Mobile menu and nav links */}
            <div
              className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden flex-col items-center fixed top-0 left-0 w-full h-full bg-[#F8FAF9] rounded-none z-50 transition-all duration-300 min-w-0`}
            >
              <ul className="flex flex-col items-start justify-start pt-8 space-y-8 p-8 w-full h-full min-w-0">
                {/* Home link */}
                <li className="w-full text-left font-semibold text-[18px] text-[#195B48]">
                  <NavLink href="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                </li>
                {/* Product dropdown */}
                <li
                  className="relative w-full text-left font-semibold text-[18px] text-[#195B48] group"
                  ref={productRef}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1 py-1 transition-colors focus:outline-none"
                    onClick={() => setProductDropdown((v) => !v)}
                  >
                    Product
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {/* Dropdown menu */}
                  {productDropdown && (
                    <div className="block min-w-[140px]" style={{ background: '#004c4494', border: '1px solid #195B48', boxShadow: '0 4px 16px rgba(0,0,0,0.10)', borderRadius: '0.5rem', padding: '0.5rem 0', zIndex: 50 }}>
                      <NavLink
                        href="/aligners"
                        className="block px-4 py-2 text-black font-bold hover:bg-[#195B48] hover:text-white transition-colors rounded-md"
                        onClick={() => { setIsMenuOpen(false); setProductDropdown(false); }}
                      >
                        Aligners
                      </NavLink>
                    </div>
                  )}
                </li>
                {/* Education link */}
                <li className="w-full text-left font-semibold text-[18px] text-[#195B48]">
                  <NavLink href="/education" onClick={() => setIsMenuOpen(false)}>Education</NavLink>
                </li>
                {/* About us link */}
                <li className="w-full text-left font-semibold text-[18px] text-[#195B48]">
                  <NavLink href="/aboutus" onClick={() => setIsMenuOpen(false)}>About us</NavLink>
                </li>
                {/* Careers link */}
                <li className="w-full text-left font-semibold text-[18px] text-[#195B48]">
                  <NavLink href="/careers" onClick={() => setIsMenuOpen(false)}>Careers</NavLink>
                </li>
                {/* Vertical separator */}
                <li className="flex items-center mx-2">
                  <span className="block h-6 w-px bg-[#195B48] opacity-40"></span>
                </li>
                {/* Login button */}
                <li className="flex items-center w-full">
                  <a href="/login" className="block w-full">
                    <button className="w-full py-3 bg-[var(--primary)] text-white font-bold rounded-xl shadow-md transition cursor-pointer text-[18px] hover:bg-[#195B48]/90">
                      Login
                    </button>
                  </a>
                </li>
              </ul>
            </div>
            {/* Logo at the far right */}
            <div className="flex-shrink-0 flex items-center justify-end h-full ml-auto">
              <Image
                src="/images/logo.png"
                width={120}
                height={45}
                alt="Logo"
                className="h-[2.8125rem] object-contain"
              />
            </div>
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
}
