import { motion } from "framer-motion";
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
  return (
    <section id="skills" className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          <span className="text-gradient">Technical Skills</span>
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="card-hover bg-card border-border hover:border-accent-500 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <skill.icon className={`text-4xl ${skill.color} mb-3 mx-auto`} />
                  <p className="font-semibold text-foreground">{skill.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
