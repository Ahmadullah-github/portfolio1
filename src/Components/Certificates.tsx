import {  motion } from 'framer-motion';
import { useState} from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { Certificate } from '../Types/Interfaces';
import CertificateCard from './CertificateCard';


const certificates: Certificate[] = [
    {
      id: 1,
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2023",
      image: "/certificates/responsive-web.png",
      skills: ["HTML5", "CSS3", "Flexbox", "Grid", "Responsive Design"],
      credentialUrl: "https://www.freecodecamp.org/certification/...",
      description: "Comprehensive certification covering modern responsive web design principles and practices."
    },
    {
      id: 2,
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2023",
      image: "/certificates/javascript-algorithms.png",
      skills: ["JavaScript", "Data Structures", "Algorithms", "ES6"],
      credentialUrl: "https://www.freecodecamp.org/certification/...",
      description: "In-depth course on JavaScript algorithms, problem-solving, and data structures."
    },
    {
      id: 3,
      title: "Front-End Development Libraries",
      issuer: "freeCodeCamp",
      date: "2023",
      image: "/certificates/frontend-libraries.png",
      skills: ["React", "Redux", "Bootstrap", "jQuery"],
      credentialUrl: "https://www.freecodecamp.org/certification/...",
      description: "Focused training on popular front-end libraries, including React, Redux, and Bootstrap."
    },
    {
      id: 4,
      title: "Back End Development and APIs",
      issuer: "freeCodeCamp",
      date: "2023",
      image: "/certificates/backend-apis.png",
      skills: ["Node.js", "Express", "MongoDB", "API Development"],
      credentialUrl: "https://www.freecodecamp.org/certification/...",
      description: "Covers server-side development, RESTful APIs, and database management with Node.js and MongoDB."
    },
    {
      id: 5,
      title: "Data Analysis with Python",
      issuer: "freeCodeCamp",
      date: "2023",
      image: "/certificates/data-analysis-python.png",
      skills: ["Python", "Pandas", "NumPy", "Data Visualization", "Data Analysis"],
      credentialUrl: "https://www.freecodecamp.org/certification/...",
      description: "Training in Python for data analysis, covering libraries such as Pandas and NumPy with practical applications."
    }
  ];
  
const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSlideChange = (newIndex: number) => {
    if (isAnimating) return; // Prevent rapid clicking
    
    setIsAnimating(true);
    setCurrentIndex(newIndex);
    
    // Reset animation lock after transition
    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Match this with your transition duration
  };

  const nextSlide = () => {
    const newIndex = currentIndex === certificates.length - 1 ? 0 : currentIndex + 1;
    handleSlideChange(newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? certificates.length - 1 : currentIndex - 1;
    handleSlideChange(newIndex);
  };

  return (
    <section className="relative w-full bg-black py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(68,51,255,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      </div>

      <div className="relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <FaGraduationCap className="text-5xl text-blue-500" />
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
          </motion.div>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Professional certifications and achievements in web development and programming.
          </p>
        </div>

        {/* Certificates Carousel */}
        <div className="relative max-w-[800px] mx-auto">
          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute -left-20 top-1/2  z-10 p-4 rounded-full bg-gray-900/80 text-white hover:bg-gray-800 backdrop-blur-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <BiChevronLeft size={30} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute -right-20 top-1/2 z-10 p-4 rounded-full bg-gray-900/80 text-white hover:bg-gray-800 backdrop-blur-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <BiChevronRight size={30} />
          </motion.button>

          {/* Certificates Container */}
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex"
              animate={{ x: `${-currentIndex * 100}%` }}
              transition={{ type: "tween", duration: 0.5 }}
              drag="x"
              dragConstraints={{ left: -((certificates.length - 1) * 100), right: 0 }}
              onDragEnd={(_event, info) => {
                const swipeThreshold = 50;
                if (info.offset.x < -swipeThreshold) {
                  nextSlide();
                } else if (info.offset.x > swipeThreshold) {
                  prevSlide();
                }
              }}
            >
              {certificates.map((certificate) => (
                <div key={certificate.id} className="w-full flex-shrink-0">
                  <CertificateCard certificate={certificate} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                disabled={isAnimating}
                className={`w-4 h-4 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-blue-500 scale-125' 
                    : 'bg-gray-500 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;