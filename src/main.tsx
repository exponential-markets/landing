import { Buffer } from 'buffer';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App.tsx";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";
import "@/index.css";

// Add Buffer to window
window.Buffer = Buffer;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </StrictMode>
);
