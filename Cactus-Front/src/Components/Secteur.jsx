import React from "react";
import styles from '/src/Styles/secteur.module.css'
import arrow from '/src/assets/icons/rightArrow.svg'

const Secteur= ({Title="titre par defaut", para="Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac eu Ultricies nisl enim lacus id aliquam montes. Lorem ipsum dolor sit amet consectetur." })=>{

    return(
        <div className={styles.secteur}>
            <div className={styles.title}><img src={arrow} alt="" /><h1>{Title}</h1></div>
            <p className={styles.para}>{para}</p>
        </div>
    )
};
export default Secteur;
