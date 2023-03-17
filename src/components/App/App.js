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
import Details from "../Page/Details/Details";
import AddEstatePopup from "../Popup/AddEstatePopup/AddEstatePopup";
import AddReviewPopup from "../Popup/AddReviewPopup/AddReviewPopup";

function App() {
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isAddReviewPopupOpen, setIsAddReviewPopupOpen] = useState(false);
  const [isAddPlacePopupOpen2, setIsAddPlacePopupOpen2] = useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCardDelete, setSelectedCardDelete] = useState(null);
  const [cards, setCards] = useState([]);
  const [reviews, setReviews] = useState([]);

  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();
  const [isTooltipPopupOpen, setIsTooltipPopupOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [messageTooltip, setMessageTooltip] = useState('');
  const [iconTooltip, setIconTooltip] = useState('');


  const onError = err => console.log(err);

  useEffect(() => {
    api.getReviews()
      .then((reviews) => setReviews(reviews))
      .catch(err => console.log(err));
    api.getInitialCards(0)
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
  const handleAddReviewClick = () => setIsAddReviewPopupOpen(true);
  const handleAddPlaceClick2 = () => setIsAddPlacePopupOpen2(true);
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

  const handleAddReviewSubmit = (name, text) => {
    setIsLoading(true);
    api.addReview(name, text)
      .then((review) => {setReviews([review, ...reviews])})
      .catch(err => onError(err))
      .finally(() => {
        setIsLoading(false);
        closeAllPopups();
      });
  };

  const closeAllPopups = () => {
    setIsAddPlacePopupOpen(false);
    setIsAddPlacePopupOpen2(false);
    setIsConfirmPopupOpen(false);
    setIsAddReviewPopupOpen(false);
    setSelectedCard(null);
    setSelectedCardDelete(null);
  };

  const handleMoreEstates = () => {
    api.getInitialCards(Math.trunc(cards.length / 20))
      .then((estate) => {
        let newArr = cards.concat(estate);
        setTimeout(()=>{setCards(newArr)}, 300)
      } )
      .catch(err => onError(err))
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header loggedIn={loggedIn} email={email} signOut={signOut} />
        <main key={"main"} className="content">
          <Switch>
            <Route exact path="/">
              <Main
                onAddReview={handleAddReviewClick}
                loggedIn={loggedIn}
                reviews={reviews}
              />
            </Route>

            <Route path="/estate/:estateID" component={Details}/>

            <Route path="/estate">
              <Estate onAddPlace={handleAddPlaceClick}
                      onAddPlace2={handleAddPlaceClick2}
                      onConfirm={handleConfirmClick}
                      onCardClick={handleCardClick}
                      cards={cards}
                      onMore={handleMoreEstates}
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

        <AddEstatePopup  isOpen={isAddPlacePopupOpen2}
                        onPopupClose={closeAllPopups}
                        onAddPlace={handleAddPlaceSubmit}
                        isLoading={isLoading}
        />

        <AddReviewPopup  isOpen={isAddReviewPopupOpen}
                         onPopupClose={closeAllPopups}
                         onAddReview={handleAddReviewSubmit}
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
