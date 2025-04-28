"use client";

import NavLink from "../navlink/NavLink.js";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  const landingPageLinks = [
    { href: "/", label: "Home" },
    { href: "/education", label: "Education" },
    { href: "/aboutus", label: "About Us" },
  ];

  const otherPageLinks = [
    { href: "/", label: "Home" },
    { href: "/education", label: "Education" },
    { href: "/smile-analysis", label: "Smile Analysis" },
    { href: "/orthosync", label: "OrthoSync" },
    { href: "/reward-program", label: "Doctor Reward Program" },
    { href: "/community", label: "Community" },
    { href: "/e-shop", label: "E-Shop" },
  ];

  const links = isLandingPage ? landingPageLinks : otherPageLinks;

  return (
    <div className="flex items-center justify-center w-full fixed top-0 z-50 bg-transparent px-25">
      <nav
        className={`${styles.navbar} flex items-center justify-start w-full`}
      >
        <img src="/svgs/hamburger.svg" />
        <div
          className="w-[32px] h-[0px] border-bottom-white "
          style={{
            transform: "rotate(90deg)",
          }}
        ></div>
        <div className="flex item-center w-full justify-between">
          <ul className="flex space-x-4 items-center gap-[30px] flex-1">
            {links.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
          {/* <NavLink className="btn-primary cmnbtn" href="/login">
            Login
          </NavLink> */}
        </div>
        <div className="flex items-center justify-center h-[45px] ml-auto">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-[45px] object-contain"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
