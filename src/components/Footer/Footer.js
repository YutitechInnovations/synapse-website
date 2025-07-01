"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getOrthoSyncUrl } from "@/services/auth.js";

const leftLinks = [
  { label: "OrthoSync™", href: "/orthosync" },
  { label: "RₓTrack™", href: "/rxtrack" },
  { label: "AlignMasters™", href: "/alignmasters" },
  { label: "E-Shop", href: "/e-shop" },
];

const rightLinksStatic = [
  { label: "Education", href: "/education" },
  { label: "FAQs", href: "/faq" },
];

const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [approvalChecked, setApprovalChecked] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const updateLoginStatus = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };
    setHasMounted(true);
    updateLoginStatus();
    window.addEventListener("storage", updateLoginStatus);
    return () => {
      window.removeEventListener("storage", updateLoginStatus);
    };
  }, []);

  useEffect(() => {
    if (!isLoggedIn || approvalChecked) return;
    // Check if we already have approval status in localStorage
    const storedApproval = localStorage.getItem("userApproved");
    if (storedApproval !== null) {
      setIsApproved(storedApproval === "true");
      setApprovalChecked(true);
      return;
    }
    // Fallback: not approved
    setIsApproved(false);
    setApprovalChecked(true);
  }, [isLoggedIn, approvalChecked]);

  if (!hasMounted) return null;

  const homeLink = { label: "Home", href: isLoggedIn ? "/home" : "/welcome" };
  const aboutUsLink = { label: "About Us", href: "/aboutus" };
  
  // For pre-login users, add contact us section link instead of careers
  const contactUsLink = { label: "Contact Us", href: "/welcome#contact-us" };
  
  const rightLinks = isLoggedIn 
    ? [homeLink, aboutUsLink, ...rightLinksStatic]
    : [homeLink, contactUsLink, ...rightLinksStatic];

  const showLoginButton = [
    "/welcome",
    "/signup",
    
    "/login",
  ].includes(pathname);

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
          if (message && message.toLowerCase().includes("admin approval required")) {
            toast.error("Synapse Admin Approval Required");
          } else {
            toast.error(message || "Unable to open OrthoSync. Please try again.");
          }
        } else {
          toast.error("Synapse Admin Approval Required");
        }
      }
    } catch (err) {
      console.log(err);
      const errorMessage =
        err?.response?.data?.message || err?.message || "Something went wrong";
      toast.error(errorMessage);
    }
  };

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
              {leftLinks.map((link) => {
                // Special handling for approval-restricted links
                const isRestricted = ["/rxtrack", "/alignmasters", "/e-shop"].includes(link.href);
                if (link.href === "/orthosync") {
                  return (
                    <li key={link.href}>
                      {isLoggedIn ? (
                        <button
                          onClick={handleOrthoSync}
                          className="text-left text-white no-underline hover:underline hover:text-[#7fdcc9] transition-colors duration-150 cursor-pointer"
                        >
                          {link.label}
                        </button>
                      ) : (
                        <a
                          href="/login"
                          className="text-white no-underline hover:underline hover:text-[#7fdcc9] transition-colors duration-150 cursor-pointer"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  );
                } else if (isRestricted) {
                  return (
                    <li key={link.href}>
                      {isLoggedIn ? (
                        isApproved ? (
                          <a
                            href={link.href}
                            className="text-white no-underline hover:underline hover:text-[#7fdcc9] transition-colors duration-150 cursor-pointer"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <button
                            onClick={() => toast.error("Synapse Admin Approval Required")}
                            className="text-left text-white no-underline hover:underline hover:text-[#7fdcc9] transition-colors duration-150 cursor-pointer"
                          >
                            {link.label}
                          </button>
                        )
                      ) : (
                        <a
                          href="/login"
                          className="text-white no-underline hover:underline hover:text-[#7fdcc9] transition-colors duration-150 cursor-pointer"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  );
                } else {
                  return (
                    <li key={link.href}>
                      <a
                        href={isLoggedIn ? link.href : "/login"}
                        className="text-white no-underline hover:underline hover:text-[#7fdcc9] transition-colors duration-150 cursor-pointer"
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                }
              })}
            </ul>
            <ul className="space-y-2 text-base font-normal">
              {rightLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white no-underline hover:underline hover:text-[#7fdcc9] transition-colors duration-150 cursor-pointer"
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
          <div className="text-white text-base leading-relaxed space-y-1">
            <p>
              <span className="font-semibold">
                Toll Free Number:
              </span>{" "}
              1800 202 3282
            </p>
            <p>
              <span className="font-semibold">
                Email ID:
              </span>{" "}
              support@synapsehealthtech.in
            </p>
            <p>
              <span className="font-semibold">
                Corporate Office Address:
              </span>{" "}
              No.10, Flex CoWorks, 2nd Floor, 71, 15th Cross Road,
              <br />
              Sarakki Industrial Layout, J P Nagar 3rd phase,
              <br />
              Bangalore – 560078,Karnataka
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
              href="/refund-policy"
              className="text-[#08544A] text-sm hover:underline"
            >
              Refund and Cancellation Policy
            </a>
            <a
              href="/shipping-policy"
              className="text-[#08544A] text-sm hover:underline"
            >
              Shipping and Delivery Policy
            </a>
            <a
              href="/privacy-policy"
              className="text-[#08544A] text-sm hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-conditions"
              className="text-[#08544A] text-sm hover:underline"
            >
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
