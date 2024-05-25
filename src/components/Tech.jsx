import React from 'react'
import {BallCanvas} from './canvas'
import {SectionWrapper} from '../hoc'
import {technologies} from '../constants/constant'


const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap'>
      {technologies.map((technology)=>(
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech , "tech")