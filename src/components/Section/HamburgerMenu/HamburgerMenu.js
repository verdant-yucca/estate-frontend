import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './HamburgerMenu.css'

function HamburgerMenu({loggedIn, signOut}) {
  const [isOpen, setIsOpen] = useState(false);
  const handlerOnOpen = () => setIsOpen(true);
  const handlerOnClose = () => setIsOpen(false);
  const hamburgerButton = `hamburger-menu__visible ${isOpen && 'hamburger-menu__hidden'}`;
  const hamburgerActive = `hamburger-menu ${isOpen && 'hamburger-menu__active'}`;

  return (
    <>
      <button className={hamburgerButton} onClick={handlerOnOpen}/>
      <div className={hamburgerActive}>
        <button className="hamburger-menu__close" onClick={handlerOnClose}/>
        <nav className="hamburger-menu__links">
          <Link className={'header__button'} to="/estate">Недвижимость</Link>
          <Link className={`header__button`} to="uslugi">Услуги</Link>
          <Link className={`header__button`} to="AtCompany">О компании</Link>
          {/*<Link className="hamburger-menu__link hamburger-menu__link_active" to="/movies">Фильмы</Link>*/}
        </nav>
        <div className='hamburger-menu__footer'>
          Город N +7 (123) 456 78 90 Звоните нам с 9:00 до 19:00
          {loggedIn ? <p className="header__admin-info" onClick={signOut} >ㅤㅤExit</p> : ''}
        </div>
      </div>
    </>
  )
}

export default HamburgerMenu;
