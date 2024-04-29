import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeroImg, fetchHeroContact } from "../control/heroSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import hero from "/Hero/hero.png";

const Hero = () => {
  const dispatch = useDispatch();
  const { heroImg, heroContact } = useSelector((state) => state.hero);

  useEffect(() => {
    dispatch(fetchHeroImg());
    dispatch(fetchHeroContact());
  }, [dispatch]);

  return (
    <section id="hero">
      <div className="hero-container">
        <Swiper
          className="swiper-hero"
          direction={"horizontal"}
          loop={true}
          initialSlide={1}
          pagination={{
            el: ".hero-pagination",
            clickable: true,
            bulletClass: "hero-bullet",
            bulletActiveClass: "hero-bullet-active",
          }}
          modules={[Pagination]}
          breakpoints={{
            1024: {
              direction: "vertical",
            },
          }}
        >
          {heroImg.map((img) => (
            <SwiperSlide key={img.id} className="swiper-hero-slide">
              <img src={hero} alt="Hero Image" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="hero-pagination"></div>
        <div className="hero-main">
          <div className="hero-contact">
            {heroContact.map((contact) => (
              <div key={contact.id} className="contact-items">
                {contact.icon && <img src={contact.icon} alt="icon" />}
                <p>{contact.text}</p>
                <p>{contact.title}</p>
                {contact.icons &&
                  contact.icons.map((icon) => (
                    <img key={icon.id} src={icon.icon} alt="icon" />
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
