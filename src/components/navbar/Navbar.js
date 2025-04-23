import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className="flex items-center justify-center w-full fixed top-0 z-50 bg-transparent px-25">
      <nav
        className={`${styles.navbar} flex items-center justify-start w-full`}
      >
        <div className="text-2xl font-bold ">SYNAPSE</div>

        <div className="flex item-center w-full justify-between">
          <ul className="flex space-x-4 items-center">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">Education</a>
            </li>
            <li>
              <a href="/contact">About</a>
            </li>
          </ul>
          <a className="btn-primary cmnbtn" href="/login">
            Login
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
