import logo from '../../../images/logo/logo_white.png';
import { Link } from 'react-router-dom';
import './Header.css';
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

function Header({loggedIn, signOut}) {
  return (
    <header className={`header`}>
      <div className={'header__logo-container'}>
        <Link to="/">
          <img className={'header__logo'} src={logo} alt="Россия" />
        </Link>

      </div>
      <div className={'header__menu'} >
        <div className={'header__info'}>
          Город N +7 (123) 456 78 90 Звоните нам с 9:00 до 19:00
          {loggedIn ? <p className="header__admin-info" onClick={signOut} >ㅤㅤExit</p> : ''}
        </div>
        <div className={'header__nav'} >
          <Link className={'header__button'} to="/estate">Недвижимость</Link>
          <Link className={`header__button`} to="/uslugi">Услуги</Link>
          <Link className={`header__button`} to="/AtCompany">О компании</Link>
        </div>
      </div>
      <HamburgerMenu loggedIn={loggedIn} signOut={signOut}/>
    </header>
  );
}

export default Header;

