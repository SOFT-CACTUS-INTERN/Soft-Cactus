import React from 'react'
import ContactBox from '../Components/ContactBox.jsx'
import EmploisCard from '../Components/EmploisCard.jsx'
import Special from '../Components/SpecialText.jsx'
import Pubs from '../Components/Pubs.jsx'
import ArrowUp from '../Components/ArrowUp.jsx'
import Gallery from '../Components/Gallery.jsx'
import { motion } from 'framer-motion'
const Contact = () => {
 return (
    <motion.div
      initial={{opacity : 0}}
      animate={{opacity : 1}}
      exit={{opacity : 0}}
      transition={{duration : 1.1}}
      >
      <ContactBox />
      <EmploisCard />
      <Special text={'ils onT parlé de nous'} />
      <Pubs />
      <Gallery />
      <ArrowUp />
    </motion.div>
 )
}

export default Contact;