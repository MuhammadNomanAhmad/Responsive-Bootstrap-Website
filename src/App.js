import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Services from './Components/Services/Services'
import './app.css'
import GallerySection from './Components/Gallery-Section/GallerySection'
import Blogpost from './Components/BlogPost/Blogpost'
import Acheivements from './Components/Acheivements/Acheivements'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Header/>
      <Services/>
      <GallerySection/>
      <Blogpost/>
      <Acheivements/>
      <Contact/>
      <Footer/>
      
      
      
    </>
  )
}

export default App