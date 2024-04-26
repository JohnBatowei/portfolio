import { Link } from "react-router-dom";
import { useState } from "react";
import '../styles/nav.scss'

const Navbar = function () {
  const [show, setShow] = useState(false);

  const handleShow = function(){
    setShow(!show);
  }

  return (
   <div className='nav-wrapper'>
    <nav className="nav-desktop">
      <Link to="/" className="logo" id='home'>
        Batowei ariebi john
      </Link>
      <div className="group">
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact">Contact</Link>
        <a href="#project">Projects</a>
        <Link to="/">Download CV</Link>
      </div>

      <Link to="/contact" className='letsTalk'> Lets talk </Link>

      <span className="stroke" onClick={handleShow}>&#9776;</span>
    </nav>
    <nav className={`nav-mobile ${show === true ? 'show' : ''}`}>
      <div className="group">
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact">Contact</Link>
        <a href="#project">Projects</a>
        <Link to="/">Download CV</Link>
      </div>

      <Link to="/contact" className='letsTalk'> Lets talk </Link>
    </nav>
   </div>
  );
};

export default Navbar;