
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Banner.css';
import banner1 from"../../assets/banner/banner1.avif"
import banner2 from"../../assets/banner/banner2.jpg"
import banner3 from"../../assets/banner/banner3.jpg"
import banner4 from"../../assets/banner/banner4.jpg"
import banner5 from"../../assets/banner/banner5.jpg"

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    const progressCircle = useRef(null);
    console.log(progressCircle)
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
    return (
        <div className='h-96'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper  "
      >
        <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner5} alt="" /></SwiperSlide>
        
        <div className="autoplay-progress " slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
    );
};

export default Banner;