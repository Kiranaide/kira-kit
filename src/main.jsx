import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/style.css";
import { router } from "./router";
import { RouterProvider } from "react-router";
import { KThemeProvider } from "./components/KThemeProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <KThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </KThemeProvider>
  </StrictMode>
);
