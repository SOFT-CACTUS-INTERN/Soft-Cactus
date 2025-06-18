import React from 'react'
import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'
import { Outlet} from "react-router-dom";
const Layout = () => {
 return (
    <>
        <header>
            <Header  /> 
        </header>
        <main>      {/*  only added <main> <main /> for semantic html */}
            <Outlet  />  {/*  used to nest routes and placeholder for other components to render not the whole page*/}
        </main>
        <footer>
            <Footer />
        </footer>
    </>
 )
}

export default Layout;