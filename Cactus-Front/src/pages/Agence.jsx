
import QSN from '../Components/QSN.jsx'
import Bar from '../Components/AnimeBars.jsx'
import NosValeurs from '../Components/NosValeurs.jsx'
import FadeIn from '/src/Components/FadeIn.jsx'
import LaTeam from '../Components/LaTeam.jsx'
import NotreHistoire from '../Components/NotreHistoire.jsx'
import PresentSur from '../Components/PresentSur.jsx'
import ArrowUp from '../Components/ArrowUp.jsx'
import React, { useRef } from 'react';
import style from '/src/Styles/smallNav.module.css'
import { NavLink } from 'react-router-dom';


const Agence = () => {

   const QsnRef = useRef(null);
  const NosValRef = useRef(null);
  const NosHistRef = useRef(null);
  const NosTeamRef = useRef(null);
   
  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

 return (
   <>
      <div className={style.smallNav}>
         <ul className={style.navList} >         
               <li><a onClick={()=>scrollTo(QsnRef)}>Qui sommes-nous</a></li> 
               <li><a onClick={()=>scrollTo(NosValRef)}>Nos valeurs</a></li>
               <li><a onClick={()=>scrollTo(NosHistRef)}>Notre histoire</a></li>
               <li><a onClick={()=>scrollTo(NosTeamRef)}>Notre team</a></li>
         </ul>
      </div>

      <FadeIn delay={0.2}><section ref={QsnRef}><QSN /></section></FadeIn>
      <Bar />
      <FadeIn delay={0.2}><section ref={NosValRef}><NosValeurs /></section></FadeIn>
      <FadeIn delay={0.2}><section ref={NosHistRef}><NotreHistoire /></section></FadeIn>
      
      <FadeIn delay={0.2}><section ref={NosTeamRef}><LaTeam /></section></FadeIn>
      <ArrowUp />
   </>
   )
};

export default Agence;