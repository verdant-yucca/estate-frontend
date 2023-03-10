import './PhotoSlider.css';
import {Keyboard, Navigation, Pagination, Scrollbar} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import Profile_silhouette from "../../../../images/Profile-silhouette.svg";
import React from "react";


function PhotoSlider({images})
{
  return(
    <div className="photo-slider">
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        slidesOffsetAfter={0}
        slidesOffsetBefore={0}
        spaceBetween={0}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          // 769: {
          //   slidesPerView: 2,
          //   slidesPerGroup: 2,
          // },
        }}
        // scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="photo-slider__swiper"
      >
        {images?.map(image => (
          <SwiperSlide key={'swiperimage_'+image}>
            <img className={'photo-slider__image'} key={'img_'+image} src={'https://api.verdant-yucca.ru/images/estate/' + image} alt="image"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PhotoSlider;
