import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 
import logo from '../assets/logo.gif';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <a href="/" aria-label='Home'>
          <img 
            src={logo} 
            alt="Logo" 
            className="w-35 h-24 animate-fadeIn"
          />
        </a>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a 
          href="https://www.linkedin.com/in/akash-joe-kurian/" 
          target='_blank' 
          rel='noopener noreferrer' 
          aria-label='LinkedIn'
          className='transform transition-all duration-300 hover:rotate-180 hover:scale-110'
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/akash8590527730" 
          target='_blank' 
          rel='noopener noreferrer' 
          aria-label='GitHub'
          className='transform transition-all duration-300 hover:rotate-180 hover:scale-110'
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
