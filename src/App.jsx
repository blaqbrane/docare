
import React from 'react'
import { About, AppStore, Features, Footer, Hero, Navbar, Offers, Questions, Records, Teams, Testimonials } from './DocareFolder'

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar/>
      <Hero/>
      <div>
        <Records/>
        <About/>
        <Offers/>
        <AppStore/>
        <Features/>
        <Teams/>
        <Testimonials/>
        <Questions/>
        <Footer/>
      </div>
    </div>
  )
}

export default App