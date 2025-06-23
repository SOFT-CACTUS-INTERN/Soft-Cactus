
import React from "react";
import style from '/src/Styles/emplois.module.css'
const EmploisCard = ()=>{
    return(
        <div className={style.Card}>
            <div className={style.content}>
                <div className={style.service}>
                    <p className={style.head}>SERVICE COMMERCIAL<span className={style.yellowDot}>.</span></p>
                    <p className={style.job}>l'ingénieur commercial</p>
                    <p><a href="tel:+212 664 363 040">+212 664 363 040</a></p>
                    <p><a href="mailto:servicecommercial@softcactus.ma">servicecommercial@softcactus.ma</a></p>
                </div>
                <div className={style.vline} />
                <div className={style.hline} />
                <div className={style.emplois}>
                    <p className={style.head}>LES EMPLOIS<span className={style.yellowDot}>.</span></p>
                    <p>Emplois disponible</p>
                    <p><a href="https://demo.softcactus.ma/career">Jobs@softcactus.ma</a></p>                </div>




            </div>

        </div>
    )
};
export default EmploisCard