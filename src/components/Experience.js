import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import Divider from '@mui/material/Divider';
import CodeIcon from '@mui/icons-material/Code';

const Experience = () => {
  return (
    <div>
      <Slide in direction="right" timeout={1500}>
        <Grid container direction={'column'} marginY={'30px'}>
          <Typography variant="h5" fontWeight={'600'}>
            Experience {<CodeIcon />}
          </Typography>
          <Typography
            variant="body1"
            fontSize={'14pt'}
            fontWeight={'550'}
            color={'#91ACCF'}
          >
            Keysight Technologies
          </Typography>
          <Box sx={{ width: '100%', maxWidth: 400, bgcolor: '#464655' }}>
            <Box sx={{ mt: 2, mb: 3, mx: 2 }}>
              <Grid container alignItems="center">
                <Grid item xs>
                  <Typography gutterBottom variant="h6">
                    Software Engineer Intern
                  </Typography>
                </Grid>
              </Grid>
              <Typography color="#B7B6C1" variant="body2">
                - Start Date: March 2022
              </Typography>
              <Typography color="#B7B6C1" variant="body2">
                - Fullstack developer on Agile software development team
              </Typography>
            </Box>

            <Divider variant="middle" color="#FFF" />

            <Box sx={{ my: 3, mx: 2 }}>
              <Grid container alignItems="center">
                <Grid item xs>
                  <Typography gutterBottom variant="h6">
                    Technologies/Tools
                  </Typography>
                  <Typography gutterBottom color="#B7B6C1" variant="body2">
                    - React
                  </Typography>
                  <Typography gutterBottom color="#B7B6C1" variant="body2">
                    - JavaScript
                  </Typography>
                  <Typography gutterBottom color="#B7B6C1" variant="body2">
                    - Django
                  </Typography>
                  <Typography gutterBottom color="#B7B6C1" variant="body2">
                    - Python
                  </Typography>
                  <Typography gutterBottom color="#B7B6C1" variant="body2">
                    - Ansible
                  </Typography>
                  <Typography gutterBottom color="#B7B6C1" variant="body2">
                    - Docker
                  </Typography>
                  <Typography gutterBottom color="#B7B6C1" variant="body2">
                    - PostgreSQL
                  </Typography>
                  <Typography gutterBottom color="#B7B6C1" variant="body2">
                    - Figma
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Slide>
    </div>
  );
};

export default Experience;
