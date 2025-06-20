import react from 'react'
import contactBox from '/src/Styles/contactBox.module.css'
import phone from "/src/assets/icons/phone.svg"
import localisation from "/src/assets/icons/localisation.svg"
import email from "/src/assets/icons/email.svg"
import bigC from '/src/assets/decor/CinContact.svg'


const ContactBox = ()=>{

    return(
        <>

            <div className={contactBox.box}>
            <div className={contactBox.title}>
                <p>Parlons de votre projet</p>
            </div>
            <img src={bigC} alt="." className={contactBox.bigC} />
            <div className={contactBox.content}>
                <div className={contactBox.toSend}>
                    <div className={contactBox.myform}>
                        <form method='POST' name='form' encType='text/plain'>
                            <label htmlFor="fullName">Bonjour, je m'appelle </label>
                            <input type="text" name="nom" id="fullName" size="18" placeholder=' Nom et prénom ' />
                            <label htmlFor="societyName">et je représente la société </label>
                            <input type="text" name="nom" id="societyName" size="14" placeholder=' Nom de la société '/>
                                je vous contacte pour voir avec vous la possibilité de collaborer sur
                            <label htmlFor="projectName"> un projet de</label>
                            <input type="text" name="nom" id="projectName" size="12" placeholder='Nom du projet' />
                            <label htmlFor="email">vous pouvez me contacter sur </label>
                            <input type="email" name="email" id="email"  placeholder='Adresse email'/> ou 
                            <input type="tel" name="number" id="number" size="16" placeholder='Numéro de téléphone'/>
                        <br />
                        <div className={contactBox.bouton}>
                            <button type="submit">Envoyer</button>
                        </div>
                        </form>
                    </div>
                </div>
                    <div  className={contactBox.coordonnes}>
                        <div className={contactBox.contactContainer}>
                            <p className={contactBox.contactItem} style={{ paddingRight: '5em' }}><img src={phone} alt="num : " /><a href="tel:+212 648 927 820">+212 648 927 820</a></p>
                            <p className={contactBox.contactItem}><img src={email} alt="email : " /><a href="mailto:contact@softcactus.ma">contact@softcactus.ma</a></p>
                        </div>           
                            <p className={contactBox.contactItem}><img src={localisation} alt="Local Oujda : " />6 éme Etg, Immeuble EL MOHANDISSINE, Rue Ibn Rochd، Oujda</p>
                            <p className={contactBox.contactItem}><img src={localisation} alt="Local Casa : " />Etage 1, Angle Mustapha El Màani, Centre Riad, 61, N°39 Av. Lalla Yacout, Casablanca </p>
                    </div>
                

                    </div>

                </div>
            
        </>
    )
};
export default ContactBox
/*Bonjour, je m’appelle Nom et prénom et je représente 
la société Nom de la société je vous contacte pour
 voir avec vous la possibilité de collaborer sur
  un projet de Nom du projet  vous pouvez me contacter sur 
 Adresse email  ou Numéro de téléphone */