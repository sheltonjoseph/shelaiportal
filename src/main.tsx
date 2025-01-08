import React from "react";
import ReactDOM from "react-dom/client";
import ReactGA from "react-ga4";
import App from "./App";
import "./globals.css";

ReactGA.initialize("G-4Y0KTSMHWY");

ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Main Page" });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
