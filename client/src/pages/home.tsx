import { useState } from "react";
import { Loader } from "@/components/loader";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Certifications } from "@/components/certifications";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loader onComplete={handleLoaderComplete} />}
      
      {!isLoading && (
        <div className="min-h-screen bg-background">
          <Navigation />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Education />
          <Contact />
          
          {/* Footer */}
          <footer className="py-8 px-4 border-t border-border">
            <div className="max-w-6xl mx-auto text-center">
              <p className="text-muted-foreground">
                © 2024 Mithila Madhusankha. Crafted with passion and precision.
              </p>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}
