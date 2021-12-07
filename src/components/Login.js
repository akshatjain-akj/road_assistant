import React, { Component } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import HelpIcon from '@mui/icons-material/Help';
import axios from 'axios';
const PATH = 'http://localhost/road/login.php';
const theme = createTheme();

export default class sellers extends Component {
  constructor() {
    super();

    this.state = {
      Username: '',
      password: '',
      identity: '',
      msg: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.login = this.login.bind(this);
    // this is a comment !
  }
  login() {
    if (this.state.Username && this.state.password && this.state.identity) {
      console.log(this.state);
      axios({
        method: 'post',
        url: `${PATH}`,
        headers: { 'content-type': 'application/json' },
        data: this.state,
      })
        .then((result) => {
          alert(result.data[0].Message);
          this.setState({
            msg: result.data[0].Message,
          });

          if (result.data[0].Message == 'selllog') {
            //localStorage.setItem('email', JSON.stringify(this.state.email));
            window.open('/seller/customer/show', '_self');
          }
          if (result.data[0].Message == 'mechlog') {
            //localStorage.setItem('email', JSON.stringify(this.state.email));
            window.open('/mechanic/customer/show', '_self');
          }
          if (result.data[0].Message == 'custlog') {
            //localStorage.setItem('email', JSON.stringify(this.state.email));
            window.open('/seller/show', '_self');
          }
        })
        .catch((error) => this.setState({}));
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://source.unsplash.com/random)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light'
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Login
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={this.handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="Username"
                  label="Username"
                  name="Username"
                  autoComplete="Username"
                  autoFocus
                  onChange={this.onChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.onChange}
                />

                <FormControl component="fieldset">
                  <Typography component="h1" variant="h5">
                    Choose your category <HelpIcon />
                  </Typography>
                  <RadioGroup
                    row
                    name="identity"
                    aria-label="identity"
                    onChange={this.onChange}
                  >
                    <FormControlLabel
                      value="customer"
                      control={<Radio />}
                      label="Customer"
                    />
                    <FormControlLabel
                      value="mechanic"
                      control={<Radio />}
                      label="Mechanic"
                    />
                    <FormControlLabel
                      value="seller"
                      control={<Radio />}
                      label="Seller"
                    />
                  </RadioGroup>
                </FormControl>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={this.login}
                >
                  Login
                </Button>

                {/* <FormControl component="fieldset" style={{ marginTop: '10px' }}>
                  
                  <RadioGroup
                    aria-label="identity"
                    name="identity"
                    value={value}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="seller"
                      control={<Radio />}
                      label="Seller"
                    />
                    <FormControlLabel
                      value="mechanic"
                      control={<Radio />}
                      label="Mechanic"
                    />
                    <FormControlLabel
                      value="customer"
                      control={<Radio />}
                      label="Customer"
                    />
                  </RadioGroup>
                </FormControl> */}

                {/* <Copyright sx={{ mt: 5 }} /> */}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}
