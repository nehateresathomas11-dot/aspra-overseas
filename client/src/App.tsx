import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import { useAuth } from "./_core/hooks/useAuth";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import StudyAbroad from "./pages/StudyAbroad";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import AdminDashboard from "./pages/AdminDashboard";
// import Login from "./pages/Login";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/jobs"} component={Jobs} />
      <Route path={"/study-abroad"} component={StudyAbroad} />
      <Route path={"/courses"} component={Courses} />
      <Route path={"/contact"} component={Contact} />
      {/* <Route path={"/login"} component={Login} /> */}
      <Route path={"/admin"} component={AdminDashboard} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Navigation />
          <Router />
          <Footer />
          <WhatsAppFloat />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
