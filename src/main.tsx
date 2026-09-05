import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./contexts/theme";
import { FloatingMenuProvider } from "./contexts/floating-menu/provider.tsx";
import { SectionsProvider } from "./contexts/sections";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <FloatingMenuProvider>
        <SectionsProvider>
          <App />
        </SectionsProvider>
      </FloatingMenuProvider>
    </ThemeProvider>
  </StrictMode>,
);
