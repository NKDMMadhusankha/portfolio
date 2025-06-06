import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoaderProps {
  onComplete: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="relative">
        {/* Main spinning ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-32 h-32 border-4 border-accent-500/20 border-t-accent-500 rounded-full"
        />
        
        {/* Glowing dot */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            boxShadow: [
              "0 0 20px rgba(99, 102, 241, 0.5)",
              "0 0 40px rgba(99, 102, 241, 0.8)",
              "0 0 20px rgba(99, 102, 241, 0.5)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-0 left-0 w-8 h-8 bg-accent-500 rounded-full"
        />
        
        {/* Center initials */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-2xl font-bold text-accent-500"
          >
            MM
          </motion.div>
        </div>
        
        {/* Floating particles */}
        <motion.div
          animate={{
            y: [-20, -120],
            rotate: [0, 360],
            opacity: [1, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeOut",
            delay: 0 
          }}
          className="absolute -top-4 -left-4 w-2 h-2 bg-accent-500 rounded-full"
        />
        <motion.div
          animate={{
            y: [-20, -120],
            rotate: [0, 360],
            opacity: [1, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeOut",
            delay: 0.5 
          }}
          className="absolute -top-2 -right-6 w-1 h-1 bg-accent-500 rounded-full"
        />
        <motion.div
          animate={{
            y: [-20, -120],
            rotate: [0, 360],
            opacity: [1, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeOut",
            delay: 1 
          }}
          className="absolute -bottom-6 -left-2 w-1.5 h-1.5 bg-accent-500 rounded-full"
        />
        <motion.div
          animate={{
            y: [-20, -120],
            rotate: [0, 360],
            opacity: [1, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeOut",
            delay: 1.5 
          }}
          className="absolute -bottom-4 -right-4 w-2 h-2 bg-accent-500 rounded-full"
        />
      </div>
    </motion.div>
  );
}
