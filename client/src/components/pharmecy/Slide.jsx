import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { slide } from "../../database/data";
import { Autoplay } from "swiper/core";

const Slide = () => {
  return (
    <div className=" lg:px-20 px-10 pb-10">
      <Swiper
        slidesPerView={3.4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3.2,
            spaceBetween: 30,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {slide?.map((item, ind) => (
          <SwiperSlide key={ind}>
            <img src={item} alt="" data-aos="flip-right"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slide;
