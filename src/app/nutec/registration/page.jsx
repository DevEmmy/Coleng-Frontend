"use client"
import Footer from '@/atomic_components/Footer'
import Nav from '@/atomic_components/Nav'
import { nutecRegister } from '@/utils/requests';
import React, { useState } from 'react';
require("dotenv").config()

const page = () => {
    
      const [name, setName] = useState();
      const [email, setEmail] = useState();
      const [whatsApp, setNumber] = useState();
      const [matricNumber, setMatricNumber] = useState();
      const [department, setDepartment] = useState()
      const [college, setCollege] = useState()
      // const [level, setLevel] = useState("100L");
      const [techStack, setTechStack] = useState()

      const handleEmailChange = (e)=>{
        setEmail(e.target.value)
      }

      const handleNameChange = (e)=>{
        setName(e.target.value)
      }

      const handleTS = (e)=>{
        setTechStack(e.target.value)
      }

      const handleCollege = (e)=>{
        setCollege(e.target.value)
      }

      const handleNumber = (e)=>{
        setNumber(e.target.value)
      }

      const handleMChange = (e)=>{
        setMatricNumber(e.target.value)
      }

      const handleDepartmentChange = (e)=>{
        setDepartment(e.target.value)
      }

      // const handleLevelChange = (e)=>{
      //   let price1 = ((e.target.value === "100L") || (e.target.value === "200L DE")) ? "4000" : "3000";
      //   console.log(price1)
      //   setPrice(price1)
      //   setLevel(e.target.value)
      // }

      
      const submit = ()=>{
        let data = {email, name, matricNumber, department, college, techStack, whatsApp}
        nutecRegister(data)
      }
  
  return (
    <div>
        <Nav />

        <div className='px-xPadding my-[60px] flex flex-col items-center justify-center'>
            {/* <p className='uppercase text-center md:text-[14px]'>NUTEC&apos;s Registration</p> */}
            <p className='text-[60px] text-center leading-[68px] w-2/3 m-auto font-[700] md:text-[30px] md:w-full md:leading-[40px]'>NUTEC&apos;s Registration</p>

            <form action="" className='grid grid-cols-2 md:grid-cols-none gap-[20px] mt-10 w-full'>
                <input type="text" placeholder='full name' onChange={handleNameChange} value={name} required/>
                <input type="email" placeholder='email' onChange={handleEmailChange} value={email} required/>
                <input type="text" placeholder='Tech Track e.g Web Development' onChange={handleTS} value={techStack} required/>
                <input type="number" placeholder='matric number' onChange={handleMChange} value={matricNumber} required/>
                <input type="tel" placeholder='whatsapp number' onChange={handleNumber} value={whatsApp} />
                <select name="" id="" placeholder="Select Department" onChange={handleDepartmentChange} value={department} required>
                    <option value="Agricultural & Bio-resources Engineering">Agricultural & Bio-resources Engineering</option>
                    <option value="Civil Engineering">Civil Engineering</option>
                    <option value="Electrical Engineering">Electrical Engineering</option>
                    <option value="Mechatronics Engineering">Mechatronics Engineering</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                    <option value="Other">Other</option>
                </select>

                <select name="" id="" placeholder="Select Department" onChange={handleCollege} value={college} required>
                    <option value="COLENG">COLENG</option>
                    <option value="Other">Other</option>
                </select>

                {/* <select name="" id="" placeholder="Select Level" onChange={handleLevelChange} value={level} required>
                    <option value="100L">100L</option>
                    <option value="200L">200L</option>
                    <option value="200L DE">200L DE</option>
                    <option value="300L">300L</option>
                    <option value="400L">400L</option>
                    <option value="500L">500L</option>
                </select> */}

               
            </form>
            <button className='border-primary1 border-2 py-3 px-16 md:w-full rounded-md text-primary1 my-5 hover:bg-primary1 hover:text-white transition-all' onClick={submit}>
                Register
            </button>

            
        </div>

        <Footer />
    </div>
  )
}

export default page