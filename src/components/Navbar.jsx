import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineTrophy,
  AiOutlineMail,
} from "react-icons/ai";

import { MdWorkOutline } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import AskAI from "./AskAI";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAskAI, setShowAskAI] = useState(false);

  const getNavIcon = (id) => {
    switch(id) {
      case 'home':
        return <AiOutlineHome />;
      case 'about':
        return <AiOutlineUser />;
      case 'work':
        return <MdWorkOutline />;
      case 'project':
        return <AiOutlineFundProjectionScreen />;
      case 'achievement':
        return <AiOutlineTrophy />;
      case 'askai':
        return <BsStars />;
      case 'contact':
        return <AiOutlineMail />;
      default:
        return <AiOutlineHome />;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center p-0 fixed top-0 z-50 shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md ${
        scrolled ? "bg-[#03001427]" : "bg-[#03001427]"
      }`}
      style={{ backdropFilter: 'blur(12px)' }}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto py-3'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-8 h-8 sm:w-9 sm:h-9 object-contain' />
          <p className='text-white text-sm xs:text-base sm:text-lg font-bold cursor-pointer flex items-center'>
            <span className='hidden xs:inline'>Balendra Paraste</span>
            <span className='xs:hidden'>B. Paraste</span>
            <span className='sm:block hidden ml-1'>| Fullstack Developer</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-6 items-center'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-gray-300"
              } hover:text-[rgb(112,66,248)] text-[16px] font-medium cursor-pointer transition`}
              onClick={() => {
                setActive(nav.title);
                if (nav.isModal) {
                  setShowAskAI(true);
                }
              }}
            >
             <div style={{display:'flex',alignItems:'center',gap:'3px'}}> 
               {getNavIcon(nav.id)}  
               {nav.isModal ? (
                 <span> {nav.title}</span>
               ) : (
                 <a href={`#${nav.id}`}> <span> {nav.title}</span></a>
               )}
             </div> 
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[20px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                    if (nav.isModal) {
                      setShowAskAI(true);
                    }
                  }}
                >
                  {nav.isModal ? (
                    <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
                      {getNavIcon(nav.id)} 
                      <span>{nav.title}</span>
                    </div>
                  ) : (
                    <a href={`#${nav.id}`} style={{display:'flex', alignItems:'center', gap:'8px'}}>
                      {getNavIcon(nav.id)} 
                      <span>{nav.title}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Ask AI Modal */}
      <AskAI isOpen={showAskAI} onClose={() => setShowAskAI(false)} />
    </nav>
  );
};

export default Navbar;
