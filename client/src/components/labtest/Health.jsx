import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import "swiper/css/bundle";
import { health } from "../../database/data";

const Health = () => {
  return (
    <div className="flex flex-col w-screen lg:px-20 pb-10 px-10 gap-5">
      <h1 className="lg:text-2xl md:text-xl text-lg font-semibold">
        Find Tests by Health Concern
      </h1>
      <div className="flex items-center justify-center">
        <Swiper
          modules={[EffectFade]}
          className="px-4"
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {health?.map((item, ind) => (
            <SwiperSlide key={ind}>
              <div className="flex flex-col gap-3 items-center justify-center w-full">
                <img src={item.img} alt="" className="" />
                <p>{item.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Health;
