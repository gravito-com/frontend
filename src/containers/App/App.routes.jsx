/* Modules */
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* Components */
import { SpacePortfolio } from "../SpacePortfolio/SpacePortfolio";
import Admin from "../Admin/Admin";

class AppRoutes extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<SpacePortfolio />} />
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
