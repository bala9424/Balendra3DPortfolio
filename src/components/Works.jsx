import React, { useEffect, useState, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects,list, javaProject, cProject, webProject, otherProject } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectList from "./ProjectList";
import ProjectViewer3D from "./ProjectViewer3D";
import ProjectModal from "./ProjectModal";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
  onView3D,
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    
    gsap.fromTo(card,
      {
        opacity: 0,
        y: 100,
        rotateX: -15,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Hover animation
    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [index]);

  return (
    <div ref={cardRef}>
      <Tilt
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        scale={1}
        transitionSpeed={450}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full shadow-card hover:shadow-2xl transition-shadow duration-300'
      >
        <div className='relative w-full h-[230px] group'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          {/* Eye Icon - Visible only on desktop screens */}
          <div
            onClick={onView3D}
            className='hidden md:flex absolute top-3 right-3 bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-full justify-center items-center cursor-pointer hover:scale-110 transform transition-all shadow-lg z-10'
            title="View in 3D"
          >
            <svg 
              className="w-6 h-6 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
              />
            </svg>
          </div>

          <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-2xl flex justify-center items-center gap-4'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black w-12 h-12 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transform'
            >
              <img
                src={github}
                alt='source code'
                className='w-7 h-7 object-contain'
              />
            </div>
            
            {live_link && (
              <button
                onClick={() => window.open(live_link, "_blank")}
                className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transform text-white font-bold text-lg'
              >
                ▶
              </button>
            )}
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-lg sm:text-xl md:text-2xl'>{name}</h3>
          <p className='mt-2 text-secondary text-xs sm:text-sm'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-xs sm:text-sm ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  const [selected, setSelected] = useState("java");
  const [data, setData] = useState([]);
  const [show3DViewer, setShow3DViewer] = useState(false);
  const [selected3DProject, setSelected3DProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const titleRef = useRef(null);

  useEffect(() => {
    switch (selected) {
      case "java":
        setData(javaProject);
        break;
      case "c++":
        setData(cProject);
        break;
      case "web":
        setData(webProject);
        break;
      case "other":
        setData(otherProject);
        break;

      default:
        setData(cProject);
    }
  }, [selected]);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(titleRef.current.children,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out"
        }
      );
    }
  }, []);

  const handleView3D = (index) => {
    setSelected3DProject(index);
    setShow3DViewer(true);
  };

  const close3DViewer = () => {
    setShow3DViewer(false);
    setSelected3DProject(null);
  };

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <>
      <motion.div 
        variants={textVariant()} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        ref={titleRef}
        className="block w-full"
      >
        <p className={`${styles.sectionSubText} block`}>My work</p>
        <h2 className={`${styles.sectionHeadText} block`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='mt-3 text-secondary text-sm sm:text-base leading-[30px] block'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            index={index} 
            {...project} 
            onView3D={() => handleOpenModal(project)}
          />
        ))}
      </div>

      {/* Full Screen Project Modal triggered by Eye Icon */}
      <ProjectModal
        isOpen={showModal}
        project={selectedProject}
        onClose={closeModal}
      />

      {/* 3D Viewer */}
      {show3DViewer && selected3DProject !== null && (
        <ProjectViewer3D
          projects={projects}
          initialIndex={selected3DProject}
          onClose={close3DViewer}
        />
      )}
    </>
  );
};

export default SectionWrapper(Works, "project");
