import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function About() {
  return (
    <section id="about" className="py-20 px-4">
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
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Software Engineering undergraduate with a deep love for creating innovative digital solutions. 
              My journey in technology began with curiosity and has evolved into a comprehensive understanding of modern development practices.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently pursuing my degree in Software Engineering, I focus on full-stack development, 
              database design, and emerging technologies. I believe in writing clean, efficient code 
              and creating user-centered applications that solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge variant="secondary" className="px-4 py-2 bg-accent-500/20 text-accent-400 hover:bg-accent-500/30">
                Problem Solver
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-accent-500/20 text-accent-400 hover:bg-accent-500/30">
                Team Player
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-accent-500/20 text-accent-400 hover:bg-accent-500/30">
                Quick Learner
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
