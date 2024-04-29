'use client'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import React from 'react'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '../../../utils/motion'

export default function SkillText() {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
  
        <motion.div
            variants={slideInFromLeft(0.5)}
            className=' text-[35px] md:text-[40px] text-white font-medium mt-[10px] text-center mb-[15px]'
        >
            Check my complete Stack ({'>'} -)
        </motion.div>
       
    </div>
  )
}
