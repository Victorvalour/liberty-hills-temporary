"use client"

import { Button, MovingBorder } from "@/components/ui/moving-border";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Logo from "../assets/lhs-logo-png.png"
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Electrician from "../assets/electrician-img.jpg"
import HappyCartoon from "../assets/happy-cartoon-png.png"
import Container from "./components/Container";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ngst } from "@/utils/states-and-lgas";
import { useState } from "react";

export default function Home() {

  const [state, setState] = useState()
  return (
    
    
     <main className="
    ">
      <div className="hero flex min-h-screen   max-w-[1920px]
    mx-auto
   
    md:p-0">
      <div className="hidden md:block w-1/2 h-screen">
       <div className="relative bg-gradient-to-tr from-blue-950 to-slate-700 w-full h-full opacity-80 ">  <Image src={Electrician} alt="Electrician" className="w-full h-full object-cover absolute mix-blend-overlay opacity-50"/>
       </div>
      
      </div>


      <div className="flex flex-col items-center mx-auto md:w-1/2 w-full gap-6">
      <div className="flex justify-between w-full items-center px-4 py-6">
      <Image src={Logo} alt="logo" width={100} className="rounded-2xl w-[100px]" />
        <div className="flex gap-4 text-2xl text-slate-100">
        <FaSquareFacebook />
        <FaInstagramSquare />
        <FaSquareXTwitter />
        </div>
      </div>
    

<div className="flex bg-slate-900 rounded-md w-screen md:w-full items-center justify-between px-6 md:px-20 border-y-2 border-y-slate-100">
  <p className="text-4xl text-transparent text-center font-bold gradient-text animate-gradient">
      We&apos;re launching soon!!!
     </p> 
     <Image src={HappyCartoon} alt="cartoon" className="w-[100px]" />
     </div>


     <div className="max-w-[500px] flex flex-col items-center md:px-4 px-4">

     <Button duration={2000} key={1234} borderClassName="bg-orange-500  md:w-20" className="cursor-default bg-blue-950 p-3 flex-col md:w-100" containerClassName=" w-full md:max-w-[380px]">
     
 <div>
    <p className="text-slate-100">
  Are you a qualified electrician? Join our waitlist now to receive updates on our launch.
  </p>
 </div>
        <div className="flex flex-col gap-4 p-5">
                    <div>
                    <Input type="text" placeholder="Name" className="bg-slate-100 text-slate-900"/>
                    </div>
                    <div>
                    <Input type="email" placeholder="Email" className="bg-slate-100 text-slate-900"/>
                    </div>
                    <Select>
      <SelectTrigger className="w-[280px] text-slate-900">
        <SelectValue placeholder="Select your state" />
      </SelectTrigger>
      <SelectContent>
       
        <SelectGroup>
          <SelectLabel>State</SelectLabel>
          {ngst.map((state) => {
      return   <div key={state.ID}>
  <SelectItem value={state.ID}>{state.Name}</SelectItem>
  </div>
        })}
          <SelectItem value="art">Argentina Time (ART)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
                    <div>
                    <Button borderRadius="5px" containerClassName="w-full h-[40px] active:w-[95%] hover:bg-[#fcba03]" className="focus:w-[90%]">Submit</Button>
                    </div>
        </div>

     </Button>
     </div>
     </div>
     </div>

     <section className="body">

     </section>
      </main>

     
  );
}
