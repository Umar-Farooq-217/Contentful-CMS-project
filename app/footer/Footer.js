import React from 'react'
import { FcBusinessman } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import Image from 'next/image';

export default function Footer() {
  return (
    <div>
      <div className="bg-gray-200 ">
   <div className="w-full grid lg:grid-cols-10 md:grid-cols-5 sm:grid-cols-1  md:px-36 sm:px-10 gap-5 mt-16 py-16 secondAnimate ">
  <div className=" md:col-span-3 ">
      <h1 className="text-lg font-bold" > About</h1>
      <p className="text-gray-700 pt-5 mr-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
         <h1 className="text-gray-700 pt-5"><span className="text-lg font-bold text-black">Email :</span > 234567953</h1>
         <h1 className="text-gray-700 pt-5"><span className="text-lg font-bold text-black">Phone :</span > ghhh@gmail.com</h1>
    </div>
    <div className=""></div>
    <div className="  ">
      <h1 className="font-bold text-lg">Quick Link</h1>
      <p className="text-gray-700 pt-[15px]">Home</p>
      <p className="text-gray-700 py-[11px]">About</p>
      <p className="text-gray-700 py-[11px]">Blog</p>
      <p className="text-gray-700 py-[11px]">Archived</p>
      <p className="text-gray-700 py-[11px]">Author</p>
      <p className="text-gray-700 py-[11px]">Contact</p>
    </div>
    <div className=" ">
    <h1 className="font-bold text-lg">Category</h1>
    <p className="text-gray-700 pt-[15px]">LifeStyle</p>
    <p className="text-gray-700 pt-[11px]">Technology</p>
    <p className="text-gray-700 pt-[11px]">Travel</p>
    <p className="text-gray-700 pt-[11px]">Business</p>
    <p className="text-gray-700 pt-[11px]">Economy</p>
    <p className="text-gray-700 pt-[11px]">Sports</p>
    </div>
    <div className=""></div>
    <div className=" bg-white  md:col-span-3 p-8 text-center rounded-xl ">
      <h1 className="text-lg font-bold mt-5">Weekly Newsletter</h1>
      <p className="text-sm font-semibold mt-2 text-gray-700">Get blog articles and offers via email</p>
       <div className="flex justify-between items-center border-[2px] border-gray-400 px-5 py-1 mt-8 rounded-lg">
        <input  type="email" className='w-full p-1 inp border-t-white' placeholder='Enter Email' />
        <HiOutlineMail className='text-xl text-gray-500' />

       </div>
       <button className='w-full bg-blue-700 font-bold text-center py-3 rounded-lg text-white mt-5'>Subscribe</button>
    </div>
   </div>
   <p className="bg-gray-400 h-[1px] my-5 md:mx-36 sm:mx-10"></p>
   <div className="flex justify-between items-center py-8 md:px-36 sm:px-10">
    <div className="flex">
      <Image src='/footerLogo.svg' width={50} height={50} alt="pic" />
      <div className="">
        <h1 className="text-lg ml-3 ">Meta <span className="font-bold">Blog</span></h1>
        <p className="text-[16px] ml-3 ">© JS Template 2023. All Rights Reserved.</p>
      </div>
    </div>
    <div className="flex items-center">
      <h1 className="text-lg text-gray-700 px-2">Terms of Use</h1>
      <h1 className="text-lg text-gray-700 px-2">Privacy Policy</h1>
      <h1 className="text-lg text-gray-700 px-2">Privacy of Coolies</h1>
    </div>
   </div>
   </div>
    </div>
  )
}
