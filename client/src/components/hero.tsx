import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { useEffect, useState } from "react";

export function Hero() {
  const { theme } = useTheme();
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
  
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
            <a
              href="/portfolio/docs/cv.pdf"
              download="Mithila_Madhusankha_CV.pdf"
              className={`px-8 py-3 flex items-center justify-center no-underline rounded-md font-semibold transition-all duration-300 ${
                theme === "dark"
                  ? "bg-gray-800 hover:bg-gray-700 text-white"
                  : "bg-gray-900 hover:bg-black text-white"
              }`}
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
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