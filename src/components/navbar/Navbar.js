import NavLink from "../navlink/NavLink.js";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className="flex items-center justify-center w-full fixed top-0 z-50  px-25">
      <nav className={`navbar flex items-center justify-start w-full`}>
        <img src="/svgs/hamburger.svg" />
        <div
          className="w-[32px] h-[0px] border-bottom-white "
          style={{
            transform: "rotate(90deg)",
          }}
        ></div>
        <div className="flex item-center w-full justify-between">
          <ul className="flex space-x-4 items-center gap-[30px]">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/education">Education</NavLink>
            </li>
            <li>
              <NavLink href="/about">About</NavLink>
            </li>
          </ul>
          {/* <NavLink className="btn-primary cmnbtn" href="/login">
            Login
          </NavLink> */}
        </div>
        <div className="flex items-center justify-center h-[45px]">
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
