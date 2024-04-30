import Image from 'next/image'
import React from 'react'

type Props = {
    src: string,
    title: string,
    description: string,
    demo: string,
    github: string
}

export default function ProjectCard({src, title, description, demo, github} : Props) {
  return (
    <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] pb-5 min-w-[400px] max-w-[400px]'>
        <Image
            src={src}
            alt='title'
            width={1000}
            height={1000}
            className='w-full object-contain'
        />

        <div className='relative p-4'>
            <h1 className='text-2xl font-semibold text-white'>{title}</h1>
            <p className='mt-2 text-gray-300'>{description}</p>
        </div>
          <div className='flex justify-between p-4 '>
            <a target="_blank" href={demo === "#" ? demo : "In Progress..."}  className='cursor-pointer absolute bottom-2 left-2 rounded-lg  px-4 text-cs bg-cyan-400  z-20'>Demo</a>
            <a target="_blank" href={github} className=' cursor-pointer absolute bottom-2 right-2 rounded-lg  px-4 text-cs bg-cyan-400 z-20'>Github</a>
          </div>
    </div>
  )
}
