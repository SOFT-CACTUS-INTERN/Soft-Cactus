import React from 'react'
import arrow from '/src/assets/icons/scroll/arrow.svg'
import style from '/src/Styles/arrowUp.module.css'

const ArrowUp =()=>{

    return(
        <div className={style.arrow}>
                <img src={arrow} alt="go up" />
        </div>
    )
};
export default ArrowUp;