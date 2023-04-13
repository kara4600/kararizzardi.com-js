import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LaunchIcon from '@mui/icons-material/Launch';
import MobileNavMenu from './MobileNavMenu';

const Header = () => {
  return (
    <div>
      <Grid
        container
        item
        sx={{ display: { xs: 'none', sm: 'flex' } }}
        direction={'row'}
        width={'70%'}
        marginX={'auto'}
        mt={'1%'}
      >
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <Link
          to="https://github.com/kara4600/kararizzardi.com/blob/b05ac5e7ccb6ae5d0e0017455396f74b04ce47b6/Kara_Rizzardi_Resume.pdf"
          target={'_blank'}
        >
          <Button>Resume{<LaunchIcon />}</Button>
        </Link>
        <Link
          to="https://github.com/kara4600/kararizzardi.com"
          target={'_blank'}
        >
          <Button>Github {<LaunchIcon />}</Button>
        </Link>
      </Grid>

      <Grid
        container
        item
        sx={{ display: { xs: 'flex', sm: 'none' } }}
        direction={'row'}
      >
        <MobileNavMenu />
      </Grid>
    </div>
  );
};

export default Header;
