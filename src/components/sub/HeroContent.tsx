'use client'

import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '../../../utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export default function HeroContent() {
  return (
    <motion.div
    id='about-me'
    initial="hidden"
    animate="visible"
    className='flex flex-row items-center justify-center px-20 mt-[100px] w-full z-[20]'>
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
            <motion.div
            variants={slideInFromTop} 
            className='Welcome-box py-2 px-[15px] border border-[#7042f88b] opacity-[0.9]'>
                <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
                <h1 className='Welcome-text '>Fullstack Developper Portfolio</h1>
            </motion.div>

            <motion.div
                variants={slideInFromLeft(0.5)}
                className='flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-aution'>
                    <span>
                        Providing 
                        <span className='text-transparent font-bold bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500 '> {" "} the best {" "} </span>
                        project experience
                    </span>
            </motion.div>

            <motion.div
                variants={slideInFromLeft(0.5)}
                className="text-lg text-gray-400 my-5 max-w-[600px]">
                    I&apos;m a Full-Stack Software Engineer with experience in web, mobile, and software development. I'm passionate about building innovative and user-friendly applications.  Explore my projects and skills to learn more about my expertise.
            </motion.div>
            <motion.a
            href='/cv/CV_Yattara_Aboubacar.pdf'
            variants={slideInFromLeft(1)}
            className='py-3 px-8 button-primary text-center text-white cursor-pointer rounded-lg max-w-[300px]'
            >
                Download my resume
            </motion.a>
        </div>
        <motion.div
        variants={slideInFromRight(0.8)}
        className='w-full h-full flex justify-center items-center'>
            <Image
                src="/mainIconsdark.svg"
                alt="work icons"
                height={650}
                width={650}
            />
        </motion.div>
    </motion.div>
  )
}
