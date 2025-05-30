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

function ProfileDropdownWithSVG({ onLogout }) {
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
        <span className="flex items-center justify-center w-7 h-7">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.00058 8.99997C7.00528 8.99997 5.38349 7.38537 5.38349 5.39998C5.38349 3.41458 7.00528 1.79998 9.00058 1.79998C10.9959 1.79998 12.6177 3.41458 12.6177 5.39998C12.6177 7.38537 10.9959 8.99997 9.00058 8.99997ZM12.399 9.60565C13.1426 9.01352 13.7161 8.23494 14.061 7.34917C14.406 6.46339 14.5101 5.50202 14.3628 4.56293C14.0055 2.20223 12.0327 0.313179 9.65038 0.0377791C6.36358 -0.34292 3.57539 2.20408 3.57539 5.39998C3.57539 7.10097 4.36739 8.61655 5.60218 9.60565C2.56739 10.7405 0.351593 13.4055 0.00419362 17.0018C-0.0079528 17.128 0.00635723 17.2553 0.0462025 17.3756C0.0860478 17.4959 0.150555 17.6065 0.2356 17.7005C0.320644 17.7944 0.424353 17.8695 0.540099 17.9211C0.655845 17.9726 0.781081 17.9995 0.907797 18C1.12991 18.0017 1.34468 17.9206 1.51 17.7722C1.67533 17.6239 1.77929 17.4191 1.80149 17.1981C2.16419 13.1814 5.25389 10.8 9.00058 10.8C12.7473 10.8 15.837 13.1814 16.1997 17.1981C16.2219 17.4191 16.3258 17.6239 16.4912 17.7722C16.6565 17.9206 16.8713 18.0017 17.0934 18C17.6298 18 18.0474 17.5337 17.9961 17.0018C17.6496 13.4055 15.4338 10.7405 12.3981 9.60565" fill="white"/>
          </svg>
        </span>
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
  const links = isLoggedIn ? figmaLinks : minimalLinks;

  return (
    <>
      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
      <div className="flex items-center justify-center w-full fixed top-0 z-50 bg-transparent px-4 sm:px-6 md:px-8">
        <nav className={`${styles.navbar} flex items-center justify-between w-full relative`} style={isLoggedIn ? {backgroundColor: '#004C44B2', borderRadius: '1.25rem'} : {}}>
          {isLoggedIn ? (
            // POST-LOGIN NAVBAR
            <>
              <ul className="flex flex-wrap items-center gap-4 md:gap-10 flex-1 m-0 p-0 list-none text-sm md:text-base">
                <li><NavLink href="/home" className={pathname === '/home' ? 'font-bold' : ''}>Home</NavLink></li>
                <li><NavLink href="/rxtrack" className={pathname === '/rxtrack' ? 'font-bold' : ''}>RxTrack™</NavLink></li>
                <li><NavLink href="/orthosync" className={pathname === '/orthosync' ? 'font-bold' : ''}>OrthoSync™</NavLink></li>
                <li><NavLink href="/reward-program" className={pathname === '/reward-program' ? 'font-bold' : ''}>Reward Program</NavLink></li>
                <li><NavLink href="/alignmasters" className={pathname === '/alignmasters' ? 'font-bold' : ''}>AlignMasters™</NavLink></li>
                <li><NavLink href="/e-shop" className={pathname === '/e-shop' ? 'font-bold' : ''}>E-Shop</NavLink></li>
                <li className="hidden md:flex items-center justify-center"><span style={{display: 'inline-block', height: '32px', width: '1px', background: 'rgba(255,255,255,0.4)', margin: '0 24px'}}></span></li>
                <li className="relative"><ProfileDropdownWithSVG onLogout={logout} /></li>
              </ul>
              <div className="flex items-center ml-auto">
                <Image
                  src="/images/logo.png"
                  width={120}
                  height={45}
                  alt="Logo"
                  className="h-10 object-contain"
                />
              </div>
            </>
          ) : (
            // PRE-LOGIN MINIMAL NAVBAR
            <>
              <ul className="flex flex-wrap items-center gap-2 sm:gap-4 md:gap-8 text-sm md:text-base">
                <li><NavLink href="/">Home</NavLink></li>
                <li className="relative group" ref={productRef} onMouseEnter={() => setProductDropdown(true)} onMouseLeave={() => setProductDropdown(false)}>
                  <button
                    type="button"
                    className="flex items-center gap-1 px-2 py-1 rounded-md transition-colors focus:outline-none"
                    style={{ background: 'none', color: 'inherit', boxShadow: 'none' }}
                    onClick={() => setProductDropdown((v) => !v)}
                  >
                    Products
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {/* Dropdown menu */}
                  <div
                    className={`${productDropdown ? 'block' : 'hidden'} absolute left-0 top-full bg-[#004c4494] rounded-md py-2 z-50 group-hover:block shadow-lg min-w-[120px] w-full`}
                  >
                    <a
                      href="/aligners"
                      className="block px-4 py-2 text-white hover:bg-[#195B48] hover:text-white transition-colors rounded-md text-center"
                    >
                      Aligners
                    </a>
                  </div>
                </li>
                <li><NavLink href="/education">Education</NavLink></li>
                <li><NavLink href="/aboutus">About Us</NavLink></li>
                <li><NavLink href="/careers">Careers</NavLink></li>
                <li className="hidden sm:flex" style={{marginLeft: '30px', marginRight: '30px', height: '32px', alignItems: 'center'}}>
                  <span style={{display: 'inline-block', width: '1px', height: '32px', background: 'rgba(255,255,255,0.7)'}}></span>
                </li>
                <li className="hidden sm:block" style={{marginRight: '30px'}}>
                  <a href="/login">
                    <button className="px-4 py-2 bg-[#003C36] text-white font-bold rounded-xl shadow-md transition cursor-pointer text-sm md:text-base">
                      Login
                    </button>
                  </a>
                </li>
              </ul>
              <div className="flex items-center">
                <Image
                  src="/images/logo.png"
                  width={120}
                  height={45}
                  alt="Logo"
                  className="h-10 object-contain"
                />
              </div>
            </>
          )}
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
