import React, { createContext, useContext, useEffect, useState } from "react";
import * as authService from "../services/authService";

interface UserSession {
  name: string;
  token: string;
  role: string;
}

interface AuthContextType {
  user: UserSession | null;
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
   loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserSession | null>(null);
  const [loading, setLoading] = useState(true);
  // Cargar datos del localStorage al montar
  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");
    const role = localStorage.getItem("role");

    if (token && name && role) {
    
      setUser({ name, token, role });
    }
      setLoading(false);
  }, []);

  // Login utilizando solo el token
  const login = (token: string) => {
    const role = authService.getRole();
    const name = authService.getUserName();

    if (token && role && name) {
      setUser({ token, role, name });
    }
  };

  const logout = () => {
    authService.logout(); // limpia y redirige
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
    isAdmin: user?.role === "admin",
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook personalizado para acceder al contexto
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de AuthProvider");
  }
  return context;
};
