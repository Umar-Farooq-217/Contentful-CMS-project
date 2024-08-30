'use client'
import react from "react"
import styles from './Navbar.module.css'
import Image from "next/image"
import Link from "next/link"
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import { IoClose } from "react-icons/io5";


 export default function Navbar(){
  const links = [
    {
      name:'Home', link: '/'
    },
    {
      name:'Blog', link: '/'
    },
    {
      name:'Single Post', link: '/'
    },
    {
      name:'Pages', link: '/'
    },
    {
      name:'Contact', link: '/'
    },
  ]
  const [open,setOpen]=useState(false)
  
return(
   <div className='lg:flex md:block justify-between  lg:px-20 md:px-14 sm:px-5'>
    <div className="flex lg:items-center lg:justify-center md:justify-start lg:py-0 md:py-3 sm:py-3  ">
      <Image className='' src='/Union.svg' width={28} height={28} alt='pic' />
      <h1 className="text-[20px] font-semibold ml-2">Meta <span className="font-bold">Blog</span></h1>

    </div>
    <div onClick={()=>setOpen(!open)} className="text-3xl font-bold absolute top-4 md:right-16 sm:right-7 
    cursor-pointer lg:invisible md:visible sm:visible ">
      {open ?
    <IoClose />
    :
    <TiThMenu />
      }
    </div>
    <div className={`text-[16px] font-semibold lg:flex md:block  items-center justify-center sm:block sm:text-center md:bg-
    black sm:bg-black lg:bg-white  md:mt-0 lg:w-auto absolute left-0 lg:static md:w-full sm:w-full z-20 lg:z-auto
     transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-600px]'}  `}>
      {
        links.map((link)=>{
          return(
            <li key={link.name} className="list-none px-3 sm:py-5 lg:text-black md:text-white sm:text-white ">
              <Link href={link.link}>{link.name}</Link>
            </li>
          )
        })
      }
    </div>
    <div className={`flex justify-center items-center lg:bg-white md:bg-black  sm:bg-black lg:py-0 md:py-3 sm:py-5 absolute left-0
   lg:static lg:w-auto md:w-full sm:w-full z-20 lg:z-auto transition-all duration-500 ease-in
    ${open ? ' md:top-[397px] sm:top-[400px]':'md:top-[-600px] sm:top-[-600px]'}`}>
    
      <div className="">
   
<div className={styles.InputContainer}>
  <input
    placeholder="Search"
    id="input"
    className={styles.input}
    name="text"
    type="text"
  />

  <label className={styles.labelforsearch} htmlFor="input">
    <svg className={styles.searchIcon} viewBox="0 0 512 512">
      <path
        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
      ></path>
    </svg>
  </label>
</div>

      </div>
    <div className="ml-5">
 
<label className={styles.switch}>
    <input type="checkbox"/>
    <span className={styles.slider}></span>
</label>
    </div>


    </div>
   </div>
)
} 