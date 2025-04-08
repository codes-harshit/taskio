import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProtectedRoutes from "./components/ProtectedRoutes";

import { useAuth } from "./store/auth.store";
import PublicRoutes from "./components/PublicRoutes";
import MainLayout from "./components/layouts/MainLayout";

function App() {
  const { authUser, isGettingUser, getUser } = useAuth();

  useEffect(() => {
    getUser();
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
        <Route index element={<HomePage />} />
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
