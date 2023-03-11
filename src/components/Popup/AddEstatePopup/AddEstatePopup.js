import PopupWithForm from '../PopupWithForm/PopupWithForm';
import React, { useState, useRef } from 'react';
import './AddEstatePopup.css';

function AddEstatePopup({ isOpen, onPopupClose, onAddPlace, isLoading }) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const fileRef = useRef(null);
  // const [images, setImages] = useState(null);
  const [address, setAddress] = useState('');
  const handleChangeTitle = e => setTitle(e.target.value);
  const handleChangePrice = e => setPrice(e.target.value);
  const handleChangeImages = e => {fileRef.current = e.target.files};
  const handleChangeAddress = e => setAddress(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', title);
    data.append('price', price);
    data.append('address', address);

    let fileList = fileRef.current;
    const arrFiles = Array.from(fileList);
    let i=0;
    arrFiles.forEach(file => {
      i++;
      data.append('images'+i, file);
    })
    onAddPlace(data);

    //после сабмита надо обнулить поля
    setTitle('');
    setPrice('');
    fileRef.current = null;
    setAddress('');
  };

  return (
    <div className={`add-estate-popup ${isOpen ? 'popup_active': ''}`}>
      <div className="add-estate-popup__container">
        <h2 className="add-estate-popup__title">Объект недвижимости</h2>
        <form name={`form-add-cards`} className="add-estate-popup__edit" noValidate onSubmit={onSubmit}>
          <input type="text" value={title} onChange={handleChangeTitle} name="name" id="name-mesto-input"
                 className="add-estate-popup__input popup__input_profile_name" placeholder="Заголовок" required minLength="2" maxLength="30" />
          <span className="add-estate-popup__error name-mesto-input-error"></span>
          <input type="number" value={price} onChange={handleChangePrice} name="price" id="price-mesto-input"
                 className="add-estate-popup__input popup__input_profile_name" placeholder="Цена" required minLength="2" maxLength="30" />
          <span className="add-estate-popup__error name-mesto-input-error"></span>
          <input type="text" value={address} onChange={handleChangeAddress} name="address" id="description-input"
                 className="add-estate-popup__input popup__input_profile_info" placeholder="Адрес" required />
          <span className="add-estate-popup__error link-input-error"></span>
          <input type="file" onChange={handleChangeImages} name="images" id="link-input" multiple="multiple"
                 className="add-estate-popup__input popup__input_profile_info" placeholder="Выбрать фото" required />
          <span className="add-estate-popup__error link-input-error"></span>
          <button type="submit" className="popup__button-save" >{!isLoading ? "Создать" : 'Сохранение...'}</button>
        </form>
        <button type="button" className="popup__button-close" onClick={onPopupClose}></button>
      </div>
    </div>
  );
}

export default AddEstatePopup;
