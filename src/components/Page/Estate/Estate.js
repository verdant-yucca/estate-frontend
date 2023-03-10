import Card from '../../Section/Blocks/Card/Card';
import "./Estate.css"
import {useEffect, useState} from 'react';
// import YMaps from '../VMaps/YMaps'

function Estate({cards, onCardClick, onAddPlace, onConfirm, loggedIn }) {
  // const [cards, setCards] = useState([]);
  //
  // useEffect(() => {
  //   api.getInitialCards()
  //     .then((cards) => {
  //       setCards(cards);
  //     })
  //     .catch(err => {
  //       onError(err)
  //     });
  // }, [])
//TODO: перенести сюда запрос карточек сервера
  return (
    <>
      <section key={"banner_estate"} className='banner'>
        {loggedIn ? <button key={'button_add_object'} type='button' onClick={onAddPlace} className='estate__button-add'>Добавить объект</button> : ""}
      </section>

      {/*< YMaps />*/}
      {/*<section>*/}
        <ul key={"all_elements_estates"} className="elements">
          {cards.map(card => (
            <Card key={card._id} loggedIn={loggedIn} card={card} onCardClick={onCardClick} onConfirm={onConfirm} />
          ))}
        </ul>
      {/*</section>*/}
    </>
  );
}

export default Estate;
