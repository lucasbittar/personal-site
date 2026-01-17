import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import GA4 from "react-ga4";

import Header from "./components/Header";
import Now from "./components/Now";
import Writing from "./components/Writing";
import Listening from "./components/Listening";
import Reading from "./components/Reading";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Social from "./components/Social";

import "../src/css/styles.css";

const MEASUREMENT_ID = "G-C0B279PWTL";
GA4.initialize(MEASUREMENT_ID);

const App = () => {
  useEffect(() => {
    GA4.send({ hitType: "pageview", page: "/" });

    // Set up Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      section.classList.add("animate-section");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <Now />
      <Writing />
      <Listening />
      <Reading />
      <About />
      <Experiences />
      <Projects />
      <Social />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
