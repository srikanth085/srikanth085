import React from 'react'
import { Link } from 'react-router-dom'
// import style from  "./style.css"
import Footer from './Footer'
import  Navbar  from './Navbar'
import About from './About'
import Productes from './Productes'

function Home() {
  return (
    
    <>
      <Navbar />
      

      <Productes/>
<Footer />
</>
  )
  }

export default Home