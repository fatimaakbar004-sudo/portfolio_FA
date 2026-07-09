import { useEffect, useState } from "react";

import Loader from "./components/UI/Loader";
import Layout from "./layouts/Layout";

import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Achievements from "./components/Achievements/Achievements";
import Projects from "./components/Projects/Projects";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";

import ScrollProgress from "./components/UI/ScrollProgress";
import ScrollToTop from "./components/UI/ScrollToTop";
import ThemeSwitcher from "./components/UI/ThemeSwitcher";
import CustomCursor from "./components/UI/CustomCursor";

import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Loader loading={loading} />

      {!loading && (
        <Layout>
          <ScrollProgress />
          <CustomCursor />
          <Hero />
          <About />
          <Skills />
          <Services />
          <Experience />
          <Achievements />
          <Projects />
          <Testimonials />
          <FAQ />
          <Contact />
          <ScrollToTop />
          <ThemeSwitcher />
        </Layout>
      )}
    </ThemeProvider>
  );
}

export default App;
