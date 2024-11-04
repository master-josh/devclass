import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Countprovider } from "./Context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Countprovider>
      <App />
    </Countprovider>
  </StrictMode>
);
