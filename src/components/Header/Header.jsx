import React, { useState, useEffect } from 'react';
import './Header.css';
import Logo from '../../images/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const desktopNavItems = (
    <ul>
      <li><a href="#">about us</a></li>
      <li><a href="#">our products</a></li>
      <li><a href="#">intimate health</a></li>
      <li><a href="#">contact us</a></li>
    </ul>
  );

  const mobileNavItems = (
    <ul>
      <li><a href="#">brand philosophy</a></li>
      <li><a href="#">product technology</a></li>
      <li><a href="#">all products</a></li>
      <li><a href="#">intibiome wellness</a></li>
      <li><a href="#">intibiome active</a></li>
      <li><a href="#">intibiome agecare</a></li>
      <li><a href="#">article 1</a></li>
      <li><a href="#">article 2</a></li>
      <li><a href="#">article 3</a></li>
      <li><a href="#">faq</a></li>
      <li><a href="#">contact us</a></li>
    </ul>
  );

  return (
    <header>
      <div className="logo-container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>

        <nav className={`nav-links ${menuOpen ? 'show' : ''}`}>
          {windowWidth > 768 ? desktopNavItems : mobileNavItems}
        </nav>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Header;





