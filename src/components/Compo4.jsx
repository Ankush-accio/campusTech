import React from 'react'
import img from "../assets/img.png"

const Compo4 = () => {
  return (
    <div className='p-10 mt-10 flex'>
        <div>
        <h1 className='m-10 font-bold text-5xl'>Ready to give your <br /> <span className='text-orange-500'>institution an <br /> upgrade? </span></h1>
        <button className='bg-green-500 px-2 rounded-3xl text-white m-10'>Contact us</button>
        </div>
        <img src={img} className='w-[50rem] h-[37.5rem]' alt="" />
    </div>
  )
}

export default Compo4