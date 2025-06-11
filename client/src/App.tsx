import React from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/components/scroll-to-top";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

// Polyfill for useHashLocation
function useHashLocation() {
  const hashToPath = () => window.location.hash.replace(/^#/, '') || '/';
  const [loc, setLoc] = React.useState(hashToPath());
  React.useEffect(() => {
    const onHashChange = () => setLoc(hashToPath());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
  const navigate = (to: string) => {
    window.location.hash = to;
    setLoc(hashToPath());
  };
  return [loc, navigate] as const;
}

function Router() {
  const [location, setLocation] = useHashLocation();
  return (
    <Switch location={location}>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
          <ScrollToTop />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
