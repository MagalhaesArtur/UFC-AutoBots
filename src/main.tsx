import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./main.css";
import { AnimetedRoutes } from "./Routes/AnimetedRoutes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <AnimetedRoutes />
    </Router>
  </React.StrictMode>
);
