import React from 'react'
import ContactBox from '../Components/ContactBox.jsx'
import EmploisCard from '../Components/EmploisCard.jsx'
import Special from '../Components/SpecialText.jsx'
import Pubs from '../Components/Pubs.jsx'
import ArrowUp from '../Components/ArrowUp.jsx'
const Contact = () => {
 return (
    <>
      <ContactBox />
      <EmploisCard />
      <Special text={'ils onT parlé de nous'}/>
      <Pubs />
      <ArrowUp />
    </>
 )
}

export default Contact;