import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCode, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { BiMouseAlt } from 'react-icons/bi';
import Background from './Background';
import min1 from '../assets/portraint1.jpg'


const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  
  // Animated counter for stats
  const CounterAnimation = ({ value }: { value: number }) => {
    const [count, setCount] = useState(0);
    const nodeRef = useRef<HTMLSpanElement>(null);
    
    useEffect(() => {
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;
      let currentStep = 0;
      
      const timer = setInterval(() => {
        currentStep += 1;
        const progress = currentStep / steps;
        setCount(Math.floor(progress * value));
        
        if (currentStep === steps) {
          clearInterval(timer);
        }
      }, stepTime);
      
      return () => clearInterval(timer);
    }, [value]);
    
    return <span ref={nodeRef}>{count}</span>;
  };

  const stats = [
    { number: 50, label: 'Projects Completed', icon: '🚀' },
    { number: 15, label: 'Technologies', icon: '⚡' },
    { number: 5, label: 'Years Experience', icon: '💻' },
  ];

  const technologies = [
    { name: 'React', color: 'from-cyan-400 to-blue-500' },
    { name: 'Node.js', color: 'from-green-400 to-green-600' },
    { name: 'MongoDB', color: 'from-emerald-400 to-green-600' },
    { name: 'Python', color: 'from-yellow-400 to-yellow-600' },
    { name: 'Java', color: 'from-indigo-400 to-indigo-600' },
    { name: 'JavaScript', color: 'from-orange-400 to-orange-600' },
    { name: 'TypeScript', color: 'from-blue-400 to-blue-600' },
    { name: 'Git', color: 'from-pink-400 to-pink-600' },
    { name: 'SQL', color: 'from-amber-600 to-amber-900' },
    { name: 'PostgreSQL', color: 'from-lime-600 to-lime-900' },
  ];

  return (
    <div className="relative w-full">
      <motion.div 
        style={{ y, opacity }}
        className="relative min-h-screen w-full overflow-hidden bg-black"
      >
        <Background />
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              
              {/* Left Column - Portrait & Stats */}
              <motion.div 
                className="w-full lg:w-1/2 relative"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                {/* Portrait Container */}
                <div className="mt-32 relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 mx-auto mb-8 lg:mb-12">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <img
                    src={min1} // Fixed image path
                    alt="Developer Portrait"
                    className="absolute inset-2 rounded-full object-cover border-4 border-white/10"
                  />
                  {/* Orbital Rings - Hidden on mobile */}
                  <div className="hidden sm:block absolute inset-0 border-4 border-dashed border-blue-500/30 rounded-full animate-spin-slow" />
                  <div className="hidden sm:block absolute inset-[-10px] border-4 border-dashed border-purple-500/20 rounded-full animate-spin-slower" />
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                  {stats.map((stat) => (
                    <motion.div
                      key={stat.label}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", duration: 0.8 }}
                      className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-2 sm:p-4 border border-gray-700/50 hover:border-blue-500/50"
                    >
                      <span className="text-xl sm:text-2xl mb-1 sm:mb-2 block">{stat.icon}</span>
                      <motion.span 
                        className="block text-xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                      >
                        <CounterAnimation value={stat.number} />+
                      </motion.span>
                      <span className="text-xs sm:text-sm text-gray-400">{stat.label}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4 sm:gap-6 mt-4 sm:mt-8">
                  {[FaGithub, FaLinkedin, FaTwitter].map((Icon, index) => (
                    <motion.a
                      target='_blank'
                      key={index}
                      href={index === 0 ? 'https://github.com' 
                        : index === 1 ? 'https://linkedin.com' 
                        : 'https://twitter.com'
                      }
                      whileHover={{ scale: 1.2, y: -5 }}
                      className="text-xl sm:text-2xl text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <Icon />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Right Column */}
              <motion.div 
                className="w-full lg:w-1/2 text-center lg:text-left lg:mt-0"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h1 
                  className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-4 sm:mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 bg-clip-text w-full text-transparent -ml-10 mb-10">
                    {Array.from('Sadid Sayeed').map((letter, index) => (
                      <motion.span 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        style={{ color: `hsl(${index * 10}, 80%, 60%)` }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </span>
                  <br />
                  <span className="text-white text-3xl flex items-center justify-center gap-2 tracking-wide mt-4">
                    <FaCode /> Full Stack Developer
                  </span>
                </motion.h1>

                <motion.p 
                  className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed px-4 lg:px-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  I design and build full web solutions, blending user-friendly interfaces with 
                  powerful backends to bring ideas to life.
                  <br />
                </motion.p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
                  {technologies.map((tech) => (
                    <motion.span
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0}}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                        textShadow: '0 0 5px rgba(255, 255, 255, 0.5)',
                        transition: { duration: 0 },
                      }}
                      className={`px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full bg-gradient-to-r ${tech.color} text-white font-medium shadow-lg`}
                    >
                      {tech.name}
                    </motion.span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex lg:flex-col gap-4">
  {/* Button: View Projects */}
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 px-6 sm:px-8 py-3 rounded-full font-semibold shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
    onClick={() => {
      const projectsSection = document.getElementById("projects");
      projectsSection?.scrollIntoView({ behavior: "smooth" });
    }}
  >
    View Projects
  </motion.button>

  {/* Button: Contact Me */}
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="w-full sm:w-auto bg-neutral-900/50 backdrop-blur-sm px-6 sm:px-8 py-3 rounded-full font-semibold border border-neutral-700/50 flex items-center justify-center gap-2 text-neutral-300"
    onClick={() => {
      const contactSection = document.getElementById("contact");
      contactSection?.scrollIntoView({ behavior: "smooth" });
    }}
  >
    Contact Me
  </motion.button>
</div>

              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="hidden sm:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center gap-2"
        >
          <BiMouseAlt className="text-2xl text-white/50" />
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;