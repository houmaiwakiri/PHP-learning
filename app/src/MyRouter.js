import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import DocDetail from "./components/pages/DocDetail";
import EditDoc from "./components/pages/EditDoc";

function MyRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        {/* :paramに動的な値を指定 */}
        <Route path="/DocDetail/:param" element={<DocDetail />} />
        <Route path="/EditDoc/:param" element={<EditDoc />} />
      </Routes>
    </Router>
  );
}

export default MyRouter;