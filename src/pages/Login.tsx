import React from 'react';
import { Button, TextField, Typography, Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (

    <Grid container style={{ height: '100vh' }}>

    <Grid item xs={12} md={6}>
        <Box
          sx={{
            backgroundImage: 'url(/src/image/balbas.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
          }}
        />
      </Grid>

      <Grid item xs={12} md={6} container direction="column" alignItems="center" justifyContent="center" color="blue">
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <TextField label="Email" variant="outlined" margin="normal"  />
        <TextField label="Senha" variant="outlined" margin="normal" type="password"  />
        <Button variant="contained" color="primary" onClick={() => navigate('/Feed')} >
          Entrar
        </Button>
        <Button 
          variant="text" 
          color="secondary" 
          onClick={() => navigate('/Cadastro')}
          style={{ marginTop: '16px' }}
          
        >
          Não tem uma conta? Cadastre-se
        </Button>
      </Grid>

    </Grid>
  );
};

export default Login;
