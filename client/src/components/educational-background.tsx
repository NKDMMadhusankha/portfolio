import { motion } from "framer-motion";
import { SiReact } from "react-icons/si";
import { FaGraduationCap, FaLanguage } from "react-icons/fa";
import { LuSchool } from "react-icons/lu";
import { PiCertificateFill } from "react-icons/pi";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/hooks/use-theme";

const certifications = [
	{
		title: "BSc (Hons) - Software Engineering",
		issuer: "NSBM Green University in affiliate with Plymouth University",
		date: "2022-2025",
		icon: FaGraduationCap,
		description: "Major in Fullstack, Software developing, Machine Learning",
	},
	{
		title: "GCE Advanced Level in Commerce/Business with Econ Stream",
		issuer: "Prince Of Wales' College, Moratuwa",
		date: "2021",
		icon: PiCertificateFill,
		description: "Completed advanced studies in Commerce, Business Studies, and Economics",
	},
	{
		title: "GCE Ordinary Level",
		issuer: "Weera Puran Appu Vidyalaya, Moratuwa",
		date: "2018",
		icon: LuSchool,
		description: "Completed O/Level education with distinction in core subjects",
	},
	{
		title: "Diploma in English Language",
		issuer: "British Way English Academy",
		date: "2019",
		icon: FaLanguage,
		description:
			"Comprehensive English language training including speaking, writing, and language proficiency",
	},
];

export function Education() {
	const { theme } = useTheme();

	return (
		<section
			id="education"
			className={`py-20 px-4 ${
				theme === "dark"
					? "bg-black/60 text-white"
					: "bg-gray-100/60 text-gray-900"
			} font-['Roboto_Mono',monospace]`}
		>
			<div className="max-w-6xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-bold font-['Roboto_Mono',monospace]">
						<span
							className={`${
								theme === "dark" ? "text-white" : "text-gray-900"
							}`}
						>
							Education
						</span>
					</h2>
					<div
						className={`w-24 h-1 mt-3 mx-auto rounded ${
							theme === "dark" ? "bg-gray-500" : "bg-gray-600"
						}`}
					></div>
					<p
						className={`mt-4 max-w-xl mx-auto ${
							theme === "dark" ? "text-gray-300" : "text-gray-600"
						}`}
					>
						My academic journey and qualifications
					</p>
				</motion.div>

				<div className="relative">
					{/* Timeline line */}
					<div
						className={`absolute left-1/2 transform -translate-x-1/2 h-full w-1 ${
							theme === "dark" ? "bg-gray-700" : "bg-gray-300"
						} hidden md:block`}
					></div>

					<div className="space-y-8 relative">
						{certifications.map((cert, index) => (
							<motion.div
								key={cert.title}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.7,
									delay: 0.1,
									ease: "easeOut",
								}}
								viewport={{
									once: false,
									amount: 0.3,
									margin: "-50px",
								}}
								className={`md:flex ${
									index % 2 === 0
										? "md:justify-end"
										: "md:justify-start"
								} relative`}
							>
								{/* Timeline dot */}
								<div
									className={`absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full z-10 hidden md:block ${
										theme === "dark" ? "bg-gray-500" : "bg-gray-600"
									} border-4 ${
										theme === "dark" ? "border-gray-800" : "border-white"
									}`}
								></div>

								<Card
									className={`max-w-lg md:w-[calc(50%-40px)] transition-all duration-300 ${
										theme === "dark"
											? "bg-gray-900/80 border-gray-700 shadow-[0_0_15px_rgba(75,75,75,0.1)]"
											: "bg-white/90 border-gray-200 shadow-lg"
									}
                hover:shadow-xl hover:transform hover:scale-[1.02] cursor-default`}
								>
									<CardContent className="p-0">
										<div
											className={`h-1 w-full rounded-t-lg ${
												theme === "dark"
													? "bg-gray-500/80"
													: "bg-gray-600/80"
											}`}
										></div>
										<div className="p-4">
											<div className="flex items-start">
												<div
													className={`p-2 rounded-lg mr-3 ${
														theme === "dark"
															? "bg-gray-800/80 text-gray-400"
															: "bg-gray-100 text-gray-700"
													} shadow-sm`}
												>
													<cert.icon className="text-xl" />
												</div>
												<div className="flex-1">
													<div
														className={`text-xs font-medium mb-1 ${
															theme === "dark"
																? "text-gray-400"
																: "text-gray-600"
														}`}
													>
														{cert.date}
													</div>
													<h3
														className={`text-base font-bold mb-1 ${
															theme === "dark"
																? "text-white"
																: "text-gray-900"
														}`}
													>
														{cert.title}
													</h3>
													<p
														className={`text-sm font-medium mb-2 ${
															theme === "dark"
																? "text-gray-300"
																: "text-gray-700"
														}`}
													>
														{cert.issuer}
													</p>
													<p
														className={`text-xs ${
															theme === "dark"
																? "text-gray-400"
																: "text-gray-600"
														}`}
														style={{ lineHeight: "1" }} // Added reduced line height
													>
														{cert.description}
													</p>

													<div
														className={`mt-2 p-1.5 rounded-md text-xs ${
															theme === "dark"
																? "bg-gray-800/60 text-gray-300 border border-gray-700"
																: "bg-gray-100/70 text-gray-700 border border-gray-200"
														}`}
														style={{ lineHeight: "1.1" }} // Added reduced line height
													>
														<div className="flex items-center">
															<span
																className={`inline-block w-1.5 h-1.5 rounded-full mr-1.5 ${
																	theme === "dark"
																		? "bg-gray-400"
																		: "bg-gray-500"
																}`}
															></span>
															{index === 0
																? "Currently pursuing"
																: "Successfully completed"}
														</div>
													</div>
												</div>
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
