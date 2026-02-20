import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        closeMenu();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""} ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar--logo">
        <img src="./images/logo1.jpeg" alt="Logo" style={{ borderRadius: '30%' }} />
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
        aria-label="Toggle navigation"
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          {[
            { to: "heroSection", label: "Home" },
            { to: "AboutMe", label: "About Me" },
            { to: "Projects", label: "Projects" },
            { to: "Skills", label: "Expertise" },
            { to: "Contact", label: "Contact Me" },
          ].map(({ to, label }) => (
            <li key={to}>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to={to}
                className="navbar--content"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <a href="https://my.newtonschool.co/api/v1/user/astomar6396/resume/?latex=true" target="_blank" rel="noreferrer">
        <button className="btn btn-outline-primary">
          View Resume
        </button>
      </a>
    </nav>
  );
}

export default Navbar;