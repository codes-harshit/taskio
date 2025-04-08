import { createContext, useContext, useState } from "react";
import { axiosInstance } from "../lib/axios";

const authContext = createContext({
  authUser: null,
  setAuthUser: () => {},
  isSigningup: false,
  setIsSigningup: () => {},
  isLoggingin: false,
  setIsLoggingin: () => {},
  isGettingUser: true,
  setIsGettingUser: () => {},

  signup: async () => {},
  login: async () => {},
  logout: async () => {},
  getUser: async () => {},
});

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [isSigningup, setIsSigningup] = useState(false);
  const [isLoggingin, setIsLoggingin] = useState(false);
  const [isGettingUser, setIsGettingUser] = useState(true);

  const signup = async (data) => {
    setIsSigningup(true);
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      setAuthUser(res.data);
    } catch (error) {
      console.log("Error in signup", error);
      setAuthUser(null);
    } finally {
      setIsSigningup(false);
    }
  };

  const getUser = async () => {
    try {
      const res = await axiosInstance.get("/auth/get-user");
      const user = res.data;
      if (!user) {
        return false;
      }
      setAuthUser(res.data);
      console.log("User data", res.data);
      return true;
    } catch (error) {
      console.log("Error in getting user", error);
      setAuthUser(null);
    } finally {
      setIsGettingUser(false);
    }
  };

  const login = async (data) => {
    setIsLoggingin(true);
    try {
      const res = await axiosInstance.post("/auth/login", data);
      setAuthUser(res.data);
    } catch (error) {
      console.log("Error in login", error);
      setAuthUser(null);
    } finally {
      setIsLoggingin(false);
    }
  };

  const logout = async () => {
    try {
      const res = await axiosInstance.post("/auth/logout");
      setAuthUser(null);
    } catch (error) {
      console.log("Error in logout", error);
    }
  };

  return (
    <authContext.Provider
      value={{
        authUser,
        setAuthUser,
        isSigningup,
        setIsSigningup,
        isLoggingin,
        setIsLoggingin,
        signup,
        getUser,
        login,
        logout,
        isGettingUser,
        setIsGettingUser,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authContext);
};
