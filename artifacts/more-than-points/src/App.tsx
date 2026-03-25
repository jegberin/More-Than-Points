import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect } from "react";
import Home from "@/pages/Home";
import HowItWorks from "@/pages/HowItWorks";
import CoachingOptions from "@/pages/CoachingOptions";
import ForParents from "@/pages/ForParents";
import ForTeens from "@/pages/ForTeens";
import About from "@/pages/About";
import FAQ from "@/pages/FAQ";
import Testimonials from "@/pages/Testimonials";
import BookSession from "@/pages/BookSession";
import Contact from "@/pages/Contact";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import CookiePolicy from "@/pages/CookiePolicy";
import NotFound from "@/pages/not-found";
import CookieBanner from "@/components/CookieBanner";

declare function gtag(...args: unknown[]): void;

export type AppProps = {
  ssrPath?: string;
};

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location]);
  return null;
}

function Router() {
  const [location] = useLocation();

  return (
    <>
      <ScrollToTop />
      <Switch key={location}>
        <Route path="/"><div className="page-enter"><Home /></div></Route>
        <Route path="/how-it-works"><div className="page-enter"><HowItWorks /></div></Route>
        <Route path="/coaching-options"><div className="page-enter"><CoachingOptions /></div></Route>
        <Route path="/for-parents"><div className="page-enter"><ForParents /></div></Route>
        <Route path="/for-teens"><div className="page-enter"><ForTeens /></div></Route>
        <Route path="/about"><div className="page-enter"><About /></div></Route>
        <Route path="/faq"><div className="page-enter"><FAQ /></div></Route>
        <Route path="/testimonials"><div className="page-enter"><Testimonials /></div></Route>
        <Route path="/book-session"><div className="page-enter"><BookSession /></div></Route>
        <Route path="/contact"><div className="page-enter"><Contact /></div></Route>
        <Route path="/privacy-policy"><div className="page-enter"><PrivacyPolicy /></div></Route>
        <Route path="/terms-of-service"><div className="page-enter"><TermsOfService /></div></Route>
        <Route path="/cookie-policy"><div className="page-enter"><CookiePolicy /></div></Route>
        <Route><div className="page-enter"><NotFound /></div></Route>
      </Switch>
    </>
  );
}

function App({ ssrPath }: AppProps = {}) {
  useEffect(() => {
    const stored = localStorage.getItem("cookieConsent");
    if (stored === "accepted" && typeof gtag !== "undefined") {
      gtag("consent", "update", { analytics_storage: "granted" });
    }
  }, []);

  const base = import.meta.env.BASE_URL?.replace(/\/$/, "") ?? "";

  return (
    <WouterRouter base={base} ssrPath={ssrPath}>
      <Router />
      {!ssrPath && <CookieBanner />}
    </WouterRouter>
  );
}

export default App;
