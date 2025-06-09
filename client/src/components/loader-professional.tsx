import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoaderProps {
  onComplete: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
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
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="flex flex-col items-center">
        {/* Clean logo presentation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-200 font-mono tracking-wider">MITHILA</h1>
        </motion.div>
        
        {/* Professional progress bar */}
        <div className="w-64">
          {/* Simple progress bar with indicator */}
          <div className="mb-2 h-[3px] w-full bg-gray-900 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gray-400"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>
          
          {/* Simple percentage indicator */}
          <div className="flex justify-end">
            <div className="text-gray-500 text-xs font-mono">
              {progress}%
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
