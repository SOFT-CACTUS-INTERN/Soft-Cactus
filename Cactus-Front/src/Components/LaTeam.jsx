import React, { useState } from "react";
import styles from '/src/Styles/laTeam.module.css'
import SpecialText from './SpecialText'
import { data } from "react-router-dom";
import Special from '../Components/SpecialText.jsx'

const LaTeam = () => {
    const images = [
        { src: '/src/assets/gallery/image3.svg', alt: 'Ghita NASSAH', dataDescription:'Social media manager'},
        { src: '/src/assets/gallery/image1.svg', alt: 'Hanae DEKHISSI' , dataDescription:'Fondatrice & Manager'},
        { src: '/src/assets/gallery/image2.svg', alt: 'Abderrahim RAISSOUNI' , dataDescription:'Designer Graphique'},
        { src: '/src/assets/gallery/hanae.png', alt: 'Abire JALTI' , dataDescription:'PHOTOGRAPHE & Vidéographe  '},
        { src: '/src/assets/gallery/image3.svg', alt: 'Btissam MENISSER  ' , dataDescription:'Ingénieur Commercial'}
    ];

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
    <div className={styles.Gallery}>
        <Special text={'la team'}></Special>
        <div className={styles.headText}>
                <div className={styles.headDescription}>
                        <p>Chaque membre de notre équipe est
                             expert dans son domaine.<br /> Ensemble, nous
                              plaçons votre marque là où elle
                               doit être : "au sommet."</p>
                </div>
        </div>
        <div className={styles.container}>
            
            <div className={styles.galleryContainer}>
                {images.map((image, index) => (
                    <div 
                        key={index}
                        className={`${styles.galleryItem} ${hoveredIndex === index ? styles.expanded : hoveredIndex !== null ? styles.collapsed : ''}`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <img className={styles.galleryImage} src={image.src} alt={image.alt} loading="lazy" />
                        <div className={styles.galleryOverlay}>
                            <div className={styles.galleryContent}>
                                <h3 className={styles.galleryTitle}>{image.alt}</h3>
                                <p className={styles.galleryDescription}>{image.dataDescription}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
         </div>
    </div>
    );
};

export default LaTeam;
