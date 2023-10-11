import React from 'react';
import { AutoComplete } from 'antd';
import { useState, useEffect } from 'react';
import { resultProps } from '@/types';
import { CountryCard } from '.';
import SelectBar from './selectBar';



const SearchBar: React.FC = () => {
  const [data, setData] = useState<resultProps[]>([])
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all").then((response) => response.json())
    .then((data) => {
       console.log(data.slice(0,10));
       
       setData(data);
       })
  }, [])
  
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const [newArr, setnewArr] = useState<resultProps[]>([]);
  
  
  function onChange (value: string){
    let filtered = data.filter(item=> ( 
        item.name.common.toLowerCase().includes(value) ||
         item.region.toLowerCase().includes(value)))
      console.log(data)
      console.log(filtered)
      setnewArr(filtered)
    }
  const handleSearch = (value: string) => {
    let filtered = data.filter(item=> ( 
      item.name.common.toLowerCase().includes(value))).map((item)=> ({
        
        value: item.name.common,
      }))
    console.log(data)
    console.log(filtered)
    setOptions(filtered)
  }
    
  return(
<>
<div className=" flex justify-between dark:bg-gray-900 dark:text-white p-3">
    <AutoComplete
      onSearch={handleSearch}
      onChange={onChange}
      style={{ width: 200 }}
      options={options}
      placeholder="start typing"
      filterOption={(inputValue, option) =>
        option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
      
    />
    <SelectBar />
  </div>
  <div className=" flex flex-wrap dark:bg-gray-900 dark:text-white">
  {newArr.length === 0 ? data.map((item) =>
    < CountryCard item = {item}  />
  ) : newArr.map(item => < CountryCard item = { item } /> 
)}

</div>
</>
)}

export default SearchBar;
