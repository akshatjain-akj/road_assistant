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
              RoadAssist
            </Typography>
            {/* <Link to="/customer/mechanic/show"> */}
            <Button color="inherit"> mechanic customer</Button>
            {/* </Link> */}
            {/* <Link to="/customer/seller/show"> */}
            <Button color="inherit"> seller customer</Button>
            {/* </Link> */}
            <Button color="inherit">Contact Us</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
