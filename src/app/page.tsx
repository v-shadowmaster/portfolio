import { IBM_Plex_Mono } from "next/font/google";
import Image from "next/image";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 pb-20 sm:pb-20 ${ibmPlexMono.className}`}>
      <div className="mb-8 sm:mb-12 w-full flex justify-center">
         <div className="w-60 h-60 sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] relative">
           <Image src="/image.svg" alt="Construction" fill className="object-contain" />
         </div>
     </div>
      <span className="text-center text-lg sm:text-2xl md:text-4xl mt-4 sm:mt-8 text-blue-500">
        This site will be under construction for 5 days, Please come back later!      
      </span>

      
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 mt-8 sm:mt-10 w-full justify-center">
        <div className="mt-5 sm:mt-0 text-base sm:text-lg font-semibold">Quick links : </div>
        <div className="relative group flex items-center">
          <Image src="/google.svg" alt="Gmail" width={40} height={40} className="cursor-pointer w-8 h-8 sm:w-12 sm:h-12" />
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 sm:mt-5 w-max px-3 py-1 rounded bg-gray-800 text-white text-xs sm:text-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 shadow-lg">
            vinaykumar.09032002@gmail.com
          </div>
        </div>
        <div className="relative group flex items-center">
          <a href="https://www.linkedin.com/in/vinay-kumar-l/">
            <Image src="/link.svg" alt="LinkedIn" width={40} height={40} className="cursor-pointer w-8 h-8 sm:w-12 sm:h-12" />
          </a>
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 sm:mt-5 w-max px-3 py-1 rounded bg-gray-800 text-white text-xs sm:text-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 shadow-lg">
            linkedin.com/vinay-kumar-l
          </div>
          
        </div>
         <div className="relative group flex items-center">
          <a href="https://www.github.com/v-shadowmaster/">
            <Image src="/github.svg" alt="Github" width={50} height={50} className="cursor-pointer w-10 h-10 sm:w-[70px] sm:h-[70px]" />
          </a>
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 sm:mt-5 w-max px-3 py-1 rounded bg-gray-800 text-white text-xs sm:text-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 shadow-lg">
            v-shadowmaster
          </div>
          
        </div>
      </div>
    </div>
  );
}
