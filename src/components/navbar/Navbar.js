"use client";

import styles from "./navbar.module.css";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Cookies from "js-cookie";
import { getOrthoSyncUrl } from "@/services/auth.js";
import Logo from "../../assets/logo.png";

function ProfileDropdown({ onLogout }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const router = useRouter();
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleLogout = () => {
    onLogout();
    window.location.href = "/welcome";
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 focus:outline-none"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="white">
          <path d="M9 9C7.01 9 5.39 7.39 5.39 5.4C5.39 3.41 7.01 1.8 9 1.8C10.99 1.8 12.61 3.41 12.61 5.4C12.61 7.39 10.99 9 9 9ZM16.2 17.2C16.22 17.42 16.32 17.62 16.49 17.77C16.66 17.92 16.87 18 17.09 18C17.63 18 18.05 17.53 18 17C17.65 13.41 15.43 10.74 12.4 9.61C13.14 9.02 13.72 8.24 14.06 7.35C14.41 6.46 14.51 5.5 14.36 4.56C14 2.2 12.03 0.31 9.65 0.04C6.36 -0.34 3.57 2.2 3.57 5.4C3.57 7.1 4.37 8.62 5.6 9.61C2.57 10.74 0.35 13.41 0 17C-0.01 17.13 0.01 17.25 0.05 17.38C0.09 17.5 0.15 17.61 0.24 17.7C0.32 17.79 0.42 17.87 0.54 17.92C0.66 17.97 0.78 18 0.91 18C1.13 18 1.34 17.92 1.51 17.77C1.68 17.62 1.78 17.42 1.8 17.2C2.16 13.18 5.25 10.8 9 10.8C12.75 10.8 15.84 13.18 16.2 17.2Z" />
        </svg>
        <svg width="20" height="20" fill="white" viewBox="0 0 20 20">
          <path
            d="M5.5 8l4.5 4 4.5-4"
            stroke="#fff"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg py-2 z-50">
          <button
            onClick={() => router.push("/profile")}
            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Profile
          </button>
          <button
            onClick={() => router.push("/settings")}
            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Settings
          </button>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);
  const productRef = useRef();
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (productRef.current && !productRef.current.contains(event.target)) {
        setProductDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOrthoSync = async () => {
    try {
      const response = await getOrthoSyncUrl();
      const url = response?.data?.orthosync_url || response?.url;
      if (url) window.open(url, "_blank");
      else console.error("URL not found in response");
    } catch (err) {
      console.error("Failed to fetch OrthoSync URL:", err);
    }
  };

  const handleLogout = () => {
    Cookies.remove("access_token");
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = "/welcome";
  };

  const navButton = (label, href) => (
    <div
      onClick={() => router.push(href)}
      className={`cursor-pointer px-3 py-2 font-medium text-white hover:font-semibold transition duration-150 ${
        pathname === href ? "font-semibold" : ""
      }`}
    >
      {label}
    </div>
  );

  return (
    <div className="fixed top-0 z-50 w-full bg-[#06201B] px-[6rem] py-4 rounded-b-3xl">
      <div className="flex items-center justify-between container mx-auto">
        <div className="flex items-center gap-8">
          {isLoggedIn ? (
            <>
              {navButton("Home", "/home")}
              {navButton("RxTrack™", "/rxtrack")}
              <div
                onClick={handleOrthoSync}
                className="cursor-pointer px-3 py-2 font-medium text-white hover:font-semibold transition duration-150"
              >
                OrthoSync™
              </div>
              {navButton("Reward Program", "/reward-program")}
              {navButton("AlignMasters™", "/alignmasters")}
              {navButton("E-Shop", "/e-shop")}
              <div className="h-6 w-px bg-white opacity-40 mx-4" />
              <ProfileDropdown onLogout={handleLogout} />
            </>
          ) : (
            <>
              {navButton("Home", "/welcome")}
              <div className="relative" ref={productRef}>
                <button
                  type="button"
                  onClick={() => setProductDropdown(!productDropdown)}
                  className="text-white flex items-center gap-1 md:px-2 py-1 md:rounded-md focus:outline-none cursor-pointer"
                >
                  Product
                  <svg
                    className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                      productDropdown ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {productDropdown && (
                  <div className="absolute left-0 top-full mt-1 min-w-[200px] bg-white rounded-[20px] shadow-lg py-2 z-50 border border-gray-300">
                    <button
                      type="button"
                      className="block w-full text-left px-4 py-2 text-[#004C44] font-semibold"
                      onMouseDown={() => {
                        setProductDropdown(false);
                        router.push("/aligners");
                      }}
                    >
                      Aligners
                    </button>
                  </div>
                )}
              </div>
              {navButton("Education", "/education")}
              {navButton("About us", "/aboutus")}
              {navButton("Careers", "/careers")}
              <div className="h-6 w-px bg-white opacity-40 mx-4" />
              <button
                onClick={() => router.push("/login")}
                className="px-6 py-2 bg-[var(--primary)] text-white font-bold rounded-xl shadow-md transition cursor-pointer text-base"
              >
                Login
              </button>
            </>
          )}
        </div>
        <Image
          src={Logo}
          width={120}
          height={45}
          alt="Logo"
          className="h-[2.8125rem] object-contain"
        />
      </div>
    </div>
  );
}
