import React from 'react'
import FireRate from '../assets/Fire-Rating.png'
const Degree = () => {
    return (
        <div className='px-[20px] py-[20px] md:px-[100px] md:py-[30px]'>
            <div className='flex items-center gap-5 md:gap-10'>
                <span className='text-white font-medium text-[30px] md:text-[40px] background px-[10px] rounded-md'>Dərəcəsi</span>
                <span className='font-normal text-base md:text-lg text-black'>Yanğınların dərəcəsi</span>
            </div>
            <div className='background-light p-[30px] md:p-[60px] rounded-[45px] mt-[30px] flex flex-wrap justify-between items-center'>
                <div className='w-[95%] m-auto lg:w-[60%]'>
                    <h5>
                    A, B və ya F sinifli yanğınları söndürməyə qadir olan bütün yanğınsöndürənlər rəqəm və hərflə göstərilən yanğın dərəcəsinə malikdirlər (məsələn, 13A, 55B). Nömrə sınaq şəraitində söndürə biləcəyi yanğının ölçüsünü göstərir. Sayı nə qədər çox olarsa, söndürə biləcəyi yanğın da bir o qədər böyük olar. Məktub yuxarıdakı kimi yanğın təsnifatını göstərir. C, D sinifləri və elektrik simvolu ədədi reytinq daşımır.
                    F sinifli yanğınları söndürməyə qadir olan bütün yanğınsöndürənlər 5, 15, 25 və 75 litr günəbaxan yağı istifadə edərək 4 etalon test əsasında reytinqə malikdirlər. Yağ avtomatik alışana qədər qızdırılır və 2 dəqiqə əvvəlcədən yanmağa icazə verilir. Sonra yanğın söndürülür və yanğın söndürüldükdən sonra 10 dəqiqə ərzində yenidən alovlanma baş verməməlidir.
                    </h5>
                </div>
                <div className='w-[95%] m-auto lg:w-[40%]'>

                <img src={FireRate} alt="fire-rate" className='w-full object-cover' />
                </div>
            </div>
        </div>
    )
}

export default Degree