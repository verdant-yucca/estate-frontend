import './Main.css';
import ContactUsForm from "../ContactUsForm/ContactUsForm";

function Main() {

  return (
    <>
      <section className="promo">
        <div className='promo__slider'></div>
        <div className='promo__shadow'></div>

        <div className='promo__info'>
          <h1 className='promo__info-title'>Найдем ваш дом мечты</h1>
          <p className='promo__info-text'>Получите бесплатную консультацию ЭКСПЕРТА по недвижимости + помощь в приобретении</p>
          <a href='#section-contact-us' className='promo__info-button'>Связаться с нами</a>
        </div>

      </section>

      <ContactUsForm />
    </>
  );
}

export default Main;
