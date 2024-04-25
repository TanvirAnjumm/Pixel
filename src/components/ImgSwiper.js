import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import rectImg from '../assents/Rectangle 7.png'; 
import rectImg2 from '../assents/pp.png';
import rectImg3 from '../assents/pp2.png';
import arrow from '../assents/Vector.png'; 
import { Autoplay, Pagination } from 'swiper/modules';

function ImgSwiper() {
  const images = [
    rectImg,
    rectImg,
    rectImg
  ];

  return (
    <Swiper
      spaceBetween={2}
      slidesPerView={1}
      modules={[Pagination, Autoplay]}
      className="mySwiper imgSwiper"
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      speed={800}
      effect="slide"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} style={{ width: '100%', height: '70%' }} alt={`Slide ${index + 1}`} />
          <div className='textContainer'>
                MAKE BELIEVE
                <span className='spanStyle'>Sales on selected SONY products </span>
           </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ImgSwiper;
