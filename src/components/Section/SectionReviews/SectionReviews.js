import React from "react";
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
import Review from "../Blocks/Review/Review";

function SectionReviews({reviews, onClickAddReview, onClickDeleteReview, loggedIn}) {
  const handlerClickAddReview = () => onClickAddReview();
  // const handleClickDeleteReview = (event) => console.log(event);

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
            <Review loggedIn={loggedIn} review={review} onClickDeleteReview={onClickDeleteReview}/>
          </SwiperSlide>
        ))}
      </Swiper>
      <button onClick={handlerClickAddReview} className='swiper__button'>Добавить отзыв</button>
    </section>
  );
}

export default SectionReviews;
