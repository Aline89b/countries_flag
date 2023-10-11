"use client"
import Link from "next/link";
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
    
<div className=" flex-col m-2 align-middle hover:shadow-2xl  dark:bg-gray-900 dark:text-white p-3">
    <div onClick={handleClick}>
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
      </div>
        
  
    
  )
};

export default CountryCard
