"use client";

import NavLink from "../navlink/NavLink.js";
import styles from "./navbar.module.css";
import { usePathname, useRouter } from "next/navigation";
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
  const router = useRouter();
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleLogout = () => {
    onLogout();
    // Set the URL to root before reloading
    window.location.href = '/';
  };

  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen((v) => !v)} className="flex items-center gap-2 focus:outline-none">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M9.00058 8.99997C7.00528 8.99997 5.38349 7.38537 5.38349 5.39998C5.38349 3.41458 7.00528 1.79998 9.00058 1.79998C10.9959 1.79998 12.6177 3.41458 12.6177 5.39998C12.6177 7.38537 10.9959 8.99997 9.00058 8.99997ZM12.399 9.60565C13.1426 9.01352 13.7161 8.23494 14.061 7.34917C14.406 6.46339 14.5101 5.50202 14.3628 4.56293C14.0055 2.20223 12.0327 0.313179 9.65038 0.0377791C6.36358 -0.34292 3.57539 2.20408 3.57539 5.39998C3.57539 7.10097 4.36739 8.61655 5.60218 9.60565C2.56739 10.7405 0.351593 13.4055 0.00419362 17.0018C-0.0079528 17.128 0.00635723 17.2553 0.0462025 17.3756C0.0860478 17.4959 0.150555 17.6065 0.2356 17.7005C0.320644 17.7944 0.424353 17.8695 0.540099 17.9211C0.655845 17.9726 0.781081 17.9995 0.907797 18C1.12991 18.0017 1.34468 17.9206 1.51 17.7722C1.67533 17.6239 1.77929 17.4191 1.80149 17.1981C2.16419 13.1814 5.25389 10.8 9.00058 10.8C12.7473 10.8 15.837 13.1814 16.1997 17.1981C16.2219 17.4191 16.3258 17.6239 16.4912 17.7722C16.6565 17.9206 16.8713 18.0017 17.0934 18C17.6298 18 18.0474 17.5337 17.9961 17.0018C17.6496 13.4055 15.4338 10.7405 12.3981 9.60565" fill="white"/>
        </svg>
        <svg width="20" height="20" fill="white" viewBox="0 0 20 20"><path d="M5.5 8l4.5 4 4.5-4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg py-2 z-50">
          <a href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</a>
          <a href="/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Settings</a>
          <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">Logout</button>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn, login, logout } = useMockAuth();
  console.log('isLoggedIn:', isLoggedIn, 'mockLoggedIn:', typeof window !== 'undefined' && localStorage.getItem('mockLoggedIn'), 'pathname:', pathname);
  // Dropdown state for Product (move up)
  const [productDropdown, setProductDropdown] = useState(false);
  const productRef = useRef();
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event) {
      if (productRef.current && !productRef.current.contains(event.target)) {
        setProductDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleProductClick = (e) => {
    e.preventDefault();
    setProductDropdown(!productDropdown);
  };

  // Only render after login state is known
  if (isLoggedIn === undefined) return null;

  const minimalLinks = [
    { href: "/", label: "Home" },
    { href: "/education", label: "Education" },
    { href: "/aboutus", label: "About us" },
    { href: "/careers", label: "Careers" },
  ];
  const figmaLinks = [
    { href: "/home", label: "Home" },
    { href: "/rxtrack", label: "RxTrack™" },
    { href: "/orthosync", label: "OrthoSync™" },
    { href: "/reward-program", label: "Reward Program" },
    { href: "/alignmasters", label: "AlignMasters™" },
    { href: "/e-shop", label: "E-Shop" },
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
                {/* Post-login: Home, RxTrack, OrthoSync, Doctor Reward Program, AlignMasters, E-Shop, divider, user, logo */}
                {isLoggedIn ? (
                  <>
                    <li className="text-left font-semibold text-[18px] md:text-base text-[#195B48] md:text-white md:font-normal md:text-center md:ml-0">
                      <NavLink href="/home">Home</NavLink>
                    </li>
                    <li className="text-left font-semibold text-[18px] md:text-base text-[#195B48] md:text-white md:font-normal md:text-center md:ml-[30px]">
                      <NavLink href="/rxtrack">RxTrack™</NavLink>
                    </li>
                    <li className="text-left font-semibold text-[18px] md:text-base text-[#195B48] md:text-white md:font-normal md:text-center md:ml-[30px]">
                      <NavLink href="/orthosync">OrthoSync™</NavLink>
                    </li>
                    <li className="text-left font-semibold text-[18px] md:text-base text-[#195B48] md:text-white md:font-normal md:text-center md:ml-[30px]">
                      <NavLink href="/reward-program">Reward Program</NavLink>
                    </li>
                    <li className="text-left font-semibold text-[18px] md:text-base text-[#195B48] md:text-white md:font-normal md:text-center md:ml-[30px]">
                      <NavLink href="/alignmasters">AlignMasters™</NavLink>
                    </li>
                    <li className="text-left font-semibold text-[18px] md:text-base text-[#195B48] md:text-white md:font-normal md:text-center md:ml-[30px]">
                      <NavLink href="/e-shop">E-Shop</NavLink>
                    </li>
                    {/* Divider */}
                    <li className="flex items-center md:ml-[30px] mx-2">
                      <span className="block h-6 w-px bg-white opacity-40"></span>
                    </li>
                    {/* User profile dropdown */}
                    <li className="flex items-center md:ml-[30px]">
                      <ProfileDropdown onLogout={logout} />
                    </li>
                  </>
                ) : (
                  // Not logged in: minimal links and login button
                  <>
                    <li className="text-left font-semibold text-[18px] md:text-base text-[#195B48] md:text-white md:font-normal md:text-center md:ml-0">
                      <NavLink href="/">Home</NavLink>
                  </li>
                    {/* Product dropdown for not-logged-in users */}
                    <li
                      className="relative text-left font-semibold text-[18px] md:text-base text-[#195B48] md:text-white md:font-normal md:text-center md:ml-[30px]"
                      ref={productRef}
                    >
                      <button
                        type="button"
                        className="flex items-center gap-1 md:px-2 py-1 md:rounded-md focus:outline-none cursor-pointer"
                        onClick={handleProductClick}
                      >
                        Product
                        <svg 
                          className={`ml-1 w-4 h-4 transition-transform duration-200 ${productDropdown ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {productDropdown && (
                        <div
                          className="absolute left-0 top-full mt-1 min-w-[200px] bg-white rounded-lg shadow-lg py-2 z-50"
                          style={{
                            border: '1px solid #195B48',
                          }}
                        >
                          <button
                            type="button"
                            className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100 transition-colors duration-150 font-semibold"
                            onMouseDown={() => {
                              console.log('Aligners button clicked');
                              setProductDropdown(false);
                              router.push('/aligners');
                            }}
                          >
                            Aligners
                          </button>
                        </div>
                      )}
                    </li>
                    {links.filter(link => link.href !== "/").map((link, idx) => (
                      <li key={link.href} className={`text-left font-semibold text-[18px] md:text-base text-[#195B48] md:text-white md:font-normal md:text-center md:ml-[30px]`}>
                        <NavLink href={link.href}>{link.label}</NavLink>
                      </li>
                    ))}
                    <li className="flex items-center md:ml-[30px] mx-2">
                      <span className="block h-6 w-px bg-white opacity-40"></span>
                    </li>
                    <li className="flex items-center md:ml-[30px]">
                        <a href="/login">
                          <button className="px-6 py-2 bg-[var(--primary)] text-white font-bold rounded-xl shadow-md transition cursor-pointer text-base ml-2">
                            Login
                          </button>
                        </a>
                      </li>
                    </>
                  )}
              </ul>
            </div>
            {/* Mobile menu and nav links */}
            <div
              className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden flex-col items-center fixed top-0 left-0 w-full h-full bg-[#F8FAF9] rounded-none z-50 transition-all duration-300 min-w-0`}
            >
              <ul className="flex flex-col items-start justify-start pt-8 space-y-8 p-8 w-full h-full min-w-0">
                {isLoggedIn ? (
                  <>
                    {/* Post-login mobile menu items */}
                    <li className="w-full text-left font-semibold text-[18px] text-[#195B48]">
                      <NavLink href="/home" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                    </li>
                    <li className="w-full text-left font-semibold text-[18px] text-[#195B48]">
                      <NavLink href="/rxtrack" onClick={() => setIsMenuOpen(false)}>RxTrack™</NavLink>
                    </li>
                    <li className="w-full text-left font-semibold text-[18px] text-[#195B48]">
                      <NavLink href="/orthosync" onClick={() => setIsMenuOpen(false)}>OrthoSync™</NavLink>
                    </li>
                    <li className="w-full text-left font-semibold text-[18px] text-[#195B48]">
                      <NavLink href="/reward-program" onClick={() => setIsMenuOpen(false)}>Reward Program</NavLink>
                    </li>
                    <li className="w-full text-left font-semibold text-[18px] text-[#195B48]">
                      <NavLink href="/alignmasters" onClick={() => setIsMenuOpen(false)}>AlignMasters™</NavLink>
                    </li>
                    <li className="w-full text-left font-semibold text-[18px] text-[#195B48]">
                      <NavLink href="/e-shop" onClick={() => setIsMenuOpen(false)}>E-Shop</NavLink>
                    </li>
                    {/* Vertical separator */}
                    <li className="flex items-center mx-2">
                      <span className="block h-6 w-px bg-[#195B48] opacity-40"></span>
                    </li>
                    {/* Profile and Logout */}
                    <li className="w-full text-left font-semibold text-[18px] text-[#195B48]">
                      <NavLink href="/profile" onClick={() => setIsMenuOpen(false)}>Profile</NavLink>
                    </li>
                    <li className="w-full text-left font-semibold text-[18px] text-[#195B48]">
                      <NavLink href="/settings" onClick={() => setIsMenuOpen(false)}>Settings</NavLink>
                    </li>
                    <li className="w-full">
                      <button 
                        onClick={() => {
                          logout();
                          setIsMenuOpen(false);
                          window.location.href = '/';
                        }} 
                        className="w-full py-3 bg-[var(--primary)] text-white font-bold rounded-xl shadow-md transition cursor-pointer text-[18px] hover:bg-[#195B48]/90"
                      >
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    {/* Pre-login mobile menu items */}
                    <li className="w-full text-left font-semibold text-[18px] text-[#195B48]">
                      <NavLink href="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                    </li>
                    {/* Product dropdown for mobile */}
                    <li
                      className="relative w-full text-left font-semibold text-[18px] text-[#195B48]"
                      ref={productRef}
                    >
                      <button
                        type="button"
                        className="flex items-center gap-1 py-1 focus:outline-none"
                        onClick={handleProductClick}
                      >
                        Product
                        <svg 
                          className={`ml-1 w-4 h-4 transition-transform duration-200 ${productDropdown ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {productDropdown && (
                        <div
                          className="mt-1 min-w-[140px] bg-[#004c4494] rounded-lg shadow-lg py-2"
                          style={{
                            border: '1px solid #195B48',
                          }}
                        >
                          <button
                            type="button"
                            className="block w-full text-left px-4 py-2 text-black font-bold hover:bg-gray-100"
                            onMouseDown={() => {
                              console.log('Aligners button clicked (mobile)');
                              setProductDropdown(false);
                              router.push('/aligners');
                            }}
                          >
                            Aligners
                          </button>
                        </div>
                      )}
                    </li>
                    <li className="w-full text-left font-semibold text-[18px] text-[#195B48]">
                      <NavLink href="/education" onClick={() => setIsMenuOpen(false)}>Education</NavLink>
                    </li>
                    <li className="w-full text-left font-semibold text-[18px] text-[#195B48]">
                      <NavLink href="/aboutus" onClick={() => setIsMenuOpen(false)}>About us</NavLink>
                    </li>
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
                  </>
                )}
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
