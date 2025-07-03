import React from "react";
import style from '/src/Styles/smallNav.module.css'
import { NavLink } from 'react-router-dom';

const smallNav= ()=>{

    return(
        <div className={style.smallNav}>
            <ul className={style.navList} >

                {/* need to find right path in the same page should I use id # ? */}
                
                <li><NavLink to="/">Qui sommes-nous</NavLink></li> 
                <li><NavLink to="/">Nos valeurs</NavLink></li>
                <li><NavLink to="/">Notre histoire</NavLink></li>
                <li><NavLink to="/">Nos agences</NavLink></li>
                <li><NavLink to="/">Notre team</NavLink></li>
            </ul>
        </div>
    )
};
export default smallNav;
