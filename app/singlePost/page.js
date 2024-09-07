import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { IoMdContact } from "react-icons/io";


export default function page() {
  return (
    <div>
        <Navbar/>
      <div className=" lg:mx-[200px] md:mx-[130px] sm:mx-7 mt-7">
      <button className='text-lg text-white mt-5 py-1 px-3 bg-blue-500 font-bold rounded-md'>Technology</button>
          <h1 className="text-[36px]     font-semibold pt-7">
            The Impact of Technology on the Workplace: <br /> How Technology is Changing
          </h1>
          <div className="flex items-center pt-7">

            <IoMdContact className='text-black text-3xl' />
            <p className="text-md text-black font-semibold pl-2 ">Tracey Wilson</p>
            <p className="text-md text-black pl-3 ">5 August , 2002</p>


          </div>
      </div>
    </div>
  )
}
