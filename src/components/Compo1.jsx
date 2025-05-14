import React from 'react'
import item1 from "../assets/item1.png"
import item2 from "../assets/item2.png"
import item3 from "../assets/item3.png"
import progress from "../assets/progressline.png"

const Compo1 = () => {
  return (
    <div className=''>
        <h1 className='text-black text-[40px] m-10 font-bold p-10 '>Learn more about<span className='text-orange-500'> what we solve</span></h1>
        <div className="outer mt-10 flex justify-evenly p-10 overflow-hidden w-100%">
            <div className="inner1 mt-10 p-10 pr-0 h-auto w-auto">
                <img src={item1} alt="" />
                <h1 className='mt-5 mb-5 text-[25px] text-orange-500'>Accreditation & Compliance</h1>
                <p className='w-auto'>Bring real-time monitoring for all users’ accreditation <br /> requirements for continuous quality improvement</p>
                <button className='mt-5 border-2 px-2 rounded-3xl'>Learn More</button>
            </div>

            <div className="inner2 p-10 mt-10  pr-0 h-auto w-auto">
                <img src={item2} alt="" />
                <h1 className='mt-5 mb-5 text-[25px] text-orange-500 '>ILMS</h1>
                <p className='w-auto'>Customise the learning system by giving users a unified  <br />platform for all academic needs with easy-to-use technology</p>
                <button className='mt-5 border-2 px-2 rounded-3xl'>Learn More</button>
            </div>

            <div className="inner3 p-10 mt-10  pr-0 h-auto w-auto">
                <img src={item3} alt="" />
                <h1 className='mt-5 mb-5 text-[25px] text-orange-500'>Exam Management System</h1>
                <p className='w-auto'>Streamline the examination process with Interactive Examinations,<br /> Live Proctoring, and Exam Evaluation modules</p>
                <button className='mt-5 border-2 px-2 rounded-3xl'>Learn More</button>
            </div>
        </div>

        <img src={progress} className="mx-auto m-10 mb-[150px]" alt="" />
    </div>
  )
}

export default Compo1