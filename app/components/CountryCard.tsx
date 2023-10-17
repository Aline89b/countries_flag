"use client"
import Image from "next/image";
import { resultProps } from "@/types";
import { useRouter } from "next/navigation";

interface CardResultProps {
    item: resultProps
}

const CountryCard = ({ item }: CardResultProps ) => {
  const router = useRouter()

  function handleClick(){
    router.push( `/detailPage/${item.name.common}  ` )
  }
  return (
    
<div className=" flex-col flex-wrap m-2 align-middle cursor-pointer hover:shadow-2xl  p-3">
    <div onClick={handleClick}>
        <div className=" w-52 h-52">
            <Image src={item.flags.png}
                 width={500}
                 height={500}
                 className=" h-auto"
                 style={{objectFit:"fill"}}
                 alt={item.name.common}
                 priority

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
      </div>
        
  
    
  )
};

export default CountryCard
