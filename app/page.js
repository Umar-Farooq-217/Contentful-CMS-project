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
   </div>
  );
}
