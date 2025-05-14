import React from 'react'
import n1 from "../assets/n1.png"
import n2 from "../assets/n2.png"
import n3 from "../assets/n3.png"
import n4 from "../assets/n4.png"
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import icon4 from "../assets/icon4.png"

const Compo3 = () => {
  return (
    <div className='p-10 mt-10'>
        <h1 className='font-bold m-10 pb-10 text-5xl'>The best in the <br />country <span className='text-orange-500'>trust us</span> </h1>
        <div className='flex justify-evenly mt-10'>
            <img src={n1} alt="" />
            <img src={n2} alt="" />
            <img src={n3} alt="" />
            <img src={n4} alt="" />
        </div>
        <div className="p-10 mt-10 flex justify-evenly">
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
            <img src={icon3} alt="" />
            <img src={icon4} alt="" />
        </div>
    </div>
  )
}

export default Compo3