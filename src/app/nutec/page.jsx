import Footer from '@/atomic_components/Footer'
import Nav from '@/atomic_components/Nav'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <Nav />
      <div className='h-[60vh] flex flex-col items-center justify-center text-center'>
        <p>This Page is Under Construction</p>
        <Link href={"/nutec/registration"} >
          <button className='border-primary1 border-2 py-3 px-16 md:w-full rounded-md text-primary1 my-5 hover:bg-primary1 hover:text-white transition-all'>
            Proceed to Registration
          </button>
        </Link>
      </div>
      <Footer />
    </>
  )
}

export default page