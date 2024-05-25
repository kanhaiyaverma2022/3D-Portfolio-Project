import React from 'react'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { styles } from '../styles'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css";
import { experiences } from '../constants/constant';
import { SectionWrapper } from '../hoc';



const ExperienceCard = ({ experience }) => (

  <VerticalTimelineElement 
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className='flex items-center w-full h-full justify-center'>
    <img src={experience.icon} 
    alt={experience.company_name} 
    className='w-[60%] h-[60%] object-contain'/>
    </div>}
    contentStyle={{ background: "#1d1836", color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}>
    <div>
      <h3 className='text-white text-[24px] font-bold '>
        {experience.title}
      </h3>
      <p className='text-secondary text-[16px] font-semibold' style={{margin:0}}>{experience.company_name}</p>
      <ul className='ml-5 list-disc mt-5 space-y-2'>
        {experience.points.map((point, index)=>(
          <li key={`experience-point- ${index}`} className='text-white-100 text-[14px] pl-5 tracking-wider font-semibold'>
            {point}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
);


const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        What I have done so far
      </p>
      

      <h2 className={styles.sectionHeadText}>
        Work Experience.
      </h2>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index)=>(
            <ExperienceCard 
            key={index} 
            experience={experience}/>
))}
        </VerticalTimeline>

      </div>
    </motion.div>
   
    </>
  )
}

export default SectionWrapper (Experience , "work")