import React from 'react'
import head from '/src/Styles/header.module.css'

import {Link} from "react-router-dom";
import Logo from "../assets/Logo.svg"
import { useState } from "react";
import { NavLink } from 'react-router-dom';
function Header() {




  return (        
    <nav className={head.navbar}>
      <div className={head.logo}>
          <Link to="/"><img src={Logo} alt="SoftCactus" /></Link>
      </div>
      <div className={head.links}>
            <ul>
                <li><NavLink to="/"     className={({ isActive }) => isActive ? `${head.navlink} ${head.active}` : head.navlink}>Accueil</NavLink></li>
                <li><NavLink to="/agence" className={({ isActive }) => isActive ? `${head.navlink} ${head.active}` : head.navlink}>Nos agence</NavLink></li>
                <li><NavLink to="/services"className={({ isActive }) => isActive ? `${head.navlink} ${head.active}` : head.navlink}>Nos services</NavLink></li>
                <li><NavLink to="/projets" className={({ isActive }) => isActive ? `${head.navlink} ${head.active}` : head.navlink}>Nos projets</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? `${head.navlink} ${head.active}` : head.navlink}>contact</NavLink></li>
            </ul>
      </div>
      <div className={head.button}>
          <a href="#">nos marks</a> 
          {/* to which route it takes? a new page ?   */}
      </div>
      
    </nav>
  
  )
}

export default Header
