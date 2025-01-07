import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';  // Import motion from framer-motion
import profilePic from '../assets/myProfile.jpg';
import { HERO_CONTENT } from '../constants';
import resume from '../assets/akash.pdf';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Update the scroll position
    };

    window.addEventListener('scroll', handleScroll); // Add scroll event listener
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup on component unmount
  }, []);

  return (
    <div className="pb-8 lg:mb-36 text-stone-300">
      <div className="flex flex-wrap lg:flex-row-reverse items-center">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilePic}
              alt="Akash Joe Kurian"
              className="w-48 h-48 lg:w-72 lg:h-72 border-4 border-stone-900 rounded-full shadow-lg"
              initial={{ opacity: 0, scale: 0.5 }}  // Initial state
              animate={{ opacity: 1, scale: 1 }}  // Final state
              transition={{ duration: 1 }}  // Transition duration
              whileHover={{ scale: 1.05 }}  // Hover effect for scale
              style={{
                opacity: scrollY > 100 ? 1 : 0, // Fade-in effect on scroll
                transform: `scale(${1 + scrollY / 1000})`, // Scale-up on scroll
                transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
              }}
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mt-10 lg:mt-0 space-y-6 text-center lg:text-left">
            {/* Title with fade-in and slide effect */}
            <motion.h2
              className="pb-2 text-4xl lg:text-6xl font-bold tracking-tighter text-white"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Akash Joe Kurian
            </motion.h2>
            
            {/* Subtitle with fade-in and slide effect */}
            <motion.span
              className="text-lg lg:text-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              MEARN STACK DEVELOPER
            </motion.span>
            
            {/* Description with fade-in and slide effect */}
            <motion.p
              className="max-w-md text-sm lg:text-base leading-relaxed text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              {HERO_CONTENT}
            </motion.p>

            {/* Download Resume button with fade-in and hover effect */}
            <motion.a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="relative px-6 py-3 bg-gradient-to-r from-white to-gray-300 text-black font-semibold rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              <span className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-white to-gray-300 opacity-70 animate-stars"></span>
              <span className="relative z-10">Download Resume</span>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
