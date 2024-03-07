import React, { useState } from 'react'
import Navbar from '../Common/Navbar/Navbar'
import ImageSlider from './ImageSlider'
import SpecialOffers from './SpecialOffers'
import Footer from '../Common/Footer/Footer'
import Deals from './Deals'


const Home = () => {
  return (
    <>
      <ImageSlider/>
      <Deals/>
      <SpecialOffers/>
    </>
  )
}

export default Home