import React from 'react';
import './ImagePopup.css';

function ImagePopup({card, onPopupClose}) {
  return (
    <div className={`popup popup_type_image-fullscreen ${card && 'popup_active'}`}>
      <div className="popup__container-image-fullscreen">
        <img className="popup__image" src={card && 'https://api.verdant-yucca.ru/images/' + card.images[0]} alt={card && card.name} />
        <p className="popup__image-text">{card && card.title}</p>
        <button type="button" className="popup__button-close" onClick={onPopupClose}></button>
      </div>
    </div>
  );
}

export default ImagePopup;
