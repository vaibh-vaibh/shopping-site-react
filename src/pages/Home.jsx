import React from 'react'
import TopNavBar from '../components/TopNavBar'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import DisplayCategory from '../components/DisplayCategory'
import FeaturedProducts from '../components/FeaturedProducts'

function Home() {
  return (
    <>
    <TopNavBar/>
    <NavBar/>
    <HeroSection/>
    <DisplayCategory/>
    <FeaturedProducts/>
    </>
  )
}

export default Home