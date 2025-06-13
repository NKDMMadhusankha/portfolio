import { useState } from "react";
import { Loader } from "@/components/loader";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Education as EducationBackground } from "@/components/educational-background";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

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
          <EducationBackground />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}
