import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// public/index.htmlのrootタグに、追加される。
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
