import React, { useState } from 'react'
import reduce1 from '../assets/home1.jpg'
import '../index.css'
import { Link } from 'react-router-dom'

const ReduceRisk = () => {

    const boxes = [
        {
            id: 1, imgSrc: reduce1, title: "Alovlanmaya davamlı evlər", description: "Yanğına davamlı tikinti materiallarından və abadlıq işlərindən istifadə edin.", button: "Daha çox oxu",link:"https://wildfirerisk.org/reduce-risk/ignition-resistant-homes/"
        },
        {
            id: 2, imgSrc: reduce1, title: "Torpaqdan İstifadə Planlaması", description: "Plan və qaydalarla meşə yanğınlarına meyilli ərazilərdə icmaların necə inkişaf etdiyini istiqamətləndirin.", button: "Daha çox oxu",link:"https://wildfirerisk.org/reduce-risk/land-use-planning/"
        },
        {
            id: 3, imgSrc: reduce1, title: "Evakuasiya və Hazırlıq", description: "İcma xəbərdarlıqları, evakuasiya marşrutları və ailə planları ilə meşə yanğınlarına hazır olun.", button: "Daha çox oxu",link:"https://wildfirerisk.org/reduce-risk/evacuation-readiness/"
        },
        {
            id: 4, imgSrc: reduce1, title: "Ədalətli Riskin Azaldılması", description: "Cəmiyyətdəki insanların sosial və iqtisadi zəifliklərini aradan qaldırın.", button: "Daha çox oxu",link:"https://wildfirerisk.org/reduce-risk/equitable-risk-reduction/"
        },
        {
            id: 5, imgSrc: reduce1, title: "Siqaret Hazır", description: "Cəmiyyətdə meşə yanğını tüstüsünün sağlamlığa təsirlərinə hazır olun.", button: "Daha çox oxu",link:"https://wildfirerisk.org/reduce-risk/smoke-ready/"
        },
        {
            id: 6, imgSrc: reduce1, title: "Alovlanmaların qarşısını alın", description: "Yanğın tonqalları, zibil yanması, nəqliyyat vasitələri və digər mənbələrdən alovlanmanı azaldın.", button: "Daha çox oxu",link:"https://wildfirerisk.org/reduce-risk/prevent-ignitions/"
        },
        {
            id: 7, imgSrc: reduce1, title: "Cavab", description: "Canları, icmaları və resursları qorumaq üçün meşə yanğınlarını idarə edin və onlarla mübarizə aparın.", button: "Daha çox oxu",link:"https://wildfirerisk.org/reduce-risk/wildfire-response/"
        },
        {
            id: 8, imgSrc: reduce1, title: "Təhlükəli yanacaqların idarə edilməsi", description: "Landşaftda yanan bitki örtüyünü kəsin, nazikləşdirin, yandırın və ya başqa yolla azaldın.", button: "Daha çox oxu",link:"https://wildfirerisk.org/reduce-risk/fuel-treatments/"
        },
        {
            id: 9, imgSrc: reduce1, title: "Bərpa və Yenidənqurma", description: "Yanğından sonra mənzərəni və icmanı bərpa edin.", button: "Daha çox oxu",link:"https://wildfirerisk.org/reduce-risk/recovery/"
        },
        {
            id: 10, imgSrc: reduce1, title: "Maliyyələşdirmə", description: "İcma meşə yanğını riskinin azaldılmasını dəstəkləmək üçün qrantlar tapın.", button: "Daha çox oxu",link:"https://wildfirerisk.org/reduce-risk/funding/"
        }
    ]

    const [showBoxes, setShowBoxes] = useState(false);
    const hanleClick = () => {
        setShowBoxes(!showBoxes);
    }

    const displayBoxes = showBoxes ? boxes : boxes.slice(0, 6);


    return (
        <div className='flex gap-6 flex-wrap justify-between w-[80%] m-auto my-[30px]'>

            {
                displayBoxes.map((box) => (
                    <div key={box.id} className='w-[80%] m-auto md:w-[40%] md:min-h-[400px] lg:w-[30%] bg-[#F2F1F1] flex flex-wrap rounded-md p-[20px]'>
                        <div className='w-[40%] m-auto'>
                            <img src={box.imgSrc} className='w-full object-cover' alt="reduce-image" />
                        </div>
                        <div className='w-[95%] m-auto'>
                            <h6 className='font-medium text-xl text-center mt-4'>{box.title}</h6>
                            <p className='text-center mt-2'>{box.description}</p>
                        </div>
                        <div className='flex justify-center items-end w-full mt-3'>
                            <Link to={box.link} target='_blank'>
                            <button className='background p-2 rounded-lg'>{box.button}</button>
                            </Link>
                        </div>
                    </div>
                ))
            }
            {
                !showBoxes && (
                    <div className='m-auto'>
                        <button onClick={hanleClick} className="border-[1.5px] border-black text-black hover:bg-[#FF9A00] py-5 px-9 rounded-lg transition duration-300 ease-in-out">Daha çoxu üçün klikləyin</button>
                    </div>

                )
            }
        </div>
    )
}

export default ReduceRisk