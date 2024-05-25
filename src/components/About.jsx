import React from 'react'
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion';
import { styles } from '../styles';
import {services} from '../constants/constant';
import {fadeIn , textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';


const ServiceCard =({service , index ,icon ,title})=>{

  return(
    <Tilt className="xs:w-[240px] w-full ">
      <motion.div 
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      variants={fadeIn("right","spring", 0.5 * index , 0.75)}
      >
        <div 
          options={{max:45, scale:1 , speed:450}}
             className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'> 
        <img src={icon} alt='web-development'  className='w-20  h-20 object-contain'/> 
        <h3 className='text-white text-bold text-center text-[20px] '>{title}</h3>
        </div>
      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <motion.div variants={textVariant()}> 
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
      <motion.p variants={fadeIn("","",0.1 ,1)} className='mt-4 text-[18px] max-w-3xl leading-[30px text-secondary]'>
      I'm a skilled software developer with experience in 
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
 <div className='flex flex-wrap gap-10 mt-20 w-full'>
  {services.map((service, index)=>(
    <ServiceCard key={service.title} index={index} {...service}/>
  )

  )}

 </div>
    </motion.div>
  )
}

export default SectionWrapper(About , "about")