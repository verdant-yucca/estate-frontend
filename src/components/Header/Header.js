import logo from '../../images/logo_white.png';
import { Route, Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className={`header`}>
      <div className={'header__logo-container'}>
        <Link to="/">
          <img className={'header__logo'} src={logo} alt="Россия" />
        </Link>
      </div>
      <div className={'header__menu'} >
        <p className={'header__info'}>
          Братск +7 (123) 456 78 90 Звоните нам с 9:00 до 19:00
        </p>
        <div className={'header__nav'} >
          <Route exact path="/">
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

