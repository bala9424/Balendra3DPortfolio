import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, PerspectiveCamera } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';

// Billboard Frame Component
const Billboard = ({ position, rotation, children }) => {
  return (
    <group position={position} rotation={rotation}>
      {/* Frame */}
      <mesh>
        <boxGeometry args={[2.4, 2, 0.15]} />
        <meshStandardMaterial color="#4a4a4a" />
      </mesh>
      {/* Inner content area */}
      <mesh position={[0, 0, 0.08]}>
        <planeGeometry args={[2.2, 1.8]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>
      {/* HTML Content */}
      <Html
        position={[0, 0, 0.1]}
        transform
        occlude
        style={{
          width: '440px',
          height: '360px',
          background: 'transparent',
        }}
      >
        {children}
      </Html>
    </group>
  );
};

// Space Shuttle Component
const SpaceShuttle = ({ position }) => {
  return (
    <group position={position} rotation={[0, Math.PI / 4, 0]}>
      {/* Main body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.4, 3, 16]} />
        <meshStandardMaterial color="#e0e0e0" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Nose cone */}
      <mesh position={[0, 1.8, 0]}>
        <coneGeometry args={[0.3, 0.8, 16]} />
        <meshStandardMaterial color="#f0f0f0" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Left wing */}
      <mesh position={[-0.8, -0.5, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.1, 1.2, 0.8]} />
        <meshStandardMaterial color="#c0c0c0" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Right wing */}
      <mesh position={[0.8, -0.5, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <boxGeometry args={[0.1, 1.2, 0.8]} />
        <meshStandardMaterial color="#c0c0c0" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Tail fin */}
      <mesh position={[0, -0.8, -0.3]} rotation={[Math.PI / 2, 0, 0]}>
        <boxGeometry args={[0.4, 0.8, 0.1]} />
        <meshStandardMaterial color="#b0b0b0" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Engine glow - left */}
      <mesh position={[-0.2, -1.6, 0]}>
        <cylinderGeometry args={[0.12, 0.15, 0.3, 16]} />
        <meshBasicMaterial color="#ff6b35" />
      </mesh>
      
      {/* Engine glow - right */}
      <mesh position={[0.2, -1.6, 0]}>
        <cylinderGeometry args={[0.12, 0.15, 0.3, 16]} />
        <meshBasicMaterial color="#ff6b35" />
      </mesh>
      
      {/* Blue window */}
      <mesh position={[0, 0.8, 0.31]}>
        <circleGeometry args={[0.15, 16]} />
        <meshBasicMaterial color="#4cc9f0" transparent opacity={0.8} />
      </mesh>
      
      {/* Exhaust trail particles */}
      <pointLight position={[0, -2, 0]} intensity={0.5} color="#ff6b35" distance={5} />
    </group>
  );
};

// Space-themed Ground Component
const SpaceGround = () => {
  return (
    <group>
      {/* Main cosmic ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial 
          color="#0d0221"
          metalness={0.9}
          roughness={0.1}
          emissive="#1a0b2e"
          emissiveIntensity={0.5}
        />
      </mesh>
      
      {/* Glowing grid lines - cosmic energy */}
      <gridHelper 
        args={[100, 40, '#7209b7', '#3a0ca3']} 
        position={[0, -2.95, 0]} 
      />
      
      {/* Starfield on surface */}
      {[...Array(50)].map((_, i) => (
        <mesh 
          key={`star-${i}`}
          position={[
            Math.random() * 80 - 40,
            -2.9,
            Math.random() * 80 - 40
          ]}
        >
          <circleGeometry args={[Math.random() * 0.15 + 0.05, 8]} />
          <meshBasicMaterial 
            color={['#ffffff', '#f72585', '#4cc9f0', '#7209b7', '#ffd60a'][Math.floor(Math.random() * 5)]}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
      
      {/* Nebula glow spots */}
      {[...Array(8)].map((_, i) => (
        <mesh 
          key={`nebula-${i}`}
          position={[
            Math.random() * 60 - 30,
            -2.85,
            Math.random() * 60 - 30
          ]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <circleGeometry args={[Math.random() * 3 + 2, 32]} />
          <meshBasicMaterial 
            color={i % 2 === 0 ? '#4361ee' : '#f72585'}
            transparent
            opacity={0.15}
          />
        </mesh>
      ))}
      
      {/* Floating cosmic particles */}
      {[...Array(20)].map((_, i) => (
        <mesh 
          key={`particle-${i}`}
          position={[
            Math.random() * 70 - 35,
            -2.5 + Math.random() * 0.5,
            Math.random() * 70 - 35
          ]}
        >
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshBasicMaterial 
            color={['#4cc9f0', '#f72585', '#7209b7'][i % 3]}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
    </group>
  );
};

// 3D Scene Component
const Scene3D = ({ project, currentIndex, totalProjects, onNext, onPrev, onPreview }) => {
  const controlsRef = useRef();

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 3.5, 13]} fov={48} />
      <OrbitControls
        ref={controlsRef}
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />

      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <pointLight position={[-10, 10, -10]} intensity={0.5} />
      <pointLight position={[0, -2, 0]} intensity={0.3} color="#8b5cf6" />

      {/* Space-themed Ground */}
      <SpaceGround />

      {/* Center Billboard - Project Info */}
      <Billboard position={[-7.2, -0.5, -2.54]} rotation={[0, Math.PI / 10, 0]}>
        <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 p-8 overflow-auto rounded-lg">
          <div className="flex items-center gap-4 mb-6">
            {project.icon && (
              <div className="bg-purple-600 p-3 rounded-full">
                <span className="text-3xl">{project.icon}</span>
              </div>
            )}
            <h2 className="text-white text-3xl font-bold">{project.name}</h2>
          </div>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="mb-6">
            <h3 className="text-purple-400 text-xl font-semibold mb-3">Tech Stack:</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags?.map((tag, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${tag.color} bg-opacity-20`}
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button
              onClick={() => window.open(project.source_code_link, '_blank')}
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold transition-all"
            >
              Source Code
            </button>
            {project.live_link && (
              <button
                onClick={onPreview}
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-6 rounded-lg font-semibold transition-all"
              >
                Preview
              </button>
            )}
          </div>
        </div>
      </Billboard>

      {/* Right Billboard - Project Preview */}
      <Billboard position={[5.8, -0.5, -2.54]} rotation={[0, -Math.PI / 10, 0]}>
        <div className="w-full h-full bg-gray-900 rounded-lg overflow-hidden">
          {project.live_link ? (
            <iframe
              src={project.live_link}
              className="w-full h-full"
              title={project.name}
              frameBorder="0"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </Billboard>
    </>
  );
};

// Main 3D Viewer Component
const ProjectViewer3D = ({ projects, initialIndex = 0, onClose, onPreviewClick }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handlePreview = () => {
    if (onPreviewClick) {
      onPreviewClick(projects[currentIndex].live_link, projects[currentIndex].name);
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black z-50"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-20 right-4 z-50 bg-red-500 hover:bg-red-600 text-white text-2xl font-bold w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          ×
        </button>

        {/* Instructions */}
        <div className="absolute top-4 left-4 z-10 bg-gray-900 bg-opacity-80 text-white px-4 py-2 rounded-lg">
          <p className="text-sm">🖱️ Drag to rotate • Scroll to zoom • Click arrows to navigate</p>
        </div>

        {/* 3D Canvas */}
        <Canvas shadows>
          <Suspense fallback={null}>
            <Scene3D
              project={projects[currentIndex]}
              currentIndex={currentIndex}
              totalProjects={projects.length}
              onNext={handleNext}
              onPrev={handlePrev}
              onPreview={handlePreview}
            />
          </Suspense>
        </Canvas>

        {/* Fixed Navigation Controls at Bottom */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 -ml-12 z-10">
          <div className="flex gap-6 items-center">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 transition-all shadow-2xl border-2 border-white"
            >
              <span className="text-3xl text-white font-bold">←</span>
            </button>
            
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full shadow-2xl border-2 border-white">
              <span className="text-white font-bold text-xl">
                {currentIndex + 1} / {projects.length}
              </span>
            </div>

            <button
              onClick={handleNext}
              disabled={currentIndex === projects.length - 1}
              className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 transition-all shadow-2xl border-2 border-white"
            >
              <span className="text-3xl text-white font-bold">→</span>
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectViewer3D;
