import logo from '../images/logo_white.png';
import { Route, Link } from 'react-router-dom';

function Header() {
  return (
    <header className={`header`}>
      <div className={'header__logo-container'}>
        <img className={'header__logo'} src={logo} alt="Россия" />
      </div>
      <div className={'header__menu'} >
        <p className={'header__info'}>
          Братск +7 (123) 456 78 90 Звоните нам с 9:00 до 19:00
        </p>
        <div className={'header__nav'} >
          <Route exact path="/">
            <Link className={'header__button'} to="apartments">Недвижимость</Link>
          </Route>
          <Route path="/">
            <Link className={`header__button`} to="houses">Услуги</Link>
          </Route>
          <Route path="/">
            <Link className={`header__button`} to="cottages">О компании</Link>
          </Route>
        </div>
      </div>
    </header>
  );
}

export default Header;

