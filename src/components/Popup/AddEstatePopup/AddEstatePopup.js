import PopupWithForm from '../PopupWithForm/PopupWithForm';
import React, { useState, useRef } from 'react';
import './AddEstatePopup.css';

function AddEstatePopup({ isOpen, onPopupClose, onAddPlace, isLoading }) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  //////////////////
  const [rooms, setRooms] = useState('');
  const [square, setSquare] = useState('');
  const [kitchen_square, setKitchen_square] = useState('');
  const [living_space, setLiving_space] = useState('');
  const [floor, setFloor] = useState('');
  const [height, setHeight] = useState('');
  const [bathroom, setBathroom] = useState('');
  const [furniture, setFurniture] = useState('');
  const [repair, setRepair] = useState('');
  const [info, setInfo] = useState('');
  ////////////////////////////

  const fileRef = useRef(null);
  // const [images, setImages] = useState(null);
  const [address, setAddress] = useState('');
  const handleChangeTitle = e => setTitle(e.target.value);
  const handleChangePrice = e => setPrice(e.target.value);
  const handleChangeRooms = e => setRooms(e.target.value);
  const handleChangeSquare = e => setSquare(e.target.value);
  const handleChangeKitchen_square = e => setKitchen_square(e.target.value);
  const handleChangeLiving_space = e => setLiving_space(e.target.value);
  const handleChangeFloor = e => setFloor(e.target.value);
  const handleChangeHeight = e => setHeight(e.target.value);
  const handleChangeBathroom = e => setBathroom(e.target.value);
  const handleChangeFurniture = e => setFurniture(e.target.value);
  const handleChangeRepair = e => setRepair(e.target.value);
  const handleChangeInfo = e => setInfo(e.target.value);
  const handleChangeImages = e => {fileRef.current = e.target.files};
  const handleChangeAddress = e => setAddress(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', title);
    data.append('price', price);
    data.append('address', address);
    // const apartment = {};
    // apartment.rooms = rooms;
    // apartment.square = square;
    // apartment.kitchen_square = kitchen_square;
    // apartment.living_space = living_space;
    // apartment.floor = floor;
    // apartment.height = height;
    // apartment.bathroom = bathroom;
    // apartment.furniture = furniture;
    // apartment.repair = repair;
    // apartment.info = info;
    // const apartment = new FormData();
    // apartment.append('address', address);
    // apartment.append('rooms', rooms);
    // apartment.append('square', square);
    // apartment.append('kitchen_square', kitchen_square);
    // apartment.append('living_space', living_space);
    // apartment.append('floor', floor);
    // apartment.append('height', height);
    // apartment.append('bathroom', bathroom);
    // apartment.append('furniture', furniture);
    // apartment.append('repair', repair);
    // apartment.append('info', info);
    // data.append('apartment', apartment);
    data.append('rooms', rooms);
    data.append('square', square);
    data.append('kitchen_square', kitchen_square);
    data.append('living_space', living_space);
    data.append('floor', floor);
    data.append('height', height);
    data.append('bathroom', bathroom);
    data.append('furniture', furniture);
    data.append('repair', repair);
    data.append('info', info);

    let fileList = fileRef.current;
    const arrFiles = Array.from(fileList);
    let i=0;
    arrFiles.forEach(file => {
      i++;
      data.append('images'+i, file);
    })
    onAddPlace(data);

    //после сабмита надо обнулить поля
    // setTitle('');
    // setPrice('');
    // fileRef.current = null;
    // setAddress('');
  };

  return (
    <div className={`add-estate-popup ${isOpen ? 'add-estate-popup_active': ''}`}>
    {/*<div className={`add-estate-popup popup_active`}>*/}
      <div className="add-estate-popup__container">
        <h2 className="add-estate-popup__title">Объект недвижимости</h2>
        <form name={`form-add-cards`} className="add-estate-popup__edit" noValidate>

          <div className="add-estate-popup__block-properties">
            <div className="add-estate-popup__block-title">
              <div className="add-estate-popup__block-input">
                <input type="text" value={title} onChange={handleChangeTitle} name="name"
                       className="add-estate-popup__input" required minLength="2" maxLength="30" />
                <label className="add-estate-popup__label">Заголовок</label>
              </div>
              <div className="add-estate-popup__block-input">
                <input type="number" value={price} onChange={handleChangePrice} name="price"
                       className="add-estate-popup__input" required minLength="2" maxLength="30" />
                <label className="add-estate-popup__label">Цена</label>
              </div>
              <div className="add-estate-popup__block-input">
                <input type="text" value={address} onChange={handleChangeAddress} name="address"
                       className="add-estate-popup__input" required />
                <label className="add-estate-popup__label">Адрес</label>
              </div>
            </div>
            <div className="add-estate-popup__block-properties_column">
              <div className="add-estate-popup__block-input">
                <input type="number" value={rooms} onChange={handleChangeRooms} name="rooms"
                       className="add-estate-popup__input"  required />
                <label className="add-estate-popup__label">Количество комнат</label>
              </div>
              <div className="add-estate-popup__block-input">
                <input type="text" value={square} onChange={handleChangeSquare} name="square"
                       className="add-estate-popup__input" required minLength="2" maxLength="30" />
                <label className="add-estate-popup__label">Общая площадь</label>
              </div>
              <div className="add-estate-popup__block-input">
                <input type="text" value={kitchen_square} onChange={handleChangeKitchen_square} name="kitchen_square"
                       className="add-estate-popup__input" required minLength="2" maxLength="30" />
                <label className="add-estate-popup__label">Площадь кухни</label>
              </div>
              <div className="add-estate-popup__block-input">
                <input type="text" value={living_space} onChange={handleChangeLiving_space} name="living_space"
                       className="add-estate-popup__input" required minLength="2" maxLength="30" />
                <label className="add-estate-popup__label">Жилая площадь</label>
              </div>
              <div className="add-estate-popup__block-input">
                <input type="number" value={floor} onChange={handleChangeFloor} name="floor"
                       className="add-estate-popup__input" required/>
                <label className="add-estate-popup__label">Этаж</label>
              </div>
            </div>
            <div className="add-estate-popup__block-properties_column">
              <div className="add-estate-popup__block-input">
                <input type="text" value={height} onChange={handleChangeHeight} name="height"
                       className="add-estate-popup__input" required/>
                <label className="add-estate-popup__label">Высота потолка</label>
              </div>
              <div className="add-estate-popup__block-input">
                <input type="text" value={bathroom} onChange={handleChangeBathroom} name="bathroom"
                       className="add-estate-popup__input" required minLength="2" maxLength="30" />
                <label className="add-estate-popup__label">Санузел</label>
              </div>
              <div className="add-estate-popup__block-input">
                <input type="text" value={furniture} onChange={handleChangeFurniture} name="furniture"
                       className="add-estate-popup__input" required minLength="2" maxLength="30" />
                <label className="add-estate-popup__label">Мебель</label>
              </div>
              <div className="add-estate-popup__block-input">
                <input type="text" value={repair} onChange={handleChangeRepair} name="repair"
                       className="add-estate-popup__input" required minLength="2" maxLength="30" />
                <label className="add-estate-popup__label">Ремонт</label>
              </div>
            </div>
          </div>

          <div className="add-estate-popup__block-photo">
            <div className="add-estate-popup__block-input">
              <input type="file" onChange={handleChangeImages} name="images" id="link-input2" multiple="multiple"
                     className="add-estate-popup__input popup__input_profile_info" required />
              {/*<label className="add-estate-popup__label">Выбрать фото</label>*/}
            </div>
          </div>

          <div className="add-estate-popup__block-info">
            <textarea className="add-estate-popup__textarea" value={info} onChange={handleChangeInfo}></textarea>
          </div>

          <button type="submit" onClick={handleSubmit} className="popup__button-save" >{!isLoading ? "Создать" : 'Сохранение...'}</button>
        </form>
        <button type="button" className="add-estate-popup__button-close" onClick={onPopupClose}></button>
      </div>
    </div>
  );
}

export default AddEstatePopup;
