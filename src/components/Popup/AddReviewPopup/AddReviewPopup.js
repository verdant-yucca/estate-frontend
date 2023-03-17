import React, { useState } from 'react';
import './AddReviewPopup.css';

function AddReviewPopup({ isOpen, onPopupClose, onAddReview, isLoading }) {


  //////////////////
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const handleChangeName = e => setName(e.target.value);
  const handleChangeText = e => setText(e.target.value);


  const handleSubmit = e => {
    e.preventDefault();

    onAddReview(name, text);

    // после сабмита надо обнулить поля
    setName('');
    setText('');
  };

  return (
    <div className={`add-review-popup ${isOpen ? 'add-review-popup_active': ''}`}>
    {/*<div className={`add-review-popup popup_active`}>*/}
      <div className="add-review-popup__container">
        <h2 className="add-review-popup__title">Добавить отзыв</h2>
        <form name={`form-add-cards`} className="add-review-popup__edit" noValidate>


            <div className="add-review-popup__block-input">
              <input type="text" value={name} onChange={handleChangeName} name="name"
                     className="add-review-popup__input" required minLength="2" maxLength="30" />
              <label className="add-review-popup__label">Имя</label>
            </div>
            <div className="add-review-popup__block-info">
              <textarea className="add-review-popup__textarea" value={text} onChange={handleChangeText}></textarea>
            </div>

          <button type="submit" onClick={handleSubmit} className="popup__button-save" >{!isLoading ? "Добавить" : 'Добавление...'}</button>
        </form>
        <button type="button" className="add-review-popup__button-close" onClick={onPopupClose}></button>
      </div>
    </div>
  );
}

export default AddReviewPopup;
