import './EstateAbout.css';
import PhotoSlider from "../Blocks/PhotoSlider/PhotoSlider";

function HomeAbout({estate}) {
  console.log(estate.home.electricity)
  return (
    <section className="estate-about">
      <div className="estate-about__column">
        <PhotoSlider images={estate? estate.images : ""}/>
      </div>

      <div className="estate-about__column">
        <h2 className="estate-about__title">О квартире</h2>
        <div className="estate-about__parameters">
          <ul className="estate-about__list">
            {estate && estate.home && estate.home.rooms &&
              <li className="estate-about__parameter">Количество комнат: <span className="estate-about__text">{estate.home.rooms}</span></li>
            }
            {estate && estate.home && estate.square &&
            <li className="estate-about__parameter">Общая площадь: <span className="estate-about__text">{estate.square} м²</span></li>
            }
            {estate && estate.home && estate.home.plot_area &&
              <li className="estate-about__parameter">Площадь участка: <span className="estate-about__text">{estate.home.plot_area} сот.</span></li>
            }
            {estate && estate.home && estate.home.year_built &&
              <li className="estate-about__parameter">Дата строительства: <span className="estate-about__text">{estate.home.year_built} год</span></li>
            }
            {estate && estate.home && estate.home.house_floors &&
              <li className="estate-about__parameter">Этажей: <span className="estate-about__text">{estate.home.house_floors}</span></li>
            }
            {estate && estate.home && estate.home.land_category &&
              <li className="estate-about__parameter">Категория земель: <span className="estate-about__text">{estate.home.land_category}</span></li>
            }
          </ul>
          <ul className="estate-about__list">
            {estate && estate.home && estate.home.wall_material &&
              <li className="estate-about__parameter">Материал стен: <span className="estate-about__text">{estate.home.wall_material}</span></li>
            }
            {estate && estate.home && estate.home.heating &&
              <li className="estate-about__parameter">Отопление: <span className="estate-about__text">{estate.home.heating}</span></li>
            }
            {estate && estate.home && estate.home.toilet &&
              <li className="estate-about__parameter">Туалет: <span className="estate-about__text">{estate.home.toilet}</span></li>
            }
            {estate && estate.home && estate.home.repair &&
              <li className="estate-about__parameter">Ремонт: <span className="estate-about__text">{estate.home.repair}</span></li>
            }
            {estate && estate.home && estate.home.water_supply &&
              <li className="estate-about__parameter">Водоснабжение: <span className="estate-about__text">{estate.home.water_supply}</span></li>
            }
            {estate && estate.home && estate.home.electricity && (estate.home.electricity === true || estate.home.electricity === false) &&
              <li className="estate-about__parameter">Электричество: <span className="estate-about__text">{estate.home.electricity=== true ? "Есть" : "Нет"}</span></li>
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default HomeAbout;
