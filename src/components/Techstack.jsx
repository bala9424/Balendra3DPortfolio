import React, { useEffect, useRef, useState } from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiPhp,
  DiPostgresql,
  DiBootstrap,
  DiHtml5,
  DiMysql,
  DiAngularSimple,
} from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import Tilt from "react-parallax-tilt";
import { GrGraphQl } from "react-icons/gr";
import { PiFileSqlBold } from "react-icons/pi";
import { TbBrandThreejs } from "react-icons/tb";
import { motion } from "framer-motion"; // Assuming you are using Framer Motion

const ToolCard = ({ index, title, icon: Icon }) => (
  <Tilt className="xs:w-[157px] w-full">
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

const Slider = ({ services }) => {
  const ref = useRef(null);
  const [currentX, setCurrentX] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderChildrenWidth, setSliderChildrenWidth] = useState(0);

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

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, [currentX, sliderWidth, sliderChildrenWidth]);

  const handleNext = () => {
    const isMobile = window.innerWidth < 640;
    if (isMobile) {
      const cardWidth = ref.current.firstChild.offsetWidth;
      const gap = 40; // gap-10 = 40px
      const slideAmount = cardWidth + gap;
      const maxScroll = -(sliderChildrenWidth - sliderWidth + gap);
      const newX = Math.max(currentX - slideAmount, maxScroll);
      // Loop back to start when reaching the end
      setCurrentX(newX <= maxScroll ? 0 : newX);
    } else {
      // Slide by full width to show next 6 cards
      const slideAmount = sliderWidth;
      const maxScroll = -(sliderChildrenWidth - sliderWidth);
      const newX = Math.max(currentX - slideAmount, maxScroll);
      // Loop back to start when reaching the end
      setCurrentX(newX <= maxScroll ? 0 : newX);
    }
  };

  const handlePrev = () => {
    const isMobile = window.innerWidth < 640;
    if (isMobile) {
      const cardWidth = ref.current.firstChild.offsetWidth;
      const gap = 40; // gap-10 = 40px
      const slideAmount = cardWidth + gap;
      setCurrentX(currentX >= 0 ? -(sliderChildrenWidth - sliderWidth + gap) : Math.min(currentX + slideAmount, 0));
    } else {
      // Slide by full width to show previous 6 cards
      const slideAmount = sliderWidth;
      setCurrentX(currentX >= 0 ? -(sliderChildrenWidth - sliderWidth) : Math.min(currentX + slideAmount, 0));
    }
  };

  return (
    <div className="relative w-full px-8 sm:px-12">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        disabled={currentX >= 0}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed text-[#1a1a2e] rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all shadow-lg"
      >
        <span className="text-2xl font-bold">‹</span>
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        disabled={currentX <= -(sliderChildrenWidth - sliderWidth)}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed text-[#1a1a2e] rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all shadow-lg"
      >
        <span className="text-2xl font-bold">›</span>
      </button>

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
            setCurrentX(Math.max(Math.min(currentX + offset.x, 0), -(sliderChildrenWidth - sliderWidth)));
          }}
          animate={{ x: currentX }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          ref={ref}
        >
          {services.map((item, i) => (
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

function Techstack() {
  // Array of services (icon and title)
  const services = [
    { title: "C++", icon: CgCPlusPlus },
    { title: "JavaScript", icon: DiJavascript1 },
    { title: "Typescript", icon: SiTypescript },
    { title: "HTML", icon: DiHtml5 },
    { title: "Node.js", icon: DiNodejs },
    { title: "Nest.js", icon: SiNestjs },
    { title: "React", icon: DiReact },
    { title: "Angular", icon: DiAngularSimple },
    { title: "Nextjs", icon: SiNextdotjs },
    { title: "MongoDB", icon: DiMongodb },
    { title: "Python", icon: DiPython },
    { title: "PHP", icon: DiPhp },
    { title: "PostgreSQL", icon: DiPostgresql },
    { title: "MySQL", icon: DiMysql },
    { title: "GraphQL", icon: GrGraphQl },
    { title: "SQL", icon: PiFileSqlBold },
    { title: "Threejs", icon: TbBrandThreejs },

  ];

  return (
    <div className="mt-0 ml-0 mb-2 w-full">
      <Slider services={services} />
    </div>
  );
}

export default Techstack;
