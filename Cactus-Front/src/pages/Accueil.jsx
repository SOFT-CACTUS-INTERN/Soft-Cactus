import React from 'react'
import home from '/src/Styles/accueil.module.css'
import Bar from '../Components/AnimeBars.jsx'
import LaTeam from '../Components/LaTeam.jsx'

const Accueil = () => {
  
 return (
  <div className={home.hh}>
    <Bar />
    <LaTeam />
  </div>
)
}

export default Accueil;