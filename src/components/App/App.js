import {useState, useEffect} from 'react';
import {Route, Switch, Redirect, useHistory} from 'react-router-dom';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import api from '../../utils/api';
import Header from '../Section/Header/Header';
import Main from '../Page/Main/Main';
import Footer from '../Section/Footer/Footer';
import AddPlacePopup from '../Popup/AddPlacePopup/AddPlacePopup'
import ImagePopup from '../Popup/ImagePopup/ImagePopup';
import PopupWithConfirmation from '../Popup/PopupWithConfirmation/PopupWithConfirmation'
import Estate from "../Page/Estate/Estate";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css';
import authApi from "../../utils/authApi";
import successIcon from '../../images/button/success.svg';
import failIcon from '../../images/button/fail.svg';
import Register from "../Page/Register/Register";
import Login from "../Page/Login/Login";
import InfoTooltip from "../Popup/InfoTooltip/InfoTooltip";

function App() {
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCardDelete, setSelectedCardDelete] = useState(null);

  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();
  const [isTooltipPopupOpen, setIsTooltipPopupOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [messageTooltip, setMessageTooltip] = useState('');
  const [iconTooltip, setIconTooltip] = useState('');
  const [headerStatus, setHeaderStatus] = useState(false);


  const onError = err => console.log(err);

  useEffect(() => {
      api.getInitialCards()
        .then((cards) => {
          setCards(cards);
        })
        .catch(err => {
          onError(err)
        });
    setInterval(checkToken(), 100);
  }, [])


  function checkToken() {
    if (localStorage.getItem('token')) {
      authApi.check()
        .then(() => {
          setLoggedIn(true);
        })
        .catch(err => onError(err));
    }
    return true
  }

  const handleSuccessClick = () => setIsTooltipPopupOpen(true);

  const handleRegister = (password, email) => {
    authApi.register(password, email)
      .then(res => {
        if(res) {
          setIconTooltip(successIcon);
          setMessageTooltip('Вы успешно зарегистрировались!');
          handleSuccessClick();
          // history.push('/sign-in');
        }
      })
      .then(() => setTimeout(handleLogin, 300, password, email))
      .catch(err => {
        onError(err);
        setIconTooltip(failIcon);
        setMessageTooltip('Что-то пошло не так! Попробуйте еще раз.');
        handleSuccessClick();
      });
  };

  const handleLogin = (password, email) => {
    authApi.login(password, email)
      .then(res => {
        if(res.token) {
          localStorage.setItem('token', res.token);
          window.location.reload();
          history.goBack()
          setEmail(email);
          setLoggedIn(true);
        }
      })
      .catch((err) => {
        onError(err);
        setIconTooltip(failIcon);
        setMessageTooltip('Что-то пошло не так! Попробуйте еще раз.');
        handleSuccessClick();
        // history.push('/sign-in');
      });
  };

  const signOut = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
    setEmail('');
  };


  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);
  const handleCardClick = card => setSelectedCard(card);

  const handleConfirmClick = card => {
    setIsConfirmPopupOpen(true);
    setSelectedCardDelete(card);
  };

  const handleCardDelete = estate => {
    api.deleteCard(estate._id)
      .then((res) => setCards((estatesNew) => estatesNew.filter(item => item._id !== estate._id)))
      .catch(err => onError(err))
      .finally(() => closeAllPopups());
  };

  const handleAddPlaceSubmit = (data) => {
    setIsLoading(true);
    api.addCard(data)
      .then(({estate}) => setTimeout(()=>{setCards([estate, ...cards])}, 1500))
      .catch(err => onError(err))
      .finally(() => {
        setIsLoading(false);
        closeAllPopups();
      });
  };

  const closeAllPopups = () => {
    setIsAddPlacePopupOpen(false);
    setIsConfirmPopupOpen(false);
    setSelectedCard(null);
    setSelectedCardDelete(null);
  };

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header loggedIn={loggedIn} email={email} signOut={signOut} />
        <main key={"main"} className="content">
          <Switch>
            <Route exact path="/">
              <Main
                loggedIn={loggedIn}
              />
            </Route>

            <Route path="/estate">
              <Estate onAddPlace={handleAddPlaceClick}
                      onConfirm={handleConfirmClick}
                      onCardClick={handleCardClick}
                      cards={cards}
                      loggedIn={loggedIn}
              />
            </Route>
            <ProtectedRoute path="/sign-up"
                            component={Register}
                            handleRegister={handleRegister}
            />
            <Route path="/sign-in">
              <Login handleLogin={handleLogin}/>
            </Route>

            <ProtectedRoute path="/admin"
                            component={Main}
                            loggedIn={loggedIn}
            />

            <Route path="*">
              <Redirect to="/" />
            </Route>

          </Switch>
        </main>

        <Footer/>

        <AddPlacePopup  isOpen={isAddPlacePopupOpen}
                        onPopupClose={closeAllPopups}
                        onAddPlace={handleAddPlaceSubmit}
                        isLoading={isLoading}
        />

        <PopupWithConfirmation isOpen={isConfirmPopupOpen}
                               onPopupClose={closeAllPopups}
                               card={selectedCardDelete}
                               onCardDelete={handleCardDelete}
        />

        <ImagePopup card={selectedCard} onPopupClose={closeAllPopups}/>

        <InfoTooltip isOpen={isTooltipPopupOpen} onPopupClose={closeAllPopups}
                     messageTooltip={messageTooltip} iconTooltip={iconTooltip}/>

      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
