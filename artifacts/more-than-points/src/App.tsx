import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect } from "react";
import Home from "@/pages/Home";
import HowItWorks from "@/pages/HowItWorks";
import CoachingOptions from "@/pages/CoachingOptions";
import About from "@/pages/About";
import BookSession from "@/pages/BookSession";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/how-it-works" component={HowItWorks} />
        <Route path="/coaching-options" component={CoachingOptions} />
        <Route path="/about" component={About} />
        <Route path="/book-session" component={BookSession} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;
