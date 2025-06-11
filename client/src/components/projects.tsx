import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

const projects = [
	{
		title: "E-Commerce Platform",
		description:
			"Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
		image:
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
		technologies: ["React", "Node.js", "MongoDB", "Stripe"],
		liveUrl: "#",
		githubUrl: "#",
	},
	{
		title: "Task Management App",
		description:
			"Collaborative project management tool with real-time updates, team collaboration, and progress tracking.",
		image:
			"https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
		technologies: ["TypeScript", "Express", "MySQL", "Socket.io"],
		liveUrl: "#",
		githubUrl: "#",
	},
	{
		title: "Weather Forecast App",
		description:
			"Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
		image:
			"https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
		technologies: ["React", "Weather API", "Tailwind CSS", "Chart.js"],
		liveUrl: "#",
		githubUrl: "#",
	},
  {
		title: "Weather Forecast App",
		description:
			"Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
		image:
			"https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
		technologies: ["React", "Weather API", "Tailwind CSS", "Chart.js"],
		liveUrl: "#",
		githubUrl: "#",
	},
];

export function Projects() {
	const { theme } = useTheme();
	return (
		<section
			id="projects"
			className={`py-20 px-4 ${
				theme === "dark"
					? "bg-black/60 text-white"
					: "bg-slate-100/60 text-gray-900"
			} font-['Roboto_Mono',monospace] overflow-hidden`}
		>
			<div className="max-w-7xl mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-4xl font-bold text-center mb-16"
				>
					<span className={`${theme === "dark" ? "text-white" : "text-black"}`}>Featured Projects</span>
				</motion.h2>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
					{projects.map((project, index) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							viewport={{ once: true }}
						>
							<Card className="card-hover bg-card border-border hover:border-accent-500 overflow-hidden h-full">
								<div className="relative overflow-hidden">
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
								</div>

								<CardContent className="p-4">
									<h3 className="text-lg font-bold mb-2 text-foreground">
										{project.title}
									</h3>
									<p className="text-muted-foreground mb-3 leading-relaxed text-sm">
										{project.description}
									</p>

									<div className="flex flex-wrap gap-1 mb-3">
										{project.technologies.map((tech) => (
											<Badge
												key={tech}
												variant="secondary"
												className="px-2 py-0.5 bg-accent-500/20 text-accent-400 text-xs"
											>
												{tech}
											</Badge>
										))}
									</div>

									<div className="flex gap-2">
										<Button
											variant="outline"
											size="sm"
											className="text-accent-500 border-accent-500 hover:bg-accent-500 hover:text-white text-xs py-1"
											asChild
										>
											<a
												href={project.liveUrl}
												target="_blank"
												rel="noopener noreferrer"
											>
												<ExternalLink className="mr-1 h-3 w-3" />
												Demo
											</a>
										</Button>
										<Button
											variant="outline"
											size="sm"
											className="text-accent-500 border-accent-500 hover:bg-accent-500 hover:text-white text-xs py-1"
											asChild
										>
											<a
												href={project.githubUrl}
												target="_blank"
												rel="noopener noreferrer"
											>
												<Github className="mr-1 h-3 w-3" />
												Code
											</a>
										</Button>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
