import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SectionReviews.css";
import Profile_silhouette from "../../../images/Profile-silhouette.svg";
// import Profile_silhouette from "../../images/profile_silhouette.png";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
import Card from "../Blocks/Card/Card";

function SectionReviews({reviews, onAddReview}) {
  const handlerOnClick = () =>{
    onAddReview();
  }

  return (
    <section className="swiper__section">
      <h1 className="swiper__title">Узнайте что думают клиенты о нашей работе</h1>

      <Swiper
        slidesPerView={3}
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
        // scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        {reviews.map(review => (
          <SwiperSlide key={'swiper_'+review._id}>
            <div key={'item_'+review._id} className="slider__item">
              <img key={'img_'+review._id} className="slider_item_img" src={Profile_silhouette} alt=""/>
              <div key={'content_'+review._id} className="slider__item_content">
                <h2 key={'name_'+review._id} className="slider__item_name">{review.name}</h2>
                <p key={'text_'+review._id} className="slider__item_text">{review.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button onClick={handlerOnClick} className='swiper__button'>Добавить отзыв</button>
    </section>
  );
}

export default SectionReviews;
