import React, { useState } from 'react'
import '../index.css'
import { Link } from 'react-router-dom'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className='relative p-[20px] lg:px-[100px] lg:py-[40px] flex justify-between items-center'>
      <div>
        <Link to={"/"}>FireSWY</Link>
      </div>
      <ul className='hidden md:flex justify-between items-center gap-[40px]'>
        <li>
          <Link to={"/live-map"}>Canlı Xəritə</Link>
        </li>
        <li>
          <Link to={"/equipment"}>Avadanlıqlar</Link>
        </li>
        <li>
          <Link to={"/risk"}>Risk</Link>
        </li>
        <li>
          <Link to={"/form"}>
          <button className='hover:bg-orange-500 hover:text-black border-[1px] border-black py-5 px-9 rounded-lg transition-colors duration-300 ease-in-out'>
            Qeydiyyatdan keç
          </button>
          </Link>
        </li>
      </ul>

      <div className={`block md:hidden ${showMenu ? 'rotate-90' : 'rotate-0'}`} onClick={handleClick}>
        <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1.80664H25" stroke="black" strokeWidth="2" strokeLinecap="round" />
          <path d="M1 9.80664H25" stroke="black" strokeWidth="2" strokeLinecap="round" />
          <path d="M1 17.8066H25" stroke="black" strokeWidth="2" strokeLinecap="round" />
        </svg>

      </div>

      <div className={`absolute bg-orange-500 w-full h-[90vh] flex justify-center z-[9999999999] items-center top-full transition-all duration-300 ${showMenu ? 'left-0 opacity-100 visible' : '-left-full opacity-0 invisible'} block md:hidden`}>
        <ul className='w-[60%] text-white text-center'>
          <li className='mb-5' onClick={handleClick}>
            <Link to={"/live-map"}>Canlı Xəritə</Link>
          </li>
          <li className='mb-5' onClick={handleClick}>
            <Link to={"/equipment"}>Avadanlıqlar</Link>
          </li>
          <li className='mb-5' onClick={handleClick}>
            <Link to={"/risk"}>Risk</Link>
          </li>
          <li className='mb-5' onClick={handleClick}>
            <Link to={"/form"}>
            <button>
              Qeydiyyatdan keç
            </button>
            </Link>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Header