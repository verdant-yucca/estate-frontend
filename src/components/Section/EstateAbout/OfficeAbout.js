import './EstateAbout.css';
import PhotoSlider from "../Blocks/PhotoSlider/PhotoSlider";

function OfficeAbout({estate}) {
  return (
    <section className="estate-about">
      <div className="estate-about__column">
        <PhotoSlider images={estate? estate.images : ""}/>
      </div>

      <div className="estate-about__column">
        <h2 className="estate-about__title">Об объекте</h2>
        <div className="estate-about__parameters">
          <ul className="estate-about__list">
            {estate && estate.office && estate.office.floor &&
              <li className="estate-about__parameter">Этаж: <span className="estate-about__text">{estate.office.floor}</span></li>
            }
            {estate && estate.office && estate.square &&
              <li className="estate-about__parameter">Площадь помещения: <span className="estate-about__text">{estate.square}</span></li>
            }
            {estate && estate.office && estate.office.power_grid_capacity &&
              <li className="estate-about__parameter">Мощность электросети: <span className="estate-about__text">{estate.office.power_grid_capacity}</span></li>
            }
            {estate && estate.office && estate.office.purpose &&
              <li className="estate-about__parameter">Назначение помещения: <span className="estate-about__text">{estate.office.purpose}</span></li>
            }
          </ul>
          <ul className="estate-about__list">
            {estate && estate.office && estate.office.room_layout &&
              <li className="estate-about__parameter">Планировка: <span className="estate-about__text">{estate.office.room_layout}</span></li>
            }
            {estate && estate.office && estate.office.heating &&
              <li className="estate-about__parameter">Отопление: <span className="estate-about__text">{estate.office.heating}</span></li>
            }
            {estate && estate.office && estate.office.separate_entrance && (estate.office.separate_entrance === true || estate.office.separate_entrance === false) &&
              <li className="estate-about__parameter">Отдельный вход: <span className="estate-about__text">{estate.office.separate_entrance=== true ? "Да" : "Нет"}</span></li>
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default OfficeAbout;
