import React from 'react'
import ProjectCard from '../sub/ProjectCard'

export default function Projects() {
  return (
    <div id='projects' className='flex flex-col  items-center justify py-20 mt-10 mx-4'>
        <h1 className='text-[30px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
            ~ My Personal Projects ~
        </h1>
    
        <div className='h-full w-full flex justify-center flex-wrap md:flex-row gap-10 px-5 mt-[-40px]'>
        
            <ProjectCard
                src="/alphax.PNG"
                title='AlphaX'
                description= "This website allows users with valid accounts to share video courses. It is built with Django and Tailwind."
                demo='https://www.linkedin.com/posts/aboubacar-tidiane-yattara-5608b6232_linkedin-django-tailwind-activity-7117579562418348032-e__j?utm_source=share&utm_medium=member_desktop'
                github='https://github.com/YattuX/fx-Alpha'
            />
            <ProjectCard
                src="/rm_bg.PNG"
                title='Remove Background Image'
                description= "This project allows you to remove the background from multiple images at once. It is built with Django and Tailwind."
                demo='https://www.linkedin.com/posts/aboubacar-tidiane-yattara-5608b6232_hello-word-ci-dessous-une-id%C3%A9e-dapplication-activity-7117965221771575296-x-v2?utm_source=share&utm_medium=member_desktop'
                github='https://github.com/YattuX/removebg'
            />
             <ProjectCard
                src="/digitalise.PNG"
                title='Digitalize'
                description= "This project displays the sales and rental statistics of a fleet of vehicles. It is built with Django, Bootstrap, and JavaScript."
                demo='https://www.linkedin.com/posts/aboubacar-tidiane-yattara-5608b6232_activity-7118265120589258753-ALCl?utm_source=share&utm_medium=member_desktop'
                github='https://github.com/Affane99/management_rolling_stock'
            />
            <ProjectCard
                src="/portfolio.PNG"
                title='My Portfolio'
                description= "This project is my portfolio. It is entirely made with Next.js, Framer Motion, and Tailwind."
                demo='https://yattara.dev/'
                github='https://github.com/YattuX/myPorfolio'
            />
            <ProjectCard
                src="/carties.PNG"
                title='Rental Car'
                description= "This website allows users to book cars. It is built using a microservice architecture with Next.js and ASP.NET."
                demo='#'
                github='https://github.com/YattuX/car-rental-micorservices-nextJs'
            />
        </div>
    </div>
  )
}
