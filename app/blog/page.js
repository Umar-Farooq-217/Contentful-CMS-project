import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Link from 'next/link'

export default function page() {
  return (
    <div>
        <Navbar/>
        <h1 className="font-bold text-3xl text-center mt-8">Page Title</h1>
        <h1 className='text-center my-5'><Link href='/' className='text-lg px-2'>Home</Link><Link className='text-gray-600 text-lg px-2' href='/'>Link One</Link> </h1>

      <div className="bg-[url('/Image.png')] bg-cover bg-no-repeat bg-center rounded-xl min-h-[600px]"></div>
    </div>
  )
}
