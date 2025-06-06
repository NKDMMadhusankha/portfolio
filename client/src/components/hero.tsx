import { motion } from "framer-motion";
import { Download, Mail, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
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
            <span className="text-gradient">
              Mithila Madhusankha
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            Software Engineering Undergraduate
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={downloadCV}
              className="px-8 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold glow-on-hover"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
            <Button
              variant="outline"
              onClick={scrollToContact}
              className="px-8 py-3 border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white font-semibold"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="animate-float"
        >
          <div className="w-24 h-24 mx-auto bg-gradient-to-r from-accent-500 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-2xl">
            <Code className="h-8 w-8" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
