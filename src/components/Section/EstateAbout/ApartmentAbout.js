import './EstateAbout.css';
import PhotoSlider from "../Blocks/PhotoSlider/PhotoSlider";

function ApartmentAbout({estate}) {
  return (
    <section className="estate-about">
      <div className="estate-about__column">
        <PhotoSlider images={estate? estate.images : ""}/>
      </div>

      <div className="estate-about__column">
        <h2 className="estate-about__title">О квартире</h2>
        <div className="estate-about__parameters">
          <ul className="estate-about__list">
            {estate && estate.apartment && estate.apartment.rooms &&
              <li className="estate-about__parameter">Количество комнат: <span className="estate-about__text">{estate.apartment.rooms}</span></li>
            }
            {estate && estate.apartment && estate.square &&
            <li className="estate-about__parameter">Общая площадь: <span className="estate-about__text">{estate.square} м²</span></li>
            }
            {estate && estate.apartment && estate.apartment.kitchen_square &&
              <li className="estate-about__parameter">Площадь кухни: <span className="estate-about__text">{estate.apartment.kitchen_square} м²</span></li>
            }
            {estate && estate.apartment && estate.apartment.living_space &&
              <li className="estate-about__parameter">Жилая площадь: <span className="estate-about__text">{estate.apartment.living_space} м²</span></li>
            }
            {estate && estate.apartment && estate.apartment.floor &&
              <li className="estate-about__parameter">Этаж: <span className="estate-about__text">{estate.apartment.floor}</span></li>
            }
          </ul>
          <ul className="estate-about__list">
            {estate && estate.apartment && estate.apartment.height &&
              <li className="estate-about__parameter">Высота: <span className="estate-about__text">{estate.apartment.height}</span></li>
            }
            {estate && estate.apartment && estate.apartment.bathroom &&
              <li className="estate-about__parameter">Санузел: <span className="estate-about__text">{estate.apartment.bathroom}</span></li>
            }
            {estate && estate.apartment && estate.apartment.furniture &&
              <li className="estate-about__parameter">Мебель: <span className="estate-about__text">{estate.apartment.furniture}</span></li>
            }
            {estate && estate.apartment && estate.apartment.repair &&
              <li className="estate-about__parameter">Ремонт: <span className="estate-about__text">{estate.apartment.repair}</span></li>
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ApartmentAbout;
