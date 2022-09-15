/* Modules */
import React, { Component } from "react";

/* Styles */
import { HeaderStyles } from "./Header.styles";

class Header extends Component {
  render() {
    return (
      <HeaderStyles>
        <header>
          <div className="showcase">
            <nav
              className="navbar navbar-expand-md navbar-light bg-transparent fixed-top"
              id="navbar"
            >
              <div className="container">
                <a className="navbar-brand" href="#home">
                  GRAVITO
                </a>
                <button
                  className="navbar-toggler"
                  id="btn-menu-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarItems"
                  aria-controls="navbarItems"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse navbar-options-container"
                  id="navbarItems"
                >
                  <div className="navbar-nav ml-auto">
                    <a
                      data-scroll
                      className="nav-item nav-link active"
                      href="#home"
                    >
                      Home
                    </a>
                    <a data-scroll className="nav-item nav-link" href="#about">
                      About
                    </a>
                    <a data-scroll className="nav-item nav-link" href="#works">
                      Works
                    </a>
                    <a
                      data-scroll
                      className="nav-item nav-link"
                      href="#contact"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </nav>
            <div className="landing" id="home">
              <div id="particles-js"></div>
              <div className="landing-text">
                <h3>
                  ¡Hello World, We're{` `}
                  <span
                    className="special-color"
                    style={{ textDecoration: "underline" }}
                  >
                    gravito.me
                  </span>
                  !
                </h3>

                <h1 className="ah-headline">
                  <div className="im">¡We offer:</div>
                  {` `}
                  <div className="ah-words-wrapper">
                    <b className="is-visible special-color">
                      ROI Marketing Services<span>!</span>
                    </b>
                    <b className="special-color">
                      SaaS<span>!</span>
                    </b>
                    <b className="special-color">
                      Facebook Ads<span>!</span>
                    </b>
                  </div>
                </h1>
                <a data-scroll href="#about" className="btn">
                  View about me <i className="fas fa-arrow-down"></i>
                </a>
              </div>
            </div>
          </div>
        </header>
      </HeaderStyles>
    );
  }
}

export default Header;
