function Card({ card, onCardClick, onConfirm }) {
  const handleCardClick = () => onCardClick(card);
  const handleConfirmClick = () => onConfirm(card);

  return(
    <li className="element">
      <img className="element__image" src={card.images} alt={card.title} onClick={handleCardClick}/>
      <h2 className="element__element-title">{card.title}</h2>
      <h2 className="element__element-price">{card.price}</h2>
      <h2 className="element__element-description">{card.address}</h2>
      <button type="button" className={'element__delete element__delete_active'} onClick={handleConfirmClick}></button>
    </li>
  )
}

export default Card;
