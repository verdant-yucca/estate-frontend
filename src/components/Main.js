import Card from './Card';

function Main({onAddPlace, cards, onCardClick, onConfirm, }) {

  return (
    <>
      <section className="profile">
        <div className="profile__button-block">
          <button type="button" className="profile__button-add profile__button-add_active">Купить</button>
          <button type="button" className="profile__button-add">Продать</button>
          <button type="button" className="profile__button-add">Оформить ипотеку</button>
        </div>
          <div className="profile__info-block">
            <div className="profile__button-block">
              <button type="button" className="profile__button-type profile__button-type_active">Квартиры</button>
              <button type="button" className="profile__button-type">Дома и дачи</button>
              <button type="button" className="profile__button-type">Коммерческая</button>
              <button type="button" className="profile__button-type">Гаражи</button>
            </div>
            <div>
              <p>тут</p>
              <p>будут</p>
              <p>фильтры</p>
            </div>
          </div>
      </section>

      <section className="profile">
        <button type="button" className="profile__button-add" onClick={onAddPlace}>Добавить квартиру</button>
      </section>

      <section>
        <ul className="elements">
          {cards.map(card => (
            <Card key={card._id} card={card} onCardClick={onCardClick} onConfirm={onConfirm} />
          ))}
        </ul>
      </section>
    </>
  );
}

export default Main;
