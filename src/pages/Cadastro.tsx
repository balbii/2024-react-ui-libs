import React from 'react';
import { Button, TextField, Typography, Box, Grid} from '@mui/material';
import { useNavigate } from 'react-router-dom';
//import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';

const Cadastro: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Grid container style={{ height: '100vh' }}>

    <Grid item xs={12} md={6}>
        <Box
          sx={{
            backgroundImage: 'url(/src/image/bal.jfif)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '95%',
            mt: '2em',
          }}
        />
      </Grid>
      
      <Grid item xs={12} md={6} container direction="column" alignItems="center" justifyContent="center">
        <Typography variant="h4" gutterBottom>
          Cadastro
        </Typography>
        <TextField label="Nome" variant="outlined" margin="normal" />
        <TextField label="Email" variant="outlined" margin="normal"  />
        <TextField label="Senha" variant="outlined" margin="normal" type="password"  />
        <Button variant="contained" color="primary"  onClick={() => navigate('/Login')} >
          Cadastrar
        </Button>
        <Button 
          variant="text" 
          color="secondary" 
          onClick={() => navigate('/Login')}
          style={{ marginTop: '16px' }}
          fullWidth
        >
          Já tem uma conta? Faça login
        </Button>
      </Grid>

    </Grid>
  );
};

export default Cadastro;



// [{
// 	"resource": "/workspaces/2024-react-ui-libs/src/pages/Login.tsx",
// 	"owner": "typescript",
// 	"code": "2339",
// 	"severity": 8,
// 	"message": "A propriedade 'vars' não existe no tipo 'Theme'.",
// 	"source": "ts",
// 	"startLineNumber": 38,
// 	"startColumn": 28,
// 	"endLineNumber": 38,
// 	"endColumn": 32
// }]