import axios from "axios";
import {API_URl} from "../config";
import { LoginResponse } from "../models/loginResponse";

// Decodifica el token para extraer datos
function decodeToken(token: string) {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload;
  } catch (e) {
    console.error("Error decodificando el token", e);
    return null;
  }
}

// Login
export async function login(email: string, password: string): Promise<LoginResponse> {
  const res = await axios.post(`${API_URl}/Auth/login`, { email, password });

  const { token, name } = res.data;
  const tokenArr = decodeToken(token);
  const role = tokenArr["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
  if (!role) {
    throw new Error("Rol inválido en el token");
  }
  localStorage.setItem("token", token);
  localStorage.setItem("role", role);
  localStorage.setItem("name", name);
  localStorage.setItem("invitationId", tokenArr["invitationId"]);

  return { token, name, role };
}

// Logout
export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("name");
  window.location.href = "/login"; // o usa navigate si estás dentro de un componente
}

// Verifica si está autenticado
export function isAuthenticated(): boolean {
  return !!localStorage.getItem("token");
}

// Obtiene el rol del usuario
export function getRole(): string | null {
  return localStorage.getItem("role");
}

// Obtiene el nombre del usuario
export function getUserName(): string | null {
  return localStorage.getItem("name");
}

// Obtiene el nombre del usuario
export function getInvitationIdFromToken(): string {
  return localStorage.getItem("invitationId") ?? "0";
}