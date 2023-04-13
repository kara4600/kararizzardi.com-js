import { React, useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import LaunchIcon from '@mui/icons-material/Launch';

const MobileNavMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link
          color="inherit"
          underline="none"
          href={'https://kararizzardi.com'}
        >
          <MenuItem onClick={handleClose}>Home</MenuItem>
        </Link>
        <Link
          color="inherit"
          underline="none"
          href={
            'https://github.com/kara4600/kararizzardi.com/blob/b05ac5e7ccb6ae5d0e0017455396f74b04ce47b6/Kara_Rizzardi_Resume.pdf'
          }
          target={'_blank'}
        >
          <MenuItem onClick={handleClose}>
            Resume {<LaunchIcon fontSize="small" />}
          </MenuItem>
        </Link>
        <Link
          color="inherit"
          underline="none"
          href={'https://github.com/kara4600/kararizzardi.com'}
          target={'_blank'}
        >
          <MenuItem onClick={handleClose}>
            Github {<LaunchIcon fontSize="small" />}
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default MobileNavMenu;
