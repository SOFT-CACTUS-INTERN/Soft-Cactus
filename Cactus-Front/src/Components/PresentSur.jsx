import React from "react";
import styles from '/src/Styles/presentSur.module.css'
import Special from './SpecialText'

const PresentSur= ()=>{

    return(
        <div className={styles.PresentSur}>
            <Special text={'Nous sommes présents sur'} />
        </div>
    )
};
export default PresentSur;
