import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import data from "../data/data";

const Gallery = () => {
  return (
    <section id="gallery">
      <div className="gallery-main">
        <div className="main-title">
          <h1>Qalereya</h1>
        </div>
        <Swiper
          effect={"coverflow"}
          loop={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={30}
          initialSlide={2}
          breakpoints={{
            0: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 0,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="gallery-slider"
        >
          {data.galleryItems.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.img} alt="slide_image" />
            </SwiperSlide>
          ))}

          <div className="gallery-controller">
            <button className="swiper-button-prev"></button>
            <button className="swiper-button-next"></button>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
