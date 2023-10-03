"use client"
import React from 'react'
import { motion } from "framer-motion"
import CountUp from 'react-countup'


const Banner = () => {
    const achievements = [
        {
            value: 5,
            title: "Departments",
            color: "#EA843A"
        },
        {
            value: 2000,
            title: "Graduates",
            color: "#00BC99"
        },
        {
            value: 50,
            title: "Awards",
            color: "#918DFF"
        }
    ]
  return (
    <motion.div
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2,type: "spring", stiffness: "100", delay: 0 }}

    className='flex gap-10 px-xPadding items-center my-auto sm:flex-col sm:p-sPadding h-[100vh]'>
        
        <div className='w-3/5 sm:w-[100%] flex flex-col gap-3'>
            <p className='font-[500] text-primary1 uppercase'>
                Learn. Innovate. Build.
            </p>
            <h2 className='text-[3em] font-[1000] w-[80%] sm:w-[100%] leading-none'>
                NUESA FUNAAB CHAPTER.
            </h2>
            <p className='text-[1em] text-gray-500 py-2 w-[60%] sm:w-full'>
            Welcome to NUESA FUNAAB Chapter, where innovation and excellence converge. Explore the future of engineering with us.
            </p>

            <button className='bg-primary1  text-white rounded-md py-4 px-6 text-[0.8em] font-[700] w-fit'>
                Know More
            </button>

            <div className="grid grid-cols-3 pt-10 w-2/3 sm:w-[100%]">
                {
                    achievements.map((item, i)=>{
                        return(
                            <div key={i} className={`flex flex-col items-center justify-center leading-none text-[${item.color}]`} style={{color: item.color }}>
                                <h2 style={{color: item.color }} className='font-[700] text-[2em] py-0 my-0'>
                                    <CountUp 
                                        end={item.value}
                                        duration={5}
                                    />
                                </h2>
                                <p style={{color: item.color }}  className='text-[0.8em] py-1 my-0 font-[700]'>{item.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>

        <img src="./engineer.png" alt="engineer" className='w-2/5 sm:w-[100%]'/>
    </motion.div>
  )
}

export default Banner