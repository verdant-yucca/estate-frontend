// import estatePool from '../../../images/estate-pool.jpg';
import building1 from '../../../images/tagEstate/building.png';
import building2 from '../../../images/tagEstate/building-1.png';
import building3 from '../../../images/tagEstate/building-2.png';
import './Services.css';

function Services() {
  return (
    <section className="services">
      {/*Задний фон*/}
      {/*<img className='services__slider' src={estatePool} alt='promo__slider'></img>*/}
      <div className='services__background'></div>
      <div className='services__shadow'></div>

      <h1 className='services__title'>Что вы ищете?</h1>

      <div className='services__three-column'>
        <div className='services__info'>
          <img src={building1} alt="building1" className='services__img'/>
          <h2 className='services__info-title'>Квартиры</h2>
          <p className='services__info-text'>Получите бесплатную консультацию ЭКСПЕРТА по недвижимости + помощь в приобретении</p>
          <button type='button' className="services__button">Go to Estate</button>
        </div>
        <div className='services__info'>
          <img src={building2} alt="building2" className='services__img'/>
          <h2 className='services__info-title'>Дома</h2>
          <p className='services__info-text'>Получите бесплатную консультацию ЭКСПЕРТА по недвижимости + помощь в приобретении</p>
          <button type='button' className="services__button">Go to Estate</button>
        </div>
        <div className='services__info'>
          <img src={building3} alt="building3" className='services__img'/>
          <h2 className='services__info-title'>Офисы</h2>
          <p className='services__info-text'>Получите бесплатную консультацию ЭКСПЕРТА по недвижимости + помощь в приобретении</p>
          <button type='button' className="services__button">Go to Estate</button>
        </div>

      </div>


    </section>
  );
}

export default Services;
