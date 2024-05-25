import React, { useState ,useRef} from 'react'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { slideIn } from '../utils/motion'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import emailjs from '@emailjs/browser'

//template_a5o4mo9
//service_7c23z1b
const Contact = () => {
  const formRef = useRef()
  const [form , setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading , setLoading] = useState(false)

  const handleChange = (e)=>{
    const {name , value} = e.target
    setForm({...form , [name]:value})
  }
  const handleSubmit = (e)=>{
   e.preventDefault()
   setLoading(true)
   const {name , email , message} = form
   const data = {name , email , message}
   console.log(data)
   emailjs.send(
    import.meta.env.VITE_EMAIL_SERVICE_ID
   ,import.meta.env.VITE_EMAIL_TEMPLATE_ID
   ,{
      from_name:form.name,
      to_name: 'Kanhaiya Verma',
      from_email:form.email,
      to_email:'kv082321@gmail.com',
      message:form.message,
    },
    import.meta.env.VITE_EMAIL_PUBLIC_KEY,
    console.log(import.meta.env.VITE_EMAIL_PUBLIC_KEY,import.meta.env.VITE_EMAIL_TEMPLATE_ID)
   ).then(()=>{
    setLoading(false)
    alert('Thank you! I will get back to you ASAP.')
    setForm({ name: '',
    email: '',
    message: ''})
   }),
   (error)=>{
    setLoading(false)
    console.error(error)
    alert('Something went wrong')
   }
  }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden  '>

      <motion.div variants={slideIn('left' , 'tween' , 0.2 , 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl '>
        <p className={`${styles.sectionSubText}`}>Keep in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit}>
          <label className='flex flex-col mb-4 '>
          <span className='text-white font-medium mb-4'>
            Your Name
          </span>
          <input 
          type='text'
          name='name'
          value={form.name}
          onChange={handleChange}
          placeholder="What's is your name?"
          className='bg-tertiary py-4 px-6
           placeholder:text-secondary text-white rounded-lg 
           outline-none border-none font-medium'/>
     </label>
          <label className='flex flex-col mb-4'>
          <span className='text-white font-medium mb-4'>
            Email
          </span>
          <input 
          type='text'
          name='email'
          value={form.email}
          onChange={handleChange}
          placeholder="What is your email?"
          className='bg-tertiary py-4 px-6
           placeholder:text-secondary text-white rounded-lg 
           outline-none border-none font-medium'/>
     </label>
          <label className='flex flex-col mb-4'>
          <span className='text-white font-medium mb-4'>
            Your Message
          </span>
          <textarea
          rows={5}
          type='text'
          name='message'
          value={form.message}
          onChange={handleChange}
          placeholder='What do you want to say?'
          className='bg-tertiary py-4 px-6
           placeholder:text-secondary text-white rounded-lg 
           outline-none border-none font-medium'/>
     </label>
     <button type='submit' className='bg-tertiary py-3 px-6 w-fit placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium '>
        {loading ? 'Sending...' : 'Send'}
     </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right' , 'tween' , 0.2 ,1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] '>
        <EarthCanvas/>
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact ,"contact") 