import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { AuthProvider } from "./store/auth.store.jsx";
import { TaskProvider } from "./store/task.store.jsx";
import { DashboardProvider } from "./store/dashboard.store.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <TaskProvider>
          <DashboardProvider>
            <App />
          </DashboardProvider>
        </TaskProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
