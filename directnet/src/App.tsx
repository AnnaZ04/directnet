import { useState } from "react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Method from "./components/Method"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Method />
        <Contact />
        <Footer />
    </>
  )
}

export default App