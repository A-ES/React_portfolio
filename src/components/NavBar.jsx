import React from 'react';
import logo from '../assets/ce9150df-7633-473b-b4f9-27ad1bbe067b.png';

import { FaLinkedin } from 'react-icons/fa';
import { FaGit } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

const NavBar = () => {
  return (
    <div>
      <nav className="mb-6 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <img className="mx-2 h-18" src={logo} alt="Logo" />
        </div>
        <div className="flex m-8 items-center gap-4 justify-center text-3xl">
          <a href="https://www.linkedin.com/in/mohammed-abrar-ba0222304/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin color="white" />
          </a>
          <a href="https://github.com/A-ES" target="_blank" rel="noopener noreferrer">
            <FaGit color="white" />
          </a>
          <a href="https://www.instagram.com/abraaawr/" target="_blank" rel="noopener noreferrer">
            <FaInstagram color="white" />
          </a>
          <a href="https://x.com/Hades_9342" target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter color="white" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
