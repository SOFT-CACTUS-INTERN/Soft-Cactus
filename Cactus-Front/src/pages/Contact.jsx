import React from 'react'
import ContactBox from '../Components/ContactBox.jsx'
import EmploisCard from '../Components/EmploisCard.jsx'
import Special from '../Components/SpecialText.jsx'
import Pubs from '../Components/Pubs.jsx'
import ArrowUp from '../Components/ArrowUp.jsx'
import Gallery from '../Components/Gallery.jsx'
import { motion, useInView } from "framer-motion";
import { useRef } from 'react'

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

    const contactRef = useRef(null);
  const emploisRef = useRef(null);
  const specialRef = useRef(null);
  const galleryRef = useRef(null);
  const arrowRef = useRef(null);
  const pubsRef = useRef(null);


    const inViewPubs = useInView(pubsRef, { once: false });
  const inViewContact = useInView(contactRef, { once: false });
  const inViewEmplois = useInView(emploisRef, { once: false });
  const inViewSpecial = useInView(specialRef, { once: false });
  const inViewGallery = useInView(galleryRef, { once: false });
  const inViewArrow = useInView(arrowRef, { once: false });


 return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      >

       <motion.div
      ref={contactRef}
      initial={{ opacity: 0, y: 100 }}
      animate={inViewContact ? { opacity: 1, y: 0 } : {}} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <ContactBox /></motion.div> 

       <motion.div
      ref={emploisRef}
      initial={{ opacity: 0, y: 100 }}
      animate={inViewEmplois ? { opacity: 1, y: 0 } : {}} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <EmploisCard /></motion.div> 

       <motion.div
      ref={specialRef}
      initial={{ opacity: 0, y: 100 }}
      animate={inViewSpecial ? { opacity: 1, y: 0 } : {}} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Special text={'ils onT parlé de nous'} />
        </motion.div> 


        <motion.div
      ref={pubsRef}
      initial={{ opacity: 0, y: 100 }}
      animate={inViewPubs ? { opacity: 1, y: 0 } : {}} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      > <Pubs /></motion.div>
       
        <motion.div
      ref={galleryRef}
      initial={{ opacity: 0, y: 100 }}
      animate={inViewGallery ? { opacity: 1, y: 0 } : {}} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      > <Gallery /></motion.div>
       
        <ArrowUp />


    </motion.div>
 )
}

export default Contact;