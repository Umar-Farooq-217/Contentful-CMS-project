import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Image from 'next/image';
import { IoMdContact } from "react-icons/io";
import client from '@/lib/contenful';
import Footer from '../footer/Footer';
const fetchData = async () => {
  try {
    let response = await client.getEntries({ content_type: "singlePost" })
    const services = response.items.map((item) => {
      return {
        firstPera: item.fields.singleFirst,
        secondPera: item.fields.singleSecond
      }
    })
    return services
  } catch (error) {
    console.log('error', error);

  }


}

const fetchSecondData = async () => {
  let response = await client.getEntries({ content_type: 'singlePostSecond' })
  const secondData = response.items.map((data) => {
    return {
      heading: data.fields.heading,
      pera: data.fields.pera,
      firstPera: data.fields.secondPera
    }
  })
  return secondData
}
const fetchThirdData = async () => {
  let response = await client.getEntries({ content_type: 'singlePostThird' })
  const services = response.items.map((item) => {
    return {
      heading: item.fields.title,
      firstPera: item.fields.pera,
      secondPera: item.fields.firstPera,
      thirdPera: item.fields.secondPera
    }
  })
  return services

}

const fetchFourthData = async()=>{
  let response = await client.getEntries({content_type:'singlePostFourth'})
  const services = response.items.map((item)=>{
    firstHeading:item.fields.firstHeading,
    firstPera:item.fields.firstPera,
  })
}


export default async function page() {
  const singlePost = await fetchData()
  const secondData = await fetchSecondData()
  const thirdData = await fetchThirdData()
  console.log('singlePost', thirdData);

  return (
    <div>
      <Navbar />
      <div className=" max-w-[800px] m-auto mt-7 md:p-0 sm:p-5">
        <button className='text-md text-white mt-5 py-1 px-3 bg-blue-500 font-bold rounded-md'>Technology</button>
        <h1 className="text-[36px]     font-semibold pt-7">
          The Impact of Technology on the Workplace: <br /> How Technology is Changing
        </h1>
        <div className="flex items-center pt-7">

          <IoMdContact className='text-black text-3xl' />
          <p className="text-md text-black font-semibold pl-2 ">Tracey Wilson</p>
          <p className="text-md text-black pl-3 ">5 August , 2002</p>
        </div>
        <Image className='w-full min-h-[400px] rounded-xl object-cover mt-8' src='/firstImg.svg' width={200} height={200} alt='pic' />
        {
          singlePost.map((item, i) => {
            return (
              <div key={i}>
                <p className="font-serif text-xl mt-5">{item.firstPera}</p>
                <p className="font-serif text-xl mt-7">{item.secondPera}</p>
              </div>
            )
          })
        }
        {
          secondData.map((item, i) => {
            return (
              <div key={i}>
                <h1 className="font-serif font-bold text-2xl mt-9">{item.heading}</h1>
                <p className="font-serif text-xl mt-5">{item.pera}</p>
                <p className="font-serif text-xl mt-7">{item.firstPera}</p>
              </div>
            )
          })
        }
        {
          thirdData.map((item, i) => {
            return (
              <div key={i}>
                <h1 className="font-serif font-bold text-2xl mt-9">{item.heading}</h1>
                <p className="font-serif text-xl mt-5">{item.firstPera}</p>
                <p className="font-serif text-xl mt-7">{item.secondPera}</p>
                <p className="font-serif text-xl mt-12 font-semibold py-8 px-4 rounded-xl shadow-lg italic  bg-[#F6F6F7]">{item.thirdPera}</p>

              </div>
            )
          })
        }
        <Image className='w-full min-h-[400px] rounded-xl object-cover mt-8' src='/secondImage.svg' width={200} height={200} alt='pic' />


        <div className=" text-[16px] text-center rounded-xl w-[90%]  bg-gray-200 mx-auto mt-12 py-2 hover:scale-110">
          <p className="text-[14px] text-slate-600">Advertisement</p>
          <p className="text-[18px] font-bold text-slate-800">You can place ads
            <br /> <span className="text-[14px] text-slate-600">750 x 100</span>
          </p>
        </div>


      </div>
      <Footer />
    </div>
  )
}
