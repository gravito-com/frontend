/* Modules */
import React, { useEffect, useRef } from "react";

/* Components */
import { NavBar } from "../../components/NavBar/NavBar";
import { Banner } from "../../components/Banner/Banner";
import { Skills } from "../../components/Skills/Skills";
import { Projects } from "../../components/Projects/Projects";
import { Contact } from "../../components/Contact/Contact";
import { Footer } from "../../components/Footer/Footerv2";

import "./SpacePortfolio.styles.css";

export const SpacePortfolio = () => {
  useEffect(() => {});

  const contact_ref = useRef(null);

  return (
    <div className="App">
      <NavBar />
      <Banner refProp={contact_ref} />
      <Skills />
      {/* <Projects /> */}
      <Contact refProp={contact_ref} />
      {/* <Footer /> */}
    </div>
  );
};
