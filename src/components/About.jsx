import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import A from '../assets/classa.gif'
import B from '../assets/classb.gif'
import C from '../assets/classc.gif'
import D from '../assets/classd1.gif'
import F from '../assets/classf.gif'
import E from '../assets/electrical.png'
import '../index.css'

const About = () => {

    return (
        <div className='px-[20px] py-[40px] md:p-[100px]'>

            <div className='flex items-center gap-5 md:gap-10'>
                <span className='text-white font-medium text-[30px] md:text-[40px] background px-[10px] rounded-md'>Növləri</span>
                <span className='font-normal text-base md:text-lg text-black'>Yanğınların təsnifatı</span>
            </div>
            <div className='p-[10px] md:p-[70px] background-dark rounded-[45px] mt-[60px]'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    
                    }}
                    modules={[Pagination]}
                    className="mySwiper min-h-[250px]"
                >
                    <SwiperSlide className='text-white text-center px-2 md:px-3 !flex items-center gap-2 min-h-[200px]'>

                        <div className='w-[60%]'>
                            <h3 className='font-extrabold text-color'>A sinfi yanğınlar</h3>
                            <span>kağız, ağac və s. kimi üzvi bərk maddələrin iştirak etdiyi yanğınlardır</span>
                        </div>
                        <div className='w-[40%] flex justify-center'>
                            <img src={A} alt="a" />
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='text-white text-center px-2 md:px-3 !flex items-center gap-2 min-h-[200px]'>

                        <div className='w-[60%]'>
                            <h3 className='font-extrabold text-color'>B sinfi yanğınlar</h3>
                            <span>tez alışan mayelərin daxil olduğu yanğınlardır</span>
                        </div>
                        <div className='w-[40%] flex justify-center'>
                            <img src={B} alt="b" />
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='text-white text-center px-2 md:px-3 !flex items-center gap-2 min-h-[200px]'>

                        <div className='w-[60%]'>
                            <h3 className='font-extrabold text-color'>C sinfi yanğınlar</h3>
                            <span>alışan qazların daxil olduğu yanğınlardır</span>
                        </div>
                        <div className='w-[40%] flex justify-center'>
                            <img src={C} alt="c" />
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='text-white text-center px-2 md:px-3 !flex items-center gap-2 min-h-[200px]'>

                        <div className='w-[60%]'>
                            <h3 className='font-extrabold text-color'>D sinfi yanğınları</h3>
                            <span>yanan metallarla əlaqəli yanğınlardır (məsələn, alüminium çubuq)</span>
                        </div>
                        <div className='w-[40%] flex justify-center'>
                            <img src={D} alt="d" />
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='text-white text-center px-2 md:px-3 !flex items-center gap-2 min-h-[200px]'>

                        <div className='w-[60%]'>
                            <h3 className='font-extrabold text-color'>F sinfi yanğınları</h3>
                            <span>dərin yağlı qızartma maşınlarında istifadə olunan yağlarla əlaqəli yanğınlardır</span>
                        </div>
                        <div className='w-[40%] flex justify-center'>
                            <img src={F} alt="f" />
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='text-white text-center px-2 md:px-3 !flex items-center gap-2 min-h-[200px]'>

                        <div className='w-[60%]'>
                            <h3 className='font-extrabold text-color'>Elektrik yanğınları</h3>
                            <span>elektrik avadanlığının səbəb olduğu yanğınlardır.</span>
                        </div>
                        <div className='w-[40%] flex justify-center'>
                            <img src={E} alt="e" />
                        </div>

                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default About