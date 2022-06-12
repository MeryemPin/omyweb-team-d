import { NavLink } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    return ( 
            <nav className='desktop-nav'>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/case-studies">Case Studies</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/careers">Careers</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
     );
}
 
export default Navbar;
