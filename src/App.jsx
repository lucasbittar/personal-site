import React from "react";
import { createRoot } from "react-dom/client";
import GA4 from "react-ga4";

import Header from "./components/Header";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Social from "./components/Social";
import ToptalBadge from "./components/ToptalBadge";

import "../src/css/styles.css";

const MEASUREMENT_ID = "G-C0B279PWTL";
GA4.initialize(MEASUREMENT_ID);

const App = () => {
  return (
    <>
      <ToptalBadge />
      <div className="wrapper">
        <Header />
        <About />
        <Experiences />
        <Projects />
        <Social />
      </div>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
