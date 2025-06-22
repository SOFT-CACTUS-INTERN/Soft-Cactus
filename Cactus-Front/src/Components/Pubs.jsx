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
            <img src={forsa} alt="Forsa" />
            <img src={uradio} alt="Uradio" />
      </div>
    </div>
  );
};

export default Pubs;
