import React from 'react';
import { Button, Box,} from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

import { useNavigate } from 'react-router-dom';

const Feed: React.FC = () => {
    const navigate = useNavigate();
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

            </Stack>

        </Box>
      
    );
  }
  export default Feed;