import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/hooks/use-theme";

export function About() {
  const { theme } = useTheme();
  return (
    <section id="about" className={`py-20 px-4 ${theme === "dark" ? "bg-black/60 text-white" : "bg-slate-100/60 text-gray-900"}`}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          <span className="text-gradient">About Me</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className={`text-lg ${theme === "dark" ? "text-muted-foreground" : "text-gray-700"} leading-relaxed`}>
              I'm a results-driven Software Engineer with a strong focus on delivering high-quality, 
              user-centric solutions. Currently pursuing my BSc (Hons) in Software Engineering at 
              NSBM Green University, I specialize in bridging the gap between development and design 
              with keen attention to user experience and interface usability.
            </p>
            <p className={`text-lg ${theme === "dark" ? "text-muted-foreground" : "text-gray-700"} leading-relaxed`}>
              My expertise spans full-stack development using the MERN stack, machine learning with 
              Python and TensorFlow, and cloud technologies including AWS. I'm passionate about 
              contributing to all phases of the software development lifecycle, writing clean, 
              maintainable code, and building scalable systems that solve real-world problems.
            </p>
            <p className={`text-lg ${theme === "dark" ? "text-muted-foreground" : "text-gray-700"} leading-relaxed`}>
              Beyond coding, I'm a passionate musician with strong vocal, composition, and audio 
              production skills. This creative background enhances my approach to software development, 
              bringing innovation and attention to detail to every project I work on.
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge variant="secondary" className="px-4 py-2 bg-accent-500/20 text-accent-400 hover:bg-accent-500/30">
                Full-Stack Developer
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-accent-500/20 text-accent-400 hover:bg-accent-500/30">
                AI/ML Enthusiast
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-accent-500/20 text-accent-400 hover:bg-accent-500/30">
                Creative Problem Solver
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-accent-500/20 text-accent-400 hover:bg-accent-500/30">
                Musician & Producer
              </Badge>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Modern developer workspace with multiple monitors showing code" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent-500/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}