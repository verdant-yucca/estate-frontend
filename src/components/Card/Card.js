import './Card.css';
import eyes from '../../images/eyes.png';
import PhotoSlider from "./PhotoSlider/PhotoSlider";

function Card({ card, onCardClick, onConfirm, loggedIn }) {
  const onSliderClick = () => onCardClick(card);
  const handleConfirmClick = () => onConfirm(card);
  return(
    <li key={card._id} className="element">
      {/*<img className="element__image" src={'https://api.verdant-yucca.ru/images/estate/' + card.images[0]} alt={card.title} onClick={handleCardClick}/>*/}
      <PhotoSlider CardId={card._id} ArrayImages={card.images} onSliderClick={onSliderClick}/>
      <h2 key={"title_" + card._id} className="element__element-title">{card.title}</h2>
      <h2 key={"price_" + card._id} className="element__element-price">{card.price}</h2>
      {loggedIn ? <button key={"buttonDelete_" + card._id} type="button" className={'element__delete element__delete_active'} onClick={handleConfirmClick}></button> : ''}
      <div key={"description_" + card._id} className="element__description">
        <h2 key={"address_" + card._id} className="element__element-description">{card.address}</h2>
        <img key={"eyes_" + card._id} className="element_views" src={eyes} alt="глаз"/>
        <p key={"views_" + card._id} className="element_views_counter" >{card.views}</p>
      </div>
    </li>
  )
}

export default Card;
