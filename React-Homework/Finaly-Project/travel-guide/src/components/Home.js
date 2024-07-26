import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

// Import Swiper core and required modules
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

const Home = () => {
  return (
    <section id="home">
      <h2>Welcome to the Travel Guide</h2>
      <Swiper
        spaceBetween={30}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
      >
        <SwiperSlide style={{ backgroundImage: "url('/images/new-york.jpg')" }}>
          Discover New York
        </SwiperSlide>
        <SwiperSlide style={{ backgroundImage: "url('/images/paris.jpg')" }}>
          Explore Paris
        </SwiperSlide>
        <SwiperSlide style={{ backgroundImage: "url('/images/tokyo.jpg')" }}>
          Visit Tokyo
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Home;
