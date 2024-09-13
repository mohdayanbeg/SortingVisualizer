import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Visualizer from "./component/Visualizer.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Visualizer />
  </>
);