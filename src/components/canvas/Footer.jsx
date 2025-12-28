import React from "react";
import { useEffect, useState } from "react";
import "./Footer.css";
import {AiOutlineGithub } from "react-icons/ai";
import {ImLinkedin} from "react-icons/im";
import "../Hero.scss";
import astronautGif from "../../assets/ash2.gif";

const Footer = () => {

    return (
        <div className="footer text-center">
            <img src={astronautGif} alt="Space Animation" className="footer-astronaut" />
            <img src="/sittingAstronaut.png" alt="Sitting Astronaut" className="sitting-astronaut-right" />
            <div className="link1">
        <a
          href="https://github.com/bala9424/" target="_blank">
          <AiOutlineGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/balender-kumar-490190203/" target="_blank">
          <ImLinkedin />
        </a>

            </div>
        <p className="text-gray-300"> 
          &#x3c;&#47;&#x3e; with ❤️ by
          <a href="https://shinchancode.github.io/3d-react-portfolio/" target="_blank" className="font-semibold" style={{ color: '#1a237e' }}>
            {" "}
          Balendra Paraste
          </a>
          😎
        </p>

      </div>
    );
  };
  
  export default Footer;