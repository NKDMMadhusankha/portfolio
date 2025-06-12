import { motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";

export function Footer() {
  const { theme } = useTheme();
  
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];
  
  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };
  
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-10 border-t bg-black text-white font-['Roboto_Mono',monospace] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Three column layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6"
        >
          {/* Left column - Name/description */}
          <motion.div variants={itemVariants}>
            <motion.h2 
              className="text-xl font-bold tracking-tight font-['Roboto_Mono',monospace]"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-white">Mithila Madhusankha</span>
            </motion.h2>
            
            <motion.p
              className="mt-2 text-sm text-gray-300"
            >
              Passionate full-stack developer crafting elegant solutions with modern technologies.
            </motion.p>
          </motion.div>
          
          {/* Middle column - Quick Links */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="flex flex-col gap-4 items-center text-center">
              {/* Quick Links Heading */}
              <motion.h3
                className="text-base font-medium mb-1 text-white"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Quick Links
              </motion.h3>
              
              {/* Navigation Links - Vertical Layout */}
              <motion.nav className="flex flex-col space-y-2 items-center">
                {navLinks.map((link, index) => (
                  <motion.a 
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-gray-200 hover:underline"
                    whileHover={{ 
                      scale: 1.05, 
                      color: "rgba(255,255,255,1)",
                      textShadow: "0 0 8px rgb(255,255,255,0.5)"
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { 
                        opacity: 1, 
                        y: 0, 
                        transition: { delay: 0.1 * index }
                      }
                    }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </motion.nav>
            </div>
          </motion.div>
          
          {/* Right column - Email */}
          <motion.div variants={itemVariants} className="flex flex-col justify-start md:justify-start items-start md:items-end">
            <motion.p
              className="text-sm text-gray-300"
              whileHover={{ scale: 1.02 }}
            >
              Email: <motion.a 
                href="mailto:mithilamadhusankha@gmail.com" 
                className="hover:underline"
                whileHover={{ 
                  color: "#ffffff",
                  textShadow: "0 0 8px rgba(255,255,255,0.5)"
                }}
              >
                mithilamadhusankha@gmail.com
              </motion.a>
            </motion.p>
            
            <motion.p
              className="text-sm mt-1 text-gray-300"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Address: Moratuwa, Sri Lanka
            </motion.p>
          </motion.div>
        </motion.div>
        
        {/* Simple horizontal divider with animation */}
        <motion.div 
          className="w-full h-px bg-gray-600 opacity-50 mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        ></motion.div>
        
        {/* Copyright only - clean and professional */}
        <div className="flex justify-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-xs text-gray-400"
          >
            © {new Date().getFullYear()} Mithila Madhusankha. All rights reserved.
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
}
