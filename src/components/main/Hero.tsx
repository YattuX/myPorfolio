import React from 'react'
import HeroContent from '../sub/HeroContent'
import TextAnimation from '../sub/TextAnimation'

export default function Hero() {
  return (
    // <div className='relative flex flex-col h-full w-full'>
    //     <h2 className='text-purple-200 text-3xl absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10'>
         
    //       <TextAnimation animeText='Welcome to my Dev Universe'/>
    //     </h2>
    //     {/* <video
    //         autoPlay
    //         muted
    //         loop
    //         className='rotate-180 absolute top-[-240px] left-0 z-[1] w-full h-full object-cover'
    //     >
    //         <source src='blackhole.webm' type='video/webm'/>
    //     </video> */}
    //     <HeroContent/>
    // </div>
    <HeroContent/>
  )
}
