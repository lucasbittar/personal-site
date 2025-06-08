import React from "react";
import { createRoot } from "react-dom/client";

import Header from "./components/Header";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Social from "./components/Social";

import "../src/css/styles.css";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
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
