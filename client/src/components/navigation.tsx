import { motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function Navigation() {
	const { theme, setTheme } = useTheme();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const navItems = [
		{ href: "#about", label: "About" },
		{ href: "#skills", label: "Skills" },
		{ href: "#projects", label: "Projects" },
		{ href: "#education", label: "Education" },
		{ href: "#contact", label: "Contact" },
	];

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		setIsMenuOpen(false);
	};

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
				scrolled
					? theme === "dark"
						? "bg-black/50 shadow-md backdrop-blur-lg"
						: "bg-white/30 shadow-sm backdrop-blur-lg"
					: "bg-transparent"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Home button */}
					<motion.button
						whileHover={{
							y: -2,
							color: "var(--accent-500)",
						}}
						className={`relative px-4 py-1 transition-all duration-200 ${
							theme === "light"
								? "text-gray-800 hover:text-accent-500 font-medium"
								: "text-foreground hover:text-accent-500"
						}`}
						onClick={() => scrollToSection("#home")}
					>
						Home
						<motion.span
							initial={{ scaleX: 0 }}
							whileHover={{ scaleX: 1 }}
							transition={{ duration: 0.2 }}
							className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-500 origin-left"
						/>
					</motion.button>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-1">
						<div className="px-2 py-1 rounded-full">
							{navItems.map((item, i) => (
								<motion.button
									key={item.href}
									whileHover={{
										y: -2,
										color: "var(--accent-500)",
									}}
									className={`relative px-4 py-1 transition-all duration-200 ${
										theme === "light"
											? "text-gray-800 hover:text-accent-500 font-medium"
											: "text-foreground hover:text-accent-500"
									}`}
									onClick={() => scrollToSection(item.href)}
								>
									{item.label}
									<motion.span
										initial={{ scaleX: 0 }}
										whileHover={{ scaleX: 1 }}
										transition={{ duration: 0.2 }}
										className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-500 origin-left"
									/>
								</motion.button>
							))}
						</div>
					</div>

					{/* Theme Toggle & Mobile Menu */}
					<div className="flex items-center gap-2">
						<Button
							variant="ghost"
							size="icon"
							onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
							className={`rounded-full p-1 hover:bg-accent-500/10 hover:text-accent-500 transition-all duration-300`}
						>
							{theme === "dark" ? (
								<Sun className="h-5 w-5 animate-in zoom-in-75 duration-200" />
							) : (
								<Moon className={`h-5 w-5 animate-in zoom-in-75 duration-200`} />
							)}
							<span className="sr-only">Toggle theme</span>
						</Button>

						{/* Mobile Menu Button */}
						<Button
							variant="outline"
							size="icon"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className={`md:hidden bg-background/80 rounded-full hover:bg-accent-500 hover:text-white ${
								theme === "light" ? "border-slate-200" : "border-border"
							}`}
						>
							{isMenuOpen ? (
								<X
									className={`h-4 w-4 ${
										theme === "light" ? "text-black" : ""
									}`}
								/>
							) : (
								<Menu
									className={`h-4 w-4 ${
										theme === "light" ? "text-black" : ""
									}`}
								/>
							)}
						</Button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3 }}
						className="md:hidden py-3 space-y-1"
					>
						<div
							className={`bg-background/95 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden ${
								theme === "light"
									? "border border-slate-200/50"
									: "border border-border/50"
							}`}
						>
							{navItems.map((item, index) => (
								<button
									key={item.href}
									onClick={() => scrollToSection(item.href)}
									className={`block w-full text-left px-5 py-3 transition-all duration-200 ${
										theme === "light"
											? "text-gray-800 border-b border-slate-200/20 font-medium hover:bg-gray-100"
											: "text-foreground border-b border-border/20 hover:bg-gray-900"
									} ${index === navItems.length - 1 ? "border-b-0" : ""}`}
								>
									{item.label}
								</button>
							))}
						</div>
					</motion.div>
				)}
			</div>
		</motion.nav>
	);
}
