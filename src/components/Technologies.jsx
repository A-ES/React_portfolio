import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'      
import { FaNodeJs } from 'react-icons/fa'; // Use Node.js icon for Express

import { DiPostgresql } from 'react-icons/di';
import { DiCss3Full } from 'react-icons/di';
import { FaGithub } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';






const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className="text-7xl text-green-500" />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiPostgresql className="text-7xl text-blue-500" />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiCss3Full className="text-7xl text-blue-600" />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaGithub className="text-7xl text-gray-600" />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiMongodb className="text-7xl text-green-600" />
            </div>
        </div>
      
    </div>
  )
}

export default Technologies;
