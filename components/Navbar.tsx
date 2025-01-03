import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function navBar() {
  return (
    <>
      <div className='max-w-[2000px] h-[60px] bg-[#7d738c] flex sm:justify-center justify-end items-center'>
        <div className='w-[600px] sm:block hidden h-[60px] text-white text-2xl text-bold font-poppin'>
          <ul className='flex w-full gap-32 justify-center h-full items-center'>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className='sm:hidden mr-6'><Sheet>
          <SheetTrigger><GiHamburgerMenu className='text-4xl text-white' /></SheetTrigger>
          <SheetContent className='h-3/4 bg-[#7d738c] text-white p-12 w-64'>
            <ul>
              <li className='mt-4'><a href="/">Home</a></li>
              <li className='mt-4'><a href="/about">About</a></li>
              <li className='mt-4'><a href="/contact">Contact</a></li>
            </ul>


          </SheetContent>

        </Sheet></div>
      </div>

    </>

  )
}
