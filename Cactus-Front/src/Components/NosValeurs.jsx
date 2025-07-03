import React from "react";
import styles from '/src/Styles/nosValeurs.module.css'
import SpecialText from './SpecialText'

const NosValeurs= ({Title="titre par defaut", para="Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac eu Ultricies nisl enim lacus id aliquam montes. Lorem ipsum dolor sit amet consectetur." })=>{

    return(
        <div className={styles.NosValeurs}>
            <SpecialText text={'NOS VALEURS'}   />
        </div>
    )
};
export default NosValeurs;
