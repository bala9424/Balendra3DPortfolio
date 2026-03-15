import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";

const Clients = () => {
  const clients = [client1, client2, client3, client4];
  
  // Duplicating the array multiple times to ensure continuous smooth infinite scrolling
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients, ...clients, ...clients];

  return (
    <div className="mt-20 mb-10 w-full relative">
      <motion.div variants={textVariant()}>
        <h1 className="text-2xl sm:text-3xl md:text-4xl pt-5 pb-8 text-center">
          <strong className="purple">Clients I Have Worked For</strong>
        </h1>
      </motion.div>
      
      <div className="w-full overflow-hidden py-10 bg-black-200/50 border border-purple-500/30 relative rounded-[20px]">
        {/* Gradient overlays to fade edges */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-primary to-transparent z-10 rounded-l-[20px]"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-primary to-transparent z-10 rounded-r-[20px]"></div>

        <div className="flex items-center w-max animate-scroll">
          {duplicatedClients.map((client, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-32 sm:w-48 mx-6 sm:mx-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img 
                src={client} 
                alt={`client-${index}`} 
                className="w-full h-full max-h-[80px] object-contain opacity-70 hover:opacity-100 drop-shadow-lg" 
              />
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: fit-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Clients;
