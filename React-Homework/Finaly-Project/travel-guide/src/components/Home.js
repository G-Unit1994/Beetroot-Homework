import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

const Home = () => {
  return (
    <section id="home">
      <h2>Welcome to the Travel Guide</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={30}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
      >
        <SwiperSlide>
          <div style={{ backgroundImage: "url('/images/new-york.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '300px' }}>
            <h3 style={{ color: 'white', textAlign: 'center', padding: '100px 0' }}>Discover New York</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundImage: "url('/images/paris.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '300px' }}>
            <h3 style={{ color: 'white', textAlign: 'center', padding: '100px 0' }}>Explore Paris</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundImage: "url('/images/tokyo.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '300px' }}>
            <h3 style={{ color: 'white', textAlign: 'center', padding: '100px 0' }}>Visit Tokyo</h3>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Додаємо нову секцію з популярними напрямками */}
      <section id="popular-destinations">
        <h2>Popular Destinations</h2>
        <div className="destinations-grid">
          <div className="destination-card">
            <img src="/images/rome.jpg" alt="Rome" />
            <h3>Rome</h3>
            <p>Explore the ancient ruins and vibrant culture of Italy's capital.</p>
          </div>
          <div className="destination-card">
            <img src="/images/barcelona.jpg" alt="Barcelona" />
            <h3>Barcelona</h3>
            <p>Experience the stunning architecture and lively streets of Barcelona.</p>
          </div>
          <div className="destination-card">
            <img src="/images/sydney.jpg" alt="Sydney" />
            <h3>Sydney</h3>
            <p>Enjoy the beautiful beaches and iconic Sydney Opera House.</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
