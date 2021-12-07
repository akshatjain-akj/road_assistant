import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn,
} from 'mdb-react-ui-kit';

export default function App({ name, id, location, text }) {
  return (
    <>
      <MDBCol sm="6">
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle> {name} </MDBCardTitle>
            <MDBCardText>{text}</MDBCardText>
            <MDBCardText>{location}</MDBCardText>
            <MDBBtn href="#">See More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </>
  );
}
