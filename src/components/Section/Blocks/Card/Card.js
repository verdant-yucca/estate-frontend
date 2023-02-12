import './Card.css';
import eyes from '../../../../images/eyes.png';
import office from '../../../../images/tagEstate/building.png';
import home from '../../../../images/tagEstate/building-1.png';
import apartment from '../../../../images/tagEstate/building-2.png';
import React from "react";

function Card({ card, onCardClick, onConfirm, loggedIn }) {
  const handleCardClick = () => onCardClick(card);
  const handleConfirmClick = () => onConfirm(card);
  console.log(card);

  const gap = (n) => {
    let res = "" + n;
    return res.replace(/\d{0,3}(?=(\d{3})+$)/g, "$& ") ;
  }

  const getTypeEstate = (card) => {
    let res = "";

    if (card.apartment) {
      res = "apartment";
    } else if (card.office) {
      res = "office";
    } else if (card.home) {
      res = "home";
    }

    return res;
  }


  const handlerOnClick = () => {
    console.log('click')
  };
  return(
    <li key={card._id+1} className="element">
    <img className="element__image" src={'https://api.verdant-yucca.ru/images/estate/' + card.images[0]} alt={card.title} />

    {getTypeEstate(card)==="home" && <div key={"tag_" + card._id}  className="element__tag element__tag_green">
      <img key={"imgteg_" + card._id} className="element_image-tag" src={home} alt="tag"/>
      <p key={"texttag_" + card._id} className="element__tag-text">Дом</p>
    </div>}

    {getTypeEstate(card)==="office" && <div key={"tag_" + card._id}  className="element__tag element__tag_blue">
      <img key={"imgteg_" + card._id} className="element_image-tag" src={office} alt="tag"/>
      <p key={"texttag_" + card._id} className="element__tag-text">Коммерческая</p>
    </div> }

    {getTypeEstate(card)==="apartment" && <div key={"tag_" + card._id}  className="element__tag element__tag_yellow">
      <img key={"imgteg_" + card._id} className="element_image-tag" src={apartment} alt="tag"/>
      <p key={"texttag_" + card._id} className="element__tag-text">Квартира</p>
    </div>}

    <h2 key={"title_" + card._id} className="element__title">{card.title}</h2>
    <p key={"price_" + card._id} className="element__price">₽ {gap(card.price)}</p>
    <p key={"address_" + card._id} className="element__address">{card.address}</p>

    <p key={"options_" + card._id} className="element__element-options">Площадь: 72м2 / Комнат: 3 / Спален: 1</p>

    <div key={"description_" + card._id} className="element__description">
      <button onClick={handlerOnClick} className='swiper__button element__button '>Показать</button>
      <img key={"eyes_" + card._id} className="element_views" src={eyes} alt="глаз"/>
      <p key={"views_" + card._id} className="element_views_counter" >{card.views}</p>
    </div>

    {loggedIn ? <button key={"buttonDelete_" + card._id} type="button" className={'element__delete element__delete_active'} onClick={handleConfirmClick}></button> : ''}
  </li>
  )
}

export default Card;
