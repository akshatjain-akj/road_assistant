import React from 'react';

import Grid from '@mui/material/Grid';
import Image1 from '../Images/i2.png';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Login from './Login.js';
import sellerImage from '../Images/seller.jpg';
import mechanicImage from '../Images/mechanic.jpg';
import customerImage from '../Images/customer.jpg.jpeg';
import Aboutus from './Aboutus';

const Dashboard = () => {
  return (
    <>
      <Container style={{ marginTop: '10px' }}>
        <Grid container spacing={3}>
          <Grid item xs>
            {/* <Item> */}{' '}
            <Card sx={{ maxWidth: 345 }} style={{ marginTop: '10px' }}>
              <CardMedia
                component="img"
                height="340"
                image={Image1}
                alt="green iguana"
              />
            </Card>
            {/* </Item> */}
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            container
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h6" color="white">
              {/* Road Assistant a web app made for h */}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis ea
              impedit eos vitae ipsa odit. Culpa hic consequuntur ab.
              Fuga.lorem30 Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Molestiae natus soluta ipsam. Esse officia assumenda
              temporibus aspernatur aliquam animi alias nam distinctio
              doloremque possimus, illo eos accusamus nisi ab! Aut.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={4}
          style={{ marginTop: '15px' }}
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  // image="https://images.pexels.com/photos/10334730/pexels-photo-10334730.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  image={sellerImage}
                  alt="green iguana"
                />

                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    REGISTER AS A SELLER
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {' '}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quisquam, voluptas!
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions style={{ justifyContent: 'center' }}>
                <Link to="/seller/register">
                  <Button size="small" color="primary">
                    Register
                  </Button>
                </Link>
                {/* <Link to="/seller/customer/show">
                  <Button size="small" color="primary">
                    Customers
                  </Button>
                </Link> */}
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  // image="https://images.pexels.com/photos/10334730/pexels-photo-10334730.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  image={mechanicImage}
                  alt="green iguana"
                />

                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    REGISTER AS A MECHANIC
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {' '}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quisquam, voluptas!
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions style={{ justifyContent: 'center' }}>
                <Link to="/mechanic/register">
                  <Button size="small" color="primary">
                    Register
                  </Button>
                </Link>
                {/* <Link to="/mechanic/customer/show">
                  <Button size="small" color="primary">
                    Customers
                  </Button>
                </Link> */}
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  // image="https://images.pexels.com/photos/10334730/pexels-photo-10334730.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  image={customerImage}
                  alt="green iguana"
                />

                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    REGISTER AS A CUSTOMER
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quisquam, voluptas!
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions style={{ justifyContent: 'center' }}>
                <Link to="/customer/register">
                  <Button size="small" color="primary">
                    Register
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>

          <Grid xs={12}>
            <Aboutus />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
