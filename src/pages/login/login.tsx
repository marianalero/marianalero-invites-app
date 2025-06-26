import React, { useState } from "react";
import { TextField, Button, Typography, Container, Box } from "@mui/material";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import * as authService from "../../services/authService";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await authService.login(email, password);
      login(response.token);

      // Redirige según el rol
      const role = authService.getRole();
      if (role === "admin") {
        navigate("/admin");
      } else {
        navigate("/guests");
      }

    } catch (err) {
      setError("Email o contraseña incorrectos");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={8}>
        <Typography variant="h4" gutterBottom>Iniciar Sesión</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Correo electrónico"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Contraseña"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Ingresar
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default LoginPage;
