import React from 'react';
import { Select } from 'antd';
import { useState } from 'react';


const onSearch = (value: string) => {
  console.log('search:', value);
};


// Filter `option.label` match the user type `input`
const filterOption = (input: string, option?: { label: string; value: string }) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  const options= [
    {
      value: 'America',
      label: 'America',
    },
    {
      value: 'Asia',
      label: 'Asia',
    },
    {
      value: 'Oceania',
      label: 'Oceania',
    },
    {
      value: 'Europe',
      label: 'Europe',
    },
    {
      value: 'Africa',
      label: 'Africa',
    },
  ]

 

const SelectBar: React.FC = () => {
  const [value, setValue]= useState<string>("")
  const onChange = (value: string) => {
    console.log("selected value:", value);
    setValue(value)
  };

return (
  <Select
    className=' w-60 h-auto'
    showSearch
    onChange={onChange}
    placeholder="Choose the Continent"
    optionFilterProp="children"
    onSearch={onSearch}
    filterOption={filterOption}
    options={options}
  />
)
}

export default SelectBar;

