import React from 'react';
import { Select } from 'antd';
import { selectedPops } from '@/types';


const onSearch = (value: string) => {
  console.log('search:', value);
};


// Filter `option.label` match the user type `input`
const filterOption = (input: string, option?: { label: string; value: string }) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  const options= [
    {
      value: 'Americas',
      label: 'Americas',
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

 

const SelectBar = ({ handleChange}: selectedPops) => {
  

return (
  <>
  <Select
    className=' w-60 h-auto'
    onSelect={handleChange}
    autoFocus
    placeholder="Choose the Continent"
    optionFilterProp="children"
    onSearch={onSearch}
    showSearch
    filterOption={filterOption}
    options={options}
  />
  
  </>
)
}

export default SelectBar;

