import React, { useState, Suspense, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineClose, AiFillGithub, AiOutlineLink, AiOutlineDesktop } from 'react-icons/ai';
import { BsThreeDots, BsBox } from 'react-icons/bs';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars, Float, Text, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const Preview3D = ({ image }) => {
  const texture = useTexture(image);
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <group>
        {/* Holographic Box */}
        <mesh scale={1.2}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="#915eff" wireframe={true} transparent opacity={0.3} />
        </mesh>
        <mesh scale={1.15}>
          <boxGeometry args={[1.98, 1.98, 1.98]} />
          <meshStandardMaterial color="#915eff" transparent opacity={0.05} />
        </mesh>
        
        {/* Front Face with Image */}
        <mesh position={[0, 0, 1.01]}>
          <planeGeometry args={[1.8, 1.8]} />
          <meshBasicMaterial map={texture} />
        </mesh>
        
        {/* Back Face with Image (Optional) */}
        <mesh position={[0, 0, -1.01]} rotation={[0, Math.PI, 0]}>
          <planeGeometry args={[1.8, 1.8]} />
          <meshBasicMaterial map={texture} />
        </mesh>
      </group>
    </Float>
  );
};

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState('2d'); // '2d' or '3d'
  
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-start justify-center bg-black/95 backdrop-blur-md p-2 sm:p-4 md:p-8 pt-20 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 50, opacity: 0, scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-7xl h-fit max-h-[90vh] bg-[#0a0a0a] border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex justify-between items-center px-6 h-24 border-b border-white/10 bg-white/5 backdrop-blur-md min-h-[96px]">
            <div className="flex gap-3">
              <button
                onClick={() => setViewMode('2d')}
                className={`flex items-center gap-2 px-6 h-12 rounded-full text-sm font-bold transition-all ${
                  viewMode === '2d' ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                <AiOutlineDesktop size={18} /> Live Preview
              </button>
              <button
                onClick={() => setViewMode('3d')}
                className={`flex items-center gap-2 px-6 h-12 rounded-full text-sm font-bold transition-all ${
                  viewMode === '3d' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                <BsBox size={18} /> 3D View
              </button>
            </div>

            <button
              onClick={onClose}
              className="bg-white/5 hover:bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all hover:scale-110 shadow-lg border border-white/10"
              title="Close"
            >
              <AiOutlineClose size={20} />
            </button>
          </div>

          <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
            {/* Left Side: Media (2D or 3D) */}
            <div className="w-full md:w-3/5 h-[45vh] md:h-auto bg-[#050505] relative border-r border-white/5 min-h-[400px]">
              {viewMode === '2d' ? (
                <>
                  {project.live_link ? (
                    <iframe
                      src={project.live_link}
                      className="w-full h-full border-none pointer-events-auto"
                      title={project.name}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center p-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 to-transparent">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-contain rounded-xl shadow-2xl"
                      />
                    </div>
                  )}
                </>
              ) : (
                <div className="w-full h-full cursor-grab active:cursor-grabbing">
                  <Canvas shadows gl={{ antialias: true }}>
                    <Suspense fallback={null}>
                      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                      <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={0.5} minDistance={3} maxDistance={10} />
                      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                      <ambientLight intensity={0.4} />
                      <pointLight position={[10, 10, 10]} intensity={1} color="#915eff" />
                      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                      
                      <Preview3D image={project.image} />

                      <Text
                        position={[0, -2.8, 0]}
                        fontSize={0.2}
                        color="white"
                        anchorX="center"
                        anchorY="middle"
                        maxWidth={4}
                        textAlign="center"
                        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hJPkl7w.woff"
                      >
                        INTERACTIVE 3D PROTOTYPE VISUALIZER
                      </Text>
                    </Suspense>
                  </Canvas>
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/5 backdrop-blur-xl border border-white/10 px-5 py-2.5 rounded-full text-[10px] text-white/70 tracking-[0.2em] uppercase font-bold">
                    Orbit • Zoom • Inspect
                  </div>
                </div>
              )}
            </div>

            {/* Right Side: Details */}
            <div className="w-full md:w-2/5 h-auto overflow-y-auto bg-neutral-900/50 backdrop-blur-xl p-8 sm:p-12">
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-4xl sm:text-5xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                    {project.name}
                  </h2>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags?.map((tag) => (
                      <span
                        key={tag.name}
                        className={`px-3 py-1 text-xs font-semibold rounded-full border border-purple-500/30 ${tag.color} bg-black/50`}
                      >
                        #{tag.name}
                      </span>
                    ))}
                  </div>

                  {/* RELOCATED ACTION BUTTONS */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <a
                      href={project.source_code_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 text-white text-sm font-bold rounded-xl transition-all border border-white/10"
                    >
                      <AiFillGithub size={20} />
                      GitHub
                    </a>
                    {project.live_link && (
                      <a
                        href={project.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-purple-500/20"
                      >
                        <AiOutlineLink size={20} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                <div className="h-[1px] w-full bg-gradient-to-r from-purple-500/40 to-transparent" />

                <div className="text-gray-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                  {project.details || project.description}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
