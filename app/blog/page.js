import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Image from 'next/image';
import Link from 'next/link'
import { IoMdContact } from "react-icons/io";
import client from '@/lib/contenful';
import Footer from '../footer/Footer';
const fetchServices = async () => {
  try {
    let response = await client.getEntries({ content_type: 'services' })
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
        date: item.fields.date,
        image: imageUrl,
        img: imgUrl
      }
    })
    return services

  } catch (error) {
    console.log('error', error);

  }
}

export default async function page() {
  let services = await fetchServices()
  console.log('services', services);

  return (
    <div>
      <Navbar />
      <h1 className="font-bold text-3xl text-center mt-8">Page Title</h1>
      <h1 className='text-center my-5'><Link href='/' className='text-lg px-2'>Home</Link><Link className='text-gray-600 text-lg px-2' href='/'>Link One</Link> </h1>

      <div className="bg-[url('/Image.png')] bg-cover bg-no-repeat bg-center rounded-xl min-h-[600px] relative sm:p-5 md:p-12">
        <div className="absolute bottom-10">
          <button className='text-lg text-white py-1 px-3 bg-blue-500 font-bold rounded-md'>Technology</button>
          <h1 className="text-4xl text-white  md:w-[60%] sm:w-[95%] font-bold pt-7">
            The Impact of Technology on the Workplace: How Technology is Changing
          </h1>
          <div className="flex items-center pt-7">

            <IoMdContact className='text-white text-3xl' />
            <p className="text-md text-white ">Tracey Wilson</p>
            <p className="text-md text-gray-200 ">5 August , 2002</p>


          </div>

        </div>
      </div>


      <div className="mt-16 lg:px-20 md:px-14 sm:px-5">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 lg:gap-10 md:gap-5 sm:gap-3 pt-5  ">
          {
            services.map((service, i) => {
              return (
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
      <div className="">
        <button className='border-[1px] rounded-md border-gray-400 hover:bg-black transition-all duration-500 ease-linear text-gray-400 font-bold  py-2 px-3 mt-8 text-lg flex mx-auto'>Load More</button>
      </div>
      <div className="bg-[#ddd] text-[16px] text-center rounded-xl md:w-[50%] secondAnimate sm:w-[85%] hover:bg-gray-200 mx-auto
       mt-20 py-2 hover:scale-110">
        <p className="text-[14px] text-slate-600">Advertisement</p>
        <p className="text-[18px] font-bold text-slate-800">You can place ads
          <br /> <span className="text-[14px] text-slate-600">750 x 100</span>
        </p>
      </div>

      <Footer />
    </div>
  )
}
