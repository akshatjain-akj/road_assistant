import React, { Component } from 'react';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { Button, CardActionArea, CardActions } from '@mui/material';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
const PATH = 'http://localhost/road/mechcust.php';
export default class customershow extends Component {
  constructor() {
    super();

    this.state = {
      mechusername:'',
      cust:[],
      stop:'no'
    };
    this.cust_data = this.cust_data.bind(this);
    
  }
  cust_data() {
    console.log(this.state);
    axios({
      method: 'post',
      url: `${PATH}`,
      headers: { 'content-type': 'application/json' },
      data: this.state,
    })
      .then((result) => {
        // alert(result.data);
        if(this.state.stop=='no')
        {
          this.setState({
            cust: result.data,
            stop:'yes'
          });
        }
        
      })
      .catch((error) => this.setState({}));
  }
  componentDidMount = () => {

    let username = localStorage.mechusername
    if (username != undefined) {
      this.setState({
        mechusername: JSON.parse(username)
      });
    }
    // this.cust_data();


  }
  componentDidUpdate = () => {
    this.cust_data();
    console.log(this.state);
    

  }

  render() {
    return (
      <div>
        <Container>
          <Grid
            container
            spacing={2}
            style={{ marginTop: '15px' }}
            justifyContent="center"
            alignItems="center"
          >
            {this.state.cust.map((el, idx) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://images.pexels.com/photos/10334730/pexels-photo-10334730.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {el.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Vehicle: {el.type}
                      </Typography>
                    </CardContent>
                    <CardActions>
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
      </div>
    );

  }
 
};


