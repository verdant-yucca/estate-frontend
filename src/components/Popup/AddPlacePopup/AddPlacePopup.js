import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useState, useRef } from 'react';
import './AddPlacePopup.css';

function AddPlacePopup({ isOpen, onPopupClose, onAddPlace, isLoading }) {
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
    // data.append('images', Array.from(fileList));
    const arrFiles = Array.from(fileList);
    let i=0;
    arrFiles.forEach(file => {
      i++;
      data.append('images'+i, file);
    })
    // console.log(fileRef)
    // let blobImages = new Blob([fileRef.current], { type: "image/png"})
    // data.append('images', [fileRef.current]);
    // console.log(blobImages)
    onAddPlace(data);
    // setTitle('');
    // setPrice('');
    // fileRef.current = null;
    // setAddress('');
  };

  return (
    <PopupWithForm title="Объект недвижимости" name="form-add-cards" buttonSave="Создать" isOpen={isOpen}
                   onPopupClose={onPopupClose} onSubmit={handleSubmit} isLoading={isLoading} >
      <input type="text" value={title} onChange={handleChangeTitle} name="name" id="name-mesto-input"
             className="popup__input popup__input_profile_name" placeholder="Заголовок" required minLength="2" maxLength="30" />
      <span className="popup__error name-mesto-input-error"></span>
      <input type="number" value={price} onChange={handleChangePrice} name="price" id="price-mesto-input"
             className="popup__input popup__input_profile_name" placeholder="Цена" required minLength="2" maxLength="30" />
      <span className="popup__error name-mesto-input-error"></span>
      <input type="text" value={address} onChange={handleChangeAddress} name="address" id="description-input"
             className="popup__input popup__input_profile_info" placeholder="Адрес" required />
      <span className="popup__error link-input-error"></span>
      <input type="file" onChange={handleChangeImages} name="images" id="link-input" multiple="multiple"
             className="popup__input popup__input_profile_info" placeholder="Выбрать фото" required />
      <span className="popup__error link-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
