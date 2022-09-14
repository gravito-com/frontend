/* Modules */
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* Components */
import Login from "../../components/Login/Login";

class AdminRoutes extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/login" element={<Login />} />
      </Routes>
    );
  }
}

export default AdminRoutes;

/* export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
} */
