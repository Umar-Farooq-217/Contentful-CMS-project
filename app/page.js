import Image from "next/image";
import client from "@/lib/contenful";
import Navbar from "./components/navbar/Navbar";
import Link from "next/link";
import { FcBusinessman } from "react-icons/fc";

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
  
  const services = await fetchServices()
  console.log('fetchSErvives',services);
  
  // const mainHeading = await fetchMain()
  // console.log('fetchMain',mainHeading);
  
  
  return (
   <div className="lg:px-20 md:px-14 sm:px-5">
   <Navbar/>
   <div className="bg-[url('/Image.png')] bg-cover bg-no-repeat bg-center min-h-[600px]  mt-10 relative ">
   <div className="bg-white rounded-2xl shadow-2xl w-[min(600px,95%)] py-6 px-9  
    absolute md:bottom-[-50px] md:left-[8%] sm:bottom-[-10%] left-2">
    <button className='bg-blue-500 text-white py-1 px-2 font-bold text-sm rounded-lg mt-3'>Technology</button>
    <h1 className="text-[36px] font-bold py-5 ">The Impact of Technology on the Workplace: How Technology is Changing</h1>
    <div className="flex  items-center">
      <Image src='/man.png' alt='pic' width={30} height={30}  />
      <p className='text-sm text-gray-500 mx-2'>Umar Farooq</p>
      <p className='text-sm text-gray-500 mx-2'>June 1 ,2002</p>
    </div>

   </div>
   </div>

   <div className="bg-[#ddd] text-[16px] text-center rounded-xl md:w-[50%] sm:w-[85%] mx-auto mt-36 py-2">
    <p className="text-[14px] text-slate-600">Advertisement</p>
    <p className="text-[18px] font-bold ">You can place ads
      <br /> <span className="text-[14px] text-slate-600">750 x 100</span>
    </p>
   </div>

   <div className=" mt-16">
    <h1 className='font-bold'>Latest Post</h1>
    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 lg:gap-10 md:gap-5 sm:gap-3 ">
    {
      services.map((service,i)=>{
        return(
          <div key={i} className="p-4 border-[1px] border-gray-300 rounded-xl">
            <Image className='w-full rounded-lg' src={service.image} width={250} height={250} alt='pic' />
            <button className="text-[14px] text-blue-500 font-bold bg-[#fcf5f5] border-[1px] border-gray-100 shadow-md my-5">
              <Link className='py-3 px-3' href='/'>{service.title}</Link>

            </button>
       
            <p className="text-[24px] font-bold">{service.description}</p>
            <div className="flex pt-5 items-center">
            {/* <Image className=' rounded-lg' src={service.img} width={25} height={25} alt='pic' /> */}
            {/* i am not know why second image in not fetching from contentful and i face error after every attempt */}
            <FcBusinessman className='text-2xl' />
            <p className='font-bold ml-3 text-xl'>{service.pera}</p>

            </div>

          </div>
        )
      })}
    
    </div>
   </div>
   </div>
  );
}
