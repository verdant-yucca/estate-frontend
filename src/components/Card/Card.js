import './Card.css';
import eyes from '../../images/eyes.png';
import api from "../../utils/api";

function Card({ card, onCardClick, onConfirm }) {
  const handleCardClick = () => onCardClick(card);
  const handleConfirmClick = () => onConfirm(card);
  // console.log(card);
  const handleCardOpen = estate => {
    console.log(estate)
    api.openCard(estate._id)
      .then(() => {})
      .catch(err => {})
      .finally(() => {});
  };
  return(
    <li className="element" onClick={handleCardOpen(card)}>
      <img className="element__image" src={'https://api.verdant-yucca.ru/images/' + card.images[0]} alt={card.title} onClick={handleCardClick}/>
      <h2 className="element__element-title">{card.title}</h2>
      <h2 className="element__element-price">{card.price}</h2>
      {/*<button type="button" className={'element__delete element__delete_active'} onClick={handleConfirmClick}></button>*/}
      <div className="element__description">
        <h2 className="element__element-description">{card.address}</h2>
        <img className="element_views" src={eyes} alt="глаз"/>
        <p className="element_views_counter" >{card.views.length}</p>
      </div>
    </li>
  )
}

export default Card;
