import React from 'react'
import campusTech from "../assets/campusTech.svg"
import Group from "../assets/Group 21.png"

const Navbar = () => {
  return (
    <div className='p-4 sm:p-6 md:p-8 flex items-center gap-6 sm:gap-10 md:gap-16 justify-between'>
    <img className='h-12 w-3/4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg' src={campusTech} alt="" />
    <img className='h-8 w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl' src={Group} alt="" />
  </div>
  
  )
}

export default Navbar