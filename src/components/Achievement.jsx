import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements, services } from "../constants";
import { ImageCarousel } from "./ImageCarasual";

const ServiceCard = ({ index, title, icon }) => (
    <Tilt 
      className='xs:w-[250px] w-full'
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1}
      transitionSpeed={450}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div className='bg-tertiary rounded-[20px] py-5 px-6 sm:px-12 min-h-[250px] sm:min-h-[280px] flex justify-evenly items-center flex-col'>
          <img
            src={icon}
            alt='web-development'
            className='w-12 h-12 sm:w-16 sm:h-16 object-contain'
          />
  
          <h3 className='text-white text-base sm:text-lg md:text-xl font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );

const Achievement = () => {
  return (
    <div className={`rounded-[20px]`}>
      <div
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Some Glimpses on...</p>
          <h2 className={styles.sectionHeadText}>Achievements.</h2>
        </motion.div>
      </div>
      <div className={`justify-center p-6 ${styles.paddingX} gap-7`}>
      <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='mt-3 text-gray-300 text-sm sm:text-base leading-[30px]'
        >
      <ul className='mt-5 list-disc ml-3 sm:ml-5 space-y-4'>
        {achievements.map((achievement, idx) => (
          <li 
            key={idx} 
            className='text-white-100 text-xs sm:text-sm pl-1'
          >
            {achievement.isHtml ? (
              <span dangerouslySetInnerHTML={{ __html: achievement.title }} />
            ) : (
              achievement.title
            )}
          </li>
        ))}
        </ul>
        </motion.div>
      </div>
      {/* <div className='mt-0 ml-0 mb-2 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </div>
  );
};

export default SectionWrapper(Achievement, "achievement");