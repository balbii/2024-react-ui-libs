import React from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      height="100vh"
    >
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField label="Email" variant="outlined" fullWidth margin="normal" />
      <TextField label="Senha" variant="outlined" fullWidth margin="normal" type="password" />
      <Button variant="contained" color="primary" fullWidth>
        Entrar
      </Button>

      <Button 
        variant="text" 
        color="secondary" 
        onClick={() => navigate('/cadastro')}
        style={{ marginTop: '16px' }}
      >
        Não tem uma conta? Cadastre-se
      </Button>

    </Box>
  );
};

export default Login;
