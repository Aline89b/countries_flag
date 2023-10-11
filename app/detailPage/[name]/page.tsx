"use client"
import { Params } from "@/types";
import Image from "next/image";
import { resultProps } from "@/types";
import { CountryCard } from "@/app/components";



export async function generateStaticParams(){
  const res = await fetch("https://restcountries.com/v3.1/all")
  const data = await res.json()
  return data.map((item: any)=> ({ name: item.name.common}))
}

async function getDetail(name: string){
  const res = await fetch( ` https://restcountries.com/v3.1/name/${name} ` )
  const data = await res.json()
  console.log(data)
  return data

}

 async function DetailPage({params}: Params ) {
    const data = await getDetail(params.name) 
    console.log(data)

  return (
    <>
  
    <div className="flex justify-center align-middle items-center" >
      {data?.map((item: resultProps) => (
        <>
        
          <div className=" flex-col justify-center m-2 items-center align-middle hover:shadow-2xl w-fit p-2">
            <div className="relative">
              <Image src={item.flags.png}
                  width={200}
                  height={200}
                  style={{objectFit:"cover"}}
                  alt={item.name.common}
            />
          </div>
        <div className=" align-baseline p-2">
          <h1>{item.name.common}</h1>
          <br></br>
          <p>Population: {item.population}</p>
          <p>Region: {item.region}</p>
          <p>Capital: {item.capital}</p>
        </div>
        </div>
        </>
        ))}
      </div>
     
     </>
      
    
  )
};

export default DetailPage
