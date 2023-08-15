import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hamburger from '../../Assets/hamburger.svg';
import closeIcon from '../../Assets/x.svg';
import Fade from 'react-reveal/Fade';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavLinkClick = () => {
    document.querySelector("html").scrollTo(0, 0);
    closeMenu();
  };

  return (
    <div className="mobile-nav">
      <button className='blue-btn call-cta-mobile'><a href='tel:+9132753090'>Call Us</a></button>
      {!isOpen ? (
        <div className="hamburger" onClick={toggleMenu}>
          <img width="36px" src={hamburger} alt="Open Menu" />
        </div>
      ) : (
        <div></div>
      )}

      {isOpen && (
        <Fade down>
          <div className="menu mobile">
            <Link className="navLink mobile" onClick={handleNavLinkClick} to="/">
              Home
            </Link>
            <Link className="navLink mobile" onClick={handleNavLinkClick} to="/Services">
              Services
            </Link>
            <Link className="navLink mobile" onClick={handleNavLinkClick} to="/Projects">
              Projects
            </Link>
            <Link className="navLink mobile" onClick={handleNavLinkClick} to="/Contact">
              Contact
            </Link>
            <div className="close-button" onClick={closeMenu}>
              <img width="40px" src={closeIcon} alt="Close Menu" />
            </div>
          </div>
        </Fade>
      )}
    </div>
  );
};

export default MobileNav;
