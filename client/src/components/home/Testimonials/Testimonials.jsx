import React from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { HiStar } from 'react-icons/hi'
import paitAvatar from '../../../assets/patient-avatar.png'

const Testimonials = () => {
    return (
        <div className='mt-[30px] lg:mt-[55px]'>
            <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 40
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 50
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 60
                    }
                }}
            >
                <SwiperSlide>
                    <div className='py-[30px] px-5 rounded-3' data-aos="flip-right">
                        <div className='flex items-center gap-[13px]'>
                            <img src="https://avatars.githubusercontent.com/u/115913715?v=4" className='rounded-lg' height={10} width={40} alt="" />
                            <div>
                                <h4 className='text-[18px] leading-[30px] font-semibold  text-[#181A1E]'>
                                    Sahil
                                </h4>
                                <div className='flex items-center gap-[2px]'>
                                    <HiStar className='text-[#FFC107] w-[18px] h-5' />
                                    <HiStar className='text-[#FFC107] w-[18px] h-5' />
                                    <HiStar className='text-[#FFC107] w-[18px] h-5' />
                                    <HiStar className='text-[#FFC107] w-[18px] h-5' />
                                    <HiStar className='text-[#FFC107] w-[18px] h-5' />
                                </div>
                            </div>
                        </div>
                        <p className='text-[14px] leading-6 mt-4 text-[#181A1E]'>
                            "I have been using Medofin for the past 6 months and I am very happy with the service. I have been able to get all my medicines delivered on time and the app is very easy to use. "
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='py-[30px] px-5 rounded-3' data-aos="flip-left">
                        <div className='flex items-center gap-[13px]'>
                            <img src={paitAvatar} alt="" />
                            <div>
                                <h4 className='text-[18px] leading-[30px] font-semibold  text-[#181A1E]'>
                                    Sourav
                                </h4>
                                <div className='flex items-center gap-[2px]'>
                                    <HiStar className='text-[#FFC107] w-[18px] h-5' />
                                    <HiStar className='text-[#FFC107] w-[18px] h-5' />
                                    <HiStar className='text-[#FFC107] w-[18px] h-5' />
                                    <HiStar className='text-[#FFC107] w-[18px] h-5' />
                                    <HiStar className='text-[#FFC107] w-[18px] h-5' />
                                </div>
                            </div>
                        </div>
                        <p className='text-[14px] leading-6 mt-4 text-[#181A1E]'>
                            "Medofin is a lifesaver! Six months of seamless service, on-time deliveries, and an easy-to-navigate app. Couldn't ask for more!"
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='py-[30px] px-5 rounded-3' data-aos="flip-right">
                        <div className='flex items-center gap-[13px]'>
                            <img src="https://avatars.githubusercontent.com/u/118839109?v=4" className='rounded-lg' height={10} width={40} alt="" />
                            <div>
                                <h4 className='text-[18px] leading-[30px] font-semibold  text-[#181A1E]'>
                                    Akshat
                                </h4>
                                <div className='flex items-center gap-[2px]'>
                                    <HiStar className='text-[#FFC107] w-[18px] h-5' />
                                    <HiStar className='text-[#FFC107] w-[18px] h-5' />
                                    <HiStar className='text-[#FFC107] w-[18px] h-5' />
                                    <HiStar className='text-[#FFC107] w-[18px] h-5' />
                                    <HiStar className='text-[#FFC107] w-[18px] h-5' />
                                </div>
                            </div>
                        </div>
                        <p className='text-[14px] leading-6 mt-4 text-[#181A1E]'>
                            "Impressed with Medofin! Reliable service, timely deliveries, and a user-friendly app. Six months and counting, it's been smooth sailing."
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='py-[30px] px-5 rounded-3' data-aos="flip-left">
                        <div className='flex items-center gap-[13px]'>
                            <img src="https://avatars.githubusercontent.com/u/117257768?v=4" className='rounded-lg' height={10} width={40} alt="" />
                            <div>
                                <h4 className='text-[18px] leading-[30px] font-semibold  text-[#181A1E]'>
                                    Aryan
                                </h4>
                                <div className='flex items-center gap-[2px]'>
                                    <HiStar className='text-[#FFC107] w-[18px] h-5' />
                                    <HiStar className='text-[#FFC107] w-[18px] h-5' />
                                    <HiStar className='text-[#FFC107] w-[18px] h-5' />
                                    <HiStar className='text-[#FFC107] w-[18px] h-5' />
                                    <HiStar className='text-[#FFC107] w-[18px] h-5' />
                                </div>
                            </div>
                        </div>
                        <p className='text-[14px] leading-6 mt-4 text-[#181A1E]'>
                            "Using Medofin for the last half-year has been a breeze. The app's ease of use and punctual deliveries have made it my go-to for medication needs."
                        </p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Testimonials