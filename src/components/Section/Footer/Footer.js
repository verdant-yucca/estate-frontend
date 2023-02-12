import React from 'react';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; {year} Агентство недвижимости</p>
    </footer>
  );
}

export default Footer;
