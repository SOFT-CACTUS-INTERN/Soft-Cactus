import React from 'react';
import styles from '/src/Styles/pubs.module.css';
import forsa from '../assets/forsa.svg';
import uradio from '../assets/uradio.svg';
import wavyline from '../assets/decor/wavyline.svg';
import waves from '../assets/decor/waves.svg';

import Huradio from '/src/assets/hovered/uradioHover.svg'
import Hforsa from '/src/assets/hovered/forsaHover.svg'

const Pubs = () => {
  
  return (
    <div className={styles.banner}>
        <div className={styles.waves}>
            <img src={waves} alt="" />
        </div>
        <div 
  
        className={styles.cardsContainer}>
          <div className={styles.uradio}>
              <img src={forsa} alt="Forsa" />
              <img src={Hforsa} alt="Forsa" />
            </div>
            <div className={styles.uradio}>
              <img src={uradio} alt="Uradio" />
              <img src={Huradio} alt="Huradio" />
            </div>
        </div>
    </div>
  );
};

export default Pubs;
