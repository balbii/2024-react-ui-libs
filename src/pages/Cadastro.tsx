import React from 'react';
import { Button, TextField, Typography, Box, InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';

const Cadastro: React.FC = () => {
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
        Cadastro
      </Typography>
      <TextField label="Nome" variant="outlined" fullWidth margin="normal" />
      <TextField label="Email" variant="outlined" fullWidth margin="normal" />
      <TextField label="Senha" variant="outlined" fullWidth margin="normal" type="password"  InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <KeyOutlinedIcon />
            </InputAdornment>
          ),
        }}
      />
      <Button variant="contained" color="primary" fullWidth>
        Registrar
      </Button>

      <Button 
        variant="text" 
        color="secondary" 
        onClick={() => navigate('/login')}
        style={{ marginTop: '16px' }}
      >
        Já tem uma conta? Faça login
      </Button>

    </Box>
  );
};

export default Cadastro;
