import React, { useEffect, useRef, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { my } from "../assets";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { univ_logo } from "../assets";
import { AnimatePresence } from "framer-motion";
import nptel from '../assets/nptel.jpg';

const Slider = ({ services, itemsPerPage = 4 }) => {
  const ref = useRef(null);
  const [currentX, setCurrentX] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderChildrenWidth, setSliderChildrenWidth] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      if (ref.current) {
        const containerWidth = ref.current.clientWidth;
        setSliderWidth(containerWidth);
        
        const totalWidth = Array.from(ref.current.childNodes).reduce(
          (acc, node) => acc + node.offsetWidth + 40, // 40 for gap
          0
        );
        setSliderChildrenWidth(totalWidth);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [services]);

  const handleNext = () => {
    const isMobile = window.innerWidth < 640;
    if (isMobile) {
      // On mobile, calculate exact card width including gap
      const cardWidth = ref.current.firstChild.offsetWidth;
      const gap = 12; // gap-3 = 12px
      const slideAmount = cardWidth + gap;
      // Adjust maxScroll to account for the gap after the last card
      const maxScroll = -(sliderChildrenWidth - sliderWidth + gap);
      const newX = Math.max(currentX - slideAmount, maxScroll);
      setCurrentX(newX);
    } else {
      const slideAmount = sliderWidth / 4;
      const maxScroll = -(sliderChildrenWidth - sliderWidth);
      const newX = Math.max(currentX - slideAmount, maxScroll);
      setCurrentX(newX);
    }
  };

  const handlePrev = () => {
    const isMobile = window.innerWidth < 640;
    if (isMobile) {
      // On mobile, calculate exact card width including gap
      const cardWidth = ref.current.firstChild.offsetWidth;
      const gap = 12; // gap-3 = 12px
      const slideAmount = cardWidth + gap;
      const newX = Math.min(currentX + slideAmount, 0);
      setCurrentX(newX);
    } else {
      const slideAmount = sliderWidth / 4;
      const newX = Math.min(currentX + slideAmount, 0);
      setCurrentX(newX);
    }
  };

  return (
    <div className="relative w-full px-8 sm:px-12">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        disabled={currentX >= 0}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-purple-600 hover:bg-purple-700 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all shadow-lg"
      >
        <span className="text-2xl font-bold">‹</span>
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        disabled={currentX <= -(sliderChildrenWidth - sliderWidth)}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-purple-600 hover:bg-purple-700 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all shadow-lg"
      >
        <span className="text-2xl font-bold">›</span>
      </button>

      <div className="overflow-hidden px-1">
        <motion.div
          className="flex gap-3 sm:gap-6"
          animate={{ x: currentX }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          ref={ref}
        >
          {services.map((item, i) => (
            <motion.div 
              key={`${item.title}-${i}`} 
              className="flex-shrink-0 w-[calc(100%-0px)] sm:w-[calc(25%-19.5px)]"
            >
              <ServiceCard {...item} index={i} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

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
          src={nptel}
          alt="web-development"
          className="w-full h-auto max-w-[200px] sm:max-w-[250px] object-contain"
        />

        <h3 className="text-white text-base sm:text-lg md:text-xl font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const Educations = () => {
  return (
    <div>
      <div>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I have studied</p>
          <h2 className={styles.sectionHeadText}>Educations.</h2>
        </motion.div>
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <Container className="flex-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl pt-5 pb-2 text-center md:text-left">
              <strong className="purple">Degrees Received</strong>
            </h1>
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-4 text-secondary text-sm sm:text-base leading-[30px]"
            >
              <div>
                <h5 className="text-lg sm:text-xl md:text-2xl pb-2">
                  <strong className="purple quote-card-view-header">
                    Pondicherry central University
                  </strong>
                </h5>

                <Card className="quote-card-view">
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p style={{ textAlign: "justify" }}>
                        <span className="purple">
                          Masters in computer Science (M.C.A){" "}
                        </span>
                        from <span className="purple"> 2016</span> To{" "}
                        <span className="purple"> 2019</span>
                      </p>
                      <ul>
                        <li
                          className="about-activity"
                          style={{ paddingBottom: "10px" }}
                        >
                          I have studied basic software engineering subjects
                          like DS, Algorithms, DBMS, OS, AI etc.
                        </li>
                        <li
                          className="about-activity"
                          style={{ paddingBottom: "10px" }}
                        >
                          Apart from this, I have done courses on Python, Full
                          Stack Development.Javascript Frameworks Like
                          Angular,React,Nodejs
                        </li>
                        <li className="about-activity">
                          Currently i am learning about Deep Learning, Data
                          Science, Cloud Computing,Machine learning
                        </li>
                      </ul>
                    </blockquote>
                  </Card.Body>
                </Card>
              </div>
            </motion.p>
          </Container>
          <div className="flex justify-center md:justify-end items-center">
            <img src={univ_logo} alt="about" className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain" />
          </div>
        </div>
      </div>
      <motion.div variants={textVariant()}>
        <h1 className="text-2xl sm:text-3xl md:text-4xl pt-5 pb-2 text-center">
          <strong className="purple">Certificate Received</strong>
        </h1>
      </motion.div>

      <div className="mt-5 ml-0 mb-2 flex flex-wrap gap-10">
        <Slider services={services} itemsPerPage={4} />
      </div>
    </div>
  );
};

export default SectionWrapper(Educations, "education");
