import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProtectedRoutes from "./components/ProtectedRoutes";
import CreateTask from "./pages/CreateTask";
import TaskHistory from "./pages/TaskHistory";

import { useAuth } from "./store/auth.store";
import PublicRoutes from "./components/PublicRoutes";
import MainLayout from "./components/layouts/MainLayout";
import { useTask } from "./store/task.store";

function App() {
  const { authUser, isGettingUser, getUser } = useAuth();
  const { getTasks } = useTask();

  useEffect(() => {
    getUser();
    getTasks();
  }, []);

  if (isGettingUser) {
    return <div>Loading...</div>;
  }
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoutes>
            <MainLayout />
          </ProtectedRoutes>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="/createtask" element={<CreateTask />} />
        <Route path="/taskhistory" element={<TaskHistory />} />
      </Route>

      <Route
        path="/signup"
        element={
          <PublicRoutes>
            <SignupPage />
          </PublicRoutes>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoutes>
            <LoginPage />
          </PublicRoutes>
        }
      />
    </Routes>
  );
}

export default App;
