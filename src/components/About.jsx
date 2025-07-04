import React from 'react'
import aboutImg from "../assets/about.jpg"
import {ABOUT_TEXT } from '../constants'
const About = () => {
  return (
    <div className=''>
        <h1 className='my-20 text-center text-4xl'>About Me</h1>
        <div className='flex flex-wrap'>
            <div className=' flex w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <img className='rounded-2xl' src={aboutImg}></img>

                </div>
                
            </div>
            <div className='w-full lg:w-1/2'>
                    <div className='flex justify center lg:justify-start'>
                        <p className='my-2 maxw-xl py-6'>{ABOUT_TEXT}</p>
                    </div>
                </div>
         </div>
      
    </div>
  )
}

export default About
