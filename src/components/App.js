import {useState, useEffect} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import ProtectedRoute from "./ProtectedRoute";
import api from '../utils/api';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import AddPlacePopup from './AddPlacePopup'
import ImagePopup from './ImagePopup';
import PopupWithConfirmation from './PopupWithConfirmation'

function App() {
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCardDelete, setSelectedCardDelete] = useState(null);

  const onError = err => console.log(err);

  useEffect(() => {
      api.getInitialCards()
        .then((cards) => {
          setCards(cards);
        })
        .catch(err => {
          onError(err)
        });
  }, [])


  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);
  const handleCardClick = card => setSelectedCard(card);

  const handleConfirmClick = card => {
    setIsConfirmPopupOpen(true);
    setSelectedCardDelete(card);
  };

  const handleCardDelete = estate => {
    api.deleteCard(estate._id)
      .then(() => setCards((state) => state.filter(item => item._id !== cards._id)))
      .catch(err => onError(err))
      .finally(() => closeAllPopups());
  };

  const handleAddPlaceSubmit = (title, price, description, url) => {
    setIsLoading(true);
    api.addCard(title, price, description, url)
      .then((data) => setCards([data, ...cards]))
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
        <Header/>
        <main className="content">
          <Switch>
            <ProtectedRoute path="/"
                   component={Main}
                   onAddPlace={handleAddPlaceClick}
                   onConfirm={handleConfirmClick}
                   onCardClick={handleCardClick}
                   cards={cards}
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
    </div>
  );
}

export default App;
