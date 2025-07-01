import React from 'react';
import styles from '/src/Styles/pubs.module.css';
import forsa from '../assets/forsa.svg';
import uradio from '../assets/uradio.svg';
import wavyline from '../assets/decor/wavyline.svg';
import waves from '../assets/decor/waves.svg';



const Pubs = () => {
  
  return (
    <div className={styles.banner}>
        <div className={styles.waves}>
            <img src={waves} alt="" />
        </div>


        <div className={styles.cardsContainer}>
          <div className={styles.cardOne}>            
              <div className={styles.box}>
                  <img className={styles.image} src={forsa} alt="Forsa" />
               </div>
               <div className={styles.cardBackLeft}></div>
          </div>
          <div className={styles.cardTwo}>
              <div className={styles.box}>
                <img className={styles.image} src={uradio} alt="Uradio" />
              </div>
              <div className={styles.cardBackRight}></div>
           </div>
            
        </div>
    </div>
  );
};

export default Pubs;
