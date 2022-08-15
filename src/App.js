import React from 'react'
import About from './components/About-me'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Work from './components/Work'
import Copyright from './components/copyright'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Copyright />
    </>

  )
}

export default App