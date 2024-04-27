import React from 'react'
import ProjectCard from '../sub/ProjectCard'

export default function Projects() {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>

        </h1>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
            <ProjectCard
                src="/NextWebSite.png"
                title='Modern Next js Portfolio'
                description= "lorem ipsum tesdflsfjlsdcndfndj jets like tepro sue toakr oui ye apr la "
            />
            <ProjectCard
                src="/CardImage.png"
                title='Interactive Website Cards'
                description= "lorem ipsum tesdflsfjlsdcndfndj jets like tepro sue toakr oui ye apr la "
            />
             <ProjectCard
                src="/SpaceWebsite.png"
                title='Space Themed web site'
                description= "lorem ipsum tesdflsfjlsdcndfndj jets like tepro sue toakr oui ye apr la "
            />
        </div>
    </div>
  )
}
