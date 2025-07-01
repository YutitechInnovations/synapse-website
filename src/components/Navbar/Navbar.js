"use client";

import styles from "./navbar.module.css";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Cookies from "js-cookie";
import { getOrthoSyncUrl } from "@/services/auth.js";
import toast from "react-hot-toast";
import { useLoader } from "@/context/LoaderContext";

// Navbar is now responsive for tablet screens. Dropdowns and menus have improved touch targets and spacing for tablets.

function ProfileDropdown({ onLogout }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const router = useRouter();
  const { withLoader } = useLoader();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleLogout = async () => {
    await withLoader(async () => {
    onLogout();
    window.location.href = "/welcome";
    }, "Signing you out...");
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 focus:outline-none cursor-pointer"
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
            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
          >
            Profile
          </button>
          {/* <button
            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Settings
          </button> */}
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 cursor-pointer"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

function MembersLoungeDropdown({ handleOrthoSync }) {
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

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="text-left font-semibold text-[18px] lg:text-base text-[#195B48] lg:text-white lg:font-normal lg:text-center lg:ml-[30px] cursor-pointer flex items-center gap-1 px-2 py-1 rounded hover:bg-white/10 transition-colors"
      >
        Members Lounge
        <svg
          className={`ml-1 w-4 h-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-3 min-w-[220px] sm:min-w-[240px] bg-white rounded-2xl shadow-lg py-2 z-50 border">
          <button
            onClick={() => {
              setOpen(false);
              router.push("/rxtrack");
            }}
            className="block w-full text-left px-8 py-2 text-[#004C44] font-semibold cursor-pointer hover:bg-gray-50"
          >
            RxTrack™
          </button>
          <button
            onClick={() => {
              setOpen(false);
              handleOrthoSync();
            }}
            className="block w-full text-left px-8 py-2 text-[#004C44] font-semibold cursor-pointer hover:bg-gray-50"
          >
            OrthoSync™
          </button>
          <button
            onClick={() => {
              setOpen(false);
              router.push("/reward-program");
            }}
            className="block w-full text-left px-8 py-2 text-[#004C44] font-semibold cursor-pointer hover:bg-gray-50"
          >
            Reward Program
          </button>
          <button
            onClick={() => {
              setOpen(false);
              router.push("/alignmasters");
            }}
            className="block w-full text-left px-8 py-2 text-[#004C44] font-semibold cursor-pointer hover:bg-gray-50"
          >
            AlignMasters™
          </button>
          <button
            onClick={() => {
              setOpen(false);
              router.push("/e-shop");
            }}
            className="block w-full text-left px-8 py-2 text-[#004C44] font-semibold cursor-pointer hover:bg-gray-50"
          >
            E-Shop
          </button>
        </div>
      )}
    </div>
  );
}

function ProductsDropdown() {
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

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="text-left font-semibold text-[18px] lg:text-base text-[#195B48] lg:text-white lg:font-normal lg:text-center lg:ml-[30px] cursor-pointer flex items-center gap-1 px-2 py-1 rounded hover:bg-white/10 transition-colors"
      >
        Products
        <svg
          className={`ml-1 w-4 h-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-3 min-w-[200px] sm:min-w-[220px] bg-white rounded-2xl shadow-lg py-2 z-50 border">
          <button
            onClick={() => {
              setOpen(false);
              router.push("/aligners");
            }}
            className="block w-full text-left px-8 py-2 text-[#004C44] font-semibold cursor-pointer hover:bg-gray-50"
          >
            Aligners
          </button>
          <button
            onClick={() => {
              setOpen(false);
              router.push("/aligners-biosmart-sm");
            }}
            className="block w-full text-left px-8 py-2 text-[#004C44] font-semibold cursor-pointer hover:bg-gray-50"
          >
            BioSmart-SM
          </button>
          <button
            onClick={() => {
              setOpen(false);
              router.push("/aligners-biosmart-t");
            }}
            className="block w-full text-left px-8 py-2 text-[#004C44] font-semibold cursor-pointer hover:bg-gray-50"
          >
            BioSmart-T
          </button>
        </div>
      )}
    </div>
  );
}

function PreLoginMembersLoungeDropdown() {
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

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="text-left font-semibold text-[18px] lg:text-base text-[#195B48] lg:text-white lg:font-normal lg:text-center lg:ml-[30px] cursor-pointer flex items-center gap-1 px-2 py-1 rounded hover:bg-white/10 transition-colors"
      >
        Members Lounge
        <svg
          className={`ml-1 w-4 h-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-3 min-w-[220px] sm:min-w-[240px] bg-white rounded-2xl shadow-lg py-2 z-50 border">
          <button
            onClick={() => {
              setOpen(false);
              router.push("/login");
            }}
            className="block w-full text-left px-8 py-2 text-[#004C44] font-semibold cursor-pointer hover:bg-gray-50"
          >
            OrthoSync™
          </button>
          <button
            onClick={() => {
              setOpen(false);
              router.push("/login");
            }}
            className="block w-full text-left px-8 py-2 text-[#004C44] font-semibold cursor-pointer hover:bg-gray-50"
          >
            RₓTrack™
          </button>
          <button
            onClick={() => {
              setOpen(false);
              router.push("/login");
            }}
            className="block w-full text-left px-8 py-2 text-[#004C44] font-semibold cursor-pointer hover:bg-gray-50"
          >
            AlignMasters™
          </button>
          <button
            onClick={() => {
              setOpen(false);
              router.push("/login");
            }}
            className="block w-full text-left px-8 py-2 text-[#004C44] font-semibold cursor-pointer hover:bg-gray-50"
          >
            E-Shop
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
  const [isLoggedIn, setIsLoggedIn] = useState(
    typeof window !== "undefined" &&
      localStorage.getItem("isLoggedIn") === "true"
  );
  const [hasMounted, setHasMounted] = useState(false);
  const { withLoader } = useLoader();
  const [isApproved, setIsApproved] = useState(
    typeof window !== "undefined" && 
    localStorage.getItem("userApproved") === "true"
  );
  const [approvalChecked, setApprovalChecked] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    setHasMounted(true);
  }, []);

  // Check approval status only once when logged in
  useEffect(() => {
    const checkApproval = async () => {
      if (!isLoggedIn || approvalChecked) return;
      
      // Check if we already have approval status in localStorage
      const storedApproval = localStorage.getItem("userApproved");
      if (storedApproval !== null) {
        setIsApproved(storedApproval === "true");
        setApprovalChecked(true);
        return;
      }

      try {
        const response = await getOrthoSyncUrl();
        // If the API returns a valid URL or status, consider approved
        if (
          (response && response.data && response.data.orthosync_url) ||
          (response && response.status !== "failed")
        ) {
          setIsApproved(true);
          localStorage.setItem("userApproved", "true");
        } else {
          setIsApproved(false);
          localStorage.setItem("userApproved", "false");
        }
      } catch (err) {
        // If error message indicates not approved, set false
        if (
          err?.response?.data?.message?.toLowerCase().includes("not approved") ||
          err?.message?.toLowerCase().includes("not approved") ||
          err?.response?.data?.message?.toLowerCase().includes("synapse admin approval required")
        ) {
          setIsApproved(false);
          localStorage.setItem("userApproved", "false");
        } else {
          // For other errors, default to not approved
          setIsApproved(false);
          localStorage.setItem("userApproved", "false");
        }
      }
      setApprovalChecked(true);
    };
    checkApproval();
  }, [isLoggedIn, approvalChecked]);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "isLoggedIn") {
        setIsLoggedIn(event.newValue === "true");
      }
    };
    // Also detect programmatic login change in the same tab
    const interval = setInterval(() => {
      const value = localStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn((prev) => {
        if (prev !== value) return value;
        return prev;
      });
    }, 500); // Checks every half second — lightweight for login state

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (productRef.current && !productRef.current.contains(event.target)) {
        setProductDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleProductClick = () => {
    setProductDropdown(!productDropdown);
  };

  const handleOrthoSync = async () => {
    try {
      const response = await getOrthoSyncUrl();
      const url = response?.data?.orthosync_url || response?.url;
      const status = response?.data?.status;
      const message = response?.data?.message;

      if (url) {
        window.open(url, "_blank");
      } else {
        if (status === "failed") {
          toast.error(message || "Unable to open OrthoSync. Please try again.");
        } else {
          toast.error("OrthoSync URL not available.");
        }
      }
    } catch (err) {
      console.log(err);
      const errorMessage =
        err?.response?.data?.message || err?.message || "Something went wrong";
    }
  };

  const handleLogout = async () => {
    await withLoader(async () => {
    Cookies.remove("access_token");
    sessionStorage.clear();
    localStorage.clear();
    localStorage.removeItem("userApproved");
    window.location.href = "/welcome";
    }, "Signing you out...");
  };

  const navButton = (label, href) => (
    <button
      onClick={() => {
        setIsMenuOpen(false);
        router.push(href);
      }}
      className="text-left font-semibold text-[18px] md:text-base text-[#195B48] md:text-white md:font-normal md:text-center md:ml-[30px] cursor-pointer"
    >
      {label}
    </button>
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!hasMounted) return null;

  return (
    <>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col text-[#004C44] p-4 sm:p-6 lg:hidden">
          {/* Close Button */}
          <div className="flex justify-end">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl sm:text-3xl font-bold text-[#004C44] p-2"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col items-start gap-4 sm:gap-6 mt-6 sm:mt-8 text-base sm:text-lg font-normal text-left">
            {isLoggedIn ? (
              <>
                <button
                  onClick={() => {
                    router.push("/home");
                    setIsMenuOpen(false);
                  }}
                  className="cursor-pointer"
                >
                  Home
                </button>
                <div className="w-full">
                  <div className="text-lg font-semibold text-[#004C44] mb-3">Products</div>
                  <div className="flex flex-col gap-3 ml-4">
                    <button
                      onClick={() => {
                        router.push("/aligners");
                        setIsMenuOpen(false);
                      }}
                      className="cursor-pointer text-left"
                    >
                      Aligners
                    </button>
                    <button
                      onClick={() => {
                        router.push("/aligners-biosmart-sm");
                        setIsMenuOpen(false);
                      }}
                      className="cursor-pointer text-left"
                    >
                      BioSmart-SM
                    </button>
                    <button
                      onClick={() => {
                        router.push("/aligners-biosmart-t");
                        setIsMenuOpen(false);
                      }}
                      className="cursor-pointer text-left"
                    >
                      BioSmart-T
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => {
                    router.push("/education");
                    setIsMenuOpen(false);
                  }}
                  className="cursor-pointer text-left"
                >
                  Education
                </button>
                {isApproved && (
                  <div className="w-full">
                    <div className="text-lg font-semibold text-[#004C44] mb-3">Members Lounge</div>
                    <div className="flex flex-col gap-3 ml-4">
                      <button
                        onClick={() => {
                          router.push("/rxtrack");
                          setIsMenuOpen(false);
                        }}
                        className="cursor-pointer text-left"
                >
                  RxTrack™
                </button>
                <button
                  onClick={() => {
                    handleOrthoSync();
                    setIsMenuOpen(false);
                  }}
                        className="cursor-pointer text-left"
                >
                  OrthoSync™
                </button>
                <button
                  onClick={() => {
                    router.push("/reward-program");
                    setIsMenuOpen(false);
                  }}
                        className="cursor-pointer text-left"
                >
                  Doctor Reward Program
                </button>
                <button
                  onClick={() => {
                    router.push("/alignmasters");
                    setIsMenuOpen(false);
                  }}
                        className="cursor-pointer text-left"
                >
                  AlignMasters™
                </button>
                <button
                  onClick={() => {
                    router.push("/e-shop");
                    setIsMenuOpen(false);
                  }}
                        className="cursor-pointer text-left"
                >
                  E-Shop
                </button>
                    </div>
                  </div>
                )}
                <button
                  onClick={() => {
                    router.push("/aboutus");
                    setIsMenuOpen(false);
                  }}
                  className="cursor-pointer"
                >
                  About Us
                </button>
                <button
                  onClick={() => {
                    router.push("/profile");
                    setIsMenuOpen(false);
                  }}
                  className="cursor-pointer"
                >
                  Profile
                </button>
                <button
                  className="w-full text-center bg-[#004C44] text-white font-bold py-3 px-4 rounded-lg shadow-md"
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    router.push("/welcome");
                    setIsMenuOpen(false);
                  }}
                  className="cursor-pointer"
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    router.push("/education");
                    setIsMenuOpen(false);
                  }}
                  className="cursor-pointer"
                >
                  Education
                </button>
                <div className="w-full">
                  <div className="text-lg font-semibold text-[#004C44] mb-3">Members Lounge</div>
                  <div className="flex flex-col gap-3 ml-4">
                <button
                  onClick={() => {
                    router.push("/login");
                    setIsMenuOpen(false);
                  }}
                      className="cursor-pointer text-left"
                >
                  OrthoSync™
                </button>
                <button
                  onClick={() => {
                    router.push("/login");
                    setIsMenuOpen(false);
                  }}
                      className="cursor-pointer text-left"
                >
                  RₓTrack™
                </button>
                <button
                  onClick={() => {
                    router.push("/login");
                    setIsMenuOpen(false);
                  }}
                      className="cursor-pointer text-left"
                >
                  AlignMasters™
                </button>
                <button
                  onClick={() => {
                    router.push("/login");
                    setIsMenuOpen(false);
                  }}
                      className="cursor-pointer text-left"
                >
                  E-Shop
                </button>
                  </div>
                </div>
                <button
                  onClick={() => {
                    router.push("/aligners");
                    setIsMenuOpen(false);
                  }}
                  className="cursor-pointer"
                >
                  Aligners
                </button>
                <button
                  onClick={() => {
                    router.push("/welcome#contact-us");
                    setIsMenuOpen(false);
                  }}
                  className="cursor-pointer"
                >
                  Contact Us
                </button>
                <button
                  className="w-full text-center bg-[#004C44] text-white font-bold py-3 px-4 rounded-lg shadow-md"
                  onClick={() => {
                    router.push("/login");
                    setIsMenuOpen(false);
                  }}
                >
                  Sign Up / Sign In
                </button>
              </>
            )}
          </div>
        </div>
      )}

      <div
        className={`fixed top-0 z-50 w-full bg-transparent ${
          isMenuOpen ? "hidden lg:block" : ""
        }`}
      >
        {" "}
        <div className="flex items-center justify-center container mx-auto min-w-0 px-4 sm:px-6 lg:px-8">
          <nav
            className={`${styles.navbar} flex items-center w-full relative min-w-0`}
          >
            <div className="flex items-center flex-1 min-w-0 justify-between lg:justify-start">
              <button
                className="lg:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                type="button"
              >
                <span className="block w-7 h-1 bg-white rounded mb-1"></span>
                <span className="block w-7 h-1 bg-white rounded mb-1"></span>
                <span className="block w-7 h-1 bg-white rounded"></span>
              </button>
              <div className="hidden lg:flex items-center gap-[1.875rem] min-w-0">
                <ul className="flex flex-row items-center p-0 w-auto min-w-0">
                  {isLoggedIn ? (
                    <>
                      <li>{navButton("Home", "/home")}</li>
                      <li>
                        <ProductsDropdown />
                      </li>
                      <li>{navButton("Education", "/education")}</li>
                      {isApproved && (
                        <li>
                          <MembersLoungeDropdown handleOrthoSync={handleOrthoSync} />
                        </li>
                      )}
                      <li>{navButton("About Us", "/aboutus")}</li>
                      <li className="flex items-center md:ml-[30px] mx-2">
                        <span className="block h-6 w-px bg-white opacity-40"></span>
                      </li>
                      <li className="flex items-center md:ml-[30px]">
                        <ProfileDropdown onLogout={handleLogout} />
                      </li>
                    </>
                  ) : (
                    <>
                      <li>{navButton("Home", "/welcome")}</li>
                      <li ref={productRef} className="md:ml-[30px] relative">
                        <button
                          type="button"
                          onClick={handleProductClick}
                          className="text-white flex items-center gap-1 md:px-2 py-1 md:rounded-md focus:outline-none cursor-pointer"
                        >
                          Products
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
                          <div className="absolute left-0 top-full mt-3 min-w-[190px] bg-white rounded-2xl shadow-lg py-2 z-50 border">
                            <button
                              type="button"
                              className="block w-full text-left px-8 py-2 text-[#004C44] font-semibold cursor-pointer"
                              onMouseDown={() => {
                                setProductDropdown(false);
                                router.push("/aligners");
                              }}
                            >
                              Aligners
                            </button>
                            <button
                              type="button"
                              className="block w-full text-left px-8 py-2 text-[#004C44] font-semibold cursor-pointer"
                              onMouseDown={() => {
                                setProductDropdown(false);
                                router.push("/aligners-biosmart-sm");
                              }}
                            >
                              BioSmart-SM
                            </button>
                            <button
                              type="button"
                              className="block w-full text-left px-8 py-2 text-[#004C44] font-semibold cursor-pointer"
                              onMouseDown={() => {
                                setProductDropdown(false);
                                router.push("/aligners-biosmart-t");
                              }}
                            >
                              BioSmart-T
                            </button>
                          </div>
                        )}
                      </li>
                      <li>{navButton("Education", "/education")}</li>
                      <li>
                        <PreLoginMembersLoungeDropdown />
                      </li>
                      <li>{navButton("Contact Us", "/welcome#contact-us")}</li>
                      <li className="flex items-center md:ml-[30px] mx-2">
                        <span className="block h-6 w-px bg-white opacity-40"></span>
                      </li>
                      <li className="flex items-center md:ml-[30px]">
                        <button
                          onClick={() => router.push("/login")}
                          className="px-5.5 py-2 bg-[var(--primary)] text-white font-bold rounded-xl shadow-md transition cursor-pointer text-base ml-2"
                        >
                          Login
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
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
      </div>
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
