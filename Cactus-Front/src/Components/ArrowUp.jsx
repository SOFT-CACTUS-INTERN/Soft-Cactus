import React, { useState,useEffect } from 'react'
import arrow from '/src/assets/icons/scroll/arrow.svg'
import style from '/src/Styles/arrowUp.module.css'
import { motion } from 'framer-motion';

const ArrowUp =()=>{
  const [isVisible,setIsVisible]=useState(false)
 useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY>300)
                setIsVisible(true)
            else
                setIsVisible(false)
        };
        window.addEventListener('scroll',handleScroll);
        return ()=>{
            window.removeEventListener('scroll',handleScroll);
        };
    },[]);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  if(!isVisible) return;
    return(
        <motion.div 
            animate={{ y: [0, -20, 0], }}
            transition= {{
                duration: 2,
                 repeat : Infinity,
                ease: 'easeInOut',}}
            className={style.arrow}
            onClick={scrollToTop}
                     
                    

        >
        <img src={arrow} className={style.innerArrow} alt="go up" />
        </motion.div>
    )
};
export default ArrowUp;