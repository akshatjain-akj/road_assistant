import React, { Component } from 'react';
// import Card from '../Cards/Card';
import Container from '@mui/material/Container';
import { Grid, Link } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

// import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
// import Box/ from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const PATH = 'http://localhost/road/seller.php';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default class sellers extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      sell: [],
      stop: 'no',
    };
    this.seller_data = this.seller_data.bind(this);
    // this.seller = this.seller.bind(this);
    // this is a comment !
  }
  seller_data() {
    console.log(this.state);
    axios({
      method: 'post',
      url: `${PATH}`,
      headers: { 'content-type': 'application/json' },
      data: this.state,
    })
      .then((result) => {
        if (this.state.stop === 'no') {
          this.setState({
            sell: result.data,
            stop: 'yes',
          });
        }
      })
      .catch((error) => this.setState({}));
  }

  componentDidMount = () => {
    let username = localStorage.customername;
    if (username !== undefined) {
      this.setState({
        username: JSON.parse(username),
      });
    }
    this.seller_data();
  };
  componentDidUpdate = () => {
    this.seller_data();
    console.log(this.state);
  };
  Seller = () => {
    return (
      <>
        <Container>
          <Box sx={{ flexGrow: 1 }} style={{ marginTop: '10px' }}>
            <AppBar position="static">
              <Toolbar>
                <TextField
                  id="standard-basic"
                  label="State"
                  variant="standard"
                />
                <TextField
                  id="standard-basic"
                  label="City"
                  variant="standard"
                  style={{ color: '#fff', margin: '0px 40px' }}
                />
                <Button color="inherit" variant="outlined">
                  Find{' '}
                </Button>
              </Toolbar>
            </AppBar>
          </Box>
          <Grid
            container
            spacing={2}
            style={{ marginTop: '15px' }}
            justifyContent="center"
            alignItems="center"
          >
            {this.state.sell.map((el, idx) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://images.pexels.com/photos/10334730/pexels-photo-10334730.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="person"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {el.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Parts Availaible for: {el.type}
                      </Typography>
                    </CardContent>
                    <CardActions style={{ justifyContent: 'space-between' }}>
                      <h5>
                        Location: {el.city},{el.state}
                      </h5>
                      <Link
                        to="/customer/register"
                        style={{ textDecoration: 'none' }}
                      >
                        <Button size="small" color="primary" variant="outlined">
                          Contact
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </>
    );
  };
  render() {
    return this.Seller();
  }
}
