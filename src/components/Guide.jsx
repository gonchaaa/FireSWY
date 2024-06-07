import React from 'react'
import Fireblankets from '../assets/fire-blanket (1).png'
import Fireblankets2 from '../assets/fire-blanket2 (2).png'
import Fİreblankets3 from '../assets/fire-blanket3.webp'
import Fİreblankets4 from '../assets/fire-blanket4.webp'
import FireBlankets5 from '../assets/fireblanket5.jpeg'
import FİreBlankets6 from '../assets/fire-blanket6.jpg'
import FireBlankets7 from '../assets/fire-blanket7.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Guide = () => {
    return (
        <div className='hidden md:block px-[100px] pb-5'>
              <div className='flex items-center gap-5 md:gap-10'>
                <h2 className='text-white font-medium text-[30px] md:text-[40px] background px-[10px] rounded-md'>Yanğın yorğanı</h2>
                <h3 className='font-normal text-base md:text-lg text-black'>Yanğın yorğanları nə üçündür?</h3>
            </div>
            <div className='p-[30px] md:p-[70px] border-[2px] border-black rounded-[45px] mt-[20px]'>
                <Swiper
                    className="mySwiper min-h-[250px]"
                >
                    <SwiperSlide className='text-black text-center px-0 md:px-3 !flex flex-wrap items-center gap-4 xl:gap-2 min-h-[200px]'>

                        <div className='w-full lg:w-[57%]'>
                            <h3 className='font-extrabold text-color'>Yanğın yorğanı nədir?</h3>
                            <span>Yanğın yorğanı kiçik yanğınları söndürmək üçün hazırlanmış toxunmuş yanğına davamlı materialdan hazırlanmış təbəqədir. Yanğın yorğanları adətən toxunmuş fiberglasdan hazırlanır və yanğını boğmaq və oksigen təchizatını kəsməklə işləyir. Yanğın yorğanları fövqəladə yanğın zamanı sürətli çıxış üçün divara quraşdırılmış qutuda və ya çantada saxlanılır.</span>
                        </div>
                        <div className='w-full lg:w-[40%] h-[300px] flex justify-center'>
                            <img src={Fireblankets} alt="fire-blanket" className='w-full h-full object-cover' />
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='text-black text-center px-3 !flex flex-wrap items-center gap-2 min-h-[200px]'>

                        <div className='w-full lg:w-[57%]'>
                            <h3 className='font-extrabold text-color'>Yanğın yorğanı nə üçün istifadə olunur?</h3>
                            <span>Yanğın yorğanları adətən mətbəxdə və ya ətrafında kiçik yanğınları söndürmək üçün istifadə olunur və xüsusilə yemək yağları ilə əlaqəli F sinif yanğınları üçün faydalıdır. Onlar həmçinin tullantı qutusu yanğınları və geyim yanğınlarını söndürmək üçün istifadə edilə bilər. Yanğın yorğanları evdə, ticarət və ictimai mühitlərdə istifadə üçün uyğundur.</span>
                        </div>
                        <div className='w-full lg:w-[40%] h-[300px] flex justify-center'>
                            <img src={Fireblankets2} alt="fire-blanket" className='w-full h-full object-cover' />

                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='text-black text-center px-3 !flex flex-wrap items-center gap-2 min-h-[200px]'>

                        <div className='w-full lg:w-[57%]'>
                            <h3 className='font-extrabold text-color'>Yanğın yorğanını hara qoymaq lazımdır?</h3>
                            <span>Yanğın yorğanları mətbəxin içərisində və ya yaxınlığında yerləşdirilməlidir, lakin yanğın təhlükəsinə çox yaxın olmamalıdır, çünki yanğın yanğın yorğanına daxil olmağınıza mane ola bilər. Onlar ən yaxşı şəkildə asanlıqla müəyyən edilə bilən bir yerdə divara bərkidilir. Əlavə ehtiyat tədbiri olaraq müvafiq yanğınsöndürən ilə yanaşı yanğın yorğanları quraşdırılmalıdır .
                                Müəssisələr və təşkilatlar müvafiq yanğın yorğanı lövhələri ilə divara yanğın yorğanları quraşdırmalıdırlar .</span>
                        </div>
                        <div className='hidden lg:flex w-[40%] h-[300px] justify-center'>
                            <img src={Fİreblankets3} alt="fire-blanket" className='w-full h-full object-cover' />
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='text-black text-center px-3 !flex flex-wrap items-center gap-2 min-h-[200px]'>

                        <div className='w-full lg:w-[57%]'>
                            <h3 className='font-extrabold text-color'>Mənə hansı yanğın yorğanı lazımdır?</h3>
                            <span>3 ölçüdə yanğın yorğanı var (1x1m, 1.2x1.2m, 1.2x1.8m). Siz yanğının potensial ölçüsünü nəzərə almalısınız, çünki yanğını söndürmək və söndürmək üçün yanğın örtüyü bütün yanğını örtməlidir. Ən kiçik ölçü evdə soba nimçəsi və ya tavada yanğınlar üçün daha uyğun ola bilər, kommersiya mətbəxləri, atelye və ya geyim yanğınları üçün isə daha böyük ölçü tələb oluna bilər.</span>
                        </div>
                        <div className='w-full h-[200px] lg:w-[40%] md:h-[300px] flex justify-center'>
                        <img src={Fİreblankets4} alt="fire-blanket" className='w-full h-full object-cover' />
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='text-black text-center px-3 !flex flex-wrap items-center gap-2 min-h-[200px]'>

                        <div className='w-full lg:w-[57%]'>
                            <h3 className='font-extrabold text-color'>Yanğın yorğanından necə istifadə etmək olar?</h3>
                            <span>Yanğın yorğanından istifadə etmək üçün mümkünsə istilik mənbəyini söndürün. Yanğın yorğanını konteynerindən çıxarmaq üçün lentləri aşağı çəkin. Yanğından qorumaq üçün ədyalın künclərini əllərinizə sarın və yorğanı yanan obyektin üzərinə qoyun. Yanğın sönənə və obyekt sərin olana qədər yorğanı yerində saxlayın. Yanğın yorğanının necə istifadə ediləcəyi haqqında daha çox oxuyun.</span>
                        </div>
                        <div className='hidden lg:flex w-[40%] h-[300px] justify-center'>
                        <img src={FireBlankets5} alt="fire-blanket" className='w-full h-full object-cover' />
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='text-black text-center px-3 !flex flex-wrap items-center gap-2 min-h-[200px]'>
                        <div className='w-full lg:w-[57%]'>
                            <h3 className='font-extrabold text-color'>Yanğın yorğanlarına qulluq edilməlidirmi?</h3>
                            <span>Biznes və ya ictimai şəraitdə yanğın yorğanları ilk dəfə quraşdırıldıqda istismara verilməlidir və onların yaxşı saxlanıldığını yoxlamaq üçün hər il xidmət göstərilməlidir . Yanğın yorğanı zədələnməmiş və ya köhnəlmədiyinə və təmiz olduğuna əmin olmaq üçün vizual olaraq yoxlanılmalıdır. Ehtiyac yaranarsa tez bir zamanda yerləşdirilə bilməsi üçün yorğan istehsalçının təlimatlarına uyğun olaraq konteynerdə dəyişdirilməlidir.</span>
                        </div>
                        <div className='hidden lg:flex w-[40%] h-[300px] justify-center'>
                        <img src={FİreBlankets6} alt="fire-blanket" className='w-full h-full object-cover' />
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='text-black text-center px-3 !flex flex-wrap items-center gap-2 min-h-[200px]'>

                        <div className='w-full lg:w-[57%]'>
                            <h3 className='font-extrabold text-color'>Yanğın yorğanları nə qədər davam edir?</h3>
                            <span>Yanğın yorğanının istifadə oluna biləcəyi müəyyən vaxt yoxdur, baxmayaraq ki, alış tarixindən hər 7 ildən bir yanğın yorğanı dəyişdirilir . Yorğanı nə vaxt dəyişdirmək barədə istehsalçının təlimatlarına müraciət etməlisiniz. Yanğın örtüyü zədələnibsə və ya yanğını söndürmək üçün istifadə olunubsa, dərhal dəyişdirilməlidir.</span>
                        </div>
                        <div className='hidden lg:flex w-[40%] h-[300px] justify-center'>
                        <img src={FireBlankets7} alt="fire-blanket" className='w-full h-full object-cover' />
                        </div>
                        
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Guide