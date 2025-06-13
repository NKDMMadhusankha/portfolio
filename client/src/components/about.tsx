import { motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";

export function About() {
  const { theme } = useTheme();
  return (
    <section
      id="about"
      className={`py-20 px-4 ${theme === "dark" ? "bg-black/60 text-white" : "bg-slate-100/60 text-gray-900"} font-['Roboto_Mono',monospace]`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-left md:text-left mb-5 font-['Roboto_Mono',monospace] about-title"
        >
          <span className={`${theme === "dark" ? "text-white" : "text-gray-900"} font-['Roboto_Mono',monospace]`}>About Me</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center font-['Roboto_Mono',monospace]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8 font-['Roboto_Mono',monospace]"
          >
            <p className={`text-lg ${theme === "dark" ? "text-muted-foreground" : "text-gray-700"} leading-relaxed font-['Roboto_Mono',monospace]`}>
              I'm a results-driven Software Engineer with a strong focus on delivering high-quality, 
              user-centric solutions. Currently pursuing my BSc (Hons) in Software Engineering at 
              NSBM Green University, I specialize in bridging the gap between development and design 
              with keen attention to user experience and interface usability.
            </p>
            <p className={`text-lg ${theme === "dark" ? "text-muted-foreground" : "text-gray-700"} leading-relaxed font-['Roboto_Mono',monospace]`}>
              My expertise spans full-stack development using the MERN stack, machine learning with 
              Python and TensorFlow, and cloud technologies including AWS. I'm passionate about 
              contributing to all phases of the software development lifecycle, writing clean, 
              maintainable code, and building scalable systems that solve real-world problems.
            </p>
            <p className={`text-lg ${theme === "dark" ? "text-muted-foreground" : "text-gray-700"} leading-relaxed font-['Roboto_Mono',monospace]`}>
              Beyond coding, I'm a passionate musician with strong vocal, composition, and audio 
              production skills. This creative background enhances my approach to software development, 
              bringing innovation and attention to detail to every project I work on.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative font-['Roboto_Mono',monospace]"
          >
            <div className="grid grid-cols-2 gap-4 h-[450px]">
              {/* Left column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="col-span-1 h-full rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src="images/img1.jpeg"
                  alt="Modern developer workspace"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Right column - positioned lower */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
                className="col-span-1 h-full rounded-xl overflow-hidden shadow-lg mt-16"
              >
                <img
                  src="images/img2.jpeg"
                  alt="Creative workspace"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Add mobile-specific styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @media only screen and (max-width: 767px) {
            .about-title {
              text-align: center !important;
              width: 100% !important;
            }
          }
        `
      }} />
    </section>
  );
}