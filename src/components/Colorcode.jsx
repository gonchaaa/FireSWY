import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import '../index.css';

const Colorcode = () => {
    const [showTable, setShowTable] = useState(false);

    function handleCLick() {
        setShowTable(!showTable);
    }

    return (
        <div className='px-[20px] md:px-[100px] py-[20px]'>
            <div className='flex items-center gap-3 md:gap-10'>
                <h2 className='text-white font-medium text-[20px] md:text-[40px] background px-[10px] rounded-md'>Yanğın söndürücülər</h2>
                <h3 className='font-normal text-sm md:text-lg text-black'>Rəng kodlaşdırılması</h3>
            </div>
            <div className='p-[30px] md:p-[60px] background-dark rounded-[45px] mt-[60px]'>
                <p className='text-white'>Od söndürücünün növü aşağıda göstərildiyi kimi rəng kodu ilə müəyyən edilir. Köhnə yanğınsöndürənlər standartı söndürmə balonunun bütün gövdəsinin müvafiq rəngə boyanmasını tələb edirdi. Siz bu yanğınsöndürənləri bir çox binada tapa bilərsiniz və bunlar hələ də qanunidir, yanğınsöndürən nasaz olduqda və dəyişdirilməli deyilsə, onları dəyişdirməyə ehtiyac yoxdur. Yeni yanğınsöndürənlər BS EN 3 standartına uyğun istehsal olunur.</p>
                <ul className='text-white list-disc pl-10 py-[10px]'>
                    <li>Su söndürücüləri siqnal qırmızı rəngdədir.</li>
                    <li>Digər yanğınsöndürənlər, əsasən, söndürücünün tərkibini göstərən ikinci rəngdə yanğınsöndürənlərin səthinin ən azı 5%-ni əhatə edən etiket, lent və ya dairə ilə qırmızı siqnal olacaq.</li>
                </ul>
                <p className='text-white'>Yaşıl rənglə kodlanmış yanğınsöndürənlər buxarlandırıcı mayelərdir (Halonlar) və Monreal protokolunun nəticəsi olaraq 2003-cü ilin sonundan bəri təyyarə və ordu kimi bəzi istisnalar istisna olmaqla, qeyri-qanuni olmuşdur. Onlar qanuni şəkildə utilizasiya edilməlidir</p>
                <div className='mt-[30px] text-center'>
                    <button onClick={handleCLick} className="border-2 border-white text-white hover:bg-orange-500 py-5 px-9 rounded-lg transition duration-300 ease-in-out">
                        Cədvələ baxmaq üçün klikləyin
                        {showTable ? <KeyboardArrowUpIcon className="inline-block w-5 h-5 ml-2" /> : <KeyboardArrowDownIcon className="inline-block w-5 h-5 ml-2" />}
                    </button>
                </div>

                <div className={`table-container mt-2 md:mt-8 ${showTable ? 'show' : ''}`}>
                    {showTable && (
                        <div className='overflow-x-auto max-h-[400px] overflow-y-auto'>
                            <table className='min-w-full'>
                                <thead>
                                    <tr>
                                        <th>Növ</th>
                                        <th>Köhnə Kod</th>
                                        <th>BS EN 3 Rəng Kodu</th>
                                        <th>Yanğın sinfi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Su</td>
                                        <td className='bg-[#FF0000]'>Qırmızı siqnal</td>
                                        <td>Qırmızı siqnal</td>
                                        <td>A</td>
                                    </tr>
                                    <tr>
                                        <td>Su Dumanı</td>
                                        <td className='text-red-700'>Ağ və Qırmızı</td>
                                        <td>Ağ və Qırmızı</td>
                                        <td>A, (rəsmi işarələmə olmasa da, B və C üçün uyğundur). Dielektrik sınaqdan keçirildikdə və ionsuzlaşdırılmış su istifadə edildikdə elektrik riski üçün uyğundur. Kiçik F yanğınları üçün uyğun sertifikatlaşdırılıbsa</td>
                                    </tr>
                                    <tr>
                                        <td>Köpük</td>
                                        <td className='bg-[#FF0000]'>Krem</td>
                                        <td>İstifadə təlimatının üstündə krem ​​paneli olan qırmızı</td>
                                        <td>A, B, dielektrik sınaqdan keçirildiyi təqdirdə elektrikdir</td>
                                    </tr>
                                    <tr>
                                        <td>Quru Pudra</td>
                                        <td className='bg-[#0000FF]'>Fransız Mavi</td>
                                        <td>İstismar təlimatlarının üstündə mavi panel olan qırmızı</td>
                                        <td>A, B, C, elektrik</td>
                                    </tr>
                                    <tr>
                                        <td>Karbon dioksid</td>
                                        <td className='bg-black'>Qara</td>
                                        <td>İstismar təlimatlarının üstündə qara panel olan qırmızı</td>
                                        <td>B, elektrik</td>
                                    </tr>
                                    <tr>
                                        <td>Halon</td>
                                        <td className='bg-[#009933]'>Zümrüd Yaşıl</td>
                                        <td>Artıq istehsal olunmur - Böyük Britaniyada qeyri-qanuni</td>
                                        <td>A</td>
                                    </tr>
                                    <tr>
                                        <td>Yaş Kimya</td>
                                        <td className='bg-[#FFFF00] text-black'>İstifadədə deyil</td>
                                        <td>İstismar təlimatlarının üstündə sarı panel olan qırmızı</td>
                                        <td>A, F, bəziləri B sinif yanğınları üçün də uyğundur</td>
                                    </tr>
                                    <tr>
                                        <td>Mütəxəssis tozu</td>
                                        <td className='bg-[#0000FF]'>Fransız Mavi</td>
                                        <td>İstismar təlimatlarının üstündə mavi panel olan qırmızı</td>
                                        <td>D</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Colorcode;
