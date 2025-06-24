import React from 'react';
import styles from '/src/Styles/pubs.module.css';
import forsa from '../assets/forsa.svg';
import uradio from '../assets/uradio.svg';
import wavyline from '../assets/decor/wavyline.svg';
import waves from '../assets/decor/waves.svg';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Pubs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <div className={styles.banner}>
        <div className={styles.waves}>
            <img src={waves} alt="" />
        </div>
        <motion.div 
  ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}} 
      transition={{ duration: 0.8, ease: "easeOut" }}
        className={styles.cardsContainer}>
            <img src={forsa} alt="Forsa" />
            <img src={uradio} alt="Uradio" />
        </motion.div>
    </div>
  );
};

export default Pubs;
