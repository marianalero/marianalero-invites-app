import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';


interface ProtectedRouteProps {
  children: React.ReactNode;
  adminOnly?: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, adminOnly = false }) => {
  const { user, isAuthenticated,loading  } = useAuth();


  if (loading) {
    return <div>Cargando sesión...</div>; // Spinner de MUI si deseas
  }
 

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" />;
  }

  if (adminOnly && user.role !== 'admin') {
    return <Navigate to="/panel" />;
  }

  return <>{children}</>;
};