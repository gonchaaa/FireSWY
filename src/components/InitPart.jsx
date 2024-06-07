import React from 'react'
import initimg from '../assets/initPhoto.png'
import { Link } from 'react-router-dom'

const InitPart = () => {
  return (
    <div className='px-[20px] lg:px-[100px] flex justify-between items-center'>
        <div className='w full md:w-1/2'>
            <h1 className='font-medium text-xl text-center md:text-left lg:text-4xl text-black'>Ölkəmizdə və dünyada baş verən yanğınlarda SƏNdə yanğınsöndürənlərə dəstək ol!</h1>
            <div className='w-full block md:hidden mt-[20px]'>
            <img src={initimg} alt="init-image" className='rounded-[71px]' />
            </div>
            <p className='mt-[20px] text-center md:text-left font-normal text-xl'>Əgər səndə dünyada və ölkəmizdə baş verən yanğınlar zamanı insanlara və yanğınsöndürənlərə dəstək göstərmək istəyirsənsə, kömək üçün qeydiyyatdan keç! Beləliklə biz sənə həmin ərazinin nəyə ehtiyacını olduğunu mail şəklində göndərəcəyik. Dəstəyin üçün təşəkkürlər!
            </p>
            <div className='flex justify-center md:justify-start'>
              <Link to={"/form"}>
            <button className='mt-[35px] bg-black rounded-[14px] py-[20px] px-[35px] text-white'>Qeydiyyatdan keç</button>
              </Link>
            </div>
        </div>
        <div className='hidden md:block w-[48%]'>
            <img src={initimg} alt="init-image" className='rounded-[71px]' />
        </div>

    </div>
  )
}

export default InitPart