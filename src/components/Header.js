import { NavLink } from "react-router-dom";
import "./Header.css";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

import Logo from '../assets/Logo.png'
// import "./Menu.css";
// import { slide as Menu } from "react-burger-menu";

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/" className="logo-link">
        <img
          className="logo-img"
          src={Logo}
          alt="logo"
        />
      </NavLink>
      {/* <img
          className="logo-img"
          src="../../public/logo.png"
          
        /> */}

      <Navbar />
      {/* <Menu>
        <NavLink to="/">work</NavLink>
      </Menu> */}

<div id="menu-div">
        <SideBar pageWrapid={"page-wrap"} outerContainer={"Header"} />
      </div>
    </header>
  );
};

export default Header;
