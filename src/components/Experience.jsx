import React, { Suspense, useEffect, useRef, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import CanvasLoader from "./Loader";
import Developer from "./canvas/Developer";
gsap.registerPlugin(ScrollTrigger);
const ExperienceCard = ({ experience }) => {
 
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-sm sm:text-base font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>

        {/* Skill Badges */}
        <div className="flex flex-wrap gap-2 mt-3">
          {experience.skills?.map((skill, index) => (
            <span
              key={`experience-skill-${index}`}
              className="text-[10px] sm:text-[11px] px-3 py-1 rounded-full border border-white/10 bg-white/5 text-secondary font-medium tracking-wider"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <ul className="mt-5 list-disc ml-3 sm:ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-xs sm:text-sm pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [animationName, setAnimationName] = useState("idle");
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(1.2);
  const [rotation, setRotation] = useState(-Math.PI / 2);
  const [isMobile, setIsMobile] = useState(false);
  const developerRef = useRef();
 
  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      // Set rotation once for mobile and keep it fixed
      if (mobile) {
        setRotation(-Math.PI / 2); // Face right toward content
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Only run scroll animation on desktop, not on mobile
    if (isMobile) return;
    
    gsap.timeline({
      scrollTrigger: {
        trigger: ".experience-section",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const totalExperiences = experiences.length;
          const currentIndex = Math.floor(progress * totalExperiences);
          
          // Alternate rotation based on timeline position (desktop only)
          if (currentIndex % 2 === 0) {
            setRotation(-Math.PI / 2); // Face left for first, third, etc.
          } else {
            setRotation(Math.PI / 2); // Face right for second, fourth, etc.
          }
        },
      },
    })
      .to(
        { y: positionY },
        {
          y: -3.5,
          duration: 1,
          onUpdate: function () {
            setPositionY(this.targets()[0].y);

            // Dynamically change the animation based on the y position
            const newY = this.targets()[0].y;
            if (newY < -2) {
              setAnimationName("victory");
            } else if (newY < -1) {
              setAnimationName("clapping");
            } else if (newY < 0) {
              setAnimationName("salute");
            } else {
              setAnimationName("idle");
            }
          },
        }
      );
  }, [isMobile]);

  return (
    <div
      // style={{
      //   position: "relative",
      // }}
    >
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="experience-section mt-20 flex flex-col">
        <Canvas
        className="experience-section"
          style={{
            position: "absolute",
            zIndex: 9999,
            top:0,
            pointerEvents: 'none'
          }}
        >
          <ambientLight intensity={7} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

          <Suspense fallback={<CanvasLoader />}>
            <Developer
              ref={developerRef}
              position-y={positionY}
              position-x={isMobile ? -0.5 : positionX}
              scale={isMobile ? 0.55 : 0.6}
              animationName={animationName}
              rotation={[0, rotation, 0]}
            />
          </Suspense>
        </Canvas>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
