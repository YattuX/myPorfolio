'use client'
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'

export default function Encryption() {
  return (
    <div className='flex flex-row relative items-center justify-center w-full mt-[-150px] h-200px md:min-h-[50vh]'>
        <div className='absolute w-auto h-auto -top-[130px] z-[5]'>
            <motion.div
                className='text-[40px] font-medium text-center text-gray-200'>
                    Performance 
                        <span className='text-transparent font-bold bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500 '>{" "} & {" "} </span>
                    Security
            </motion.div>
        </div>
        <div className='flex flex-col items-center justify-center tranlate-y-[-50px] absolute z-[20] w-auto h-auto'>
            <div className='flex flex-col items-center group cursor-pointer w-auto h-auto'>
                <Image
                    src='/LockTop.png'
                    alt='Lock top'
                    width={50}
                    height={50}
                    className=' w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11'/>
                <Image
                    src='/LockMain.png'
                    alt='Lock Main'
                    width={70}
                    height={70}
                    className='z-10'/>
            </div>


            <div className='Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042f88b] opacity-[0.9]'>
                <h1 className='Welcome-text '> Encryption</h1>
            </div>  
        </div>
        <div className='absolute z-[20] -bottom-[130px] px-[5px]'>
            <div className='cursive text-[20px] font-medium text-center text-gray-300'>
                Secure your data width end-to-end encryption
            </div>
        </div>

        <div className='w-full flex items-start justify-center absolute'>
            <video
                loop
                muted
                autoPlay
                preload='false' 
                className='w-full h-auto'
            >
                <source src="encryption.webm" type='video/webm'/>
            </video>

        </div>
    </div>
  )
}
