import React from 'react'
import head from '/src/Styles/header.module.css'
import mlogo from '../assets/Logo.svg'
import {Link} from "react-router-dom";
import Logo from "../assets/Logo.svg"

function Header() {

  return (        
  <header className={head.head}>
    <nav className={head.navbar}>
      <div className={head.logo}>
          <Link to="/"><img src={Logo} alt="SoftCactus" /></Link>
      </div>
      <div className={head.links}>
            <ul>
              <li><Link to="/" className="">Accueil</Link></li>
              <li><Link to="/agence">Nos agence</Link></li>
              <li><Link to="/services">Nos services</Link></li>
              <li><Link to="/projets">Nos projets</Link></li>
              <li><Link to="/contact">contact</Link></li>
            </ul>
      </div>
      <div className={head.button}>
          <button>nos marks</button>    
      </div>
    </nav>
  </header>
  )
}

export default Header
