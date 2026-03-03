import { motion } from "framer-motion";
import { MapPin, Calendar, ExternalLink } from "lucide-react";
import avanzaImg from "@/../images/avanza.png"; 
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/hooks/use-theme";

const experiences = [
  {
    title: "Associate Full Stack Developer",
    company: "Avanza Labs",
    location: "Sri Lanka",
    duration: "2026 March – Present",
    type: "Full-time",
    description:
      "Started my professional career as an Associate Full Stack Developer, contributing to end to end web application development while working with worldwide clients and diverse industry projects.",
    responsibilities: [
      "Designing and developing scalable web applications",
      "Building responsive frontend interfaces and reusable components",
      "Developing and integrating RESTful APIs",
      "Managing databases and optimizing data flow",
    ],
    // tech: ["React", "TypeScript", "Tailwind CSS", "Git"],
    link: "https://www.avanza.lk/",
    current: true,
  },
];

export function Experience() {
  const { theme } = useTheme();

  return (
    <section
      id="experience"
      className={`py-20 px-4 ${
        theme === "dark"
          ? "bg-black/60 text-white"
          : "bg-slate-100/60 text-gray-900"
      } font-['Roboto_Mono',monospace]`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-['Roboto_Mono',monospace]">
            <span className={theme === "dark" ? "text-white" : "text-gray-900"}>
              Experience
            </span>
          </h2>
          <div
            className={`w-24 h-1 mt-3 mx-auto rounded ${
              theme === "dark" ? "bg-gray-500" : "bg-gray-600"
            }`}
          />
          <p
            className={`mt-4 max-w-xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            My professional journey and work experience
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className={`absolute left-6 md:left-1/2 top-0 h-full w-0.5 ${
              theme === "dark" ? "bg-gray-700" : "bg-gray-300"
            } md:-translate-x-1/2`}
          />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3, margin: "-50px" }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                } justify-start`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-6 md:left-1/2 top-6 w-5 h-5 rounded-full z-10 -translate-x-1/2 flex items-center justify-center ${
                    theme === "dark"
                      ? "bg-gray-500 border-4 border-gray-900"
                      : "bg-gray-600 border-4 border-white"
                  } ${exp.current ? "ring-2 ring-offset-2 ring-gray-400" : ""}`}
                >
                  {exp.current && (
                    <span className="absolute w-2.5 h-2.5 rounded-full bg-green-400 animate-ping opacity-75" />
                  )}
                </div>

                {/* Card */}
                <div className="ml-14 md:ml-0 md:w-[calc(50%-40px)]">
                  <Card
                    className={`transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-default ${
                      theme === "dark"
                        ? "bg-gray-900/80 border-gray-700 shadow-[0_0_15px_rgba(75,75,75,0.1)]"
                        : "bg-white/90 border-gray-200 shadow-lg"
                    }`}
                  >
                    <CardContent className="p-0">
                      {/* Top accent bar */}
                      <div
                        className={`h-1 w-full rounded-t-lg ${
                          theme === "dark" ? "bg-gray-500/80" : "bg-gray-600/80"
                        }`}
                      />

                      <div className="p-5">
                        {/* Header row */}
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <div className="flex items-start gap-3">
                            <img src={avanzaImg} alt="Avanza Labs" className="w-9 h-9 object-contain shrink-0 rounded-sm" />
                            <div>
                              <h3
                                className={`text-base font-bold ${
                                  theme === "dark" ? "text-white" : "text-gray-900"
                                }`}
                              >
                                {exp.title}
                              </h3>
                              <div className="flex items-center gap-1 mt-0.5">
                                <span
                                  className={`text-sm font-semibold ${
                                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                                  }`}
                                >
                                  {exp.company}
                                </span>
                                {exp.link && (
                                  <a
                                    href={exp.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${
                                      theme === "dark"
                                        ? "text-gray-500 hover:text-gray-300"
                                        : "text-gray-400 hover:text-gray-700"
                                    } transition-colors`}
                                  >
                                    <ExternalLink className="w-3.5 h-3.5" />
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Current badge */}
                          {exp.current && (
                            <span
                              className={`shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                                theme === "dark"
                                  ? "bg-green-900/40 text-green-400 border border-green-700/50"
                                  : "bg-green-50 text-green-700 border border-green-200"
                              }`}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                              Current
                            </span>
                          )}
                        </div>

                        {/* Meta row */}
                        <div
                          className={`flex flex-wrap gap-x-4 gap-y-1 text-xs mb-3 ${
                            theme === "dark" ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {exp.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-medium ${
                              theme === "dark"
                                ? "bg-gray-800 text-gray-300 border border-gray-700"
                                : "bg-gray-100 text-gray-600 border border-gray-200"
                            }`}
                          >
                            {exp.type}
                          </span>
                        </div>

                        {/* Description */}
                        <p
                          className={`text-xs mb-3 leading-relaxed ${
                            theme === "dark" ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {exp.description}
                        </p>

                        {/* Responsibilities */}
                        <ul className="space-y-1 mb-4">
                          {exp.responsibilities.map((item, i) => (
                            <li
                              key={i}
                              className={`text-xs flex items-start gap-1.5 ${
                                theme === "dark" ? "text-gray-400" : "text-gray-600"
                              }`}
                            >
                              <span
                                className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                                  theme === "dark" ? "bg-gray-500" : "bg-gray-500"
                                }`}
                              />
                              {item}
                            </li>
                          ))}
                        </ul>

                        {/* Tech stack badges */}
                        {/* <div className="flex flex-wrap gap-1.5">
                          {exp.tech.map((t) => (
                            <span
                              key={t}
                              className={`text-[10px] font-medium px-2 py-0.5 rounded-md border ${
                                theme === "dark"
                                  ? "bg-gray-800/60 text-gray-300 border-gray-700"
                                  : "bg-gray-100/70 text-gray-700 border-gray-200"
                              }`}
                            >
                              {t}
                            </span>
                          ))}
                        </div> */}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
