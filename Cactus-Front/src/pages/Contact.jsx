import React from 'react'
import ContactBox from '../Components/ContactBox.jsx'
import EmploisCard from '../Components/EmploisCard.jsx'
import Special from '../Components/SpecialText.jsx'
import Pubs from '../Components/Pubs.jsx'
import ArrowUp from '../Components/ArrowUp.jsx'
import Gallery from '../Components/Gallery.jsx'
import { motion, useInView } from "framer-motion";
import { useRef } from 'react'
import { ToastContainer, Slide} from 'react-toastify';
import FadeIn from '/src/Components/FadeIn.jsx'


const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

 return (
  <>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      transition={Slide}
    />
     <FadeIn>

       
        <FadeIn delay={0.2}><ContactBox /></FadeIn>

       
      
        <FadeIn delay={0.2} ><EmploisCard /></FadeIn>

       
      
        <FadeIn delay={0.2}><Special text={'ils onT parlé de nous'} /></FadeIn>
      


        
       <FadeIn delay={0.2}><Pubs /></FadeIn>
       
        
       <Gallery />
       
        <ArrowUp />


    </FadeIn>
    </>
 )
}

export default Contact;