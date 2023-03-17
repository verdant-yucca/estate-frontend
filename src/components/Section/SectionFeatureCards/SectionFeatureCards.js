import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SectionFeatureCards.css";
import { Keyboard, Navigation, Pagination } from "swiper";
import Card from "../Blocks/Card/Card";

function SectionFeatureCards({cards}) {

  const handlerOnClick = () =>{
    console.log("Добавление отзыва")
  }

  return (
    <section className="swiper__section">
      <h1 className="swiper__title">Популярные Объекты Недвижимости</h1>

      <Swiper
        slidesPerView={5}
        loop={true}
        centeredSlides={false}
        slidesOffsetAfter={10}
        slidesOffsetBefore={10}
        spaceBetween={20}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          1500: {
            slidesPerView: 4,
          },
          1100: {
            slidesPerView: 3,
          },
          800: {
            slidesPerView: 2,
          },
          300: {
            slidesPerView: 1,
          },
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Navigation, Pagination]}
        className="future-card__swiper"
      >
        {cards.map(card => (
          <SwiperSlide className="future-card__slide" key={'swiper_'+card._id}>
            <Card key={card._id} loggedIn={false} card={card} onConfirm={false} onEdit={false} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default SectionFeatureCards;
