import React, { useState } from "react";
import { TextField, Button, Typography, Container, Box, CircularProgress, Backdrop, InputAdornment } from "@mui/material";
import { useAuth } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import * as authService from "../../services/authService";
import logo from './../../assets/logos/2.png';
import { ArrowBack,LockOutlined ,PersonOutline} from "@mui/icons-material";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    setError("");

    try {
      const response = await authService.login(email, password);
      login(response.token);

      // Redirige según el rol
      const role = authService.getRole();
      setLoading(false);
      if (role === "admin") {
        navigate("/admin");
      } else {
        navigate("/guests");
      }

    } catch (err) {
      console.log(err)
      setError("Email o contraseña incorrectos");
    }
    finally{
       setLoading(false);
    }
  };

  return (
    <Box
  sx={{
    minHeight: "100vh",
    width: "100%",
    background:
      "radial-gradient(circle at top left, rgba(164,20,35,.08), transparent 32%), #f2eadd",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    px: 2,
    py: 4,
  }}
>
    <Container maxWidth="sm" sx={{
      
    }}>
        <Box
        mt={8}
        component={Link}
        to="/"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          textDecoration: "none",
          color: "#6b7280",
          mb: 3,
       
          width: "fit-content",
          transition: ".2s",
          "&:hover": {
            color: "#a41423",
            transform: "translateX(-2px)"
          }
        }}
      >
        <ArrowBack fontSize="small" />
        <Typography fontSize=".9rem">
          Volver al inicio
        </Typography>
      </Box>
      <Box 
        sx={{
          backgroundColor:"#FCFBF8",
          borderRadius:"20px",
          boxShadow: "0 20px 50px rgba(0,0,0,.08)",
          padding: "40px",
          textAlign: "center",
          maxWidth: 620,
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{
            width: {
              xs: "100%",
              sm: "75%",
            },
            maxWidth: 450,
            height: "auto",
            display: "block",
            margin: "0 auto",
            mb: 2,
          }}
        />
        <Typography variant="h5" gutterBottom>Iniciar Sesión</Typography>
        <Typography variant="body1">Administra tus invitaciones
y confirma asistentes.</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Usuario"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"
                sx={{
                  alignSelf: "center"
                }}>
                  <PersonOutline
                    sx={{
                      color: "#a41423",
                      opacity: .8
                    }}
                  />
                </InputAdornment>
              )
            }}
          />
          <TextField
            fullWidth
            label="Contraseña"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"
                sx={{
                  alignSelf: "center"
                }}
                >
                  <LockOutlined
                    sx={{
                      color: "#a41423",
                      opacity: .8
                    }}
                  />
                </InputAdornment>
              )
            }}
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button disabled={loading} type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Ingresar
          </Button>
        </form>
      </Box>
      <Backdrop open={loading} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
    </Box>
  );
};

export default LoginPage;
