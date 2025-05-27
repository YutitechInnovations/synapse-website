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
  const isMinimalPage = !isLoggedIn && (pathname === "/" || pathname === "/login" || pathname === "/signup" || pathname === "/aboutus" || pathname === "/education");
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
          </div>

          {/* Mobile menu */}
          <div
            className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center fixed md:static top-0 left-0 w-full h-full md:w-auto md:h-auto bg-[#F8FAF9] md:bg-transparent rounded-none md:rounded-none z-50 transition-all duration-300`}
            style={{}}
          >
            <ul className="flex flex-col md:flex-row items-start justify-start pt-8 space-y-8 md:space-y-0 md:space-x-4 md:gap-[1.875rem] p-8 md:p-0 w-full md:w-auto h-full md:h-auto">
              {/* Home link */}
              <li className="w-full md:w-auto text-left font-semibold text-[18px] md:text-base text-[#195B48] md:text-white md:font-normal md:text-center">
                <NavLink href="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
              </li>
              {/* Product dropdown */}
              <li
                className="relative w-full md:w-auto text-left font-semibold text-[18px] md:text-base text-[#195B48] md:text-white md:font-normal md:text-center group"
                ref={productRef}
                onMouseEnter={() => setProductDropdown(true)}
                onMouseLeave={() => setProductDropdown(false)}
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
                  className={`$${productDropdown ? 'block' : 'hidden'} md:absolute left-0 top-full min-w-[140px] bg-white shadow-lg rounded-md py-2 z-50 group-hover:block`}
                  style={{ display: productDropdown ? 'block' : 'none' }}
                >
                  <a
                    href="/aligners"
                    className="block px-4 py-2 text-[#195B48] hover:bg-[#195B48] hover:text-white transition-colors rounded-md"
                  >
                    Aligners
                  </a>
                </div>
              </li>
              {/* Education link */}
              <li className="w-full md:w-auto text-left font-semibold text-[18px] md:text-base text-[#195B48] md:text-white md:font-normal md:text-center">
                <NavLink href="/education" onClick={() => setIsMenuOpen(false)}>Education</NavLink>
              </li>
              {/* Render the rest of the links */}
              {links.filter(link => !['/', '/education'].includes(link.href)).map((link) => (
                <li key={link.href} className="w-full md:w-auto text-left font-semibold text-[18px] md:text-base text-[#195B48] md:text-white md:font-normal md:text-center">
                  <NavLink href={link.href} onClick={() => setIsMenuOpen(false)}>{link.label}</NavLink>
                </li>
              ))}
              {/* Login button for mobile view */}
              {!isLoggedIn && (
                <li className="block md:hidden w-full mt-8">
                  <a href="/login">
                    <button className="w-full py-3 bg-[var(--primary)] text-white font-bold rounded-xl shadow-md transition cursor-pointer text-[18px]" style={{marginTop: '8px'}}>
                      Login
                    </button>
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Desktop right side: Login or Profile */}
          <span className="hidden md:block" style={{ marginLeft: '30px', marginRight: '30px', color: 'white', fontSize: '24px', fontWeight: 300, userSelect: 'none' }}>|</span>
          <div className="hidden md:flex items-center">
            {!isLoggedIn ? (
              <a href="/login">
                <button className="px-6 py-2 bg-[var(--primary)] text-white font-bold rounded-xl shadow-md transition cursor-pointer text-base">
                  Login
                </button>
              </a>
            ) : (
              <ProfileDropdown onLogout={logout} />
            )}
          </div>

          <Image
            src="/images/logo.png"
            width={120}
            height={45}
            alt="Logo"
            className="h-[2.8125rem] object-contain ml-auto"
          />
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
