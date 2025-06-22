import React from "react";
import style from '/src/Styles/special.module.css'
import { div } from "framer-motion/client";

const Special= ({text})=>{

    return(
        <div className={style.special}>
            <div className={style.text}>
                {text}<span className={style.dot}>.</span>
            </div>
            <div className={style.underline}>
                <div className={style.cercle}>

                </div>
                <div className={style.bar}>

                </div>
            </div>
        </div>
    )
};
export default Special;
