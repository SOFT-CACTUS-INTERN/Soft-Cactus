import React from "react";
import styles from '/src/Styles/notreHistoire.module.css'
import Special from './SpecialText'
import { useState, useEffect } from "react";

/*============================================================== */
/*
    this component is used the component of 'notre histoire' with the rotating cube
                                            used in the "Nos Agence" page
                                                                                                                                                        */
/*============================================================== */

const NotreHistoire= ()=>{
/*============================================================== */

/*    NOW YOU CAN ADD THE YEARS DYNAMICALLY BY ADDING IT TO THE TIMELINE     */
                    
// Notice that each side should start with a Capital letter
//Don't forget to separate each the timelines with a comma ,
/*================================================================*/

    const timeline = {
        2018: {
            paragraph: "Naissance de Soft Cactus et début de l'aventure entrepreneuriale de sa fondatrice HANAE DEKHISSI.",
            face: "Front",
            suffixe: 18
        },
        2019: {
            paragraph: "Soft Cactus ouvre ses portes, à Casablanca, au Abdelmoumen, Maroc.",
            face: "Right",
            suffixe: 19
        },
        2020: {
            /*here i used jsx fragments so react can render <br /> as a line break not plain text*/
            paragraph: <>Ce qui nuit à l'un, nuit à l'autre. <br />a crise pandémique était une nouvelle chance pour que nous puissions nous démarquer dans le domaine digital.</>,
            face: "Back",
            suffixe: 20
        },
        2021: {
            paragraph: "Rebelote, mais avec un nouvel esprit et une deuxième agence à Oujda.",
            face: "Left",
            suffixe: 21
        },
        2022: {
            paragraph: "Renforcement de ce projet ambitieux à l'Oriental, à travers le programme Forsa \"Opportunité.",
            face: "Top",
            suffixe: 22
        },
        2023: {
            paragraph: "Finalement tous réunis à l'agence, tout en ayant des clients partout dans le Maroc.",
            face: "Bottom",
            suffixe: 23
        },
        2024: {
            paragraph: "Une année d'audace, où chaque défi est devenu une opportunité de croissance et chaque idée a trouvé son terrain d'expression.",
            face: "Front",
            suffixe: 24
        },
        2025: {
            paragraph: "Une année marquée par la fidélité de nos clients, la force de notre équipe et une créativité qui n'a jamais cessé d'évoluer.",
            face: "Right",
            suffixe: 25
        },
        // 2026: {
        //     paragraph: "YOUR PARA",
        //     face: "Bottom", /*Bottom for example */
        //     suffixe: 26
        // }
    };

    // useState to track and save the index
    const [index, setIndex] = useState(0);
    // getting the appropriate data
    const years = Object.keys(timeline).map(Number);
    const currentYear = years[index];
    const { paragraph, face} = timeline[currentYear];
    // function to 
    const SuffixeOf = (faceName) => {
    // If current year uses this face, show its suffixe
    if (timeline[currentYear].face === faceName) {
        return timeline[currentYear].suffixe;
    }
      for (const year in timeline) {
         if (timeline[year].face === faceName) {
      return timeline[year].suffixe;
    }
  }
}
    
    //for the buttons(next and previous) and onClick change to the appropriate index
    // if prev (index) reaches 0 change index to the last index 
    //otherwise change the index to index-1
    const handlePrev = () => {
        setIndex((prev) => (prev === 0 ? years.length - 1 : prev - 1));
    };
    const handleNext = () => {
        setIndex((prev) => (prev === years.length - 1 ? 0 : prev + 1));
    };


    /* function to change automatically every 10 seconds */
    //Normally is js you just use SetInterval but since react works differently and rerunders a lot by itself
    // it will create multiple intervales which will cause conflicts.
    // That is why it is always recommended or a must to put it inside useEffect
    useEffect(() => {
    const autoChange = setInterval(function() {
        handleNext();
    }, 10000);

  return () => clearInterval(autoChange);
}, []); // this [] means run only once after the first render (mount),


    /*=== used it for debugging ===*/
    // console.log("Index:", index, "Year:", currentYear, "Face:", face);


    return(
        <div className={styles.NotreHistoire}>
            <Special text={'Notre histoire'} />
            <div className={styles.Box}>
                <div className={styles.title}>
                    <p className={`${styles.para} ${styles.active}`} >{paragraph}</p>
                </div>
                <div className={styles.year}>
                    <div className={styles.btnPrev} onClick={handlePrev}>&lt; </div>
                    <span>
                        <span className={styles.prefix}>20</span>    
                            <div className={styles.scene}>
                                    <div className={`${styles.cube} ${styles[`show${face}`]}`}>
                                    <div className={`${styles.cubeFace} ${styles.cubeFaceFront}`}  >{SuffixeOf('Front')}</div>
                                    <div className={`${styles.cubeFace} ${styles.cubeFaceRight}`}  >{SuffixeOf('Right')}</div>
                                    <div className={`${styles.cubeFace} ${styles.cubeFaceBack}`}  >{SuffixeOf('Back')}</div>
                                    <div className={`${styles.cubeFace} ${styles.cubeFaceLeft}` } >{SuffixeOf('Left')}</div>
                                    <div className={`${styles.cubeFace} ${styles.cubeFaceTop}`} >{SuffixeOf('Top')}</div>
                                    <div className={`${styles.cubeFace} ${styles.cubeFaceBottom}`}>{SuffixeOf('Bottom')}</div>
                                </div>
                            </div>
                    </span>
                    <div className={styles.btnNext} onClick={handleNext}>&gt; </div>
                </div>
                <div className={styles.years}>
                        <ul>
                            {years.map((year, idx) => (
                                <li
                                    key={year}
                                    onClick={() => setIndex(idx)} // this line makes the horizontal years change the index which changes the para and rotates the cube
                                    className={idx === index ? styles.active : ''}
                                >
                                {year}
                                </li>
                            ))}
                        </ul>
                </div>
            </div>
        </div>
    )
};
export default NotreHistoire;
