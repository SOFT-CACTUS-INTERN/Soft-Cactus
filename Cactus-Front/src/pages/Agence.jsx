import React from 'react'
import QSN from '../Components/QSN.jsx'
import Bar from '../Components/AnimeBars.jsx'
import NosValeurs from '../Components/NosValeurs.jsx'
import FadeIn from '/src/Components/FadeIn.jsx'
const Agence = () => {
 return (
   <>
      <FadeIn delay={0.2}><QSN /></FadeIn>
      <Bar />
      <FadeIn delay={0.2}><NosValeurs /></FadeIn>
   
   </>
   )
};

export default Agence;