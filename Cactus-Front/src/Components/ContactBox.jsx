import react from 'react'
import contactBox from '/src/Styles/contactBox.module.css'
import phone from "/src/assets/icons/phone.svg"
import localisation from "/src/assets/icons/localisation.svg"
import email from "/src/assets/icons/email.svg"
import bigC from '/src/assets/decor/CinContact.svg'
import axios from 'axios'
import { useState } from 'react'
import { toast, Slide } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const ContactBox = ()=>{


      const [formData, setFormData] = useState({
    fullName: '',
    societyName:'',
    projectName:'',
    email: '',
    number: ''
  });
  const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};
  

const [isLoading, setIsLoading] = useState(false);

const Submit= async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
     try {
      const response = await axios.post(
        'http://localhost:8000/api/email', 
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      );

    toast.success('Votre message a bien été envoyé !', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
    });

    setFormData({
        fullName: '',
        societyName: '',
        projectName: '',
        email: '',
        number: ''
        });
        
    }catch (err) {
     console.error('Submission error:', err);
    const errorMessage = err.response?.data?.message || 'Submission failed. Please try again.';
    alert(errorMessage);
    }finally {
      setIsLoading(false);
    }
}
    
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
                        <form method='POST' name='form' encType='text/plain' onSubmit={Submit}>
                            <label htmlFor="fullName">Bonjour, je m'appelle </label>
                            <input value={formData.fullName}  onChange={handleChange} type="text" name="fullName" id="fullName" size="18" placeholder=' Nom et prénom ' />
                            <label htmlFor="societyName">et je représente la société </label>
                            <input value={formData.societyName} onChange={handleChange} type="text" name="societyName" id="societyName" size="14" placeholder=' Nom de la société '/>
                                je vous contacte pour voir avec vous la possibilité de collaborer sur
                            <label htmlFor="projectName"> un projet de </label>
                            <input value={formData.projectName} onChange={handleChange} type="text" name="projectName" id="projectName" size="12" placeholder='Nom du projet' />
                            <label htmlFor="email">vous pouvez me contacter sur </label>
                            <input value={formData.email} onChange={handleChange} type="email" name="email" id="email"  placeholder='Adresse email'/>  ou  &nbsp; 
                            <input value={formData.number} onChange={handleChange} type="tel" name="number" id="number" size="16" placeholder='Numéro de téléphone'/>
                        <br />
                        <div className={contactBox.bouton}>
                            <button type="submit">{isLoading ? 'Envoyer ...' : 'Envoyer'}</button>
                        </div>
                        </form>
                    </div>
                </div>
                    <div  className={contactBox.coordonnes}>
                        <div className={contactBox.contactContainer}>
                            <p className={contactBox.contactItem} style={{ paddingRight: '5em' }}><img src={phone} alt="num : " /><a href="tel:+212 648 927 820">+212 648 927 820</a></p>
                            <p className={contactBox.contactItem}><img src={email} alt="email : " /><a href="mailto:contact@softcactus.ma">contact@softcactus.ma</a></p>
                        </div>           
                        <div className={contactBox.localContainer}>
                            <p className={contactBox.localItem}><img src={localisation} alt="Local Oujda : "  />6 éme Etg, Immeuble EL MOHANDISSINE, Rue Ibn Rochd، Oujda</p>
                            <p className={contactBox.localItem}><img src={localisation} alt="Local Casa : " />Etage 1, Angle Mustapha El Màani, Centre Riad, 61, N°39 Av. Lalla Yacout, Casablanca </p>
                        </div>
                    </div>
                

                    </div>

                </div>
            
        </>
    )
};
export default ContactBox
