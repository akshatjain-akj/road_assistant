import React from 'react';
// import Card from '../Cards/Card';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Card from '@mui/material/Card';

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
const Sellers = () => {
  return (
    <>
      <Container>
        <Grid
          container
          spacing={2}
          style={{ marginTop: '15px' }}
          justifyContent="center"
          alignItems="center"
        >
          {list.map((el, idx) => {
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
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
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

export default Sellers;
