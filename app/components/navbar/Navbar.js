import react from "react"
import styles from './Navbar.module.css'
import Image from "next/image"
import Link from "next/link"
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
return(
   <div className='lg:flex md:block justify-between '>
    <div className="flex lg:items-center lg:justify-center md:justify-start sm:bg-green-400 ">
      <Image className='' src='/Union.svg' width={28} height={28} />
      <h1 className="text-[20px] font-semibold ml-2">Meta <span className="font-bold">Blog</span></h1>

    </div>
    <div className="text-[16px] font-semibold md:flex  items-center justify-center sm:block sm:text-center md:bg-gray-600 sm:bg-slate-600 lg:bg-white ">
      {
        links.map((link)=>{
          return(
            <li key={link.name} className="list-none px-3 sm:py-5">
              <Link href={link.link}>{link.name}</Link>
            </li>
          )
        })
      }
    </div>
    <div className="flex justify-center items-center lg:bg-white md:bg-slate-700 sm:bg-gray-600 md:py-0 sm:py-5">
      <div className="">
   
<div className={styles.InputContainer}>
  <input
    placeholder="Search"
    id="input"
    className={styles.input}
    name="text"
    type="text"
  />

  <label className={styles.labelforsearch} for="input">
    <svg className={styles.searchIcon} viewBox="0 0 512 512">
      <path
        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
      ></path>
    </svg>
  </label>
</div>

      </div>
    <div className="ml-5">
    <label className={styles['ui-switch']}>
  <input type="checkbox"/>
  <div className={styles.slider}>
    <div className={styles.circle}></div>
  </div>
</label>
    </div>


    </div>
   </div>
)
} 