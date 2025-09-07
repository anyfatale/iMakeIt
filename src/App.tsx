import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Habits from "./pages/Habits";
import Education from "./pages/Education";
import Settings from "./pages/Settings";
import Analytics from "./pages/Analytics";
import Community from "./pages/Community";
import Portfolio from "./pages/Portfolio";
import Calendar from "./pages/Calendar";
import Resources from "./pages/Resources";
import Profile from "./pages/Profile";
import Marketplace from "./pages/Marketplace";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/habits" element={<Habits />} />
            <Route path="/education" element={<Education />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/community" element={<Community />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/settings" element={<Settings />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
