import { Params } from "@/types";
import Image from "next/image";
import { resultProps } from "@/types";
import Link from "next/link";

export async function generateStaticParams() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return  data.map((item: resultProps) => ({ name: item.name.common }));
}


async function getDetail(name: string) {
  const res = await fetch(` https://restcountries.com/v3.1/name/${name} `);
  const data = await res.json();
  console.log(data);
   
  return data;
}

 
 async function getAllData() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const AllData = await res.json();
  console.log(AllData);

  return AllData;
}

async function DetailPage({ params }: Params) {
  const data = await getDetail(params.name);
  console.log(data);
 
  
  const borders: string[]=[]
   data.map((country: resultProps)=> {
    return country.borders?.map((item: string)=> borders.push(item))
  });
  console.log(borders)
  const AllData = await getAllData();
  
  const result = AllData?.filter((country : resultProps) => {
     return  borders?.find((border) =>  border === country.cca3)
        
    
  })
  
  console.log(result)

  return (
    <div className="flex flex-wrap  dark:bg-gray-900 dark:text-white p-3">
      {data?.map((item: resultProps) => (
        <div key={item.ccn3} className=" flex md:flex-col justify-center m-2 items-center align-middle hover:shadow-2xl w-fit p-2">
          
            <div className="flex flex-wrap ">
            <div className="flex-col ">
            <div className="flex justify-center flex-wrap">
              <div className="relative">
                <Image
                  src={item.flags.png}
                  width={400}
                  height={200}
                  className="cover h-auto w-auto"
                  alt={item.name.common}
                />
              </div>
                <div className="flex p-2 gap-6">
                  <div>
                  <h1 className=" font-extrabold">{item.name.common}</h1>
                  <br></br>
                    <p><span className=" font-bold">Native Name:</span> {Object.values(item.name.nativeName)[0].common}</p>
                    <p><span className=" font-bold">Population:</span> {item.population}</p>
                    <p><span className=" font-bold">Region: </span>{item.region}</p>
                    <p><span className=" font-bold">Sub region:</span> {item.subregion}</p>
                    <p><span className=" font-bold">Capital:</span> {item.capital}</p>
                  </div>
                  <div>
                    <p><span className=" font-bold">Top LevelDomain:</span> {item.tld[0]}</p>
                    <p><span className=" font-bold">Currencies:</span> {Object.values(item.currencies)[0].name}</p>
                    <p><span className=" font-bold">Languages:</span> {Object.values(item.languages).join(", ")}</p>
                    <div className=" flex flex-wrap mt-4  p-2">
                      <Link
                        className=" bg-sky-500 p-3 shadow-xl border-solid rounded-lg border "
                        href={item.maps.googleMaps}
                      >
                        Go to Maps
                      </Link>
                    </div>
                  </div>
                </div>
              
              </div>
              <div className="flex justify-center mt-16">
                <div className="mb-8 flex gap-2">
                  <span className=" font-bold p-2">Border countries:</span>
                  {result ? (
                result.map((country: resultProps) => (
                  <Link href={`/detailPage/${country.name.common}  `}
                    className=" dark:font-black bg-slate-300 p-2 shadow-xl border-solid rounded-lg border cursor-pointer"
                    key={country.cca3}
                    as={`${country.name.common}`}
                  >
                    {country.name.common}
                  </Link>
                ))
              ) : (
                <p className="col-span-3">No bordering neighbours</p>
              )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DetailPage;
