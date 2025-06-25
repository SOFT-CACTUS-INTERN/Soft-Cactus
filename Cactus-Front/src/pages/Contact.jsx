import React from 'react'
import ContactBox from '../Components/ContactBox.jsx'
import EmploisCard from '../Components/EmploisCard.jsx'
import Special from '../Components/SpecialText.jsx'
import Pubs from '../Components/Pubs.jsx'
import ArrowUp from '../Components/ArrowUp.jsx'
import Gallery from '../Components/Gallery.jsx'
import { motion, useInView } from "framer-motion";
import { useRef } from 'react'

import FadeIn from '/src/Components/FadeIn.jsx'

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

 return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      >

       
        <FadeIn delay={0.2}><ContactBox /></FadeIn>

       
      
        <FadeIn delay={0.2} ><EmploisCard /></FadeIn>

       
      
        <FadeIn delay={0.2}><Special text={'ils onT parlé de nous'} /></FadeIn>
      


        
       <FadeIn delay={0.2}><Pubs /></FadeIn>
       
        
       <FadeIn delay={0.2}><Gallery /></FadeIn>
       
        <ArrowUp />


    </motion.div>
 )
}

export default Contact;