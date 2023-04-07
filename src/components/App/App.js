import {useState, useEffect} from 'react';
import {Route, Switch, Redirect, useHistory} from 'react-router-dom';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import api from '../../utils/api';
import Header from '../Section/Header/Header';
import Main from '../Page/Main/Main';
import Footer from '../Section/Footer/Footer';
import ImagePopup from '../Popup/ImagePopup/ImagePopup';
import DeleteEstatePopup from '../Popup/DeleteEstatePopup/DeleteEstatePopup'
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
import EditEstatePopup from "../Popup/EditEstatePopup/EditEstatePopup";
import AddReviewPopup from "../Popup/AddReviewPopup/AddReviewPopup";
import DeleteReviewPopup from "../Popup/DeleteReviewPopup/DeleteReviewPopup";
import About from "../Page/About/About";
import Services from "../Page/Services/Services";

function App() {
  const [estates, setEstates] = useState([]);
  const [isAddEstatePopupOpen, setIsAddEstatePopupOpen] = useState(false);
  const [isAddReviewPopupOpen, setIsAddReviewPopupOpen] = useState(false);
  const [isEditEstatePopupOpen, setIsEditEstatePopupOpen] = useState(false);
  const [isDeleteEstatePopupOpen, setIsDeleteEstatePopupOpen] = useState(false);
  const [selectedEstateID, setSelectedEstateID] = useState(null);


  const [reviews, setReviews] = useState([]);
  const [isDeleteReviewPopupOpen, setIsDeleteReviewPopupOpen] = useState(false);
  const [selectedReviewID, setSelectedReviewID] = useState(null);


  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();
  const [isTooltipPopupOpen, setIsTooltipPopupOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [messageTooltip, setMessageTooltip] = useState('');
  const [iconTooltip, setIconTooltip] = useState('');

  const onError = err => console.log(err);
  //при загрузке страницы подгружаем квартиры
  useEffect(() => {
    api.getReviews()
      .then((reviews) => setReviews(reviews))
      .catch(err => console.log(err));
    api.getInitialCards(0)
      .then((estates) => {
        setEstates(estates);
      })
      .catch(err => {
        onError(err)
      });
    setInterval(checkToken(), 100);
  }, [])

//#region utils
  const handleClosePopups = () => {
    setIsAddEstatePopupOpen(false);
    setIsEditEstatePopupOpen(false);
    setIsDeleteEstatePopupOpen(false);
    setIsAddReviewPopupOpen(false);
    setIsDeleteReviewPopupOpen(false);
    setSelectedEstateID(null);
  };

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
//#endregion

//#region АУТЕНТИФИКАЦИЯ
  const handleClickSuccess = () => setIsTooltipPopupOpen(true);

  const handleSubmitRegister = (password, email) => {
    authApi.register(password, email)
      .then(res => {
        if(res) {
          setIconTooltip(successIcon);
          setMessageTooltip('Вы успешно зарегистрировались!');
          handleClickSuccess();
        }
      })
      .then(() => setTimeout(handleSubmitLogin, 300, password, email))
      .catch(err => {
        onError(err);
        setIconTooltip(failIcon);
        setMessageTooltip('Что-то пошло не так! Попробуйте еще раз.');
        handleClickSuccess();
      });
  };

  const handleSubmitLogin = (password, email) => {
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
        handleClickSuccess();
      });
  };

  const signOut = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
    setEmail('');
  };
//#endregion

//#region AddEstate
  const handleClickAddEstate = () => setIsAddEstatePopupOpen(true);
  const handleSubmitAddEstate = (data) => {
    setIsLoading(true);
    api.addCard(data)
      .then(({estate}) => setTimeout(()=>{setEstates([estate, ...estates])}, 1500))
      .catch(err => onError(err))
      .finally(() => {
        setIsLoading(false);
        handleClosePopups();
      });
  };
//#endregion

//#region EditEstate
  const handleClickEditEstate = estateID => {
    setSelectedEstateID(estateID);
    setIsEditEstatePopupOpen(true);
  };
  const handleSubmitEditEstate = (data) => {
    // setIsLoading(true);
    // api.addCard(data)
    //   .then(({estate}) => setTimeout(()=>{setEstates([estate, ...estates])}, 1500))
    //   .catch(err => onError(err))
    //   .finally(() => {
    //     setIsLoading(false);
    //     handleClosePopups();
    //   });
  };
//#endregion

//#region DeleteEstate
  const handleClickDeleteEstate = estateID => {
    setSelectedEstateID(estateID);
    setIsDeleteEstatePopupOpen(true);
  };

  const handleSubmitEstateDelete = estateID => {
    console.log(estateID)
    api.deleteCard(estateID)
      .then((res) => setEstates((estatesNew) => estatesNew.filter(item => item._id !== estateID)))
      .catch(err => onError(err))
      .finally(() => handleClosePopups());
  };
//#endregion

//#region MoreEstates
  const handleClickMoreEstates = () => {
    api.getInitialCards(Math.trunc(estates.length / 20))
      .then((estate) => {
        let newArr = estates.concat(estate);
        setTimeout(()=>{setEstates(newArr)}, 300)
      } )
      .catch(err => onError(err))
  }
//#endregion

//#region AddReview
  const handleClickAddReview = () => setIsAddReviewPopupOpen(true);
  const handleSubmitAddReview = (name, text) => {
    setIsLoading(true);
    api.addReview(name, text)
      .then((review) => {setReviews([review, ...reviews])})
      .catch(err => onError(err))
      .finally(() => {
        setIsLoading(false);
        handleClosePopups();
      });
  };
//#endregion

//#region DeleteReview
  const handleClickDeleteReview = reviewID => {
    console.log(reviewID)
    setSelectedReviewID(reviewID);
    setIsDeleteReviewPopupOpen(true);
  };

  const handleSubmitReviewDelete = reviewID => {
    console.log(reviewID)
    api.deleteReview(reviewID)
      .then((res) => setReviews((reviewsNew) => reviewsNew.filter(item => item._id !== reviewID)))
      .catch(err => onError(err))
      .finally(() => handleClosePopups());
  };
//#endregion

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header loggedIn={loggedIn} email={email} signOut={signOut} />
        <main key={"main"} className="content">
          <Switch>
            <Route exact path="/">
              <Main
                onClickAddReview={handleClickAddReview}
                onClickDeleteReview={handleClickDeleteReview}
                loggedIn={loggedIn}
                reviews={reviews}
              />
            </Route>

            <Route path="/estate/:estateID" component={Details}/>
            <Route path="/services" component={Services}/>
            <Route path="/about" component={About}/>

            <Route path="/estate">
              <Estate onClickAddEstate={handleClickAddEstate}
                      onClickDeleteEstate={handleClickDeleteEstate}
                      onClickEditEstate={handleClickEditEstate}
                      cards={estates}
                      onClickMoreEstates={handleClickMoreEstates}
                      loggedIn={loggedIn}
              />
            </Route>


            <ProtectedRoute path="/sign-up"
                            component={Register}
                            handleRegister={handleSubmitRegister}
            />
            <Route path="/sign-in">
              <Login handleLogin={handleSubmitLogin}/>
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

        <AddEstatePopup   isOpenPopup={isAddEstatePopupOpen}
                          onClickClosePopups={handleClosePopups}
                          onSubmitAddEstate={handleSubmitAddEstate}
                          isLoading={isLoading}
        />

        <EditEstatePopup  isOpenPopup={isEditEstatePopupOpen}
                          onClickClosePopups={handleClosePopups}
                          estateID={selectedEstateID}
                          onSubmitEditEstate={handleSubmitEditEstate}
                          isLoading={isLoading}
        />

        <AddReviewPopup  isOpenPopup={isAddReviewPopupOpen}
                         onClickClosePopups={handleClosePopups}
                         onSubmitAddReview={handleSubmitAddReview}
                         isLoading={isLoading}
        />

        <DeleteEstatePopup isOpenPopup={isDeleteEstatePopupOpen}
                           onClickClosePopups={handleClosePopups}
                           estateID={selectedEstateID}
                           onSubmitDeleteEstate={handleSubmitEstateDelete}
        />

        <DeleteReviewPopup isOpenPopup={isDeleteReviewPopupOpen}
                           onClickClosePopups={handleClosePopups}
                           ReviewID={selectedReviewID}
                           onSubmitDeleteReview={handleSubmitReviewDelete}
        />

        {/*<ImagePopup card={selectedEstateID} onPopupClose={handleClosePopups}/>*/}

        <InfoTooltip isOpenPopup={isTooltipPopupOpen} onPopupClose={handleClosePopups}
                     messageTooltip={messageTooltip} iconTooltip={iconTooltip}/>

      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
