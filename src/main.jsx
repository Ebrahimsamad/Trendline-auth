import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./i18n";
import { LanguageSwitcher } from "./components/LanguageSwitcher.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageSwitcher />
    <App />
  </StrictMode>
);
