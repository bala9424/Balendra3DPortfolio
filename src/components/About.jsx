import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { astronaut_laptop } from "../assets";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt 
    className="xs:w-[250px] w-full"
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-6 sm:px-12 min-h-[250px] sm:min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-base sm:text-lg md:text-xl font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-8">
        <div className="flex-1">
          <motion.div 
            variants={textVariant()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className={`${styles.sectionSubText} block`}>Introduction</p>
            <h2 className={`${styles.sectionHeadText} block`}>Know Who I'M.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-4 text-gray-300 text-sm sm:text-base leading-[30px]"
          >
            I am an innovative software engineer with deep expertise in <span className='text-blue-500 font-medium'>TypeScript</span> and <span className='text-yellow-400 font-medium'>JavaScript</span>, specializing in robust <span className='text-purple-400 font-semibold'>frontend</span> and <span className='text-cyan-400 font-semibold'>backend</span> architecture.
            <br /><br />
            My frontend experience spans <span className='text-red-400 font-medium'>Angular</span>, <span className='text-blue-400 font-medium'>React</span>, <span className='text-indigo-400 font-medium'>Material UI</span>, and <span className='text-pink-400 font-medium'>SCSS</span>, enabling me to architect responsive, high-performance user interfaces. On the backend, I engineer scalable microservices and APIs using <span className='text-red-500 font-medium'>NestJS</span>, <span className='text-green-500 font-medium'>Node.js</span>, and <span className='text-gray-400 font-medium'>Express.js</span>. I am highly proficient in database design across relational and NoSQL paradigms, including <span className='text-orange-400 font-medium'>SQL</span>, <span className='text-pink-500 font-medium'>GraphQL</span>, <span className='text-green-400 font-medium'>MongoDB</span>, <span className='text-blue-500 font-medium'>MySQL</span>, and <span className='text-cyan-500 font-medium'>PostgreSQL</span>. 
            <br /><br />
            Dedicated to engineering excellence, I emphasize rigorous <span className='text-green-400 font-semibold'>unit testing with Jest</span> and <span className='text-green-500 font-semibold'>E2E automation via WebdriverIO</span> to ensure unwavering code quality and deployment reliability.
            <br /><br />
            As an agile problem-solver, I collaborate seamlessly with cross-functional teams and clients to deliver scalable, user-centric software solutions that drive tangible business value. Let's build something exceptional together!
          </motion.p>
        </div>

        <div className="relative flex justify-center items-center w-full max-w-[260px] sm:max-w-[320px] mx-auto md:mr-10 mt-16 md:mt-4 flex-shrink-0 z-10 pb-10">
          <div className="relative w-full aspect-[4/5] bg-gradient-to-b from-[#e6d9ce] to-[#d6c7b9] rounded-[40px] shadow-2xl">
             <img src={astronaut_laptop} className="absolute inset-0 w-full h-full object-cover rounded-[40px] mix-blend-normal z-0" alt="avatar" />
             
             {/* Floating Pill Top Left */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-10 -left-8 sm:-left-16 bg-[#1f2235]/90 backdrop-blur-md border border-white/10 rounded-xl p-2 sm:p-3 shadow-xl z-20 w-32 sm:w-36"
             >
               <h3 className="text-white font-bold text-base sm:text-lg">5+ Years</h3>
               <p className="text-gray-400 text-xs sm:text-sm">Experience</p>
             </motion.div>
             
             {/* Floating Pill Bottom Right */}
             <motion.div 
               animate={{ y: [0, 8, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute bottom-16 -right-8 sm:-right-12 bg-[#1f2235]/90 backdrop-blur-md border border-white/10 rounded-xl p-2 sm:p-3 shadow-xl z-20 w-32 sm:w-36"
             >
               <h3 className="text-white font-bold text-base sm:text-lg">5+</h3>
               <p className="text-gray-400 text-xs sm:text-sm">Clients</p>
             </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Below Intro */}
      <div className="w-full mt-24 mb-10 pb-8 border-b border-purple-500/20">
        <div className="flex flex-wrap justify-between items-center gap-6 max-w-4xl mx-auto px-4">
          <div className="flex flex-col items-center">
             <h3 className="text-white font-bold text-4xl sm:text-5xl">5</h3>
             <p className="text-gray-400 text-sm sm:text-base mt-2">Years Experience</p>
          </div>
          <div className="flex flex-col items-center">
             <h3 className="text-white font-bold text-4xl sm:text-5xl">90%</h3>
             <p className="text-gray-400 text-sm sm:text-base mt-2">Test Coverage</p>
          </div>
          <div className="flex flex-col items-center">
             <h3 className="text-white font-bold text-4xl sm:text-5xl">5+</h3>
             <p className="text-gray-400 text-sm sm:text-base mt-2">Global Clients</p>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-4 text-gray-300 text-sm sm:text-base leading-[30px]"
        >
          Beyond core development, I am well-versed in <span className='text-orange-400 font-medium'>Agile methodologies</span>, driving iterative delivery and streamlined project lifecycles. I possess hands-on experience with <span className='text-sky-400 font-medium'>cloud infrastructure</span>, <span className='text-purple-400 font-medium'>CI/CD pipelines</span>, and modern <span className='text-cyan-400 font-medium'>DevOps practices</span> involving <span className='text-red-400 font-medium'>Jenkins</span> and <span className='text-blue-400 font-medium'>Docker</span> to ensure seamless, automated deployments. 
          <br /><br />
          I am deeply passionate about architecting innovative <span className='text-purple-400 font-semibold'>digital products</span> and actively exploring emerging technologies. I am continuously expanding my knowledge in <span className='text-yellow-400 font-semibold'>Data Science</span>, <span className='text-green-400 font-semibold'>Machine Learning</span>, and advanced <span className='text-pink-400 font-semibold'>Algorithms</span> to stay at the forefront of the tech industry.
        </motion.p>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
