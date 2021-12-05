import React from 'react';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { Button, CardActionArea, CardActions } from '@mui/material';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const CustomerShow = () => {
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
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://images.pexels.com/photos/10334730/pexels-photo-10334730.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Mechanic !!
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt recusandae at soluta quia quisquam nisi sunt quaerat
                  dicta odio ex?
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Call</Button>
                {/* <Button size="small"></Button> */}
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CustomerShow;
