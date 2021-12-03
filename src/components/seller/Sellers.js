import React from 'react';
import Card from '../Cards/Card';
import Container from '@mui/material/Container';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn,
} from 'mdb-react-ui-kit';

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
    <MDBRow>
      <Container>
        <h2>Sellers</h2>
        {list.map((el, idx) => {
          return (
            <React.Fragment key={idx}>
              <Card id={el.id} name={el.name} location={el.location} />
            </React.Fragment>
          );
        })}
      </Container>
    </MDBRow>
  );
};

export default Sellers;
