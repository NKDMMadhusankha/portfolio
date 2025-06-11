import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiMysql, 
  SiGit, 
  SiDocker, 
  SiTypescript, 
  SiTailwindcss, 
  SiExpress 
} from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/hooks/use-theme";

const skills = [
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
  { name: "React", icon: SiReact, color: "text-blue-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-400" },
  { name: "Express", icon: SiExpress, color: "text-gray-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "Docker", icon: SiDocker, color: "text-blue-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
];

export function Skills() {
  const { theme } = useTheme();
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  
  // Calculate width dynamically based on the number of skills
  const skillWidth = 220; // Further reduced from 260px to 220px
  const totalWidth = skills.length * skillWidth;
  
  // Create duplicate arrays for a continuous scrolling effect
  const duplicatedSkills = [...skills, ...skills, ...skills];
  
  // Start the animation on component mount
  useEffect(() => {
    const startScrolling = () => {
      // First row animation - move by exactly the width of all skills (left to right)
      controls1.start({
        x: [0, -totalWidth],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 90, // Increased from 30 to 50 for slower animation
            ease: "linear"
          }
        }
      });
      
      // Second row animation - opposite direction (right to left)
      controls2.start({
        x: [-totalWidth, 0],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 100, // Increased from 25 to 45 for slower animation
            ease: "linear"
          }
        }
      });
    };
    
    startScrolling();
  }, [controls1, controls2, totalWidth]);
  
  // Functions to pause/resume animation on hover
  const pauseAnimation = () => {
    controls1.stop();
    controls2.stop();
  };
  
  const resumeAnimation = () => {
    // Just restart the animation from the beginning
    controls1.start({
      x: [0, -totalWidth],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 50, // Increased from 30 to 50 for slower animation
          ease: "linear"
        }
      }
    });
    
    controls2.start({
      x: [-totalWidth, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 45, // Increased from 25 to 45 for slower animation
          ease: "linear"
        }
      }
    });
  };
  
  return (
    <section
      id="skills"
      className={`py-20 px-4 ${theme === "dark" ? "bg-black/60 text-white" : "bg-slate-100/60 text-gray-900"} font-['Roboto_Mono',monospace] overflow-hidden`}
    >
      <div className="mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-5 font-['Roboto_Mono',monospace] max-w-6xl mx-auto"
        >
          <span className={`${theme === "dark" ? "text-white" : "text-gray-900"} font-['Roboto_Mono',monospace]`}>Technical Skills</span>
        </motion.h2>
        
        <div 
          className="w-full overflow-hidden py-8 relative"
          onMouseEnter={pauseAnimation}
          onMouseLeave={resumeAnimation}
        >
          {/* First row */}
          <motion.div 
            className="flex mb-6"
            style={{ width: `${totalWidth * 3}px` }}
            animate={controls1}
          >
            {duplicatedSkills.map((skill, index) => (
              <div key={`row1-${skill.name}-${index}`} className="w-52 px-2 flex-shrink-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className={`card-hover bg-card border-border hover:border-accent-500 transition-all duration-300 ${theme === "light" ? "shadow-md border-slate-300" : ""}`}>
                    <CardContent className="p-3 text-center">
                      <skill.icon className={`text-2xl ${skill.color} mb-1 mx-auto`} />
                      <p className={`font-semibold text-xs ${theme === "light" ? "text-slate-800" : "text-foreground"}`}>{skill.name}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            ))}
          </motion.div>
          
          {/* Second row - opposite direction */}
          <motion.div 
            className="flex"
            style={{ width: `${totalWidth * 3}px` }}
            animate={controls2}
          >
            {duplicatedSkills.slice().reverse().map((skill, index) => (
              <div key={`row2-${skill.name}-${index}`} className="w-52 px-2 flex-shrink-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className={`card-hover bg-card border-border hover:border-accent-500 transition-all duration-300 ${theme === "light" ? "shadow-md border-slate-300" : ""}`}>
                    <CardContent className="p-3 text-center">
                      <skill.icon className={`text-2xl ${skill.color} mb-1 mx-auto`} />
                      <p className={`font-semibold text-xs ${theme === "light" ? "text-slate-800" : "text-foreground"}`}>{skill.name}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
