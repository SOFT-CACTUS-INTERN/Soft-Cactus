import React from 'react'
import foot from '/src/Styles/footer.module.css'
import { Link } from 'react-router-dom'
import phone from "/src/assets/icons/phone.svg"
import email from "/src/assets/icons/email.svg"
import localisation from "/src/assets/icons/localisation.svg"
// import localisation from "/src/assets/icons/localisation.svg"
import igIcon from '/src/assets/icons/instagram.svg'
import linkedinIcon from "/src/assets/icons/linkedin.svg"
import tiktokIcon from "/src/assets/icons/tiktok.svg"
import fbIcon from "/src/assets/icons/facebook.svg"
import Logo2 from "/src/assets/Logofill.svg"

const Footer = () => {
 return (
   <div className={foot.footer}>
      <div className={foot.A1}>
         <div className={foot.B1}>
               <img src={Logo2} alt="SoftCactus" />
               <p>Ready to elevate your online presence? Contact us today to discuss your project and discover how we can bring your vision to life.</p>
               <div className={foot.slogan}>YOU ARE NOT ALONE</div>
         </div>
        <div className={foot.vline} />
        <div className={foot.hline} />
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
                  <p className={foot.contactItem} ><img src={phone} alt="num : " /><a href="tel:+212 648 927 820">+212 648 927 820</a></p>
                  <p className={foot.contactItem}><img src={email} alt="email : " /><a href="mailto:contact@softcactus.ma">contact@softcactus.ma</a></p>
               </div>           
                  <p className={foot.contactItem}><img src={localisation} className={foot.localIcon} alt="Local Oujda : " />6 éme Etg, Immeuble EL MOHANDISSINE, Rue Ibn Rochd، Oujda</p>
                  <p className={foot.contactItem}><img src={localisation} className={foot.localIcon} alt="Local Casa : " />Etage 1, Angle Mustapha El Màani, Centre Riad, 61, N°39 Av. Lalla Yacout, Casablanca </p>
            </div>

            <div className={foot.SMlinks}>
               <a href="#"><img src={igIcon} alt="instagram" /></a>
               <a href="#"><img src={linkedinIcon} alt="linkedin" /></a>
               <a href="#"><img src={tiktokIcon} alt="tiktok" /></a>
               <a href="#"><img src={fbIcon} alt="facebook" /></a>
            </div>
         </div>
      </div>
      <div className={foot.A2}>Tous les droits sont réservés pour SOFT CACTUS 2018-2025</div>
   </div> 

 )
}


export default Footer;