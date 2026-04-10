import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Detect environment automatically
const basename =
  window.location.hostname.includes("github.io")
    ? "/ifems-xyz"
    : "/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
);