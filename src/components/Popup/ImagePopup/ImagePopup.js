import React, {useEffect} from 'react';
import './ImagePopup.css';
import api from "../../../utils/api";

function ImagePopup({card, onPopupClose}) {
  useEffect(() => {
    if (card) {
    api.openCard(card._id)
      .then(() =>{})
      .catch(err => { console.log(err) });
  }})
  // const keyPressEvent = (e) => new KeyboardEvent('keypress', { key: 'Escape', });
  const handleKeyPress = (e) => e.key === 'Escape' ? onPopupClose() : ''
  return (
    <div className={`popup popup_type_image-fullscreen ${card && 'popup_active'}`} tabIndex="0" onKeyDown={handleKeyPress}>
      <div className="popup__container-image-fullscreen">
        <img className="popup__image" src={card && 'https://api.verdant-yucca.ru/images/estate/' + card.images[0]} alt={card && card.name} />
        <p className="popup__image-text">{card && card.title}</p>
        <button type="button" className="popup__button-close" onClick={onPopupClose} ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
