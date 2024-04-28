import React from 'react'
import { FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaSquareGithub } from 'react-icons/fa6'

export default function Footer() {
  return (
    <div className='w-full h-full  text-gray-200 shadow-lg p-[15px] bg-[#03001417] backdrop-blur-md'>
        <div className='w-full flex flex-col items-center justify-center m-auto'>
            <div className='w-full h-full flex flex-row items-center justify-around flex-wrap'>
                <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
         
                    <a target='_blank' href='https://github.com/YattuX/' className='flex flex-row items-center my-[15px] cursor-pointer z-50'>
                        <FaSquareGithub />
                        <span className='text-[15px] ml-[6px]'>Github</span>
                    </a>
           
                </div>

                <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                    <a  target='_blank' href='https://www.linkedin.com/in/aboubacar-tidiane-yattara-5608b6232/' className='flex flex-row items-center my-[15px] cursor-pointer z-50'>
                        <FaLinkedin />
                        <span className='text-[15px] ml-[6px]'>Linkedin</span>
                    </a>
                </div>

                <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                        
                        <span className='text-[15px] ml-[6px]'>fabid.net@gmail.com</span>
                    </p>
                </div>

                <div className=' my-[15px] text-[15px] text-center'>
                    &copy; YattuX Dev. All rights reserved 
                </div>
            </div>
        </div>
    </div>
  )
}
