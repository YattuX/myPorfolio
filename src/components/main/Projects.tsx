import React from 'react'
import ProjectCard from '../sub/ProjectCard'

export default function Projects() {
  return (
    <div id='projects' className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>

        </h1>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
            <ProjectCard
                src="/alphax.PNG"
                title='Modern Next js Portfolio'
                description= "lorem ipsum tesdflsfjlsdcndfndj jets like tepro sue toakr oui ye apr la "
                demo='https://www.linkedin.com/posts/aboubacar-tidiane-yattara-5608b6232_linkedin-django-tailwind-activity-7117579562418348032-e__j?utm_source=share&utm_medium=member_desktop'
                github='https://github.com/YattuX/fx-Alpha'
            />
            <ProjectCard
                src="/rm_bg.PNG"
                title='Interactive Website Cards'
                description= "lorem ipsum tesdflsfjlsdcndfndj jets like tepro sue toakr oui ye apr la "
                demo='https://www.linkedin.com/posts/aboubacar-tidiane-yattara-5608b6232_hello-word-ci-dessous-une-id%C3%A9e-dapplication-activity-7117965221771575296-x-v2?utm_source=share&utm_medium=member_desktop'
                github='https://github.com/YattuX/removebg'
            />
             <ProjectCard
                src="/digitalise.PNG"
                title='Space Themed web site'
                description= "lorem ipsum tesdflsfjlsdcndfndj jets like tepro sue toakr oui ye apr la "
                demo='https://www.linkedin.com/posts/aboubacar-tidiane-yattara-5608b6232_activity-7118265120589258753-ALCl?utm_source=share&utm_medium=member_desktop'
                github='https://github.com/Affane99/management_rolling_stock'
            />
        </div>
    </div>
  )
}
