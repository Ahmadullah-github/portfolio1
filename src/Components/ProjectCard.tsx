import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { BiChevronRight } from 'react-icons/bi';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Project } from '../Types/Interfaces';

const ProjectCard = ({ project }: { project: Project }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <motion.div
        layout
        className="relative h-auto bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Project Image with Overlay */}
        <div 
          className="relative h-48 overflow-hidden cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transform transition-transform duration-500"
            style={{
              transform: isHovered ? 'scale(1.1)' : 'scale(1)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
              {project.category}
            </span>
          </div>
  
          {/* Hover Overlay - Only on Image */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-gradient-to-b from-gray-900/95 to-gray-900/95 p-6 flex flex-col justify-center backdrop-blur-sm"
              >
                <FaCode className="text-blue-400 mb-4" size={24} />
                <h4 className="text-lg font-bold mb-4 text-white">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <BiChevronRight className="text-blue-400" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
  
        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>
  
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techs.map((tech) => (
              <span
                key={tech.name}
                className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${tech.color} text-white shadow-sm`}
              >
                {tech.name}
              </span>
            ))}
          </div>
  
          {/* Action Buttons */}
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
              >
                <FaGithub size={20} />
              </motion.a>
              {project.siteLink && (
                <motion.a
                  href={project.siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
                >
                  <FaExternalLinkAlt size={18} />
                </motion.a>
              )}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-colors text-sm font-medium"
              onClick={() => {/* Add detail view handler */}}
            >
              View Details <BiChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  };
  
  export default ProjectCard;