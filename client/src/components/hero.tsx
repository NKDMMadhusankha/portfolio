import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { useEffect, useState } from "react";
import "../styles/stars.css";

export function Hero() {
  const { theme } = useTheme();
  const [stars, setStars] = useState<{ 
    id: number; 
    x: number; 
    y: number; 
    size: number; 
    opacity: number;
    floatX?: number;
    floatY?: number;
    floatDuration?: number;
  }[]>([]);
  const [shootingStars, setShootingStars] = useState<{ id: number; x: number; y: number; delay: number; rotation: number }[]>([]);
  const [currentProfessionIndex, setCurrentProfessionIndex] = useState(0);
  
  const professions = [
    "Software Engineer",
    "Full-Stack Developer",
    "UI/UX Engineer",
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack Developer",
    "Machine Learning Enthusiast",
    "Creative Technologist",
    "Web Application Developer",
    "Cloud-Ready Developer",
    "Problem Solver",
  ];
  
  useEffect(() => {
    const professionInterval = setInterval(() => {
      setCurrentProfessionIndex(prevIndex => 
        prevIndex === professions.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change profession every 3 seconds
    
    return () => clearInterval(professionInterval);
  }, []);

  useEffect(() => {
    // Create random stars with an even lower count
    const starCount = 20; // Further reduced count
    
    // Create stars with adjusted distribution
    const newStars = [];
    
    // Stars distributed more toward edges and corners
    for (let i = 0; i < starCount * 0.7; i++) {
      // More stars near edges
      const edgeBias = Math.random() > 0.5;
      const x = edgeBias 
        ? (Math.random() > 0.5 ? Math.random() * 30 : 70 + Math.random() * 30) 
        : Math.random() * 100;
      const y = Math.random() * 70; // More in upper portion
      
      newStars.push({
        id: i,
        x,
        y,
        size: Math.random() * 2.5 + 0.5, // Slightly smaller stars
        opacity: Math.random() * 0.6 + 0.2, // More subtle
        floatX: Math.random() * 1.5 - 0.75, // Less movement
        floatY: Math.random() * 1.5 - 0.75,
        floatDuration: Math.random() * 20 + 15, // Slower movement
      });
    }
    
    // Some stars in middle area, fewer
    for (let i = starCount * 0.7; i < starCount; i++) {
      newStars.push({
        id: i,
        x: 20 + Math.random() * 60, // More central distribution
        y: 40 + (Math.random() * 50), // Lower portion
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1, // More subtle
        floatX: Math.random() * 1.5 - 0.75,
        floatY: Math.random() * 1.5 - 0.75,
        floatDuration: Math.random() * 20 + 15,
      });
    }
    
    setStars(newStars);
    
    // Create occasional shooting stars - reduced count even further
    const shootingStarCount = 1; // Just 1 shooting star
    const newShootingStars = Array.from({ length: shootingStarCount }).map((_, i) => ({
      id: i,
      // Position in upper right area
      x: 60 + (Math.random() * 30),
      y: 5 + (Math.random() * 15),
      delay: 8 + (Math.random() * 20), // Much longer delays
      rotation: Math.random() * 40 + 30,
    }));
    setShootingStars(newShootingStars);
  }, []);
  
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/api/download-cv';
    link.download = 'Mithila_Madhusankha_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, url: "https://github.com/NKDMMadhusankha", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, url: "http://www.linkedin.com/in/mithila-madhusankha", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, url: "https://x.com/madhusankha_", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, url: "https://www.instagram.com/mithila_madhusankha/", label: "Instagram" },
    { icon: <Facebook className="h-5 w-5" />, url: "https://www.facebook.com/mithila.madushanka.37/", label: "Facebook" },
  ];

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden ${theme === "dark" ? "bg-black/60" : "bg-slate-100/60"}`}>
      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star, index) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, star.opacity, star.opacity * 0.2, star.opacity, 0],
              scale: [0.8, 1, 1.2, 1, 0.8],
              x: [0, (star.floatX || 0) * 15, 0], // Floating motion in X direction
              y: [0, (star.floatY || 0) * 15, 0], // Floating motion in Y direction
            }}
            transition={{
              repeat: Infinity,
              duration: star.floatDuration || 8,
              ease: "easeInOut",
              delay: index * 0.2, // Staggered start for each star
              times: [0, 0.2, 0.5, 0.8, 1], // Control timing of opacity changes
            }}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
          />
        ))}
        
        {shootingStars.map((star) => (
          <div
            key={`shooting-${star.id}`}
            className="shooting-star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              transform: `rotate(${star.rotation}deg)`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <span className={theme === "dark" ? "text-gray-100" : "text-gray-800"}>
              Mithila Madhusankha
            </span>
          </motion.h1>
          
          <motion.div
            className="text-xl md:text-2xl text-muted-foreground mb-8 h-8"
          >
            <motion.p
              key={currentProfessionIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              {professions[currentProfessionIndex]}
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={downloadCV}
              className={`px-8 py-3 ${
                theme === "dark" 
                  ? "bg-gray-800 hover:bg-gray-700 text-white" 
                  : "bg-gray-900 hover:bg-black text-white"
              } font-semibold transition-all duration-300`}
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
            <Button
              variant="outline"
              onClick={scrollToContact}
              className={`px-8 py-3 border-2 ${
                theme === "dark"
                  ? "border-gray-600 text-gray-300 hover:bg-gray-800"
                  : "border-gray-800 text-gray-800 hover:bg-gray-900 hover:text-white"
              } font-semibold transition-all duration-300`}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </motion.div>
          
          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center mt-8 gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded-full transition-colors ${
                  theme === "dark" 
                    ? "text-gray-400 hover:text-white hover:bg-gray-800" 
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }`}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
