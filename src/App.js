import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Index";
export default function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact element={<Home />} />
      </Routes>
    </Router>
  );
}
