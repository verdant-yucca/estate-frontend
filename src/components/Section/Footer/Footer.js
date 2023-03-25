import React from 'react';
import './Footer.css';
import {Link, NavLink} from "react-router-dom";
import logo from "../../../images/logo/logo_white.png";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className='footer__delimiter'></div>
      <div className='footer__columns'>
        <div className='footer__column'>
          <Link to="/">
            <img className={'footer__logo'} src={logo} alt="логотип" />
          </Link>
          <p className='footer__logo-text'>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing elit,Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='footer__column'>
          <div className={'footer__nav'} >
            <h2 className='footer__nav-title'>Меню</h2>
            <NavLink activeClassName="active-link" className={'footer__button'} exact to="/">Главная</NavLink>
            <NavLink activeClassName="active-link" className={'footer__button'} to="/estate">Недвижимость</NavLink>
            <NavLink activeClassName="active-link" className={`footer__button`} to="/services">Услуги</NavLink>
            <NavLink activeClassName="active-link" className={`footer__button`} to="/about">О компании</NavLink>
          </div>
        </div>
        <div className='footer__column'></div>
      </div>
      <p className="footer__copyright">&copy; {year} Агентство недвижимости</p>

    </footer>
  );
}

export default Footer;
