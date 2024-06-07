import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='p-[20px] md:p-[70px] background-dark'>
            <div className='flex flex-wrap items-center justify-between mb-10'>
                <div className='w-full md:w-1/2'>
                    <span className='mb-2 inline-block text-black text-xl font-medium rounded-md bg-orange-500 p-2'>Əlaqə</span>
                    <ul className='mt-3 font-normal text-white'>
                        <li className='mb-2'>Email:info@gmail.com</li>
                        <li className='mb-2'>Telefon: +994 55 555 55 55</li>
                    </ul>
                </div>
                <div className='w-full mt-4 md:w-1/2 md:mt-0'>
                    <span className='mb-2 inline-block md:hidden text-black text-xl font-medium rounded-md bg-orange-500 p-2'>Kategoriyalar</span>
                    <ul className='text-white text-left md:text-center'>
                        <li className='mb-2'>
                            <Link to={"/live-map"}>Canlı Xəritə</Link>
                        </li>
                        <li className='mb-2'>
                            <Link to={"/equipment"}>Avadanlıqlar</Link>
                        </li>
                        <li className='mb-2'>
                            <Link to={"/risk"}>Risk</Link>
                        </li>
                        <li>
                            <Link to={"/form"}>
                            <button className='hover:bg-orange-500 hover:text-black hover:border-none border-[1px] border-white py-5 px-9 rounded-lg transition-colors duration-300 ease-in-out'>
                                Qeydiyyatdan keç
                            </button>
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
            <hr />
            <span className='font-normal mt-10 text-lg text-white inline-block'>© 2024 Firely. All Rights Reserved.</span>
        </div>
    )
}

export default Footer