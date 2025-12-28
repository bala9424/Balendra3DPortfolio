import React, { useEffect, useRef, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion"; // Ensure you have Framer Motion installed
import { Row } from "react-bootstrap";
import {
  SiLinux,
  SiVsco,
  SiJupyter,
  SiPostman,
  SiStackoverflow,
  SiGithub,
  SiDocker,
} from "react-icons/si";

const ToolCard = ({ index, title, icon: Icon }) => (
  <Tilt className="xs:w-[157px]  w-full">
    <motion.div
      variants={{
        visible: {
          opacity: 1,
          translateX: 0,
          transition: {
            delay: index * 0.5,
            type: "spring",
            stiffness: 75,
          },
        },
        hidden: { opacity: 0, translateX: 100 },
      }}
      initial="hidden"
      animate="visible"
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-6 sm:px-12 min-h-[160px] sm:min-h-[180px] flex justify-evenly items-center flex-col">
        <Icon className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
        <h3 className="text-white text-base sm:text-lg md:text-xl font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const Slider = ({ tools }) => {
  const ref = useRef(null);
  const [currentX, setCurrentX] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderChildrenWidth, setSliderChildrenWidth] = useState(0);
  const [direction, setDirection] = useState(-1); // -1 for right, 1 for left

  useEffect(() => {
    if (!ref.current) return;

    const updateDimensions = () => {
      const width = ref.current.offsetWidth;
      const scrollWidth = ref.current.scrollWidth;
      setSliderWidth(width);
      setSliderChildrenWidth(scrollWidth);
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Continuous auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentX((prevX) => {
        const maxScroll = -(sliderChildrenWidth - sliderWidth);
        const step = 2; // Pixels to move per interval
        
        let newX = prevX + (direction * step);
        
        // Check if we've reached the end or start
        if (newX <= maxScroll) {
          setDirection(1); // Change direction to left
          return maxScroll;
        } else if (newX >= 0) {
          setDirection(-1); // Change direction to right
          return 0;
        }
        
        return newX;
      });
    }, 30); // Update every 30ms for smooth animation

    return () => clearInterval(interval);
  }, [direction, sliderWidth, sliderChildrenWidth]);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-10 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{
            left: -(sliderChildrenWidth - sliderWidth),
            right: 0
          }}
          dragElastic={0.1}
          onDragEnd={(e, { offset, velocity }) => {
            const newX = Math.max(Math.min(currentX + offset.x, 0), -(sliderChildrenWidth - sliderWidth));
            setCurrentX(newX);
            // Reset direction based on position
            if (newX <= -(sliderChildrenWidth - sliderWidth)) {
              setDirection(1);
            } else if (newX >= 0) {
              setDirection(-1);
            }
          }}
          animate={{ x: currentX }}
          transition={{ duration: 0, ease: "linear" }}
          ref={ref}
        >
          {tools.map((item, i) => (
            <motion.div 
              key={`${item.title}-${i}`} 
              className="flex-shrink-0 w-full sm:w-[calc(16.666%-33.33px)]"
            >
              <ToolCard {...item} index={i} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const Toolstack = () => {
  const tools = [
    { icon: SiLinux, title: "Linux" },
    { icon: SiVsco, title: "Visual Studio Code" },
    { icon: SiJupyter, title: "Jupyter" },
    { icon: SiPostman, title: "Postman" },
    { icon: SiStackoverflow, title: "Stackoverflow" },
    { icon: SiGithub, title: "Github" },
    { icon: SiDocker, title: "Docker" },
  ];

  return (
    <div className="mt-0 ml-0 mb-2 w-full">
      <Slider tools={tools} />
    </div>
  );
};

export default Toolstack;
