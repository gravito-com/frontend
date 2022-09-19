/* Modules */
import React, { useEffect } from "react";

/* Components */
import { NavBar } from "../../components/NavBar/NavBar";
import { Banner } from "../../components/Banner/Banner";
import { Skills } from "../../components/Skills/Skills";
import { Projects } from "../../components/Projects/Projects";
import { Contact } from "../../components/Contact/Contact";
import { Footer } from "../../components/Footer/Footerv2";

import "./SpacePortfolio.styles.css"

export const SpacePortfolio = () => {
  useEffect(() => {});

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};
