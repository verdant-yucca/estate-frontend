import logo from '../../../images/logo/logo_white.png';
import { Route, Link } from 'react-router-dom';
import './Header.css';

function Header({email, loggedIn, signOut}) {
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
          <Route path="/">
            <Link className={'header__button'} to="estate">Недвижимость</Link>
          </Route>
          <Route path="/">
            <Link className={`header__button`} to="uslugi">Услуги</Link>
          </Route>
          <Route path="/">
            <Link className={`header__button`} to="AtCompany">О компании</Link>
          </Route>
        </div>
      </div>
    </header>
  );
}

export default Header;

