import './Main.css';
import imageBanner from '../../images/slide-one.jpg';
import ContactUsForm from "../ContactUsForm/ContactUsForm";
import Reviews from "../reviews/Reviews";
import {useEffect, useState} from "react";
import api from "../../utils/api";

function Main() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    api.getReviews()
      .then((reviews) => {
        setReviews(reviews);
      })
      .catch(err => {
        console.log(err)
      });
  }, [])

  return (
    <>
      <section className="promo">
        <img className='promo__slider' src={imageBanner} alt='promo__slider'></img>
        <div className='promo__shadow'></div>

        <div className='promo__info'>
          <h1 className='promo__info-title'>Найдем ваш дом мечты</h1>
          <p className='promo__info-text'>Получите бесплатную консультацию ЭКСПЕРТА по недвижимости + помощь в приобретении</p>
          <a href='#section-contact-us' className='promo__info-button'>Связаться с нами</a>
        </div>
      </section>
      <ContactUsForm />

      <Reviews reviews={reviews}/>
    </>
  );
}

export default Main;
