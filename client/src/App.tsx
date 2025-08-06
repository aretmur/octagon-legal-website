import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Contact from "@/pages/contact";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import LegalDisclaimer from "@/pages/legal-disclaimer";
import LogoShowcase from "@/pages/logo-showcase";
import NotFound from "@/pages/not-found";
import ComingSoon from "@/pages/coming-soon";

function Router() {
  // EASY TOGGLE: Change this to true for "Coming Soon" mode
  const COMING_SOON_MODE = true;
  
  if (COMING_SOON_MODE) {
    return <ComingSoon />;
  }
  
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/legal-disclaimer" component={LegalDisclaimer} />
      <Route path="/logo" component={LogoShowcase} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
