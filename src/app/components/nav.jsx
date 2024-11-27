import Link from "next/link";

import Image from "next/image";
import satoriLogo from "../../../public/images/satoriIcon.png";
import { Instagram, Facebook, CircleUserRound, AlignJustify } from 'lucide-react';

export default function Nav() {
  return (
    <div className=" sticky z-50 top-0 w-full bg-black text-white p-5 pb-3">
      <nav className="flex gap-4 justify-between font-semibold">
        <div>
          <Image
            width={130}
            src={satoriLogo}
            alt="SatoriIcon"
            className=" mr-80 cursor-pointer"
          />
        </div>
        <div className="block md:hidden"><AlignJustify /></div> 
        <div className="hidden md:block ">          
          <ul className="flex gap-5">  
             
            <li className=" text-white hover:text-blue-500 cursor-pointer">Home</li>
            <li className=" text-white hover:text-blue-500 cursor-pointer">About</li>
            <li className=" text-white hover:text-blue-500 cursor-pointer"><Link href='./pages/Programs'>Programs</Link></li>
            <li className=" text-white hover:text-blue-500 cursor-pointer">Staff</li>
            <li className=" text-white hover:text-blue-500 cursor-pointer">Contact</li>
            <li className=" text-white hover:text-blue-500 cursor-pointer">FAQ</li>
            <li className=" text-white hover:text-blue-500 cursor-pointer">Groups</li>        
          </ul>
        </div>
        <div className="flex gap-2">
          <div className="cursor-pointer"><CircleUserRound/></div>
          <h3 className="hover:text-gray-500 cursor-pointer">LogIn</h3>
        </div>
        <div className="flex gap-2 ">
          <div className="cursor-pointer"><Facebook/></div>
          <div className="cursor-pointer">
            <Instagram/>
          </div>
        </div>
       
      </nav>


    </div>

  )
}
