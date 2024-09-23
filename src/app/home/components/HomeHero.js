'use client';
import React from 'react';
import { motion } from 'framer-motion';
import PoliceTapeEffect from './policeTape';

const letterVariants = {
  initial: { x: 0 },
  whileHover: { x: 16 },
};

const HomeHero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <motion.div
        initial="initial"
        whileHover="whileHover"
        className="relative flex flex-col items-center py-4 transition-colors duration-500 md:py-8 leading-[1px]"
      >
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 font-bold text-black transition-colors duration-500 group-hover:text-black"
        >
          {"THE".split("").map((letter, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              transition={{ type: "spring" }}
              className="inline-block text-4xl lg:text-9xl md:text-7xl font-Montserrat font-semibold"
            >
              {letter}
            </motion.span>
          ))}
          <span className="hidden sm:inline-block">&nbsp;&nbsp;&nbsp;</span>
          <span className="inline-block sm:hidden">&nbsp;&nbsp;</span> 
          {"COMMUNITY".split("").map((letter, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              transition={{ type: "spring" }}
              className="inline-block text-4xl lg:text-9xl md:text-7xl font-Montserrat font-semibold"
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
         <br />
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 font-bold text-black transition-colors duration-500 group-hover:text-black"
        >
          {"THE".split("").map((letter, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              transition={{ type: "spring" }}
              className="inline-block text-4xl lg:text-9xl md:text-7xl font-Bruno"
            >
              {letter}
            </motion.span>
          ))}
          <span className="hidden sm:inline-block">&nbsp;&nbsp;&nbsp;</span>
          <span className="inline-block sm:hidden">&nbsp;&nbsp;</span> 
          {"ACE".split("").map((letter, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              transition={{ type: "spring" }}
              className="inline-block text-4xl lg:text-9xl md:text-7xl font-Bruno text-[#4440ba]"
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      </motion.div>
      <div>
        <PoliceTapeEffect />
      </div>
    </div>
  );
};

export default HomeHero;
