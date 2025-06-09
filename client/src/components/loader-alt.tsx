import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoaderProps {
  onComplete: () => void;
}

export function LoaderAlt({ onComplete }: LoaderProps) {
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
      >
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.1, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold tracking-widest text-transparent font-mono"
          style={{ WebkitTextStroke: '0.5px rgba(255,255,255,0.2)' }}
        >
          MITHILA
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="relative w-64">
        {/* Top brand name with reveal animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 w-full text-center"
        >
          <h1 className="text-6xl font-bold text-gray-200 font-mono tracking-wider inline-block relative">
            MITHILA
            <motion.span
              initial={{ width: 0 }}
              animate={{ 
                width: ["0%", "100%"],
                left: ["0%", "0%"]
              }}
              transition={{ 
                duration: 1.5, 
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute bottom-0 left-0 h-[2px] bg-gray-500"
              style={{ boxShadow: "0 0 8px rgba(200, 200, 200, 0.5)" }}
            />
          </h1>
        </motion.div>
        
        {/* Split line progress indicator */}
        <div className="mb-16">
          <div className="text-sm text-gray-500 font-mono mb-2 flex justify-between">
            <span>LOADING</span>
            <span>{progress}%</span>
          </div>
          
          <div className="relative h-[2px] w-full bg-gray-900">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gray-500"
              style={{ width: `${progress}%` }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "easeOut" }}
            />
          </div>
        </div>
        
        {/* Loading elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full"
        >
          {/* Decorative segmented loading display */}
          <div className="flex flex-col gap-3 mb-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex space-x-1">
                {Array.from({ length: 16 }).map((_, j) => {
                  const isActive = (i * 16 + j) / 48 <= progress / 100;
                  return (
                    <motion.div 
                      key={j}
                      initial={{ opacity: 0.3 }}
                      animate={{ 
                        opacity: isActive ? 0.8 : 0.3,
                        backgroundColor: isActive ? "#666" : "#333"
                      }}
                      transition={{ duration: 0.2 }}
                      className="h-1 flex-1"
                      style={{ borderRadius: "1px" }}
                    />
                  );
                })}
              </div>
            ))}
          </div>
          
          {/* Status message */}
          <div className="flex justify-between items-center">
            <motion.div 
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-xs text-gray-600 font-mono"
            >
              {progress < 30 && "INITIALIZING..."}
              {progress >= 30 && progress < 70 && "LOADING ASSETS..."}
              {progress >= 70 && progress < 100 && "PREPARING DATA..."}
              {progress >= 100 && "READY"}
            </motion.div>
            
            {/* Simple dot indicators */}
            <div className="flex space-x-1.5">
              {[0, 1, 2].map((dot) => (
                <motion.div
                  key={dot}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: dot * 0.3
                  }}
                  className="w-1 h-1 rounded-full bg-gray-500"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
