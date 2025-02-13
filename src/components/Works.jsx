import  {Tilt}  from "react-tilt"
import {motion} from "framer-motion";
import {styles} from "../style";
import {github} from "../assets";
import {SectionWrapper} from "../hoc";
import {projects} from '../constants';
import { fadeIn,textVariant } from "../utils/motion";

const ProjectCard=({index,name,description,tags,image,source_code_link})=>{
  return (
    <>
      <motion.div variants={fadeIn("up","spring",index*0.5,0.75)}>
        <Tilt options={{
          max:45,
          scale:1,
          speed:450
        }} 
         className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full ">
          <div className="relative w-full h-[230px]">
            <img
             src={image}
             alt={name}
             className="w-full h-full object-cover rounded-2xl"/>
             <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                 <div
                  onClick={()=>window.open(source_code_link,"_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center
                   cursor-pointer">
                      <img src={github} alt="github" className="w-12 h-1/2 object-contain"/>
                 </div>
                 {/* can add below div if in future want to add live link to project
                 <div
                  onClick={()=>window.open(source_code_link,"_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center
                   cursor-pointer">
                      <img src={github} alt="github" className="w-12 h-1/2 object-contain"/>
                 </div> */}
             </div>
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
             {tags.map((tag)=>(
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
             ))}
          </div>
        </Tilt>
      </motion.div>
    </>
  )
}
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
              <p className={`${styles.sectionSubText} text-center`}>
                My Projects
              </p>
              <h2 className={`${styles.sectionHeadText} text-center`}>
                Projects.
              </h2>
       </motion.div>

       <div className="w-full flex">
          <motion.p variants={fadeIn("","",0.1,1)}
           className="mt-3 text-scondary text-[17px] max-w-3xl leading-[30px]">
                 Explore a collection of projects that highlight my skills and problem-solving abilities. Each project includes a brief overview along with links to its source code and live demos. These works demonstrate my proficiency in various technologies, innovative thinking, and project management capabilities.
          </motion.p>
       </div>

       <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project,index)=>(
          <ProjectCard key={`project-${index}`}
            index={index}
            {...project} 
            />
        ))}
       </div>
    </>
  )
}

export default SectionWrapper(Works,"");