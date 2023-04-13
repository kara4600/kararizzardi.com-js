import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LaunchIcon from '@mui/icons-material/Launch';

const Header = () => {
  return (
    <div>
      <Grid container item direction={'row'}>
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <Link
          to="https://github.com/kara4600/kararizzardi.com/blob/b05ac5e7ccb6ae5d0e0017455396f74b04ce47b6/Kara_Rizzardi_Resume.pdf"
          target={'_blank'}
        >
          <Button>Resume{<LaunchIcon />}</Button>
        </Link>
        <Link to="https://github.com/kara4600/portfolio" target={'_blank'}>
          <Button>Github {<LaunchIcon />}</Button>
        </Link>
      </Grid>
    </div>
  );
};

export default Header;
