import './App.css';

import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import RegisterM from './components/mechanic/Register';
import RegisterC from './components/seller/Register';
import LoginC from './components/seller/Login';
import LoginM from './components/mechanic/Login';
import MechanicList from './components/mechanic/Mechanics';
import SellerList from './components/seller/Sellers';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import RegisterCust from './components/Customer/Register';
import ShowCustomerSeller from './components/seller/CustomerShow';
import ShowCustomerMechanic from './components/mechanic/CustomerShow';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  marginTop: '10px',
  // objectFit: 'cover',
}));

function App() {
  return (
    <>
      <div className="App bg-image bg-img">
        <Navbar />
        <Router>
          <Routes>
            <Route exact path="/mechanic/dashboard" />
            <Route exact path="/mechanic/register" element={<RegisterM />} />
            <Route exact path="/mechanic/show" element={<MechanicList />} />
            <Route exact path="/seller/dashboard" />
            <Route exact path="/seller/register" element={<RegisterC />} />
            <Route exact path="/customer/register" element={<RegisterCust />} />
            <Route exact path="/seller/show" element={<SellerList />} />

            <Route
              exact
              path="/customer/mechanic/show"
              element={<ShowCustomerMechanic />}
            />
            <Route
              exact
              path="/customer/seller/show"
              element={<ShowCustomerSeller />}
            />
            <Route exact path="/" element={<Dashboard />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;