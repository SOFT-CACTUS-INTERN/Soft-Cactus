import React from "react";
import style from '/src/Styles/QSN.module.css'
import GradientText from '../Components/GradientText.jsx'
import Secteur from '../Components/Secteur.jsx'
import SmallNav from '../Components/SmallNav.jsx'

const QSN= ({TEXT})=>{

    return(
    <div className={style.QSN}>
        <SmallNav />
        <GradientText  TEXT={'QUI SOMMES NOUS'} />
        <p className={style.definition}>Soft Cactus est un réseau d'agences de communication digitale, implanté à Casablanca 
            depuis 2018 et à Oujda depuis 2021. Spécialisée en marketing digital avec un fort accent sur le conseil.
            Soft Cactus accompagne ses clients à chaque étape de leur projet en comprenant leurs 
            besoins et en proposant des solutions sur mesure.</p>
        
        <Secteur Title={'Développement web/mobile'}  para={"Conception de sites web vitrine, e-commerce, ainsi que d\'applications web et mobiles. - Vidéos promotionnelles : Réalisation de vidéos attractives et engageantes pour mettre en valeur votre activité."} />
        <Secteur Title={'branding'}  />
        <Secteur Title={'social media management'} para={"Gestion complète des réseaux sociaux, incluant la planification, la production, le montage et la diffusion des contenus."}  />
        <Secteur Title={'la photographie & vidéographique'} para={"Gestion complète des réseaux sociaux, incluant la planification, la production, le montage et la diffusion des contenus."}  />
        
    </div>
    )
};
export default QSN;
