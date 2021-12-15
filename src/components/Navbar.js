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
import SupportSharpIcon from '@mui/icons-material/SupportSharp';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Navbar = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
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
              <SupportSharpIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link
                to="/"
                style={{ color: '#fff', marginTop: '0px', display: 'inline' }}
              >
                <Button color="inherit">RoadAssist </Button>
              </Link>
            </Typography>

            <Link
              to="/mechanic/show"
              style={{ color: '#fff', marginTop: '0px' }}
            >
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="State"
                  variant="standard"
                />
                <TextField
                  id="standard-basic"
                  label="City"
                  variant="standard"
                />
                {/* <Link to="/login" style={{ color: '#fff', marginTop: '0px' }}> */}
                <Button
                  color="inherit"
                  style={{ color: '#fff', marginTop: '15px' }}
                  variant="outlined"
                >
                  Find{' '}
                </Button>
                {/* </Link> */}
              </Box>
            </Link>

            <Link
              to="/mechanic/show"
              style={{ color: '#fff', marginTop: '0px' }}
            >
              <Button color="inherit">Mechanic </Button>
            </Link>

            <Link to="/seller/show" style={{ color: '#fff', marginTop: '0px' }}>
              <Button color="inherit">Seller </Button>
            </Link>

            <Link to="/login" style={{ color: '#fff', marginTop: '0px' }}>
              <Button color="inherit">Login </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
