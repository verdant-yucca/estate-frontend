import './EstateInfo.css';

function EstateInfo({estate}) {
  console.log(estate);
  return (
    <section className="estate-info">
      <div className="estate-info__column">
        <h2 className="estate-info__title">Описание</h2>
        {estate &&
          <p className="estate-info__text">{estate.info}</p>
        }
        <img className="estate-info__map" src="https://static-maps.yandex.ru/1.x/?ll=37.663015%2C55.733884&z=17&l=map&pt=37.663185,55.733881,comma" alt="" />
      </div>
    </section>
  )
}

export default EstateInfo;
