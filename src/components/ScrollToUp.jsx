import React from 'react'
import { useState, useEffect } from 'react'
import '../index.css'
import FireButton from '../assets/fire.webp'

const ScrollToUp = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
      return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
  
    return (
      <div className="scroll-to-top">
        {isVisible && (
          <button onClick={scrollToTop} className="scroll-button fireUpDown">
            <img src={FireButton} alt="fire-button" className='w-full h-full object-fill' />
          </button>
        )}
      </div>
    );
  };

export default ScrollToUp