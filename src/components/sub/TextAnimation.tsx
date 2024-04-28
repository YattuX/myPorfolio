'use client'

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'

type Props = {
    animeText : string
}

export default function TextAnimation( {animeText} : Props) {
    const [text, setText] = useState('');
    const [isAnimating, setIsAnimating] = useState(true);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        if (text.length === 0) {
          setIsAnimating(true);
          setText(animeText);
        } else if (text.length === animeText.length) {
          setIsAnimating(false);
        } else {
          setText(text.slice(0, -1));
        }
      }, 100);
  
      return () => clearInterval(intervalId);
    }, [text]);
  
    const textChars = text.split('');
  
    return (
      <div className=" z-10 text-white text-4xl">
        {textChars.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.2 }}
            style={{ display: isAnimating ? 'inline' : 'none' }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    );
}
