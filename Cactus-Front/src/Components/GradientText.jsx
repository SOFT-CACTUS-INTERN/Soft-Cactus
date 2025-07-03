import React from "react";
import style from '/src/Styles/gradientText.module.css'


const GradientText= ({TEXT})=>{

    return(
        <div className={style.gradientText}>
            <p>{TEXT}</p>
        </div>
    )
};
export default GradientText;
