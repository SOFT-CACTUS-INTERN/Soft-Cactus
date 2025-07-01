import React from 'react'
import head from '/src/Styles/header.module.css'
import { motion } from "framer-motion";
import {Link} from "react-router-dom";
import Logo from "../assets/Logo.svg"
import { useState,useEffect} from "react";
import { NavLink } from 'react-router-dom';

function Header() {

  const [isOpen, setIsMobileMenuOpen] = useState(false);
   const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isOpen);
  };
  useEffect(() => {
  if (isOpen) {
    document.body.classList.add('bodyLock');
  } else {
    document.body.classList.remove('bodyLock');
  }
}, [isOpen]);


  return (        
    <nav>
    <div className={head.navbar}>
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
        <Link to="/contact">{/* to which route it takes? a new page ?   */}
          <motion.button >demande devis</motion.button>
        </Link>
      </div>
      </div>


      <div className={head.navBarMobile}>
        <img src={Logo} alt="SoftCactus" />
        <button className={head.menuBtn} onClick={toggleMobileMenu}>
          <div className={`${head.hamburger} ${isOpen ? head.active : ""}`}>
              <div className={head.Line}></div>
              <div className={head.Line}></div>
              <div className={head.Line}></div>
          </div>
        </button>
        <div className={`${head.burgerlist} ${isOpen ? head.open : ""}`}>
            <div className={head.fullMenu}>
              <ul>
                  <li><NavLink to="/" className={({ isActive }) => isActive ? `${head.navlink} ${head.mobileActive}` : head.navlink}        onClick={toggleMobileMenu}>Accueil</NavLink></li>
                  <li><NavLink to="/agence" className={({ isActive }) => isActive ? `${head.navlink} ${head.mobileActive}` : head.navlink}  onClick={toggleMobileMenu}>Nos agence</NavLink></li>
                  <li><NavLink to="/services"className={({ isActive }) => isActive ? `${head.navlink} ${head.mobileActive}` : head.navlink} onClick={toggleMobileMenu}>Nos services</NavLink></li>
                  <li><NavLink to="/projets" className={({ isActive }) => isActive ? `${head.navlink} ${head.mobileActive}` : head.navlink}  onClick={toggleMobileMenu}>Nos projets</NavLink></li>
                  <li><NavLink to="/contact" className={({ isActive }) => isActive ? `${head.navlink} ${head.mobileActive}` : head.navlink}  onClick={toggleMobileMenu}>contact</NavLink></li>
              </ul>
            </div>
        </div>
    </div>
    </nav>
  )
}

export default Header


  