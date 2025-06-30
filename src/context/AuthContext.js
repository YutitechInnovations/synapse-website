// src/context/AuthContext.js
"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useLoader } from "./LoaderContext";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { withLoader } = useLoader();

  useEffect(() => {
    const stored = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(stored);
  }, []);

  const login = async () => {
    await withLoader(async () => {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
    }, "Signing you in...");
  };

  const logout = async () => {
    await withLoader(async () => {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      setIsLoggedIn(false);
      localStorage.removeItem("isLoggedIn");
    }, "Signing you out...");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
