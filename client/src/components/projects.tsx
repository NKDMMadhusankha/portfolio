import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { useState } from "react";
import harmonixImg from "@/../images/harmonix.png";
import booknestImg from "@/../images/booknest.png";
import greencartImg from "@/../images/greencart.png";
import stylespaceImg from "@/../images/stylespace.png";

const projects = [
	{
		title: "Harmonix",
		description:
			"Music collaboration platform for artists to create, share, and remix tracks together in real-time.",
		image: harmonixImg,
		technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Python", "Machine Learning"],
		liveUrl: "#",
		githubUrl: "https://github.com/NKDMMadhusankha/HarmoniX.git",
	},
	{
		title: "Book Nest",
		description:
			"Online platform for discovering, reviewing, and sharing books with a vibrant community of readers.",
		image: booknestImg,
		technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Material UI","Socket.io"],
		liveUrl: "#",
		githubUrl: "https://github.com/NKDMMadhusankha/BookNest.git",
	},
	{
		title: "GreenCart",
		description:
			"Eco-friendly e-commerce platform for sustainable products, featuring a seamless shopping experience and green initiatives.",
		image: greencartImg,
		technologies: ["Java", "Swing", "JSP", "Servlets", "MySQL", "PayPal API"],

		liveUrl: "#",
		githubUrl: "#",
	},
	{
		title: "StyleSpace",
		description:
			"AI-powered virtual fitting room that lets users try on outfits and accessories in real-time using augmented reality.",
		image: stylespaceImg,
		technologies: ["React.js", "TensorFlow.js", "Three.js", "Node.js", "AR.js"],
		liveUrl: "#",
		githubUrl: "https://github.com/NKDMMadhusankha/HCI_project.git",
	},
];

// Cool card animation variants
const cardVariants = {
	hidden: { 
		opacity: 0, 
		y: 30,
		scale: 0.95,
		rotateX: 10
	},
	visible: { 
		opacity: 1, 
		y: 0,
		scale: 1,
		rotateX: 0,
		transition: {
			type: "spring",
			damping: 20,
			stiffness: 100,
			duration: 0.6
		}
	}
};

export function Projects() {
	const { theme } = useTheme();
	const [modalImage, setModalImage] = useState<string | null>(null);
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

				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
					{projects.map((project, index) => (
						<motion.div
							key={project.title}
							variants={cardVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="flex"
						>
							<Card className={`card ${theme === "dark" ? "bg-transparent" : "bg-white"} border-gray-400 overflow-hidden transform-none transition-shadow duration-300 hover:shadow-[0_4px_24px_0_rgba(120,120,120,0.25)] mx-auto w-full h-[320px] md:h-[540px] min-w-0 min-h-0`}>
								<div className="flex flex-col md:flex-col items-stretch h-full">
									<div className="w-full flex-shrink-0 h-40 md:h-72 flex items-center justify-center min-w-0 min-h-0">
										<button
											type="button"
											onClick={() => setModalImage(project.image)}
											className="focus:outline-none h-full w-full flex items-center justify-center"
										>
											<img
												src={project.image}
												alt={project.title}
												className="w-full h-full object-cover transform-none cursor-pointer rounded-t-md md:rounded-md min-w-0 min-h-0"
												style={{ objectPosition: "center" }}
											/>
										</button>
									</div>
									<CardContent className="p-3 md:p-4 flex flex-col justify-between flex-grow min-w-0 min-h-0">
										<div className="flex-grow">
											<h3 className="text-base md:text-base font-bold mb-2 text-foreground">
												{project.title}
											</h3>
											<p className={`${theme === "dark" ? "text-muted-foreground" : "text-gray-700"} mb-3 leading-relaxed text-sm line-clamp-3`}>
												{project.description}
											</p>
											<div className="flex flex-wrap gap-1 mb-3">
												{project.technologies.map((tech, techIndex) => (
													<motion.div
														key={tech}
														initial={{ opacity: 0, scale: 0.8 }}
														whileInView={{ opacity: 1, scale: 1 }}
														transition={{ 
															delay: 0.4 + (techIndex * 0.05),
															duration: 0.3,
															ease: "easeOut"
														}}
														viewport={{ once: true }}
													>
														<Badge
															variant="secondary"
															className={`px-2 py-0.5 ${
																theme === "dark" 
																	? "bg-accent-500/20 text-accent-400" 
																	: "bg-gray-200 text-gray-800 border border-gray-300 font-medium"
															} text-xs`}
														>
															{tech}
														</Badge>
													</motion.div>
												))}
											</div>
										</div>
										<motion.div 
											className="flex gap-2 mt-auto w-full justify-start"
											initial={{ opacity: 0, y: 10 }}
											whileInView={{ opacity: 1, y: 0 }}
											transition={{ 
												delay: 0.6,
												duration: 0.4,
												ease: "easeOut"
											}}
											viewport={{ once: true }}
										>
											<Button
												variant="outline"
												size="sm"
												className={`${
													theme === "dark" 
														? "text-white border-gray-600 hover:bg-gray-800 hover:text-white" 
														: "text-gray-800 border-gray-300 hover:bg-gray-200 hover:text-gray-900"
												} text-xs py-1 flex-1`}
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
												className={`${
													theme === "dark" 
														? "text-white border-gray-600 hover:bg-gray-800 hover:text-white" 
														: "text-gray-800 border-gray-300 hover:bg-gray-200 hover:text-gray-900"
												} text-xs py-1 flex-1`}
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
										</motion.div>
									</CardContent>
								</div>
							</Card>
						</motion.div>
					))}
				</div>
			</div>

			{modalImage && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-2" onClick={() => setModalImage(null)}>
					<button className="absolute top-4 right-4 text-white text-3xl font-bold z-50" onClick={() => setModalImage(null)}>&times;</button>
					<div className="bg-white rounded p-1 w-full max-w-2xl relative flex items-center justify-center animate-fadeInScale border border-gray-300 shadow-none">
						<img src={modalImage} alt="Project" className="w-full h-auto max-h-[40vh] sm:max-h-[70vh] object-contain" style={{maxWidth: '100%'}} />
					</div>
				</div>
			)}

			{/* Add the animation CSS directly in this file for the modal effect */}
			<style id="modal-fadein-css" dangerouslySetInnerHTML={{
				__html: `
				@keyframes fadeInScale {
				  0% { opacity: 0; transform: scale(0.9); }
				  100% { opacity: 1; transform: scale(1); }
				}
				.animate-fadeInScale {
				  animation: fadeInScale 0.35s cubic-bezier(0.4,0,0.2,1);
				}
				
				/* Mobile responsive styles */
				@media only screen and (max-width: 767px) {
				  .grid-cols-1 {
				    padding: 0 8px;
				  }
				  
				  .card {
				    width: 100% !important;
				    max-width: 100% !important;
				    height: auto !important;
				    min-height: 420px !important;
				  }
				  
				  .card .flex.flex-col {
				    height: 100% !important;
				  }
				  
				  .card .w-full.h-40 {
				    height: 180px !important;
				    flex-shrink: 0 !important;
				  }
				  
				  .card img {
				    width: 100% !important;
				    height: 100% !important;
				    object-fit: cover !important;
				    border-radius: 8px 8px 0 0 !important;
				  }
				  
				  .card .p-3 {
				    padding: 16px !important;
				    display: flex !important;
				    flex-direction: column !important;
				    flex-grow: 1 !important;
				    justify-content: space-between !important;
				  }
				  
				  .card h3 {
				    font-size: 1.1rem !important;
				    line-height: 1.4 !important;
				    margin-bottom: 8px !important;
				    font-weight: 700 !important;
				  }
				  
				  .card p {
				    font-size: 0.9rem !important;
				    line-height: 1.5 !important;
				    margin-bottom: 12px !important;
				    display: -webkit-box !important;
				    -webkit-line-clamp: 3 !important;
				    -webkit-box-orient: vertical !important;
				    overflow: hidden !important;
				  }
				  
				  .card .flex.flex-wrap.gap-1 {
				    margin-bottom: 16px !important;
				    gap: 4px !important;
				  }
				  
				  .card .text-xs.px-2 {
				    font-size: 0.75rem !important;
				    padding: 2px 6px !important;
				  }
				  
				  .card .flex.gap-2.mt-auto {
				    margin-top: auto !important;
				    gap: 8px !important;
				    width: 100% !important;
				  }
				  
				  .card .flex-1 {
				    flex: 1 !important;
				    font-size: 0.8rem !important;
				    padding: 8px 12px !important;
				    height: auto !important;
				    min-height: 36px !important;
				    display: flex !important;
				    align-items: center !important;
				    justify-content: center !important;
				  }
				  
				  .card .flex-1 svg {
				    width: 14px !important;
				    height: 14px !important;
				    margin-right: 4px !important;
				  }
				}
				`
			}} />
		</section>
	);
}