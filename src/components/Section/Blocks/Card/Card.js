import './Card.css';
import eyes from '../../../../images/eyes.png';
import edit from '../../../../images/button/button-edit.svg';
import office from '../../../../images/tagEstate/building.png';
import home from '../../../../images/tagEstate/building-1.png';
import apartment from '../../../../images/tagEstate/building-2.png';
import { Route, Link } from 'react-router-dom';
import React from "react";
import {gap} from "../../../../utils/utils";

function Card({ card, onClickDeleteEstate, onClickEditEstate, loggedIn }) {
  const handleConfirmDeleteEstate = () => onClickDeleteEstate(card._id);
  const handleConfirmEditEstate = () => onClickEditEstate(card._id);

  const elementTagClassName = `element__tag ${card.typeEstate==="apartment" && 'element__tag_yellow'}
                                            ${card.typeEstate==="office" && 'element__tag_blue'}
                                            ${card.typeEstate==="home" && 'element__tag_green'}`;
  const elementTagImage = card.typeEstate==="apartment" ? (apartment) : (card.typeEstate==="office" ? office : home);
  const elementTagText = card.typeEstate==="apartment" ? ('Квартира') : (card.typeEstate==="office" ? 'Коммерческая' : 'Дом');
  const toDetails = {
    pathname: 'estate/' + card._id,
    estateId: card._id
  };

  return(
    <li key={card._id+1} className="element">
    <img className="element__image" src={'https://api.verdant-yucca.ru/images/estate/' + card.images[0]} alt={card.title} />

    <div key={"tag_" + card._id}  className={elementTagClassName}>
      <img key={"imgteg_" + card._id} className="element_image-tag" src={elementTagImage} alt="tag"/>
      <p key={"texttag_" + card._id} className="element__tag-text">{elementTagText}</p>
    </div>

    <h2 key={"title_" + card._id} className="element__title">{card.title}</h2>
    <p key={"price_" + card._id} className="element__price">{gap(card.price)} ₽</p>
    <p key={"address_" + card._id} className="element__address">{card.address}</p>

    <p key={"options_" + card._id} className="element__element-options">Площадь: 72м2 / Комнат: 3 / Спален: 1</p>

    <div key={"description_" + card._id} className="element__description">
      <Route path="/">
        <Link className='swiper__button element__button' to={toDetails}>Показать</Link>
      </Route>
      <img key={"eyes_" + card._id} className="element_views" src={eyes} alt="глаз"/>
      <p key={"views_" + card._id} className="element_views_counter" >{card.views}</p>
    </div>

    {loggedIn && <button key={"buttonDelete_" + card._id} type="button" className={'element__delete element__delete_active'} onClick={handleConfirmDeleteEstate}></button> }
    {loggedIn && <button key={"buttonEdit_" + card._id} type="button" className={'element__edit element__delete_active'} onClick={handleConfirmEditEstate}></button> }
  </li>
  )
}

export default Card;
