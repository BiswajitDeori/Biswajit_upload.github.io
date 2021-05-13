import React from 'react'
import Tittle from './Tittle';
import Image from './Image';
import Skill from './Skill';
import ServiceSection from './ServiceSection';
import img1 from './hack1.png';
export default function About() {
    return (
        <div className="About">
            <Tittle title={'About Page'} span={'About me'} />
         <Image/>
         <br></br>
         <br></br>
         <Tittle title={"MY SKILL"} span={"SKILL"}/>
         
         <div className="Skill-container">
         <Skill sill={'javascript'} progress={'78%'} />
         <Skill sill={'react js'} progress={'75%'} />
         <Skill sill={'Node js'} progress={'80%'} />
         <Skill sill={'python'} progress={'75%'} />
         <Skill sill={'c++'} progress={'80%'} />
         </div>

         <br></br>
         <br></br>
         <Tittle title={"MY Services"} span={"Services"}/>
         <div className="service-container">
            <ServiceSection title={'Web Development'} text={"Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience"}/>
            <ServiceSection title={'artificial intelligence'} text={"Artificial intelligence has made it possible to deposit cheques from the comfort of your home. AI is proficient in deciphering handwriting, making online cheque processing practicable"}/>
            <ServiceSection title={'Video game development'} text={"Video game development is the process of developing a video game. The effort is undertaken by a developer, ranging from a single person to an international team dispersed across the globe."}/>
         </div>
        </div>
    )
}
