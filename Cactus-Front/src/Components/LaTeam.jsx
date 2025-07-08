import React, { useState } from "react";
import styles from '/src/Styles/laTeam.module.css'
import SpecialText from './SpecialText'

const LaTeam = () => {
    const images = [
        { src: '/src/assets/gallery/image3.svg', alt: 'abdo' },
        { src: '/src/assets/gallery/image2.svg', alt: 'hanae' },
        { src: '/src/assets/gallery/image1.svg', alt: 'ghita' },
        { src: '/src/assets/gallery/image4.svg', alt: 'mohamed' },
        { src: '/src/assets/gallery/image4.svg', alt: 'mohamed' }
    ];

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className={styles.container}>
            <div className={styles.galleryContainer}>
                {images.map((image, index) => (
                    <div 
                        key={index}
                        className={`${styles.galleryItem} ${hoveredIndex === index ? styles.expanded : hoveredIndex !== null ? styles.collapsed : ''}`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <img className={styles.galleryImage} src={image.src} alt={image.alt} />
                        <div className={styles.galleryOverlay}>
                            <div className={styles.galleryContent}>
                                <h3 className={styles.galleryTitle}>{image.alt}</h3>
                                <p className={styles.galleryDescription}>Description text</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LaTeam;
