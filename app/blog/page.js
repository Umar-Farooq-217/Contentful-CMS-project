import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Link from 'next/link'
import { IoMdContact } from "react-icons/io";
import client from '@/lib/contenful';
const fetchServices = async()=>{
  try {
    let response = await client.getEntries({content_type: 'services'})
    const services = response.items.map((item)=>{
      return {
        title:item.fields.title,
        pera:item.fields.pera,
        description:item.fields.description,
        date:item.fields.date,
        image:item.fields.image.fields.file.url
      }
    })
    return services

  } catch (error) {
    console.log('error',error);
    
  }
}

export default async function page() {
 let services =await fetchServices()
 console.log('services',services);
 
  return (
    <div>
        <Navbar/>
        <h1 className="font-bold text-3xl text-center mt-8">Page Title</h1>
        <h1 className='text-center my-5'><Link href='/' className='text-lg px-2'>Home</Link><Link className='text-gray-600 text-lg px-2' href='/'>Link One</Link> </h1>

      <div className="bg-[url('/Image.png')] bg-cover bg-no-repeat bg-center rounded-xl min-h-[600px] relative sm:p-5 md:p-12">
      <div className="absolute bottom-10">
      <button className='text-lg text-white py-1 px-3 bg-blue-500 font-bold rounded-md'>Technology</button>
      <h1 className="text-4xl text-white  md:w-[60%] sm:w-[95%] font-bold pt-7">
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
