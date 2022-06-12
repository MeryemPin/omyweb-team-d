import { slide as Menu } from "react-burger-menu";
import "./SideBar.css";

const SideBar = (props) => {
  return (
    <Menu right width={350} props={props} className="side-bar">
      <ul>
        <li className="bm-item">
          <a id="home" className="menu-item" href="/">
            Home
          </a>
        </li>
        <li className="bm-item">
          <a id="services" className="menu-item" href="/services">
            Services
          </a>
        </li>
        <li className="bm-item">
          <a id="about" className="menu-item" href="/about">
            About
          </a>
        </li>
        <li className="bm-item">
          <a id="case-studies" className="menu-item" href="/case-studies">
            Case Studies
          </a>{" "}
        </li>
        <li className="bm-item">
          <a id="blog" className="menu-item" href="/blog">
            Blog
          </a>
        </li>
        <li className="bm-item">
          <a id="careers" className="menu-item" href="/careers">
            Careers
          </a>
        </li>
        <li className="bm-item">
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
        </li>
      </ul>
    </Menu>
  );
};

export default SideBar;
