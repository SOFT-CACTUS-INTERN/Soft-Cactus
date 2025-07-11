import React, { useState } from "react";
import styles from '/src/Styles/laTeam.module.css'
import Special from '../Components/SpecialText.jsx'
import image1 from'/src/assets/gallery/image3.svg'
import image2 from'/src/assets/gallery/image1.svg'
import image3 from'/src/assets/gallery/image2.svg'
import image4 from'/src/assets/gallery/hanae.png'
import image5 from'/src/assets/gallery/image3.svg'
const LaTeam = () => {

/*==================you can add any image just import it up there and add in to the array========================== */
    const images = [
        { src: image1 , alt: 'Ghita NASSAH', dataDescription:'Social media manager'},
        { src: image2 , alt: 'Hanae DEKHISSI' , dataDescription:'Fondatrice & Manager'},
        { src: image3 , alt: 'Abderrahim RAISSOUNI' , dataDescription:'Designer Graphique'},
        { src: image4 , alt: 'Abire JALTI' , dataDescription:'PHOTOGRAPHE & Vidéographe  '},
        { src: image5 , alt: 'Btissam MENISSER  ' , dataDescription:'Ingénieur Commercial'}
    ];

    const [hoveredIndex, setHoveredIndex] = useState(2);

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
                        onMouseLeave={() => setHoveredIndex(2)}
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
