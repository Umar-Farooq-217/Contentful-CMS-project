import Image from "next/image";
import client from "@/lib/contenful";
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
export default async function Home() {

  const services = await fetchServices()
  console.log('fetchServices',services);
  
  return (
   <div className="">
    {
      services.map((service)=>{
        return(
          <div className="">
            <h1 className="text-3xl font-bold text-center">{service.title}</h1>
            <p className="text-3xl font-bold text-center">{service.description}</p>
            <img className='w-20 h-20' src={service.url} alt="pic" />
          </div>
        )
      })
    }
   </div>
  );
}
