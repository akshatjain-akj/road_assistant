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
import { NavLink } from 'react-router-dom';

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
            <Typography variant="h5" color="white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              officia ex cupiditate, sequi aperiam aliquid suscipit praesentium
              numquam eos! Repudiandae. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Ad eos, excepturi quae officia provident omnis
              voluptatibus fuga reprehenderit nisi ullam!lorem20 Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Doloribus, eius.
              Quaerat sequi sunt quis sit!
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
                  image="https://images.pexels.com/photos/10334730/pexels-photo-10334730.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="green iguana"
                />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    REGISTER AS A SELLER
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {' '}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quisquam, voluptas!
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to="/seller/register">
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </Link>
                <Link to="/customer/seller/show">
                  <Button size="small" color="primary">
                    Customers
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://images.pexels.com/photos/10334730/pexels-photo-10334730.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="green iguana"
                />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    REGISTER AS A MECHANIC
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {' '}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quisquam, voluptas!
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to="/mechanic/register">
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </Link>
                <Link to="/customer/mechanic/show">
                  <Button size="small" color="primary">
                    Customers
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://images.pexels.com/photos/10334730/pexels-photo-10334730.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="green iguana"
                />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    REGISTER AS A CUSTOMER
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quisquam, voluptas!
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {/* <Link to="/customer/register"> */}
                <Button size="small" color="primary">
                  Share
                </Button>
                {/* </Link> */}
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
