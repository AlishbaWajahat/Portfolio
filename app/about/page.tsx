import React from 'react';
import Image from "next/image";

export default function page() {
    return (
        <>
            <div className=' flex max-w-[2000px] sm:p-8 p-4 sm:mt-8 flex-col '>
                <div className='flex justify-center lg:flex-nowrap gap-4 flex-wrap-reverse '>
                    <div className=' w-[700px]  text-2xl font-poppin items-center justify-center flex flex-col gap-8'>
                        <h1 className='text-5xl font-extrabold text-[#140033]'>ABOUT ME</h1>
                        <p className='text-center'>As a passionate web developer, I specialize in creating user-centric, scalable, and efficient digital solutions that bridge technology and human experience. My expertise spans modern front-end and back-end frameworks, enabling me to design seamless, intuitive interfaces and robust architectures. Driven by curiosity and innovation, I am expanding my horizon into the transformative world of AI, aspiring to become an agentic AI engineer. My goal is to harness the potential of artificial intelligence to build intelligent systems that not only solve complex problems but also enhance human life, empowering a smarter, more connected future.</p>
                    </div>
                    <div className='sm:w-[600px] sm:h-[600px] w-[400px] h-[400px] rounded-full relative'>
                        <Image src={"/bnda2.jpg"} alt='developer' fill className=' rounded-full' />
                    </div>
                </div>


                {/* making skills tree */}
                <div className='font-poppin flex flex-col lg:items-start items-center lg:pl-64  mt-8 mb-32'>
                    <h1 className='text-5xl font-extrabold text-[#140033]'>SKILLS</h1>
                <div className="circle sm:w-80 sm:h-80 w-[250px] h-[250px] rounded-full bg-gray-200 relative lg:ml-32 flex items-center justify-center font-poppin font-bold sm:text-lg text-md animate-spin mt-32 ">
                    <div className=" sm:w-28 sm:h-28 w-[80px] h-[80px] bg-blue-500 text-white rounded-full flex items-center justify-center absolute sm:[transform:rotate(0deg)_translate(12rem)_rotate(0deg)] [transform:rotate(0deg)_translate(7rem)_rotate(0deg)]">HTML</div>
                    <div className=" sm:w-28 sm:h-28 w-[80px] h-[80px] bg-green-500 text-white rounded-full flex items-center justify-center absolute sm:[transform:rotate(72deg)_translate(12rem)_rotate(-72deg)] [transform:rotate(72deg)_translate(8rem)_rotate(-72deg)]">CSS</div>
                    <div className=" sm:w-28 sm:h-28 w-[80px] h-[80px] bg-red-500 text-white rounded-full flex items-center justify-center absolute sm:[transform:rotate(144deg)_translate(12rem)_rotate(-144deg)] [transform:rotate(144deg)_translate(7rem)_rotate(-144deg)] text-center">Tailwind CSS</div>
                    <div className=" sm:w-28 sm:h-28 w-[80px] h-[80px] bg-yellow-500 text-white rounded-full flex items-center justify-center absolute  sm:[transform:rotate(216deg)_translate(12rem)_rotate(-216deg)] [transform:rotate(216deg)_translate(8rem)_rotate(-216deg)]">Typescript</div>
                    <div className=" sm:w-28 sm:h-28 w-[80px] h-[80px] bg-purple-500 text-white rounded-full flex items-center justify-center absolute sm:[transform:rotate(288deg)_translate(12rem)_rotate(-288deg)] [transform:rotate(288deg)_translate(8rem)_rotate(-288deg)]">Next.js</div>
                </div>
                </div>

                



            </div>

        </>

    )
}
