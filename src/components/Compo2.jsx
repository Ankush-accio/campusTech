import React from 'react'
import child1 from "../assets/child1.svg"
import child2 from "../assets/child2.png"
import child3 from "../assets/child3.png"
import child4 from "../assets/child4.png"
import child5 from "../assets/child5.png"
import child6 from "../assets/child6.png"
const Compo2 = () => {
  return (
    <div className='bg-gray-200 '>
        <div className="outer p-10 flex m-10 w-[100vw] ">

            <div className="inner1 w-[40%] mt-10 mb-10">
                <h1 className='text-[3.125rem] font-bold leading-tight'>Why your <br /> educational <br /> <span className='text-orange-500'>institution needs <br /> Campus Tech</span> </h1>
                <button className='bg-green-400  border-b-emerald-500 rounded-3xl px-3 mt-5 '>About Us</button>
            </div>

            <div className="inner2  grid grid-cols-2 mt-10 mb-10">
                <div className="child1 p-7 flex items-center"> <img src={child1} className='h-[3.125rem] w-[3.125rem] mr-7' alt="" /> <h1>Simple and easy-to-use <br /> interface</h1> </div>
                <div className="child2 p-7 flex items-center"> <img src={child2} className='h-[3.125rem] w-[3.125rem] mr-7' alt="" /> <h1>Multi-institutional <br /> dashboard</h1> </div>
                <div className="child3 p-7 flex items-center"> <img src={child3} className='h-[3.125rem] w-[3.125rem] mr-7' alt="" /> <h1>AI-based alerts for all activities <br /> to be conducted</h1> </div>
                <div className="child4 p-7 flex items-center"> <img src={child4} className='h-[3.125rem] w-[3.125rem] mr-7' alt="" /> <h1>Track learning behaviour and <br /> learning outcomes</h1> </div>
                <div className="child5 p-7 flex items-center"> <img src={child5} className='h-[3.125rem] w-[3.125rem] mr-7' alt="" /> <h1>Build a new culture of compliance <br /> and accreditation</h1> </div>
                <div className="child6 p-7 flex items-center"> <img src={child6} className='h-[3.125rem] w-[3.125rem] mr-7' alt="" /> <h1>Integration with your campus <br /> website</h1> </div>
            </div>

        </div>
    </div>
  )
}

export default Compo2