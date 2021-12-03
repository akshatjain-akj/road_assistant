import './App.css';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import RegisterM from './components/mechanic/Register';
import RegisterC from './components/seller/Register';
import LoginC from './components/seller/Login';
import LoginM from './components/mechanic/Login';
import MechanicList from './components/mechanic/Mechanics';
import SellerList from './components/seller/Sellers';

function App() {
  return (
    <div className="App bg-image bg-img">
      <Router>
        <Routes>
          <Route exact path="/mechanic/dashboard" />
          <Route exact path="/mechanic/register" element={<RegisterM />} />
          <Route exact path="/mechanic/login" element={<LoginM />} />
          <Route exact path="/mechanic/show" element={<MechanicList />} />
          <Route exact path="/seller/dashboard" />
          <Route exact path="/seller/register" element={<RegisterC />} />
          <Route exact path="/seller/login" element={<LoginC />} />
          <Route exact path="/seller/show" element={<SellerList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
