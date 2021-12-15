// import React from 'react';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import { Container } from '@mui/material';
// import FlatButton from 'material-ui/FlatButton';
// import RaisedButton from 'material-ui/RaisedButton';
// // import TextField from 'material-ui/TextField';
// import './style.css';

// const Register2 = () => {
//   return (
//     <Container style={{ backgroundColor: 'white', marginTop: '15px' }}>
//       <Grid container>
//         {/* <Typography variant="h6" gutterBottom>
//           Shipping address
//         </Typography>
//         <Grid container spacing={3}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               required
//               id="firstName"
//               name="firstName"
//               label="First name"
//               fullWidth
//               autoComplete="given-name"
//               variant="standard"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               required
//               id="lastName"
//               name="lastName"
//               label="Last name"
//               fullWidth
//               autoComplete="family-name"
//               variant="standard"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               required
//               id="address1"
//               name="address1"
//               label="Address line 1"
//               fullWidth
//               autoComplete="shipping address-line1"
//               variant="standard"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               id="address2"
//               name="address2"
//               label="Address line 2"
//               fullWidth
//               autoComplete="shipping address-line2"
//               variant="standard"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               required
//               id="city"
//               name="city"
//               label="City"
//               fullWidth
//               autoComplete="shipping address-level2"
//               variant="standard"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               id="state"
//               name="state"
//               label="State/Province/Region"
//               fullWidth
//               variant="standard"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               required
//               id="zip"
//               name="zip"
//               label="Zip / Postal code"
//               fullWidth
//               autoComplete="shipping postal-code"
//               variant="standard"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               required
//               id="country"
//               name="country"
//               label="Country"
//               fullWidth
//               autoComplete="shipping country"
//               variant="standard"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <FormControlLabel
//               control={
//                 <Checkbox color="secondary" name="saveAddress" value="yes" />
//               }
//               label="Use this address for payment details"
//             />
//           </Grid>
//         </Grid> */}
//         <div className="loginBox">
//           <h1>Sign Up</h1>
//           {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}

//           <form onSubmit={onSubmit}>
//             <TextField
//               name="username"
//               floatingLabelText="user name"
//               value={user.username}
//               onChange={onChange}
//               errorText={errors.username}
//             />
//             <TextField
//               name="email"
//               floatingLabelText="email"
//               value={user.email}
//               onChange={onChange}
//               errorText={errors.email}
//             />
//             <TextField
//               type={type}
//               name="password"
//               floatingLabelText="password"
//               value={user.password}
//               onChange={onPwChange}
//               errorText={errors.password}
//             />

//             <div className="pwStrRow">
//               {score >= 1 && (
//                 <div>
//                   <PasswordStr score={score} />
//                   <FlatButton
//                     className="pwShowHideBtn"
//                     label={btnTxt}
//                     onClick={pwMask}
//                     style={{
//                       position: 'relative',
//                       left: '50%',
//                       transform: 'translateX(-50%)',
//                     }}
//                   />
//                 </div>
//               )}
//             </div>
//             <TextField
//               type={type}
//               name="pwconfirm"
//               floatingLabelText="confirm password"
//               value={user.pwconfirm}
//               onChange={onChange}
//               errorText={errors.pwconfirm}
//             />
//             <br />
//             <RaisedButton
//               className="signUpSubmit"
//               primary={true}
//               type="submit"
//               label="submit"
//             />
//           </form>
//           <p>
//             Aleady have an account? <br />
//             <a href="/">Log in here</a>
//           </p>
//         </div>
//       </Grid>
//     </Container>
//   );
// };

// export default Register2;
