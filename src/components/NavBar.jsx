import React from 'react'
import logo from '/Users/user/Documents/React-portfolio/src/assets/ce9150df-7633-473b-b4f9-27ad1bbe067b.png'

import {FaLinkedin} from "react-icons/fa"
import {FaGit} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import {FaInstagram} from "react-icons/fa"

const NavBar = () => {
  return (
    <div>
      <nav className=' mb- flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 h-18' src={logo}></img>
        </div>
        <div className='flex m-8 items-center gap-4 justify-center text-3xl '>
        <FaLinkedin color='white'/>
        <FaGit color='white'/>
        <FaInstagram color='white'/>
        <FaSquareXTwitter color='white'/>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
