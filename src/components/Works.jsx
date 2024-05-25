import React from 'react'
import { motion, } from 'framer-motion'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants/constant';
import { Tilt } from 'react-tilt'
import { github } from '../assets'

const ProjectCard = ({index,name,description,tags,image, source_code_Link})=>{

  return(
  <motion.div variants={fadeIn("up","spring",index * 0.5 , 0.75)}>
    <Tilt
    options={{max:45 , scale:1 , speed:450}}
    className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className='relative w-full h-[230px]'>
        <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl '/>
        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div onClick={()=>window.open(source_code_Link, "_blank")}
          className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
<img className='w-1/2 h-1/2 object-contain' alt='github' src={github}/>
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <h3 className='text-white text-[24px] font-bold'>{name}</h3>
        <p className='text-secondary mt-2 text-[14px]'>{description}</p>
        <div className='mt-4 flex flex-wrap gap-2'>{tags.map((tag)=>(
          <p className={`${tag.color}`} key={tag.name}>{tag.name}</p>
        ))}</div>
      </div>


    </Tilt>

    
  </motion.div>
  )
}

const Works = () => {
  return (
    <>
    <div>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>
      My work
    </p>

    <h2 className={styles.sectionHeadText}>
      Project.
    </h2>
    </motion.div>
    <motion.p
    variants={fadeIn("","",0.1,1)}
    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
    </motion.p>
    </div>

    <div className='mt-20 flex flex-wrap sm:flex-row flex-col gap-7'>
      {projects.map((project , index)=>(
        <ProjectCard key={`project-${index}`} index={index} {...project}>


        </ProjectCard>
      ))}
    </div>

  </>
  )
}

export default SectionWrapper (Works , "" )