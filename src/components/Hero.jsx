import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Type from "./type";
import { Suspense } from "react";
import CanvasLoader from "./Loader";
import Developer from "./canvas/Developer";
import { SectionWrapper } from "../hoc";



const Hero = () => {
  return (
    <section id="home" className={`relative w-full h-screen mx-auto`}>
      {/* Space Background Video */}
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-280px] left-0 w-full h-[100%] object-cover -z-10"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <div
        className={`absolute inset-0 top-[180px] sm:top-[240px] max-w-7xl mx-auto px-4 sm:px-6 md:px-16 flex flex-row items-start gap-2 sm:gap-3 md:gap-5 z-10`}
      >
        <div className='flex flex-col justify-start items-start mt-2 sm:mt-3'>
          <div className='w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 h-40 sm:h-60 md:h-[400px] violet-gradient ml-[7px] sm:ml-2' />
        </div>

        <div className='flex flex-col gap-2 sm:gap-3 max-w-3xl w-full'>
          {/* Portfolio Label Badge */}
          <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-90 w-max">
            <span className="Welcome-text text-[13px]">
              ✨ Fullstack Developer Portfolio
            </span>
          </div>

          <h1 className='font-bold text-white text-[28px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-tight'>
            Hi <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>, I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>Balendra</span>
          </h1>
        
          <Type />
          
          <p className='text-sm sm:text-base md:text-lg text-gray-300 max-w-[600px] my-3 sm:my-5 leading-relaxed'>
            I'm a <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold'>Full Stack Software Engineer</span> with <span className='text-cyan-400 font-semibold'>4+ years</span> of experience in <span className='text-purple-400'>Website</span>, <span className='text-pink-400'>Mobile</span>, and <span className='text-cyan-400'>Software development</span>. 
            <br /><br />
            Currently expanding expertise in <span className='text-yellow-400 font-semibold'>AI</span>, <span className='text-orange-400 font-semibold'>Data Science</span>, and <span className='text-purple-500 font-semibold'>Three.js 3D UI</span> development. 
            <br /><br />
            <span className='text-purple-300'>Check out my projects and skills</span> 👇
          </p>

          <a 
            href="/Balendra_Paraste_Resume.pdf" 
            download="Balendra_Paraste_Resume.pdf"
            className="py-2 px-4 button-primary text-center text-white rounded-lg inline-block"
            style={{ cursor: 'pointer', textDecoration: 'none', zIndex: 999, position: 'relative', width: '200px' }}
          >
            Know more
          </a>
        </div>
      
      </div>
     

      {/* <ComputersCanvas /> */}

      <div className='absolute bottom-5 w-full flex justify-center items-center z-20'>
        <a href='#about' 
          style={{ cursor: 'pointer', zIndex: 20 }}
          onClick={(e) => {
            e.preventDefault();
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 cursor-pointer hover:border-white transition-colors'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero
