import React from 'react'
import '../index.css'
import RiskImage from '../assets/whtUnderstand-600x600.png'
import Riskimage1 from '../assets/whtReduce-600x600.png'
import Riskimage2 from '../assets/Risk_Hazard_Vulnerability-1536x165.jpg'
import Riskimage3 from '../assets/likelihood.jpg'
import Riskimage4 from '../assets/intensity.jpg'
import Riskimage5 from '../assets/exposure.jpg'
import Riskimage6 from '../assets/susceptibility.jpg'
import { Link } from 'react-router-dom'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const RiskPrice = () => {
  return (
    <div>
      <div className='bg-risk-image h-[300px] w-full flex items-center'>
        <div className='w-[60%] m-auto flex gap-4 justify-between items-center'>
          <div className='hidden md:block w-[30%] h-[100px]'>
            <img src={RiskImage} className='w-full h-full object-contain' alt="riskimage" />
          </div>
          <div>
            <h3 className='text-white font-bold text-xl md:text-5xl'>Riski anlayın</h3>
            <p className='text-[10px] text-white'>Meşə yanğını riski bir neçə faktora əsaslanır: ehtimal, intensivlik, məruz qalma və həssaslıq. Cəmiyyətinizə hansı amillərin təsir etdiyini başa düşmək risklərin azaldılması fəaliyyətlərini prioritetləşdirməyə kömək edə bilər.</p>
          </div>
        </div>
      </div>

      <div className='my-[20px]'>
        <p className='w-[80%] my-[20px] m-auto'>İcmanın meşə yanğını riski ehtimal və intensivliyin (birlikdə “təhlükə” adlanır) və məruz qalma və həssaslığın (birlikdə “zəiflik” adlanır) birləşməsidir.</p>
        <div className='w-[80%] m-auto '>
          <div className='mb-3'>
            <img src={Riskimage2} className='w-full' alt="riskimage" />
          </div>
          <div className='flex justify-between items-center'>
            <img src={Riskimage3} className='w-[21%]' alt="riskimage" />
            <img src={Riskimage4} className='w-[21%]' alt="riskimage" />
            <img src={Riskimage5} className='w-[21%]' alt="riskimage" />
            <img src={Riskimage6} className='w-[21%]' alt="riskimage" />
          </div>
          <div className='my-[40px]'>
          <h2 className='w-full text-white font-medium inline-block text-[20px] sm:text-[25px] md:text-[30px] background p-[20px] rounded-md'>Yaşadığın yerin risk dərəcəsini öyrənmək istiyirsən?</h2>
            <div className='w-full flex justify-end mt-5'>
              <button className="w-full border-[1.5px] border-black text-black hover:bg-[#BF1E2E] hover:text-white text-[20px] sm:text-[25px] p-[20px] rounded-lg transition duration-300 ease-in-out">
                <Link to={"https://wildfirerisk.org/explore"} className='w-full flex items-center justify-between'> O zaman linkə keçid edərək ətraflı məlumat əldə edin
                  <ChevronRightIcon className='ml-3 fadeInRight' />
                </Link>
              </button>

            </div>
          </div>


        </div>
      </div>

      <div className='bg-risk-image h-[300px] w-full flex items-center'>
        <div className='w-[60%] m-auto flex gap-4 justify-between items-center'>
          <div className='hidden md:block w-[30%] h-[100px]'>
            <img src={Riskimage1} className='w-full h-full object-contain' alt="riskimage" />
          </div>
          <div>
            <h3 className='text-white font-bold text-xl md:text-5xl'>Riski Azaltmaq</h3>
            <p className='text-[10px] text-white'>İcmalar riski azaltmaq və idarə etmək və yanğına daha yaxşı uyğunlaşmaq üçün addımlar ata bilər. İcmanızda meşə yanğını riskini azaltmaq üçün alətlər və resurslar tapın.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RiskPrice