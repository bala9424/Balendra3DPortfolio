import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { mygif } from "../assets";
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
            I'm a skilled software developer with experience in <span className='text-blue-500 font-medium'>TypeScript</span> and <span className='text-yellow-400 font-medium'>JavaScript</span>, specializing in both <span className='text-purple-400 font-semibold'>frontend</span> and <span className='text-cyan-400 font-semibold'>backend</span> development.
            <br /><br />
            On the frontend, I've worked with <span className='text-red-400 font-medium'>Angular</span>, <span className='text-blue-400 font-medium'>React</span>, <span className='text-indigo-400 font-medium'>Material UI</span>, and <span className='text-pink-400 font-medium'>SCSS</span> to build responsive and engaging user interfaces. On the backend, I have expertise in <span className='text-red-500 font-medium'>NestJS</span>, <span className='text-green-500 font-medium'>Node.js</span>, and <span className='text-gray-400 font-medium'>Express.js</span>, along with strong knowledge of databases, including <span className='text-orange-400 font-medium'>SQL</span>, <span className='text-pink-500 font-medium'>GraphQL</span>, <span className='text-green-400 font-medium'>MongoDB</span>, <span className='text-blue-500 font-medium'>MySQL</span>, and <span className='text-cyan-500 font-medium'>PostgreSQL</span>. 
            <br /><br />
            Specialized in <span className='text-green-400 font-semibold'>unit testing with Jest</span> and <span className='text-green-500 font-semibold'>E2E automation using WebdriverIO</span>, ensuring code quality and reliability.
            <br /><br />
            I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
          </motion.p>
        </div>

        <div className="flex justify-center md:justify-end items-center flex-shrink-0">
          <img src={mygif} className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] h-auto object-contain" alt="avatar" />
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
          In addition to development, I have a strong understanding of <span className='text-orange-400 font-medium'>Agile methodologies</span>, ensuring efficient and iterative project management. I'm also familiar with <span className='text-sky-400 font-medium'>cloud servers</span>, <span className='text-purple-400 font-medium'>CI/CD pipelines</span>, and <span className='text-cyan-400 font-medium'>DevOps tools</span>, including <span className='text-red-400 font-medium'>Jenkins</span>, <span className='text-blue-400 font-medium'>Docker</span>, and cloud platforms, enabling seamless deployment and scalability of applications. 
          <br /><br />
          My fields of interest include building new <span className='text-purple-400 font-semibold'>web technologies and products</span>, as well as exploring areas related to <span className='text-yellow-400 font-semibold'>data science</span>, <span className='text-green-400 font-semibold'>machine learning</span>, and <span className='text-pink-400 font-semibold'>data structures & algorithms</span>. While I have a basic understanding of these domains, I am continuously learning and expanding my expertise.
        </motion.p>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
