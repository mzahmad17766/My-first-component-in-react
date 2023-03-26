import {Link } from 'react-router-dom';
import logo from "./logo.jpg";

export default function Navbar(props) {
  return (
    <ul>
    <Link to="/">
        <img src={logo}alt='logo' style={{width:"50px", height:"50px"}}/>
     </Link>
     <li><Link to="/">Home</Link></li>
     <li><Link to="/about">About</Link></li>
     <li><Link to="/service">Services</Link></li>
     <li><Link to="/contact">Contact Us</Link></li>
     </ul>
     
  )
};