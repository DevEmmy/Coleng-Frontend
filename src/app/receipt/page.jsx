import Link from 'next/link'
import React from 'react'
import { RiArrowRightFill } from 'react-icons/ri'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[10px] justify-self-center md:gap-[32px] my-[30vh] md:my-[30vh] md:px-xPadding'>
        <p className='text-[40px] md:text-[24px] md:text-center'>Oops! There's nothing here.</p>

        <Link href={"/"}>
            <button className='flex gap-2 items-center justify-center w-fit border-2 md:text-[14px] border-black p-5'>
                GO BACK TO HOME PAGE <RiArrowRightFill />
            </button>
        </Link>
        
    </div>
  )
}

export default page