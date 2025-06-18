import React from 'react'
import foot from '/src/Styles/footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
 return (
   <footer className={foot.footer}>
      <div className={foot.A1}>
         <div className={foot.B1}>
               <img src="/src/assets/Logofill.svg" alt="SoftCactus" />
               <p>Ready to elevate your online presence? Contact us today to discuss your project and discover how we can bring your vision to life.</p>
               <div className={foot.slogan}>YOU ARE NOT ALONE</div>
         </div>
        <div className={foot.line} />
         <div className={foot.B2}>
            <div className={foot.links}>
               <ul>
                  <li><Link to="/">Accueil</Link></li>
                  <li><Link to="/agence">Nos agence</Link></li>
                  <li><Link to="/services">Nos services</Link></li>
                  <li><Link to="/projets">Nos projets</Link></li>
                  <li><Link to="/contact">contact</Link></li>
                  </ul>
            </div>

            <div  className={foot.coordonnes}>
               <div className={foot.contactContainer}>
                  <p className={foot.contactItem} ><img src="/src/assets/icons/phone.svg" alt="num : " /><a href="tel:+212 648 927 820">+212 648 927 820</a></p>
                  <p className={foot.contactItem}><img src="/src/assets/icons/email.svg" alt="email : " /><a href="mailto:contact@softcactus.ma">contact@softcactus.ma</a></p>
               </div>
               
                  <p className={foot.contactItem}><img src="/src/assets/icons/localisation.svg" alt="Local Oujda : " />6 éme Etg, Immeuble EL MOHANDISSINE, Rue Ibn Rochd، Oujda</p>
                  <p className={foot.contactItem}><img src="/src/assets/icons/localisation.svg" alt="Local Casa : " />Etage 1, Angle Mustapha El Màani, Centre Riad, 61, N°39 Av. Lalla Yacout, Casablanca </p>
               
            </div>

            <div className={foot.SMlinks}>
               <a href="#"><img src="/src/assets/icons/instagram.svg" alt="instagram" /></a>
               <a href="#"><img src="/src/assets/icons/linkedin.svg" alt="linkedin" /></a>
               <a href="#"><img src="/src/assets/icons/tiktok.svg" alt="tiktok" /></a>
               <a href="#"><img src="/src/assets/icons/facebook.svg" alt="facebook" /></a>
            </div>
         </div>
      </div>
      <div className={foot.A2}>Tous les droits sont réservés pour SOFT CACTUS 2018-2025</div>
   </footer> 

 )
}


export default Footer;