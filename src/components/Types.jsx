import React, { useState } from 'react'
import tablefire from '../assets/table-fire.jpg'
import '../index.css'
import { Link } from 'react-router-dom'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const fires = [
    {
        id: 1,
        title: 'Su yanğınsöndürənləri (qırmızı etiket)',
        desription: 'Susöndürənlər yalnız A sinifli yanğınlar üçün istifadə olunur. Buna görə də qırmızı kodlu yanğınsöndürənlər alışmış kağız, ağac, saman, kömür, rezin, bərk plastik və yumşaq əşyaların səbəb olduğu yanğınları söndürmək üçün istifadə edilə bilər. Su yanğınsöndürənləri, daha böyük səth sahəsini əhatə etməyə kömək edən sprey başlığından su püskürtməklə işləyir. Onlar ən sadə, ən çox yayılmış və ən ucuz yanğınsöndürən növüdür, qiyməti 3 və ya 6 litr üçün təxminən 25 funt sterlinq, 9 litrlik adi modellər üçün 35 funt sterlinq, dondan qorunan yanğınsöndürənlər üçün isə 50 funt-sterlinq arasında dəyişir. Bəzilərində suyu daha təsirli etmək və söndürücünün tələb olunan ölçüsünü və çəkisini azaltmaq üçün bir əlavə var - bunlar bir az daha bahalıdır.Su söndürücülər müxtəlifliyi saxlamaq üçün ən asan və ən az təhlükəlidir, çünki onların tərkibində yalnız su var. Odu və materialları su ilə isladıb sərinlədirlər. Bu, yanan obyektlərdən istiliyi udaraq alovu söndürür.Onlara tez-tez mağazalarda, ofislərdə, pərakəndə satış yerlərində, məktəblərdə, otellərdə, anbarlarda və məişət obyektlərində rast gəlinir. Onların sprey və ya reaktiv nozzləri ola bilər və adətən yanğını tamamilə söndürə bilirlər. Çatışmazlıq ondan ibarətdir ki, onlar yağ və ya yağın yandırılmasında (Class F), yanan metallar (Class D), yanan mayelər (Class B) və ya elektrik cihazlarının yanğınlarında istifadə edilə bilməz.'
    },
    {
        id: 2,
        title: 'Su dumanı söndürənlər',
        desription: 'Ən yeni yanğın söndürücü növü. Bu çox güclü, lakin daha kiçik cihazlar mikroskopik "quru" demineralizasiya olunmuş su hissəciklərindən ibarət ultra incə dumanı yayır. Onlardan A, B, C və F sinif yanğınlarında istifadə etmək təhlükəsiz və effektivdir, beləliklə, əksər otaqlarda birdən çox yanğınsöndürən növlə təchiz edilməsini lazımsız edir. Bəzi su dumanı söndürücüləri kompüterlər və printerlər kimi 1000 Volt-a qədər olan avadanlıqlarda elektrik yanğınlarında istifadə üçün də uyğundur.Onlar atəşi soyutmaqla və oksigen tədarükünü azaltmaqla işləyirlər. Bu qurğular çox güman ki, yağlı qızardılmış yanğınların söndürülməsi üçün yaş kimyəvi söndürücüləri əvəz edəcək və heç bir qalıq və ya girov zədəsi qoymayacaq. Su söndürənlər kimi, onlar təkrar emal edilə biləndir və heç bir kimyəvi maddə ehtiva etmir. Bununla belə, onlar D sinifli yanğınlarda (metallarda) istifadə edilə bilməz.Su dumanı söndürücüləri su söndürücülərdən daha bahadır, 1 litr üçün təxminən 50 funt sterlinqdən 6 litr üçün 100 funt sterlinq arasındadır.'
    },
    {
        id: 3,
        title: 'Su püskürən yanğınsöndürənlər',
        desription: 'Üç və altı litrdə mövcud olan su püskürən yanğınsöndürənlər ağac, parça, kağız, plastik və ya kömür kimi üzvi bərk materialların daxil olduğu yanğınlar üçün uyğundur. Yağların və ya yağların yandırılmasında və ya elektrik cihazlarında istifadə böyük bir xeyr-yoxdur.İstifadə jetini alovun dibinə yönəltmək və sönənə qədər onu davamlı və davamlı şəkildə yanğının üzərindən hərəkət etdirməkdən ibarətdir.Bir reaktiv nozzle daha yüksək təzyiqə uyğun olaraq incə bir sprey yaradan bir sprey ucluğuna üstünlük verilir. Daha geniş bir səth sahəsinə toxunaraq, istiliyi daha sürətli çıxarır. Suyun yanan materiala daha da nüfuz etməsinə kömək etmək üçün səthi aktiv maddələr əlavə edilə bilər.'
    },
    {
        id: 4,
        title: 'Köpük söndürücülər (krem etiketi)',
        desription: 'Köpük bərk cisimlərdə və mayelərdə (A və B sinifləri) yanğını boğur, lakin yanan yağlarda və ya yemək yağlarında (F sinfi) deyil, buna görə də köpüklü yanğınsöndürənlər benzin, boya və ya turpentin kimi yanan mayelərdə istifadə olunur. Köpüklü yanğınsöndürən bəzi elektrik yanğınlarında, əgər sınaqdan keçirilsə və 1 metr məsafədən atəşə tutularsa istifadə edilə bilər. Bununla belə, onlar təmizlənməli olan qalıq buraxırlar və onlar su söndürücülərdən daha bahalıdır, 1 litr üçün təxminən 25 funt-sterlinq, 9 litr üçün isə 55 funt-sterlinqdir.'
    },
    {
        id: 5,
        title: 'Quru toz söndürücülər (mavi etiket)',
        desription: 'Toz yanğınsöndürənlər yanan bərk maddələrin, mayelərin və qazların (A, B və C sinifləri) söndürülməsi üçün istifadə olunur. Mütəxəssis toz yanğınsöndürənlər litium, maqnezium və ya alüminium kimi yanan metalların daxil olduğu D tipli yanğınları söndürmək üçün nəzərdə tutulmuşdur.Onlar atəşi boğan və yayılmasının qarşısını alan bir qabıq meydana gətirən tozla işləyirlər.Dezavantajlar, tozun materiallara hopmaması və yanğına təsirli soyutma təsirinin olmamasıdır ki, bu da yanğının yenidən alovlanması ilə nəticələnə bilər. Toz nəfəs aldıqda təhlükəlidir, buna görə də onlar yaxşı havalandırılan yerlərdə istifadə edilməlidir və ofislər və məişət otaqları üçün uyğun deyil. Toz yumşaq mebelləri, maşınları və s. zədələyir və istifadədən sonra çoxlu təmizləmə tələb olunur. Onlar çip qabı yanğınlarında istifadə edilə bilməz (Class F).Onlar ümumiyyətlə ucuz və güclüdürlər və 1, 2, 4, 6 və 9 kq ölçülərdə olurlar. 1 kq-lıq bir modelin qiyməti 15 funt sterlinqə qədər ola bilər, 9 kq isə təxminən 35 funt-sterlinqə başa gələcək.'
    },
    {
        id: 6,
        title: 'CO2 söndürücülər (qara etiket)',
        desription: 'Onların tərkibində yalnız təzyiqli karbon qazı var və buna görə də heç bir qalıq qoymur. Karbon dioksid (CO2) söndürücüləri yanan mayelərin (Class B) və elektrik yanğınlarının, məsələn, böyük kompüter avadanlığının iştirak etdiyi yanğınlarda istifadə olunur, bu da ofislərdə praktikdir. CO2 yanğını boğmaqla işləyir və elektrik əşyalarına zərər vermir və ya sistemin qısaqapanmasına səbəb olmur.Bununla belə, CO2 söndürücülər boşalma zamanı çox soyuyur və ikiqat astarlı, şaxtadan qorunan fırlanan buynuzlarla təchiz olunmayanlar işə salınma zamanı barmaqların buynuza qədər donmasına səbəb ola bilər. Onlar qapalı yerlərdə boğula bilər və dərin yağlı qızartma maşınları üçün uyğun deyildir, çünki yanğınsöndürəndən gələn güclü jet yanan yağı fritözdən çıxara bilər. Atmosferə CO2 dağıldıqdan sonra yanğınlar tez bir zamanda yenidən alovlana bilər, buna görə də yanğından sonrakı təhlükəsizlik təmin edilmir.CO2 söndürücülər olduqca bahalıdır. 2 kq-lıq modelin qiyməti təxminən £33, server otaqları və fabriklər üçün uyğun olan 5 kq-lıq model isə 65 funt-sterlinqdən başlayır.'
    },
    {
        id: 7,
        title: 'Yaş kimyəvi yanğınsöndürənlər (sarı etiket)',
        desription: 'Bunlar, F sinifli yağ yanğınları (yağlar və yemək yağları) üçün uyğun olan su dumanı istisna olmaqla yeganə söndürücülərdir və əsasən fritözləri olan mətbəxlərdə istifadə olunur. Onlar həmçinin A sinfində, bəziləri isə B sinfi yanğınlarında istifadə edilə bilər. Onlar suda qələvi duzlarının təzyiqli məhlulundan ibarətdir ki, bu da işləyərkən incə duman yaradır, alovları soyuyur və sıçramanın qarşısını alır. Bəziləri ilə müqayisədə daha bahadır, 2 litr üçün təxminən 35 funt sterlinq, 3 litr üçün 70 funt sterlinq və 6 litrlik ölçülər üçün 110 funt sterlinqdir.'
    }
]

const Types = () => {
    const [openId, setOpenId] = useState(null)
    function toggleFunc(id) {
        setOpenId(openId === id ? null : id)
    }
    return (
        <div className='px-[20px] md:px-[60px]'>
            <h4 className='font-medium text-xl'>Müvafiq yanğın sinfi üçün yanğınsöndürən növlərinin seçilməsi sözün həqiqi mənasında həyat və ölüm arasında fərq ola bilər. Beləliklə, burada rəng kodları, yanğın sinifləri və istifadə üsulları daxil olmaqla, uyğun ssenari üçün düzgün yanğınsöndürən növünü və sinfini seçmək üçün faydalı bələdçi var.</h4>
            <h5 className='rounded-md bg-orange-400 text-white px-2 py-2 text-center my-4'>Yanğınsöndürənlərin beş əsas növü</h5>
            <div className='w-[40%] m-auto'>
                <ul className='list-disc'>
                    <li>Su, su dumanı və ya su püskürən yanğınsöndürənlər</li>
                    <li>Köpük yanğınsöndürənlər</li>
                    <li>Quru Pudra - standart və ya xüsusi yanğınsöndürənlər</li>
                    <li>Karbon dioksid ('CO2') yanğınsöndürənlər</li>
                    <li>Yaş kimyəvi yanğınsöndürənlər</li>
                </ul>
            </div>
            <div className='flex flex-wrap items-center'>
                <h6 className='w-full rounded-md bg-orange-400 text-white px-2 py-3 text-center my-4'>Yanğınsöndürənlərin növləri cədvəli</h6>
                <span>Bu cədvəl Böyük Britaniyada istifadə edilən yanğınsöndürən növlərini və onların uyğun olduğu yanğın növlərini, eləcə də onların rəng kodlarını vizual olaraq göstərir.</span>
            </div>
            <img src={tablefire} alt='tablefire' className='m-auto mt-10 object-cover' />
            <div className='m-auto rounded-md bg-orange-400 text-white px-2 py-6 text-xl text-center my-4'>Yanğınsöndürənlərin növləri və istifadəsi</div>
            <ul className='common'>
                {
                    fires.map(fire => (
                        <li key={fire.id} className={`cursor-pointer w-[90%] m-auto mb-4 rounded-[45px] py-[20px] px-[20px] md:px-[60px] border-[1px] border-b-[3px] border-[#191a23] ${openId === fire.id ? 'open bg-orange-400' : 'bg-[#F3F3F3F3]'}`}
                            style={{ transition: 'background-color 0.3s ease' }}
                            onClick={() => toggleFunc(fire.id)}
                        >
                            <div className='box flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <span className='font-medium text-4xl text-black'>{String(fire.id)}</span>
                                    <span className='font-medium text-xs md:text-xl ml-5'>{fire.title}</span>
                                </div>
                                <div className='w-[60px] flex items-center justify-center font-medium text-4xl'
                                    style={{ transition: 'transform 0.3s ease' }}
                                >
                                    <div>
                                        {openId === fire.id ? '-' : '+'}
                                    </div>
                                </div>
                            </div>
                            {openId === fire.id && <p>{fire.desription}</p>}
                        </li>
                    ))
                }
            </ul>
            <div className='flex justify-center lg:justify-end'>
                <button className="w-[90%] lg:w-auto border-2 border-black text-black hover:bg-orange-500 hover:text-white py-5 px-9 rounded-lg transition duration-300 ease-in-out">
                    <Link to={"https://www.youtube.com/watch?v=eoAoFG1fhB0&ab_channel=S%C6%8FT%C6%8FM"} className='flex items-center justify-between'>linkə keçid edərək ətraflı məlumat əldə edin
                        <ChevronRightIcon className='ml-3 fadeInRight' />
                    </Link>
                </button>
            </div>


            <h5 className='rounded-md bg-orange-400 text-white px-2 py-6 text-xl text-center my-4'>Yanğınsöndürəndən necə istifadə etmək olar?</h5>
            <p className='px-4'>Yanğınsöndürənlər ideal olaraq yalnız bunu etmək üçün təlim keçmiş şəxs tərəfindən istifadə edilməlidir - və aşağıdakı mətn təlim sayılmır. Bundan əlavə, yanğınsöndürən yalnız yanğın siqnalı işə salındıqdan və təhlükəsiz evakuasiya marşrutu müəyyən edildikdən sonra işə salınmalıdır. Əgər yanğınsöndürəndən istifadə etməkdə hələ də əmin deyilsinizsə və ya bunu etmək ən təhlükəsiz seçimdirsə, dərhal binanı boşaltın.
                <br />Buna baxmayaraq, aşağıdakı texnika təlim keçmişlər və ya hər kəsin zərər görmədən xilas olma şansını artırmaq üçün heç bir təlim keçməmiş kimsə bundan istifadə etməli olanlar üçün təkmilləşdirmə vasitəsi kimi xidmət edə bilər .
                <br />Aşağıdakı dörd addımlı texnika yanğınsöndürəndən istifadə etməyinizə kömək etmək üçün PASS qısaltması ilə daha asan yadda saxlanıla bilər:</p>
            <ul className='px-8'>
                <li>
                    <strong>Çək : </strong>
                     Təzyiq möhürünü qırmaq üçün sancağı çəkin.</li>
                <li>
                    <strong>Məqsəd : </strong>
                     Başlığı və ya şlanqı yanğının dibinə yönəldərək aşağı hədəf alın. (CO2 söndürücünün buynuzuna toxunmayın, çünki o, çox soyuq olur və dəriyə zərər verə bilər).</li>
                <li>
                    <strong>Sıxmaq : </strong>
                     Söndürmə maddəsini buraxmaq üçün sapı sıxın.</li>
                <li>
                    <strong>Süpürmək : </strong>
                     Yanğın sönənə qədər odun təməlində - yanacaq mənbəyində yan-yana süpürün.</li>
            </ul>
            <div className='flex justify-end mt-5'>
            <button className="border-2 border-black text-black hover:bg-orange-500 hover:text-white py-5 px-9 rounded-lg transition duration-300 ease-in-out">
                <Link to={"https://www.youtube.com/watch?v=RCYsO_HxVgg&ab_channel=F%C3%B6vq%C9%99lad%C9%99HallarNazirliyi"}>linkə keçid edərək ətraflı məlumat əldə edin
                <ChevronRightIcon className='ml-3 fadeInRight' />
                </Link>
            </button>
            </div>
           

            <div>
                <iframe
                    className='w-full h-[500px] my-10'
                    src="https://www.youtube.com/embed/vTQ0t6vuJbc"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    )
}

export default Types