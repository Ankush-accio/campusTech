import React from 'react'
import campusTech from "../assets/campusTech.svg"
import line from "../assets/line.png"
import facebook from "../assets/facebook.png"
import insta from "../assets/insta.png"
import x from "../assets/x.png"
import link from "../assets/link.png"

const Footer = () => {
  return (
    <div className='p-10 mt-10 bg-gray-100'>
        <img src={campusTech} className='m-10' alt="" />
        <div className="flex gap-10">
            <div className="m-10">
                <h1 className='text-2xl' >Resources</h1>
                <h1 className='text-2xl' >Solutions</h1>
                <h1 className='text-2xl' >About Us</h1>
            </div>

            <div className="m-10">
                <h1 className='text-2xl'>Contact Us</h1>
                <img src={line} alt="" />
                <h1 className='text-2xl'>support@campus.technology 
                    <br />
                +91-9980-747-722</h1>
            </div>

            <div className="m-10">
                <h1 className='text-2xl'>Chat With Us</h1>
                <img src={line} alt="" />
                <div className="flex gap-5">
                    <img className='mt-5' src={facebook} alt="" />
                    <img className='mt-5' src={insta} alt="" />
                    <img className='mt-5' src={x} alt="" />
                    <img className='mt-5' src={link} alt="" />
                </div>
            </div>
        </div>

        <div className="flex justify-between p-10">
            <h1 className='text-2xl' >© 2022, Kahan Technologies Pvt. Ltd.</h1>
            <h1 className='text-2xl' >Designed by <span className='font-bold'>Grapdes</span></h1>
        </div>
    </div>
  )
}

export default Footer