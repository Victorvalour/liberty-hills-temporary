import { Button, MovingBorder } from "@/components/ui/moving-border";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Logo from "../assets/liberty-logo-black.png"
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:px-32 ">
     
     <Image src={Logo} alt="logo" width={100} className="rounded-2xl " />
     <div className="w-full flex flex-col items-center">

     <Button duration={2000} key={1234} borderClassName="bg-orange-500 w-[200px] md:w-20" className="cursor-default bg-cyan-900 p-3 flex-col md:w-100" containerClassName="md:w-[400px] w-full">
     
 <div>
 <p className="text-4xl text-transparent font-bold gradient-text animate-gradient">
      Join our waitlist
     </p>
  
 </div>
        <div className="flex flex-col gap-4 p-5">
                    <div>
                    <Input type="text" placeholder="Name" />
                    </div>
                    <div>
                    <Input type="email" placeholder="Email" />
                    </div>
                    <div>
                    <Button borderRadius="5px" containerClassName="w-full h-[40px] active:w-[95%] hover:bg-[#fcba03]" className="focus:w-[90%]">Submit</Button>
                    </div>
        </div>

     </Button>
     </div>
      </main>
  );
}
