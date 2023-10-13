
"use client"

import SearchBar from "./components/searchBar";
import { useId } from "react";


const Home = () => {
const id=useId()
  return (
    <>
    <SearchBar key={id} />
       
    </> 
  )

      }

export default Home;
