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

      {/*<section className="filters">*/}
      {/*  <div className="filters__container">*/}
      {/*    <div className="dropdown__box">*/}
      {/*      <input className="dropdown__button" type="checkbox" id="dropdown__button" />*/}
      {/*      <label className="dropdown__button-label" htmlFor="dropdown__button">Тип недвижимости</label>*/}
      {/*      <div className="dropdown__section">*/}
      {/*        <input className="dropdown__button-sub" type="checkbox" id="dropdown__button-sub"/>*/}
      {/*        <label className="dropdown__button-sub_label" htmlFor="dropdown__button-sub">Квартиры</label>*/}
      {/*        <input className="dropdown__button-sub" type="checkbox" id="dropdown__button-sub1"/>*/}
      {/*        <label className="dropdown__button-sub_label" htmlFor="dropdown__button-sub1">Дома и дачи</label>*/}
      {/*        <input className="dropdown__button-sub" type="checkbox" id="dropdown__button-sub2"/>*/}
      {/*        <label className="dropdown__button-sub_label" htmlFor="dropdown__button-sub2">Коммерческая недвижимость</label>*/}
      {/*        <input className="dropdown__button-sub" type="checkbox" id="dropdown__button-sub3"/>*/}
      {/*        <label className="dropdown__button-sub_label" htmlFor="dropdown__button-sub3">Гаражи</label>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  */}
      {/*  <div className="filters__container">*/}
      {/*    <div className="filters__container_yellow">*/}
      {/*      <div className="toggle-switches">*/}
      {/*        <form className="tabber">*/}
      {/*          <label className="toogle-switches__label" htmlFor="t1">Покупка</label>*/}
      {/*          <input className="toogle-switches__input" id="t1" name="food" type="radio" defaultChecked/>*/}
      {/*          <label className="toogle-switches__label" htmlFor="t2">Аренда</label>*/}
      {/*          <input className="toogle-switches__input" id="t2" name="food" type="radio"/>*/}
      {/*          <div className="blob"/>*/}
      {/*        </form>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  */}
      {/*  <div className="filters__container">*/}
      {/*    <div className="filters__container_yellow">*/}
      {/*      <p>Цена</p>*/}

      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

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
