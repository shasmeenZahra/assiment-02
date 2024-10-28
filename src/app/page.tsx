// pages/index.js
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/portfolio';
import Footer from './components/Footer';
import React from 'react'

const page = () => {
  return (
    <div>
      
      <Header />
       <Hero />  
      <Portfolio/>
      <Footer/>
    </div>
  )
}

export default page




