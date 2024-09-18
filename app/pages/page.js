import React from 'react'
import Navbar from '../components/navbar/Navbar'
import './../globals.css'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import client from '@/lib/contenful';
import Link from 'next/link';
const fetchServices = async () => {
  try {
    let response = await client.getEntries({ content_type: 'services' });

    const services = response.items.map((item) => {
      const imageUrl = item.fields.image?.fields?.file?.url
        ? (item.fields.image.fields.file.url.startsWith('//')
          ? `https:${item.fields.image.fields.file.url}`
          : item.fields.image.fields.file.url)
        : null;

        const imgUrl = item.fields.img?.fields?.file?.url
        ? (item.fields.img.fields.file.url.startsWith('//')
          ? `https:${item.fields.img.fields.file.url}`
          : item.fields.img.fields.file.url)
        : null;

      return {
        title: item.fields.title,
        pera: item.fields.pera,
        description: item.fields.description,
        date:item.fields.date,
        image: imageUrl,
        img: imgUrl
        // img: item.fields.img?.fields?.file?.url,
      };
    });

    return services;
  } catch (error) {
    console.error('Error fetching services:', error);
    return []; 
  }
};


import Image from 'next/image'
import Footer from '../footer/Footer';
export default async function page() {
  const services = await fetchServices()

  return (
    <div><Navbar/>
    <div className="bg-gray-100 lg:mx-20 md:mx-14 sm:mx-5 rounded-2xl mt-12 firstAnimate">
      <div className="flex justify-center items-center pt-7">
        <div className="">
          <Image src='/man.png'className=''  alt='pic' width={50} height={50}/>
        </div>
        <div className="ml-3">
          <h1 className='text-lg font-bold'>Jonathan Doe</h1>
          <p className="text-sm text-gray-500 font-semibold">Collaborator & Editor</p>
        </div>
      </div><p className="flex m-auto text-justify custom-paragraph mt-7 md:w-[50%] sm:w-[80%] text-gray-500">Meet Jonathan Doe, a passionate writer and blogger with a love for technology and travel. Jonathan holds a degree in Computer Science and has spent years working in the tech industry, gaining a deep understanding of the impact technology has on our lives.

      </p>
      <div className="flex justify-center items-center gap-2 pt-8 pb-12 ">
        <div className="bg-gray-600 p-2 hover:scale-105 hover:bg-black   hover:text-white rounded-[6px]">
        <FaFacebook className='text-sm  text-white' />

        </div>
        <div className="bg-gray-600 p-2 hover:scale-105 hover:bg-black   hover:text-white rounded-[6px]">
        <FaTwitter className='text-sm  text-white' />

        </div>
        <div className="bg-gray-600 p-2 hover:scale-105 hover:bg-black   hover:text-white rounded-[6px]">
        <FiInstagram className='text-sm  text-white' />

        </div>
        <div className="bg-gray-600 p-2 hover:scale-105 hover:bg-black   hover:text-white rounded-[6px]">
        <AiOutlineYoutube className='text-sm  text-white' />

        </div>
      </div>

    </div>


    <div className=" mt-16 lg:px-20 md:px-14 sm:px-5">
    
    <h1 className='font-bold'>Latest Post</h1>
    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 lg:gap-10 md:gap-5 sm:gap-3 pt-5  ">
    {
      services.map((service,i)=>{
        return(
          <div key={i} className="p-4 border-[1px] border-gray-300 rounded-xl hover:scale-105 secondAnimate ">
           
            <Image className='w-full rounded-lg' src={service.image} width={250} height={250} alt='pic' />
            <button className="text-[14px] text-blue-500 font-bold bg-[#fcf5f5] border-[1px] py-1 rounded-md px-3 border-gray-100 shadow-md my-5">
              <Link className='' href='/'>{service.title}</Link>

            </button>
       
            <p className="text-[24px] font-bold">{service.description}</p>
            <div className="flex pt-5 items-center">

            {service.img && (
  <Image 
  className='rounded-lg' 
  src={service.img} 
  width={30} 
  height={30} 
  alt='pic' 
  />
  )}      
  {/* <Image className=' rounded-lg' src={service.img} width={25} height={25} alt='pic' /> */}
      {/* i am not know why second image in not fetching from contentful and i face error after every attempt */}
            {/* <FcBusinessman className='text-2xl' /> */}
            <p className='font-semibold text-slate-400 ml-3 text-xl'>{service.pera}</p>
            <p className=' text-slate-400 ml-3 text-lg'>{service.date}</p>

            </div>

          </div>
        )
      })}
    
    
    </div>
    </div>
    

<Footer/>

      
    </div>
  )
}
