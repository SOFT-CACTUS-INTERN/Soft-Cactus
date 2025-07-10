import React from "react";
import styles from '/src/Styles/notreHistoire.module.css'
import Special from './SpecialText'
import { useRef } from "react";

const NotreHistoire= ()=>{
    const paraRef= useRef(null);
    const paraChange = ()=>{
        
    }

    return(
        <div className={styles.NotreHistoire}>
            <Special text={'Notre histoire'} />
            <div className={styles.Box}>
                <div className={styles.title}>
                    <p className={`${styles.para} ${styles.A}`} onClick={paraChange}>Naissance de Soft Cactus et début de l'aventure entrepreneurialede sa fondatrice HANAE DEKHISSI.</p>
                    <p className={`${styles.para} ${styles.B}`} onClick={paraChange}>Soft Cactus ouvre ses portes, à Casablanca, au Abdelmoumen, Maroc.</p>    
                    <p className={`${styles.para} ${styles.C}`} onClick={paraChange}>Ce qui nuit à l'un, nuit a l'autre.</p>    
                    <p className={`${styles.para} ${styles.D}`} onClick={paraChange}>La crise pandémique était une nouvelle chance pour que nous puissions nous démarquer dans le domaine digital.</p>    
                    <p className={`${styles.para} ${styles.E}`} onClick={paraChange}>Rebelote, mais avec un nouvel esprit et une deuxième agence à Oujda.</p>    
                    <p className={`${styles.para} ${styles.F}`} onClick={paraChange}>Renforcement de ce projet ambitieux à l'Oriental, à travers le programme Forsa "Opportunité".</p>    
                    <p className={`${styles.para} ${styles.G}`} onClick={paraChange}>Finalement tous réunis à l'agence, tout en ayant des clients partout dans le Maroc.</p>
                    <p className={`${styles.para} ${styles.K}`} onClick={paraChange}>Une année d'audace, où chaque défi est devenu une opportunité de croissance et chaque idée a trouvé son terrain d'expression.</p>
                    <p className={`${styles.para} ${styles.L}`} onClick={paraChange}>Une année marquée par la fidélité de nos clients, la force de notre équipe et une créativité qui n'a jamais cessé d'évoluer.</p>
                </div>
                <div className={styles.year}>
                    <div class={styles.btnPrev}>&lt; </div>
                    <span>
                        <span className={styles.prefix}>20</span>    
                            <div className={styles.scene}>
                                <div className={`${styles.cube} ${styles.ShowLeft}`}>  {/* show left mkynach bsh tad b js */}
                                    <div className={`${styles.cubeFace} ${styles.cubeFaceFront}`} data-val="front">18</div>
                                    <div className={`${styles.cubeFace} ${styles.cubeFaceBack}`} data-val="back">20</div>
                                    <div className={`${styles.cubeFace} ${styles.cubeFaceRight}`} data-val="right">19</div>
                                    <div className={`${styles.cubeFace} ${styles.cubeFaceLeft}` } data-val="left">21</div>
                                    <div className={`${styles.cubeFace} ${styles.cubeFaceTop}`} data-val="top">22</div>
                                    <div className={`${styles.cubeFace} ${styles.cubeFaceBottom}`} data-val="bottom">23</div>
                                </div>
                            </div>
                    </span>
                    <div class={styles.btnNext}>&gt; </div>
                </div>
                <div class={styles.years}>
                        <ul>
                            <li data-value="2018" className={styles.active}>2018</li>
                            <li data-value="2019" class="">2019</li>
                            <li data-value="2020" class="">2020</li>
                            <li data-value="2021" class="">2021</li>
                            <li data-value="2022" class="">2022</li>
                            <li data-value="2023" class="active">2023</li>
                            <li data-value="2024" class="">2024</li>
                            <li data-value="2025" class="">2025</li>
                        </ul>
                </div>

            </div>
        </div>
    )
};
export default NotreHistoire;
