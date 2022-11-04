import { useRef } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./navbar.css";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import LOGO from "../../assets/logodark.png";

export default function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  return (
    <div className="nav-container">
      <nav className="container nav">
        <Link to="/" className="logo">
          <img src={LOGO} alt="logo" />
        </Link>

        <ul ref={navRef}>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/alcoholicDrinks">Alcoholic Drinks</CustomLink>
          <CustomLink to="/nonAlcoholicDrinks">Non-Alcoholic Drinks</CustomLink>

          <button className="nav-btn close-nav" onClick={showNavbar}>
            <AiOutlineClose />
          </button>
        </ul>

        <div className="nav-icons">
          <Link to="/login">
            <span className="profile">
              <FaUserAlt />
            </span>
          </Link>
          <Link to="/cart">
            <span>
              <FaShoppingCart />
              <span className="cart-number">1</span>
            </span>
          </Link>
        </div>

        <button className="nav-btn open-nav" onClick={showNavbar}>
          <GiHamburgerMenu />
        </button>
      </nav>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
