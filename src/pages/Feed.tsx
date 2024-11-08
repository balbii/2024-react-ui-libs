import React, { FormEvent } from 'react';
import { Button, Box, Select, FormControl, InputLabel, MenuItem,} from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

import { useNavigate } from 'react-router-dom';

const Feed: React.FC = () => {
    const navigate = useNavigate();
    function handleSubmit(_event: FormEvent<HTMLFormElement>): void {
        throw new Error('Function not implemented.');
    }

    return (
        <Box
   
        >
            <Stack spacing={3}
            alignItems="center"
            >
  
            <Skeleton variant="circular" width={180} height={180} sx={{ backgroundImage: 'url(/src/image/balb.jfif)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', }} />
            <Skeleton variant="rectangular" width={510} height={100} sx={{ bgcolor: 'red'}}/>
            <Skeleton variant="rounded" width={510} height={100} sx={{ bgcolor: 'black' }}/>

            <Button 
                variant="text" 
                color="secondary" 
                onClick={() => navigate('/Login')}
                style={{ marginTop: '16px' }}
           
            >
          Sair da conta
            </Button>

            <form onSubmit={handleSubmit}>
          <FormControl fullWidth>
            <InputLabel id="demo-select-label">Escolha um valor</InputLabel>
            <Select
              defaultValue={10}
              id="demo-select"
              labelId="demo-select-label"
              label="Choose a Number"
            >
              <MenuItem value={10}>Dez</MenuItem>
              <MenuItem value={20}>Vinte</MenuItem>
              <MenuItem value={30}>Trinta</MenuItem>
            </Select>
          </FormControl>

          <Button sx={{ ml: 1 }} type="submit" variant="contained" color="primary">
            Enviar
          </Button>
        </form>

            </Stack>

        </Box>
      
    );
  }
  export default Feed;