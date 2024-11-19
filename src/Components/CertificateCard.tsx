import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Certificate } from "../Types/Interfaces";

const CertificateCard = ({ certificate }: { certificate: Certificate }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div className=" h-[500px] w-full max-w-[800px] mx-auto my-4 px-2 sm:px-4">
        <div className="relative w-full h-full rounded-3xl overflow-hidden backdrop-blur-xl bg-gradient-to-r from-gray-900/90 to-black/90 p-0.5">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse rounded-3xl" />
  
          <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-gray-900/50">
            <div className="relative w-full h-full md:min-h-[calc(100%-80px)]">
              {/* Image Container with Hover Detection */}
              <motion.div
                className="relative w-full h-full cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{
                    scale: isHovered ? 1.1 : 1,
                    transition: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] },
                  }}
                  className="w-full h-full"
                >
                  <motion.img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-full object-cover sm:object-contain"
                    loading="lazy"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5 },
                    }}
                  />
                </motion.div>
  
                {/* Hover Overlay */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                      animate={{
                        opacity: 1,
                        backdropFilter: "blur(8px)",
                        transition: { duration: 0.4, ease: "easeOut" },
                      }}
                      exit={{
                        opacity: 0,
                        backdropFilter: "blur(0px)",
                        transition: { duration: 0.3, ease: "easeIn" },
                      }}
                      className="absolute inset-0 bg-gradient-to-b from-blue-900/90 to-black/90 flex items-center justify-center p-4 sm:p-6"
                    >
                      <motion.div
                        className="max-w-xl text-center space-y-6"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{
                          scale: 1,
                          opacity: 1,
                          transition: { duration: 0.3, delay: 0.1 },
                        }}
                        exit={{ scale: 0.9, opacity: 0 }}
                      >
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                          {certificate.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                          {certificate.description}
                        </p>
                        <motion.div
                          className="flex flex-wrap gap-2 sm:gap-3 justify-center"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.3, delay: 0.2 },
                          }}
                        >
                          {certificate.skills.map((skill, index) => (
                            <motion.span
                              key={skill}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{
                                opacity: 1,
                                scale: 1,
                                transition: { duration: 0.3, delay: 0.1 * index },
                              }}
                              className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full bg-gradient-to-r from-blue-600/20 to-blue-400/20 text-blue-300 border border-blue-500/30 hover:border-blue-400/50 transition-colors duration-300"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
  
            {/* Bottom Info Bar */}
            <div className="absolute bottom-0 inset-x-0 min-h-[80px] md:h-[100px] bg-gradient-to-t from-black/95 via-black/80 to-transparent backdrop-blur-md p-2 sm:p-4">
              <div className="flex justify-between items-center sm:items-center gap-2 sm:gap-4">
                <div className="space-y-1">
                  <h3 className="text-base text-wrap sm:text-sm md:text-xl font-bold text-white">
                    {certificate.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-300 opacity-90">
                    {certificate.issuer} • {certificate.date}
                  </p>
                </div>
  
                <motion.a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-blue-600/30 to-blue-400/30 hover:from-blue-600/40 hover:to-blue-400/40 text-blue-300 transition-all duration-300 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/50 text-xs sm:text-sm"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Verify Certificate</span>
                  <FaExternalLinkAlt className="text-sm sm:text-base" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default CertificateCard;