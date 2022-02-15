import React from 'react'

import { Blog, Footer, Header, Possibility, WhatGPT3, Features } from './Containers'
import { Brand, CTA, NavBar } from './Components'
import './App.css'

const App = () => {
  return (
    <div className = 'app'>
      <header className = 'gradient__bg'>
        <nav>
            <NavBar />
        </nav>
        <Header />
      </header>
      <main>
          <Brand />
          <WhatGPT3 />
          <Features />
          <Possibility />
          <CTA />
          <Blog />
          <Footer /> 
      </main>
    </div>
  )
}

export default App
