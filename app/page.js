import Image from "next/image";
import client from "@/lib/contenful";
import Navbar from "./components/navbar/Navbar";
const fetchServices = async()=>{
  let response = await client.getEntries({content_type:'services'})
  const services = response.items.map((item)=>{
return{
  title:item.fields.title,
  description:item.fields.description,
  url:item.fields.image.fields.file.url
}
  })
  return services

  
}
const fetchMain = async ()=>{
  let response = await client.getEntries({content_type:'mainHeading'})
  const mainHeading = response.items.map((main)=>{
    return{
      description:main.fields.description,
      url:main.fields.image.fields.file.url
    }
  })
  return mainHeading
}
export default async function Home() {
  
  // const services = await fetchServices()
  // const mainHeading = await fetchMain()
  // console.log('fetchMain',mainHeading);
  
  
  return (
   <div className="lg:px-20 md:px-14 sm:px-5">
   <Navbar/>
   <div className="bg-[url('/Image.png')] bg-cover bg-no-repeat bg-center min-h-[600px]  mt-10 relative ">
   <div className="bg-white rounded-2xl shadow-2xl w-[min(600px,95%)] py-6 px-9  
    absolute md:bottom-[-50px] md:left-[10%] sm:bottom-[-10%] left-2">
    <button className='bg-blue-500 text-white py-1 px-2 font-bold text-sm rounded-lg mt-3'>Technology</button>
    <h1 className="text-[36px] font-bold py-5 ">The Impact of Technology on the Workplace: How Technology is Changing</h1>
    <div className="flex  items-center">
      <Image src='/man.png' alt='pic' width={30} height={30} />
      <p className='text-sm text-gray-500 mx-2'>Umar Farooq</p>
      <p className='text-sm text-gray-500 mx-2'>June 1 ,2002</p>
    </div>

   </div>
   </div>

   <div className="bg-[#ddd] text-[16px] text-center rounded-xl md:w-[50%] sm:w-[75%] mx-auto mt-40 py-2">
    <p className="text-[14px] text-slate-600">Advertisement</p>
    <p className="text-[18px] font-bold ">You can place ads
      <br /> <span className="text-[14px] text-slate-600">750 x 100</span>
    </p>
   </div>
   </div>
  );
}
