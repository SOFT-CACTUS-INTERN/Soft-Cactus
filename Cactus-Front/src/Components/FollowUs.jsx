import React from "react";
import style from '/src/Styles/followus.module.css'


const FollowUs= ({text})=>{

    return(
        <div className={style.followus}>
            <div className={style.button}>
                <a href="#">FOLLOW US</a>
            </div>
            <div className={style.link}>
                <p>@soft.cactus.communication</p>
            </div>
        
        </div>
    )
};
export default FollowUs;
