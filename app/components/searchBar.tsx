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
 // const [selectedValue, setSelectedValue]= useState<string>("")
  const [selectedArr, setSelectedArr]= useState<resultProps[]>([])


  const handleChange = (value: string): void => {
    console.log("selected value:", value);
    const selectedArr = data.filter(item=> ( 
      item.region === value))
      console.log(selectedArr)
      setSelectedArr(selectedArr)
  };

  
  function onChange (value: string){
    let filtered = data.filter(item=> ( 
        item.name.common.toLowerCase().includes(value) ||
         item.region.toLowerCase().includes(value) ||
         item.name.common.toLowerCase() === value.toLowerCase()  ))
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
<div className=" flex justify-between p-3">
    <AutoComplete
      autoFocus
      onSearch={handleSearch}
      onChange={onChange}
      style={{ width: 200 }}
      options={options}
      placeholder="start typing"
      filterOption={(inputValue, option) =>
        option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
      
    />
    <SelectBar handleChange ={handleChange} />
  </div>
  <div className=" flex flex-wrap dark:bg-gray-900 dark:text-white">
  {newArr.length !== 0 ? 
   newArr.map((item) =>
    < CountryCard item = {item}  /> )
  : selectedArr.length !==0 ? selectedArr.map((item) => < CountryCard item = { item } /> )
  : data.map((item) =>
  < CountryCard item = {item}  />
  ) 
}


</div>
</>
)}

export default SearchBar;
