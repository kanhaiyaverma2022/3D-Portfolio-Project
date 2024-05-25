import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {navLinks} from '../constants/constant'
import {logo , menu , close} from '../assets'
import { styles } from '../styles'

const Navbar = () => {
  const [active , setActive] = useState()
  const [ toggle , setToggle] = useState(false)
  return (
    <div className={`${styles.paddingX} w-full top-0   fixed z-20 flex items-center justify-between py-5 bg-primary  mx-auto`}>
      
      <Link to="/" className='w-full flex gap-2 items-center' onClick={()=>{setActive(""); window.scrollTo(0,0)}}>

        <img src={logo} alt="logo" className='w-9 h-9 object-contain'/>
        <p className=' text-white text-[18px] font-bold cursor-pointer flex'> Kanhaiya &nbsp; <span className='sm:block hidden'> | &nbsp; Innovate Studio</span></p>
     
      </Link>
      <ul className='list-none hidden sm:flex flex-row gap-10'>
        {navLinks.map((links)=>(
        <li key={links.id} className={`${active === links.title ? 'text-white': 'text-secondary'} hover:text-white text-[18px] font-medium  cursor-pointer`} onClick={()=>setActive(links.title)}>
          <a href={`#${links.id}`}>{links.title}</a>
        </li>
        ))}
        <li>
        </li>
      </ul>
      <div className='flex sm:hidden    justify-end items-center' onClick={()=>setToggle(!toggle)}>
        <img 
        src={toggle ? close : menu} 
        alt="menu" 
        className="w-[28px] h-[28px]  cursor-pointer"/>

      </div>
      <div className={` ${!toggle ? 'hidden' : 'flex'}  sm:hidden p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}>
      <ul className='list-none flex flex-col justify-end items-start  gap-4 font-medium text-[16px] cursor-pointer'>
        {navLinks.map((links)=>(
        <li key={links.id} className={`${active === links.title ? 'text-white': 'text-secondary'} font-poppins hover:text-white text-[18px] font-medium  cursor-pointer`} 
        onClick={()=>{setActive(links.title); setToggle(!toggle)}}>
          <a href={`#${links.id}`}>{links.title}</a>
        </li>
        ))}
        <li>
        </li>
      </ul>
      </div>
    </div>
  )
}

export default Navbar