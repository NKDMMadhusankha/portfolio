import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoaderProps {
  onComplete: () => void;
}

export function LoaderMinimal({ onComplete }: LoaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress from 0 to 100 with a smooth effect
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 1;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 25);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 600);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  if (!isVisible) {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      />
    );
  }

  // Characters reveal animation sequence
  const titleText = "MITHILA";
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
    >
      <motion.div className="relative">
        {/* Brand name with character animation */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            {titleText.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  delay: 0.1 + index * 0.06, 
                  duration: 0.5,
                  ease: "easeOut" 
                }}
                className="text-5xl font-bold text-gray-300 font-mono tracking-widest inline-block"
              >
                {char}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Super minimal progress bar */}
        <div className="w-64">
          <motion.div
            className="h-[2px] bg-gray-800 relative overflow-hidden mb-8"
          >
            <motion.div
              className="absolute top-0 left-0 h-full bg-gray-400"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
            
            {/* Animated highlight effect */}
            <motion.div
              className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-gray-300 to-transparent"
              animate={{
                left: ["-10%", "100%"],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 0.5,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          {/* Progress indicator */}
          <div className="flex justify-between items-center">
            <div className="text-gray-500 text-xs font-mono tracking-widest">
              {progress < 100 ? "LOADING" : "COMPLETE"}
            </div>
            <div className="text-gray-500 text-xs font-mono">
              {progress}%
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Background subtle animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="opacity-10">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#444" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <motion.div 
          className="absolute -inset-1/4 bg-gradient-radial from-gray-800 to-transparent opacity-10"
          style={{
            borderRadius: "50%",
            width: "150%",
            height: "150%",
            top: "-25%",
            left: "-25%"
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  );
}
