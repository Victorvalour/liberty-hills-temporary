"use client"

import toast, { Toaster } from 'react-hot-toast';
import { MovingButton, MovingBorder } from "@/components/ui/moving-border";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils";
import Image from "next/image";
import Logo from "../assets/lhs-logo-png.png"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Electrician from "../assets/electrician-img.jpg"
import HappyCartoon from "../assets/happy-cartoon-png.png"
import Container from "./components/Container";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ngst, statesWithLgas } from "@/utils/states-and-lgas";
import { useState } from "react";

import { db } from "./firebaseConfig";
import {collection, addDoc, serverTimestamp} from 'firebase/firestore'


 const states = ngst.map(a => a.Name);
 const stlg = statesWithLgas.map(a => a.lgas);


/*const stringLiterals = states.map(state => z.literal(state)) */

/* const stateSchema = z.enum(ngst.map(state => state.ID).filter(id => id !== "0"), {
  errorMap: () => ({ message: "Please select a valid state" }),
}); */

interface EngineerInfo {
  fullname: string;
  email: string
  phone: string
  state: string
  lga: string

}



const formSchema = z.object({
  fullname: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
   message: "Please enter a valid email",
  }),
  phone: z.string().min(2, {
    message: "Phone must be at least 10 characters.",
   }),
  state:  z.string().min(1, {
    message: "Please select a state!",
   }),
  lga: z.string().min(2, {
    message: "Please select a local government area!",
   })
  
})

async function addDataToFirestore(values: EngineerInfo) {
  try {
    const docRef = await addDoc(collection(db, "engineers"), {
      ...values,
      timestamp: serverTimestamp()
  })
    console.log("Document created with  ID", docRef.id);
    return true
  } catch (error) {
    console.error("Error adding  document ", error)
    toast.error('Oops, something went wrong!')
    return false
  }
}


export default function Home() {


  const [isSuccessful, setIsSuccessful] = useState(false)

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        fullname: "",
        email: "",
        phone: "",
        state: "",
        lga: ""
 
      },
    })

const state = form.watch("state")
const getLGAs = (stateID: string) => {

  const state = states.find((state) => state.toLowerCase() === stateID.toLowerCase());
const lgas = statesWithLgas.find((selState) => selState.name.toLowerCase() === state?.toLowerCase())
return lgas?.lgas
}

const lgas: string[] | undefined = getLGAs(state)


   async function onSubmit(values: z.infer<typeof formSchema>) {
     const added = await addDataToFirestore(values)
     if (added) {
      form.reset()
      setIsSuccessful(true)
     }
   
     
      console.log(values)
      toast.success('Successful 🤩')
      
    }

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
    

<div className="flex bg-slate-900 rounded-md w-full md:w-full items-center justify-between px-6 md:px-20 border-y-2 border-y-slate-100">
  <p className="text-4xl text-transparent text-center font-bold gradient-text animate-gradient">
      We&apos;re launching soon!!!
     </p> 
     <Image src={HappyCartoon} alt="cartoon" className="w-[100px]" />
     </div>


     <div className="max-w-[500px] flex flex-col items-center md:px-4 px-4">

     <MovingButton as="div"  duration={2000} key={1234} borderClassName="bg-orange-500  md:w-20" className="cursor-default bg-blue-950 p-3 flex-col md:w-100" containerClassName=" w-full md:max-w-[380px]">
     
 <div>
    <p className="text-slate-100 text-center">
  Are you a qualified electrician? Join our waitlist now to receive updates on our launch.
  </p>
 </div>

 <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 p-5">
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                    <Input type="text" placeholder="Enter your Full Name" className="bg-slate-100 text-slate-900" {...field}/>
                    </FormControl>
                    </FormItem>
                    )}
/>  


<FormField
          control={form.control}
          name="email"
          render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                    <Input type="email" placeholder="Enter your Email Address" className="bg-slate-100 text-slate-900" {...field}/>
                    </FormControl>
                    </FormItem>
                    )}
                    />
                    <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                    <Input type="text" placeholder="Enter your Phone Number" className="bg-slate-100 text-slate-900" {...field}/>
                    </FormControl>
                    </FormItem>
                    )}
                    />
<FormField
          control={form.control}
          name="state"
          render={({ field }) => (
                    <FormItem>
                      <FormLabel>State</FormLabel>
                      <Select onValueChange={field.onChange}>
                      <FormControl>
                    
      <SelectTrigger className="w-[280px] text-slate-900">
        <SelectValue placeholder="Select your state" />
      </SelectTrigger>
      </FormControl>
      <SelectContent>
       
        <SelectGroup>
          
          {ngst.map((state) => {
      return   <div key={state.ID}>
  <SelectItem value={state.ID}>{state.Name}</SelectItem>
  </div>
        })}
          
        </SelectGroup>
      </SelectContent>
    
                   
                    </Select>
                    </FormItem>
                    )}
                    />
{ state &&
<FormField
          control={form.control}
          name="lga"
          render={({ field }) => (
                    <FormItem>
                      <FormLabel>Local Government Area</FormLabel>
                      <Select onValueChange={field.onChange}>
                      <FormControl>
                    
      <SelectTrigger className="w-[280px] text-slate-900">
        <SelectValue placeholder="Select your state" />
      </SelectTrigger>
      </FormControl>
      <SelectContent>
       
        <SelectGroup>
          
          {lgas && lgas.map((lga) => {
      return   <div key={lga}>
  <SelectItem value={lga}>{lga}</SelectItem>
  </div>
        })}
          
        </SelectGroup>
      </SelectContent>
    
                   
                    </Select>
                    </FormItem>
                    )}
                    />
                  }


                    <div>
                    <MovingButton as="button" type="submit" borderRadius="5px" containerClassName="w-full h-[40px] active:w-[95%] hover:bg-[#fcba03]" className="focus:w-[90%]">Submit</MovingButton>
                    </div>
                  
        </form>
        </Form>

     </MovingButton>
     </div>
     </div>
     </div>

     <Toaster />
      </main>

     
  );
}
