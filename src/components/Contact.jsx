
import {useState,useRef} from 'react';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../style';
import { EarthCanvas } from './canvas';
import {SectionWrapper} from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef=useRef();
  const [form,setForm]=useState({
    name:'',
    email:'',
    message:''
  })
  const [loading,setLoading]=useState(false);
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setForm({...form,[name]:value})
  }
  const handleSubmit=(e)=>{

    e.preventDefault();
    setLoading(true);
    //template-template_popnjk8
    //service-service_x3xfm4l
    //api-D2SM9wGxEWrpV-N7c
    emailjs.send('service_x3xfm4l'
        ,'template_popnjk8',
        {
           from_name:form.name,
           to_name:form.email,
           message:form.message,
           to_name:'Manpreet Singh',
           from_email:'manpreetproject123@gmail.com'
        },
        'D2SM9wGxEWrpV-N7c'
      )
      .then(()=>{
        setLoading(false);
        setForm({name:'',email:'',message:''})
        alert('Thank You. I will get back to you as soon as possible!')
      },(error)=>{
        setLoading(false);
        console.log('Error occurred',error);
        alert('Something went wrong!')
      }) 
  }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
       variants={slideIn('left',"tween",0.2,1)}
       className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'>
            <label className='flex flex-col'>
                <span className="text-white font-medium mb-4">Your Name</span>
                <input type="text" name="name" value={form.name}
                 onChange={handleChange}
                 placeholder="what's Your Name?"
                 className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white
                  rounded-lg outlined-none border-none font-medium '  />
            </label>

            <label className='flex flex-col'>
                <span className="text-white font-medium mb-4">Your Email</span>
                <input type="email" name="email" value={form.email}
                 onChange={handleChange}
                 placeholder="what's Your Email?"
                 className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white
                  rounded-lg outlined-none border-none font-medium '  />
            </label>

            <label className='flex flex-col'>
                <span className="text-white font-medium mb-4">Your Message</span>
                <textarea  row="7" type="text" name="message" value={form.message}
                 onChange={handleChange}
                 placeholder="what do you want to say?"
                 className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white
                  rounded-lg outlined-none border-none font-medium '  />
            </label>

            <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit text=white
             font-bold shadow-md shadow-primary'>
              {loading ? 'Sending....':"Send"}
            </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn('right',"tween",0.2,1)}
       className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] '
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact");