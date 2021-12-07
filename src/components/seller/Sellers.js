import React, { Component } from 'react';
// import Card from '../Cards/Card';
import Container from '@mui/material/Container';
import { Grid, Link } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Card from '@mui/material/Card';
import axios from 'axios';

const PATH = 'http://localhost/road/seller.php';
const list = [
  {
    id: '1',
    name: 'abhishek',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dolores.',
    location: 'Delhi',
  },
  {
    id: '2',
    name: 'abhimanyu',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dolores.',
    location: 'Gurgaon',
  },
  {
    id: '3',
    name: 'abhimanyu',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dolores.',
    location: 'Gurgaon',
  },
  {
    id: '4',
    name: 'abhimanyu',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dolores.',
    location: 'Gurgaon',
  },
  {
    id: '5',
    name: 'abhimanyu',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dolores.',
    location: 'Gurgaon',
  },
  {
    id: '6',
    name: 'abhimanyu',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dolores.',
    location: 'Gurgaon',
  },
];

export default class sellers extends Component {
  constructor() {
    super();

    this.state = {
      sell: [],
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
        this.setState({
          sell: result.data,
        });
      })
      .catch((error) => this.setState({}));
  }
  componentDidMount = () => {
    this.seller_data();
  };

  componentDidUpdate = () => {
    this.seller_data();
  };
  Seller = () => {
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
            {this.state.sell.map((el, idx) => {
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
                        Parts Availaible for: {el.type}
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
  };
  render() {
    return this.Seller();
  }
}
