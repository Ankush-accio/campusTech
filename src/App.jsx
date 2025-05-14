import React from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Compo1 from './components/Compo1'
import Compo2 from './components/Compo2'
import Compo3 from './components/Compo3'
import Compo4 from './components/Compo4'
import Footer from './components/Footer'
import red  from "./assets/semired.png"
import green from "./assets/semigreen.png"

const App = () => {
  return (
    <div  className="overflow-x-hidden relative">
      <Navbar/>
      <Carousel/>
      <Compo1/>
      <img className='flex absolute top-[100rem] ' src={red} alt="" />
      <Compo2/>
      <img src={green} className='absolute top-[128rem] right-[0]' />
      <Compo3/>
      <Compo4/>
      <Footer/>

    </div>
  )
}

export default App