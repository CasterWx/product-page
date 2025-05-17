import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects, ProjectCategory } from '../data/projects';
import { ExternalLink, Github } from 'lucide-react';

// Group projects by category
const projectsByCategory = projects.reduce((acc, project) => {
  if (!acc[project.category]) {
    acc[project.category] = [];
  }
  acc[project.category].push(project);
  return acc;
}, {} as Record<ProjectCategory, typeof projects>);

// Component for mobile app project card (compact style with carousel)
const MobileAppCard: React.FC<{ project: typeof projects[0] }> = ({ project }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  
  // Convert single image to array if needed
  const images = Array.isArray(project.image) ? project.image : [project.image];
  
  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };
  
  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // 提供默认图标如果项目没有图标
  const defaultIcon = "https://cdn-icons-png.flaticon.com/512/1603/1603867.png";

  return (
    <>
      <motion.div 
        className="relative group h-full perspective"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* 3D Backdrop glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
        
        {/* Status badge - displays only if status exists */}
        {project.status && (
          <div className="absolute -top-3 right-4 z-30">
            <motion.div 
              className={`inline-flex px-3 py-1 rounded-full text-xs font-medium text-white shadow-lg ${
                project.status.includes('开发中') || project.status.includes('即将上线') 
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500' 
                  : project.status.includes('已上线') 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                    : 'bg-gradient-to-r from-blue-500 to-indigo-500'
              }`}
              animate={
                project.status.includes('即将上线') || project.status.includes('开发中')
                  ? { scale: [1, 1.05, 1], opacity: [1, 0.9, 1] }
                  : {}
              }
              transition={
                project.status.includes('即将上线') || project.status.includes('开发中')
                  ? { repeat: Infinity, duration: 2 }
                  : {}
              }
            >
              <span className="whitespace-nowrap">{project.status}</span>
            </motion.div>
          </div>
        )}
        
        {/* Card container with 3D effect */}
        <motion.div 
          className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] h-full z-10 backdrop-blur-sm"
          style={{
            transformStyle: "preserve-3d",
          }}
          whileHover={{ 
            scale: 1.03,
            rotateX: 2,
            rotateY: -5,
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col h-full">
            {/* Top - Mobile screenshots */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-4 relative">
              {/* 3D decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-600/20 rounded-full blur-xl"></div>
                <div className="absolute top-1/2 -left-8 w-16 h-16 bg-purple-600/20 rounded-full blur-xl"></div>
              </div>
              
              {/* Phone frame with simplified structure */}
              <div 
                className="relative mx-auto w-[200px] h-[360px]"
                style={{
                  perspective: "800px",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Navigation controls - placed outside phone */}
                {images.length > 1 && (
                  <>
                    {/* Previous button - Now larger and outside phone with fixed position */}
                    <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-20 select-none">
                      <motion.button 
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage();
                        }}
                        className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-purple-600/80 to-blue-600/80 hover:from-purple-500 hover:to-blue-500 text-white rounded-full shadow-lg border border-white/10"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Previous screenshot"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 18l-6-6 6-6" />
                        </svg>
                      </motion.button>
                    </div>
                    
                    {/* Next button - Now larger and outside phone with fixed position */}
                    <div className="absolute -right-7 top-1/2 -translate-y-1/2 z-20 select-none">
                      <motion.button 
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage();
                        }}
                        className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-blue-600/80 to-purple-600/80 hover:from-blue-500 hover:to-purple-500 text-white rounded-full shadow-lg border border-white/10"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Next screenshot"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </motion.button>
                    </div>
                    
                    {/* Indicator dots */}
                    <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
                      {images.map((_, index) => (
                        <motion.button 
                          key={index}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveIndex(index);
                          }}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            activeIndex === index ? 'bg-blue-500 scale-125' : 'bg-gray-600 hover:bg-gray-500'
                          }`}
                          whileHover={{ scale: 1.5 }}
                          whileTap={{ scale: 0.8 }}
                          aria-label={`Go to screenshot ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
                
                {/* Phone outer frame */}
                <div 
                  className="absolute inset-0 bg-black rounded-[32px] border-[6px] border-gray-800 z-10 overflow-hidden shadow-lg"
                  style={{
                    transform: isHovered ? "rotateY(-8deg) rotateX(4deg)" : "rotateY(-5deg) rotateX(2deg)",
                    transition: "transform 0.4s ease",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Phone gleam effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700/20 to-transparent z-20 pointer-events-none opacity-50"></div>
                  
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-4 bg-black rounded-b-xl z-20 pointer-events-none"></div>
                  
                  {/* Screen content - Clickable area */}
                  <button 
                    className="absolute inset-[6px] rounded-[26px] overflow-hidden bg-white z-10 block w-full h-full p-0 border-0" 
                    onClick={() => setIsModalOpen(true)}
                    style={{ cursor: 'zoom-in' }}
                    aria-label="View full image"
                  >
                    {/* Actual screenshot */}
                    <div className="relative w-full h-full">
                      {images.map((img, index) => (
                        <div 
                          key={index}
                          className={`absolute inset-0 transition-opacity duration-300 ${
                            index === activeIndex ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
                          <img 
                            src={img} 
                            alt={`${project.title} screenshot ${index + 1}`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Bottom - Project details */}
            <div className="p-5 flex flex-col flex-grow bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm">
              {/* App title with icon */}
              <motion.div 
                className="flex items-center gap-2 mb-3"
                style={{
                  transformStyle: "preserve-3d"
                }}
              >
                <motion.div 
                  className="w-7 h-7 min-w-7 rounded-lg overflow-hidden shadow-md border border-gray-700/50"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "translateZ(5px)"
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <img 
                    src={project.icon || defaultIcon} 
                    alt={`${project.title} icon`} 
                    className="w-full h-full object-cover rounded"
                  />
                </motion.div>
                <div className="flex flex-col">
                  <h3 className="text-base font-bold text-white line-clamp-1" style={{ transform: "translateZ(2px)" }}>
                    {project.title}
                  </h3>
                  {project.date && (
                    <div className="text-[10px] text-gray-400" style={{ transform: "translateZ(1px)" }}>
                      {project.date}
                    </div>
                  )}
                </div>
              </motion.div>
              
              <div className="relative mb-3" style={{ transform: "translateZ(1px)" }}>
                <motion.div 
                  className="relative group/tooltip"
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 1 }}
                >
                  <p className="text-gray-300 text-xs line-clamp-2 cursor-help">
                    {project.description}
                  </p>
                  
                  {/* Tooltip that appears on hover */}
                  <motion.div 
                    className="absolute z-50 left-0 w-full transform -translate-y-2 opacity-0 group-hover/tooltip:opacity-100 pointer-events-none"
                    initial={{ opacity: 0, y: 5 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ top: "-5px" }}
                  >
                    <div className="bg-gray-800/95 text-white text-xs p-3 rounded-lg shadow-xl border border-gray-700/50 backdrop-blur-sm w-full max-w-[280px] mx-auto">
                      <div className="flex justify-between items-center mb-1">
                        <div className="font-medium text-blue-400 text-[11px] uppercase tracking-wider">应用介绍</div>
                        {project.date && (
                          <div className="text-[10px] text-gray-400 bg-gray-700/50 px-2 py-0.5 rounded">
                            {project.date}
                          </div>
                        )}
                      </div>
                      <p className="leading-relaxed">{project.description}</p>
                      <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-800/95 border-r border-b border-gray-700/50 rotate-45"></div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
              
              <div className="flex flex-wrap gap-1 mb-3" style={{ transform: "translateZ(1px)" }}>
                {project.technologies.slice(0, 5).map((tech, index) => (
                  <motion.span 
                    key={index} 
                    className="px-1.5 py-0.5 text-[10px] font-medium bg-gray-700/50 text-gray-200 rounded backdrop-blur-sm border border-gray-700/30"
                    whileHover={{ scale: 1.05, y: -1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
                {project.technologies.length > 5 && (
                  <motion.span 
                    className="px-1.5 py-0.5 text-[10px] font-medium bg-gray-700/50 text-gray-200 rounded backdrop-blur-sm border border-gray-700/30"
                    whileHover={{ scale: 1.05, y: -1 }}
                  >
                    +{project.technologies.length - 3}
                  </motion.span>
                )}
              </div>
              
              <div className="flex items-center gap-2 mt-auto" style={{ transform: "translateZ(3px)" }}>
                {project.liveUrl && (
                  <motion.a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-2.5 py-1.5 text-[10px] font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded shadow-lg"
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={10} />
                    <span>View</span>
                  </motion.a>
                )}
                {project.githubUrl && (
                  <motion.a 
                    href={project.githubUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-2.5 py-1.5 text-[10px] font-medium text-gray-300 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 rounded border border-gray-700/50 shadow-lg"
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={10} />
                    <span>Code</span>
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Modal for enlarged image view */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <motion.button
              className="absolute -top-12 right-0 text-white bg-gray-800/50 hover:bg-gray-700/70 rounded-full p-2"
              onClick={() => setIsModalOpen(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </motion.button>
            
            {/* Image container */}
            <div className="bg-black/40 p-1 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10 shadow-xl">
              <div className="overflow-hidden">
                <img 
                  src={images[activeIndex]} 
                  alt={`${project.title} screenshot ${activeIndex + 1}`}
                  className="max-h-[80vh] w-auto mx-auto"
                />
              </div>
            </div>
            
            {/* Navigation buttons - only show if multiple images */}
            {images.length > 1 && (
              <>
                <motion.button 
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-black/70 text-white rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Previous screenshot"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </motion.button>
                
                <motion.button 
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-black/70 text-white rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Next screenshot"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </motion.button>
                
                {/* Image counter */}
                <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                  <span className="px-3 py-1 bg-black/60 rounded-full text-sm backdrop-blur-sm">
                    {activeIndex + 1} / {images.length}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

// Component for horizontal project card (used for 'website' category)
const HorizontalProjectCard: React.FC<{ project: typeof projects[0] }> = ({ project }) => (
  <motion.div 
    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
    whileHover={{ y: -5 }}
  >
    <div className="flex flex-col md:flex-row h-full">
      <div className="relative overflow-hidden md:w-2/5">
        <img 
          src={typeof project.image === 'string' ? project.image : project.image[0]} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col md:w-3/5">
        <div className="flex flex-col mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          {project.date && (
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {project.date}
            </span>
          )}
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center space-x-3 mt-auto">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <ExternalLink size={16} />
              <span>Preview</span>
            </a>
          )}
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

// Component for showcase project card (used for 'design' category)
const ShowcaseProjectCard: React.FC<{ project: typeof projects[0] }> = ({ project }) => (
  <motion.div
    className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    whileHover={{ y: -5 }}
  >
    <div className="p-6">
      <div className="flex flex-col mb-3">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          {project.title}
        </h3>
        {project.date && (
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {project.date}
          </span>
        )}
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-5">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech, index) => (
          <span 
            key={index} 
            className="px-3 py-1.5 text-sm font-medium bg-white/50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded-lg"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
    <div className="relative overflow-hidden h-64">
      <img 
        src={typeof project.image === 'string' ? project.image : project.image[0]} 
        alt={project.title} 
        className="w-full h-full object-cover"
      />
      {project.liveUrl && (
        <div className="absolute bottom-4 right-4">
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600/90 hover:bg-blue-700 rounded-lg transition-colors backdrop-blur-sm"
          >
            <ExternalLink size={18} />
            <span>View Project</span>
          </a>
        </div>
      )}
    </div>
  </motion.div>
);

const ProjectsSection: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="relative py-20 bg-gray-50 dark:bg-gray-950">
      {/* Top decoration to match Hero section */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden z-0 h-24 pointer-events-none">
        {/* Floating orbs that match Hero aesthetic */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-${8 + i * 4} h-${8 + i * 4} rounded-full bg-${
              ['blue', 'purple', 'indigo'][i % 3]
            }-${200 + (i % 3) * 100}/10 dark:bg-${
              ['blue', 'purple', 'indigo'][i % 3]
            }-${500 + (i % 3) * 100}/5`}
            style={{
              left: `${10 + i * 20}%`,
              top: `-${5 + i * 2}%`,
              filter: 'blur(15px)',
            }}
            animate={{
              y: [0, 10, 0],
              x: [0, i % 2 === 0 ? 5 : -5, 0],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration: 3 + i,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Faint connecting lines */}
        <svg className="absolute top-0 left-0 w-full h-24 opacity-30" viewBox="0 0 1440 100">
          <motion.path
            d="M0,0 C200,50 400,15 600,25 C800,35 1000,80 1200,70 C1400,60 1440,50 1440,50 L1440,0 L0,0 Z"
            fill="none"
            stroke="url(#gradient-line)"
            strokeWidth="1"
            strokeDasharray="5,5"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div 
            className="inline-block relative mb-4"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 blur-sm"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
            <h2 className="relative text-3xl md:text-4xl font-bold px-6 py-2 text-gray-900 dark:text-white">
              项目展示藏馆
            </h2>
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full mb-6"
          />
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            这里展示了我的个人作品集，包含多款iOS应用和其他数字创作，涵盖不同领域和技术栈的实践成果。
          </motion.p>
        </motion.div>

        {/* Mobile Apps Section */}
        {projectsByCategory.app && projectsByCategory.app.length > 0 && (
          <div className="mb-20">
            <motion.h3 
              className="text-2xl font-bold mb-8 text-gray-900 dark:text-white border-l-4 border-blue-600 pl-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              我的应用 (仅iOS)
            </motion.h3>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {projectsByCategory.app.map((project) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <MobileAppCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {/* Websites Section */}
        {projectsByCategory.website && projectsByCategory.website.length > 0 && (
          <div className="mb-20">
            <motion.h3 
              className="text-2xl font-bold mb-8 text-gray-900 dark:text-white border-l-4 border-green-600 pl-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              网站项目
            </motion.h3>
            <motion.div 
              className="flex flex-col gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {projectsByCategory.website.map((project) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <HorizontalProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {/* Design Projects */}
        {projectsByCategory.design && projectsByCategory.design.length > 0 && (
          <div className="mb-20">
            <motion.h3 
              className="text-2xl font-bold mb-8 text-gray-900 dark:text-white border-l-4 border-purple-600 pl-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              工具包
            </motion.h3>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {projectsByCategory.design.map((project) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <ShowcaseProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {/* Other Projects - Uses the default ProjectCard component */}
        {projectsByCategory.other && projectsByCategory.other.length > 0 && (
          <div>
            <motion.h3 
              className="text-2xl font-bold mb-8 text-gray-900 dark:text-white border-l-4 border-yellow-600 pl-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              其他项目 (非AI)
            </motion.h3>
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {projectsByCategory.other.map((project) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;