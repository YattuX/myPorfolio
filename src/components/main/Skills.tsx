import { Backend_skill, Frontend_skill, Full_stack, Other_skill, Skill_data } from '@/constants'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'

export default function Skills() {
  return (
    <section id='skills' className='flex flex-col items-center justify-center gap-5 h-full relative overflow-hidden pb-80 py-15'
    style={{transform: "scale(0.9)"}}>
        <SkillText/>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
                {Skill_data.map((image, index) => (
                    <SkillDataProvider
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
        </div>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
                {Backend_skill.map((image, index) => (
                    <SkillDataProvider
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
        </div>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
                {Full_stack.map((image, index) => (
                    <SkillDataProvider
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
        </div>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
                {Other_skill.map((image, index) => (
                    <SkillDataProvider
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
        </div>
        <div className='w-full h-full absolute'>
                <div className='w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover'>
                    <video
                        className='w-full h-auto'
                        preload='flase'
                        playsInline
                        loop
                        autoPlay
                        src='cards-video.webm'
                    />

                </div>
        </div>
    </section>
  )
}
