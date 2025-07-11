import React from "react";
import style from '/src/Styles/bar.module.css'

/*==========================The infinite moving bar in nos agences page========================  */
//If you wish  You can easily add or change the phrase in the bars

const Bar = () => {
    const slogan = "You are not alone";
      const slogans = Array(20).fill(slogan);
      const conseil = " CONSEILLER EST la nouvelle façon de vendre en marketing digitale";
      const conseils = Array(10).fill(conseil);
    return(
      
      <div className={style.animeBars}>
        <div className={style.slogan} >
          <div className={style.sloganScroller}>
              {slogans.map((text, index) => (
              <span key={index} >
                {text}
              </span>
                ))}  
              
            </div>
        </div>
        <div className={style.conseiller} >
              <div className={style.conseillerScroller} >
                {conseils.map((text, index) => (
              <span key={index} >
                {text}
              </span>
                ))}  
              </div>
        </div>

      </div>
      
    )
}
export default Bar
