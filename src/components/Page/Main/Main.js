import './Main.css';
// import imageBanner from '../../../images/slide-one.jpg';
import ContactUsForm from "../../Section/Blocks/ContactUsForm/ContactUsForm";
import SectionReviews from "../../Section/SectionReviews/SectionReviews";
import {useEffect, useState} from "react";
import api from "../../../utils/api";
import SectionFeatureCards from "../../Section/SectionFeatureCards/SectionFeatureCards";
import Services from "../../Section/Services/Services";

function Main() {
  const [reviews, setReviews] = useState([]);
  const [cards, setCards] = useState([]);


  useEffect(() => {
    api.getReviews()
      .then((reviews) => setReviews(reviews))
      .catch(err => console.log(err));
    api.getInitialCards()
      .then((cards) => setCards(cards))
      .catch(err => console.log(err));
  }, [])

  return (
    <>
      <section className="promo">
        {/*Задний фон*/}
        {/*<img className='promo__slider' src={imageBanner} alt='promo__slider'></img>*/}
        <div className='promo__slider'/>
        <div className='promo__shadow'></div>

        {/*две колонки: слева контент, справа форма связи*/}
        <div className='promo__info'>
          <h1 className='promo__info-title'>Найдем ваш дом мечты</h1>
          <p className='promo__info-text'>Получите бесплатную консультацию ЭКСПЕРТА по недвижимости + помощь в приобретении</p>
        </div>
        <ContactUsForm />
      </section>

      <SectionFeatureCards cards={cards}/>

      <Services />

      <SectionReviews reviews={reviews}/>
    </>
  );
}

export default Main;
