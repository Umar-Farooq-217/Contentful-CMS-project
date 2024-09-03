import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Link from 'next/link'
import { IoMdContact } from "react-icons/io";


export default function page() {
  return (
    <div>
        <Navbar/>
        <h1 className="font-bold text-3xl text-center mt-8">Page Title</h1>
        <h1 className='text-center my-5'><Link href='/' className='text-lg px-2'>Home</Link><Link className='text-gray-600 text-lg px-2' href='/'>Link One</Link> </h1>

      <div className="bg-[url('/Image.png')] bg-cover bg-no-repeat bg-center rounded-xl min-h-[600px] relative p-12">
      <div className="absolute bottom-10">
      <button className='text-lg text-white py-1 px-3 bg-blue-500 font-bold rounded-md'>Technology</button>
      <h1 className="text-4xl text-white  w-[60%] font-bold pt-7">
      The Impact of Technology on the Workplace: How Technology is Changing
      </h1>
      <div className="flex items-center pt-7">
        
        <IoMdContact className='text-white text-3xl'/>
        <p className="text-md text-white ">Tracey Wilson</p>
        <p className="text-md text-gray-200 ">5 August , 2002</p>

        
      </div>

      </div>
      </div>
    </div>
  )
}
