import Image from "next/image";
import Navbar from "@/components/Navbar"



export default function Home() {
  return (
    <>
    <div className="relative h-auto max-w-[2000px] overflow-hidden bg-gray-900 py-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/coding.png"
          alt="background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-start justify-center gap-8 lg:px-0 px-6 py-24 md:py-40 max-w-3xl md:max-w-5xl lg:ml-32 mx-auto my-16 md:my-o">
        {/* Typing Effect Text */}
        <p className=" text-3xl sm:text-6xl font-extrabold text-white font-kanit leading-tight ml-2">
          <span className={`text-white typing-effect flex flex-wrap`}>
            Hi, <br/>I’m Alishba Wajahat
          </span>
        </p>

        {/* Description */}
        <p className="mt-8  text-2xl sm:text-5xl font-medium text-white font-poppins leading-tight ml-4">
          A passionate web developer and an enthusiastic learner of agentic AI technologies.
        </p>

        {/* CTA or Links (Optional) */}
        <div className="mt-10 flex space-x-6 text-center">
          <a
            href="/contact"
            className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-all duration-300 text-xl sm:text-2xl"
          >
            Get in Touch
          </a>
 
        </div>
      </div>
    </div>




    
    
    
    </>

  );
}
