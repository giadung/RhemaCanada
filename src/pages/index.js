import React, { useState } from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Feedback from '../components/Feedback'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Leadership from '../components/Leadership'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Sidebar from '../components/Sidebar'
import StrategySection from '../components/StrategySection'
import { strategyObj } from '../components/StrategySection/Data'

const Home = () => {
  const [isOpen, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Services />
      <About />
      <Leadership />
      <StrategySection {...strategyObj} />
      <Contact />
      <Feedback />
      <Footer />
    </>
  )
}

export default Home
