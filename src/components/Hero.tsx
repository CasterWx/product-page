import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleControls = useAnimation();
  const { scrollY } = useScroll();
  
  const titleY = useTransform(scrollY, [0, 300], [0, -100]);
  const titleRotate = useTransform(scrollY, [0, 300], [0, -10]);
  const titleScale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const opacityParticles = useTransform(scrollY, [0, 200], [1, 0]);
  
  // Mouse parallax effect
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      setMousePosition({
        x: (clientX - centerX) / 50,
        y: (clientY - centerY) / 50,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Component did mount animation
  useEffect(() => {
    titleControls.start({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.7,
        type: "spring",
        stiffness: 100
      }
    });
  }, [titleControls]);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden perspective-1000"
    >
      {/* Background gradient with enhanced depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-gray-800 z-0" />
      
      {/* 3D Particles */}
      <motion.div style={{ opacity: opacityParticles }} className="absolute inset-0 z-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue-400 dark:bg-blue-500"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [0, Math.random() * 10 - 5],
              x: [0, Math.random() * 10 - 5],
              scale: [Math.random() * 0.5 + 0.5, Math.random() * 0.5 + 0.7],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: Math.random() * 4 + 2,
            }}
          />
        ))}
      </motion.div>
      
      {/* Enhanced decorative circles with parallax effect */}
      <motion.div 
        className="absolute top-20 right-10 w-64 h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30 animate-pulse"
        style={{ 
          x: mousePosition.x * -0.5, 
          y: mousePosition.y * -0.5,
        }} 
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-80 h-80 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30 animate-pulse delay-700"
        style={{ 
          x: mousePosition.x * 0.5, 
          y: mousePosition.y * 0.5,
        }} 
      />
      <motion.div 
        className="absolute top-40 left-20 w-40 h-40 bg-indigo-200 dark:bg-indigo-900/20 rounded-full filter blur-3xl opacity-20 animate-pulse delay-500"
        style={{ 
          x: mousePosition.x * 0.3, 
          y: mousePosition.y * 0.3,
        }} 
      />
      
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            style={{ 
              y: titleY,
              rotateX: titleRotate,
              scale: titleScale,
              perspective: 1000,
              transformStyle: "preserve-3d",
            }}
            className="mb-6"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent drop-shadow-sm"
              initial={{ opacity: 0, y: 20, rotateX: -20 }}
              animate={titleControls}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              AI Coding Project
            </motion.h1>
            
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto mt-4 rounded-full"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 128, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            />
          </motion.div>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 mt-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ 
              x: mousePosition.x * 0.1, 
              y: mousePosition.y * 0.1,
            }}
          >
            欢迎来到我的数字作品集。这里列举了一些我通过AI生成的产品，包括APP、小程序、H5等。探索我如何利用人工智能技术创造独特的数字体验，从概念构思到最终实现。每个项目都展示了AI与创意设计的完美结合，打造出直观、高效且引人入胜的用户体验。
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative z-20" 
          >
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-70 blur-sm"
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror"
              }}
            />
            <motion.a 
              href="#projects" 
              className="relative inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-medium rounded-lg text-white bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-500 dark:via-indigo-500 dark:to-purple-500 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.5)] dark:shadow-[0_0_20px_rgba(99,102,241,0.4)] border border-white/10 backdrop-blur-sm"
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 0 25px rgba(59, 130, 246, 0.6)"
              }}
              whileTap={{ scale: 0.97 }}
              style={{
                transformStyle: "preserve-3d",
                transform: "perspective(1000px) translateZ(0px)",
              }}
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span
                style={{
                  transform: "translateZ(8px)",
                }}
              >
                查看作品集
              </span>
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                animate={{ x: [0, 4, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  repeatType: "loop",
                  repeatDelay: 1 
                }}
                style={{
                  transform: "translateZ(12px)",
                }}
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </motion.svg>
              
              {/* Button inner shadow/highlight effect */}
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-30" 
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 30%, 0 60%)"
                  }}
                />
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: [0.4, 1, 0.4],
          y: [0, 10, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        <div className="relative">
          <motion.div 
            className="absolute -inset-1 rounded-full bg-blue-500 opacity-30 blur-sm"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
          <motion.div className="relative bg-white dark:bg-gray-800 rounded-full p-2 shadow-md">
            <ArrowDown className="text-blue-600 dark:text-blue-400" />
          </motion.div>
        </div>
      </motion.div>
      
      {/* Transition element to connect to Projects section */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden leading-0 pointer-events-none">
        {/* Wave transition */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320" 
          className="w-full h-auto transform translate-y-1"
          preserveAspectRatio="none"
        >
          <motion.path 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            fill="#F9FAFB" 
            fillOpacity="1" 
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,170.7C960,139,1056,85,1152,69.3C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="dark:fill-gray-950"
          ></motion.path>
        </svg>
        
        {/* Shimmer effect moving across the wave */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent" 
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "linear"
          }}
        />
        
        {/* Subtle floating particles in the transition area */}
        <div className="absolute bottom-0 left-0 w-full h-24 pointer-events-none">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-blue-400/30 dark:bg-blue-500/30"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: Math.random() * 2 + 1,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;