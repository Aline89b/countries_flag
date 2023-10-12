"use client"
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [theme,setTheme ]= useState("light")

    useEffect(()=> {
if (theme === "dark"){
    document.documentElement.classList.add("dark")
}else{
    document.documentElement.classList.remove("dark")

}

}),[theme]
    function toggle(){
        setTheme(theme === "dark" ? "light" :"dark")
    }

  return (
    <>
        <div className="flex justify-between border-b-2 p-4 dark:bg-slate-500 dark:text-white dark:border-none">
            <Link href="/">Where in the world?</Link>
            { theme === "dark" ? (

            
        <div  className="flex cursor-pointer">
            <Image src="/light_mode.png"
                width={20}
                height={20}
                alt="Theme Icon"
                onClick={toggle}
        />
            <p>Light Mode</p>
        </div>) : (
        <div  className="flex  cursor-pointer">
            <Image src="/dark_mode.png"
            width={20}
            height={20}
            alt="Theme Icon"
            onClick={toggle}
    />
        <p>Dark Mode</p>
    </div>

        )} 
        
        </div>
   </>
    
  )
};

export default Navbar   
