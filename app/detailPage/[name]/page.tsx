import { Params } from "@/types";
import Image from "next/image";
import { resultProps } from "@/types";
import { CountryCard } from "@/app/components";
import Link from "next/link";

export async function generateStaticParams() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return data.map((item: resultProps) => ({ name: item.name.common }));
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

  const AllData = await getAllData();
  console.log(AllData);

  return (
    <div className="flex justify-center align-middle items-center  dark:bg-gray-900 dark:text-white p-3">
      {data?.map((item: resultProps) => (
        <div className=" flex justify-center m-2 items-center align-middle hover:shadow-2xl w-fit p-2">
          <div className="flex-col gap-2">
            <div className="flex">
              <div className="relative">
                <Image
                  src={item.flags.png}
                  width={200}
                  height={200}
                  style={{ objectFit: "cover" }}
                  alt={item.name.common}
                />
              </div>

              <div className=" p-2">
                <h1>{item.name.common}</h1>
                <br></br>
                <div className="flex gap-6">
                  <div>
                    <p>Population: {item.population}</p>
                    <p>Region: {item.region}</p>
                    <p>Sub region: {item.subregion}</p>
                    <p>Capital: {item.capital}</p>
                  </div>
                  <div>
                    <p>Top LevelDomain: {item.tld[0]}</p>
                    <div className=" mt-4  p-2">
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
              <div></div>
              <div className="flex justify-center mt-3">
                <p>
                  Border countries:
                  {item.borders.map((border) => (
                    <Link
                      className=" bg-pink-300 p-3 shadow-xl border-solid rounded-lg border "
                      href="/"
                    >
                      {border}
                    </Link>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DetailPage;
