/* Modules */
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* Components */
import Portfolio from "../Portfolio/Portfolio";
import Admin from "../Admin/Admin";

class AppRoutes extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<Portfolio />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    );
  }
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
