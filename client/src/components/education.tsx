import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

export function Education() {
  const { theme } = useTheme();
  const coreModules = [
    "Data Structures & Algorithms",
    "Software Engineering Principles", 
    "Database Systems",
    "Web Development"
  ];

  const specializedAreas = [
    "Full-Stack Development",
    "Mobile Application Development",
    "Cloud Computing", 
    "Software Testing & QA"
  ];

  return (
    <section 
      id="education" 
      className={`py-20 px-4 ${theme === "dark" ? "bg-black/60 text-white" : "bg-slate-100/60 text-gray-900"} font-['Roboto_Mono',monospace] overflow-hidden`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 font-['Roboto_Mono',monospace]"
        >
          <span className={`${theme === "dark" ? "text-white" : "text-black"}`}>Education</span>
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card border-border hover:border-accent-500 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center mr-4">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-foreground">Bachelor of Software Engineering</h3>
                      <p className="text-xl text-accent-500">University of Technology</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground">2022 - 2026 (Expected)</p>
                    <p className="text-accent-500 font-semibold">GPA: 3.8/4.0</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-accent-400">Core Modules:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {coreModules.map((module) => (
                        <li key={module} className="flex items-center">
                          <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                          {module}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-accent-400">Specialized Areas:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {specializedAreas.map((area) => (
                        <li key={area} className="flex items-center">
                          <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
