import { motion } from "framer-motion";
import { SiGoogle, SiReact, SiUdemy } from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/hooks/use-theme";

const certifications = [
  {
    title: "Google Cloud Platform",
    description: "Cloud Architecture & Development",
    provider: "Coursera",
    year: "2024",
    icon: SiGoogle,
    color: "text-blue-500",
  },
  {
    title: "Advanced React Development",
    description: "Meta Frontend Developer Certificate",
    provider: "Coursera",
    year: "2023",
    icon: SiReact,
    color: "text-blue-400",
  },
  {
    title: "Database Design & Management",
    description: "Complete SQL & Database Course",
    provider: "Udemy",
    year: "2023",
    icon: SiUdemy,
    color: "text-purple-500",
  },
];

export function Certifications() {
  const { theme } = useTheme();
  
  return (
    <section id="certifications" className={`py-20 px-4 ${theme === "dark" ? "bg-black/60 text-white" : "bg-slate-100/60 text-gray-900"} font-['Roboto_Mono',monospace]`}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 font-['Roboto_Mono',monospace] max-w-6xl mx-auto"
        >
          <span className={`${theme === "dark" ? "text-white" : "text-gray-900"} font-['Roboto_Mono',monospace]`}>Certifications</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover bg-card border-border hover:border-accent-500 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <cert.icon className={`text-3xl ${cert.color} mr-4`} />
                    <h3 className="text-lg font-semibold text-foreground">{cert.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-3">{cert.description}</p>
                  <span className="text-accent-500 text-sm font-medium">
                    {cert.provider} • {cert.year}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
