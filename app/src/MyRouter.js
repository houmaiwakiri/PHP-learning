// Router.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DocDetail from "./components/pages/DocDetail";
import Home from "./components/pages/Home";

function MyRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/DocDetail" element={<DocDetail />} />
      </Routes>
    </Router>
  );
}

export default MyRouter;
