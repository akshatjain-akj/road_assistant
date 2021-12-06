import React from 'react';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link
                to="/"
                style={{ color: '#fff', marginTop: '0px', display: 'inline' }}
              >
                <Button color="inherit">RoadAssist </Button>
              </Link>
            </Typography>
            {/* <Link to="/customer/mechanic/show"> */}
            {/* <Button color="inherit"> mechanic customer</Button> */}
            {/* </Link> */}
            {/* <Link to="/customer/seller/show"> */}{' '}
            <Link to="/login" style={{ color: '#fff', marginTop: '0px' }}>
              <Button color="inherit">Login </Button>
            </Link>
            {/* </Link> */}
            {/* <Button color="primary">
              {' '}
              <Link to="/login" color="primary">
                Login
              </Link>
            </Button> */}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
