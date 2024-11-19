import { motion } from "framer-motion";

const Background = () => {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
  
        {/* Animated Gradient Spotlight */}
        <div className="absolute inset-0">
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-spotlight bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(68,51,255,0.1)_360deg)]" />
        </div>
  
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
  
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                scale: 0,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 2, 1],
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-1 h-1 bg-blue-500/30 rounded-full blur-sm"
            />
          ))}
        </div>
  
        {/* Glow Effects */}
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-[120px]" />
      </div>
    );
  };
  
export default Background;