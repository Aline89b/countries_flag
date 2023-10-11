import Image from "next/image";
import Link from "next/link";
 
const Footer = () => {
  return (

<footer className="flex justify-between mt-auto  bg-slate-400 ">
    <div className=" flex justify-center p-2">
      <Link href="https://www.linkedin.com/in/aline-grianti/"><Image
        src="/icons8_linkedin.png"
        width={40}
        height={40}
        alt="Linkedin Profile Aline Grianti"
    />
      </Link>
      <Link href="https://github.com/Aline89b"><Image
        src="/icons8_github.png"
        width={40}
        height={40}
        alt="Github Profile Aline Grianti"
    />
      </Link>
    </div>
    <div className="p-2">
      <Link href="https://aline89b.github.io/"> Aline Grianti - Front end Developer </Link>
      <p>All rights reserved &copy;</p>
    </div>
  </footer>

  )
};

export default Footer
