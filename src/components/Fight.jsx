import React from 'react'
import FireFight from '../assets/firefighters-115800_1280.jpg'

const Fight = () => {
  return (
    <div className='px-[20px] md:px-[100px] py-[30px]'>
      <div className='flex items-center gap-4 md:gap-10'>
        <span className='text-white font-medium text-[20px] md:text-[40px] background px-[10px] rounded-md'>Yanğınla Mübarizə</span>
        <span className='font-normal text-sm md:text-lg text-black'>Yanğınla mübarizə aparmadan əvvəl</span>
      </div>
      <div className='border2 p-[25px] md:p-[60px] rounded-[45px] mt-[30px] flex gap-10 justify-between items-center'>
        <div className='w-full lg:w-[50%]'>
        <p>Bir çox insanlar kiçik yanğınları olduqca təhlükəsiz şəkildə söndürürlər. Bununla belə, bəzi insanlar imkanları xaricində yanğınla mübarizə apararaq ölür və ya yaralanır. Söndürmək və ya söndürmək qərarına gəlməyinizə kömək edəcək sadə yanğın kodu.</p>
        <ul className='list-disc pl-4 md:pl-10 pt-4'>
          <li>Yanğınla yalnız çox erkən mərhələdə mübarizə aparın</li>
          <li>Özünüzün və başqalarının təhlükəsizliyini həmişə birinci yerə qoyun</li>
          <li>Yanğın aşkar edildikdə dərhal həyəcan siqnalı verin</li>
          <li>Ehtiyacınız olduqda qaça bildiyinizə əmin olun və heç vaxt yanğının çıxışınızı maneə törətməsinə imkan verməyin</li>
          <li>Yanğını söndürə bilmirsinizsə və ya söndürücü boşalırsa, çölə çıxın və hər kəsi dərhal binadan çıxarın, gedərkən bütün qapıları arxanızca bağlayın. Sonra yanğınsöndürmə briqadasının çağırıldığından əmin olun</li>
        </ul>
        </div>
        <div className='hidden lg:block lg:w-[50%]'>
          <img src={FireFight} alt="fire-fight" className='rounded-[40px]' />
        </div>
      </div>
    </div>
  )
}

export default Fight