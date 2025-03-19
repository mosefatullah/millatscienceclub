import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ReactLenis from "lenis/react";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReactLenis root>
      <App />
    </ReactLenis>
  </StrictMode>
);
