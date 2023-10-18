

export default async function getAllData() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const AllData = await res.json();
  console.log(AllData);

  return AllData;
}

