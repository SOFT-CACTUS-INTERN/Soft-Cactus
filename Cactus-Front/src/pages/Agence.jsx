import React from 'react'
import QSN from '../Components/QSN.jsx'
import Bar from '../Components/AnimeBars.jsx'
import NosValeurs from '../Components/NosValeurs.jsx'
import FadeIn from '/src/Components/FadeIn.jsx'
import LaTeam from '../Components/LaTeam.jsx'
import NotreHistoire from '../Components/NotreHistoire.jsx'
import PresentSur from '../Components/PresentSur.jsx'
const Agence = () => {
 return (
   <>
      <FadeIn delay={0.2}><QSN /></FadeIn>
      <Bar />
      <FadeIn delay={0.2}><NosValeurs /></FadeIn>
      <FadeIn delay={0.2}><NotreHistoire /></FadeIn>
      <FadeIn delay={0.2}><PresentSur /></FadeIn>
      <FadeIn delay={0.2}><LaTeam /></FadeIn>
   </>
   )
};

export default Agence;