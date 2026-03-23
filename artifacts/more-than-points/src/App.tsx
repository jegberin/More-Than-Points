import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Home from "@/pages/Home";
import HowItWorks from "@/pages/HowItWorks";
import CoachingOptions from "@/pages/CoachingOptions";
import About from "@/pages/About";
import BookSession from "@/pages/BookSession";
import Contact from "@/pages/Contact";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import CookiePolicy from "@/pages/CookiePolicy";
import NotFound from "@/pages/not-found";
import CookieBanner from "@/components/CookieBanner";

declare function gtag(...args: unknown[]): void;

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location]);
  return null;
}

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

const pageTransition = {
  duration: 0.28,
  ease: "easeInOut" as const,
};

function AnimatedPage({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}

function Router() {
  const [location] = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Switch key={location}>
          <Route path="/">
            <AnimatedPage><Home /></AnimatedPage>
          </Route>
          <Route path="/how-it-works">
            <AnimatedPage><HowItWorks /></AnimatedPage>
          </Route>
          <Route path="/coaching-options">
            <AnimatedPage><CoachingOptions /></AnimatedPage>
          </Route>
          <Route path="/about">
            <AnimatedPage><About /></AnimatedPage>
          </Route>
          <Route path="/book-session">
            <AnimatedPage><BookSession /></AnimatedPage>
          </Route>
          <Route path="/contact">
            <AnimatedPage><Contact /></AnimatedPage>
          </Route>
          <Route path="/privacy-policy">
            <AnimatedPage><PrivacyPolicy /></AnimatedPage>
          </Route>
          <Route path="/terms-of-service">
            <AnimatedPage><TermsOfService /></AnimatedPage>
          </Route>
          <Route path="/cookie-policy">
            <AnimatedPage><CookiePolicy /></AnimatedPage>
          </Route>
          <Route>
            <AnimatedPage><NotFound /></AnimatedPage>
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

function App() {
  useEffect(() => {
    const stored = localStorage.getItem("cookieConsent");
    if (stored === "accepted" && typeof gtag !== "undefined") {
      gtag("consent", "update", { analytics_storage: "granted" });
    }
  }, []);

  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
      <CookieBanner />
    </WouterRouter>
  );
}

export default App;
