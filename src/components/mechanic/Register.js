import React from 'react';
import '../Main.css';

import Button from '@mui/material/Button';

const Register = () => {
  return (
    <div>
      <div className="row">
        <div id="bg">
          <div className="module">
            <ul className="img2">
              <h2 className="text">Register as Seller</h2>
              <li class="tab activeTab">
                <img
                  src="https://i.imgur.com/Fk1Urva.png"
                  alt=""
                  class="icon"
                />
              </li>
            </ul>

            <form className="form" action="/">
              <input type="text" placeholder="Name" className="textbox" />
              <input type="text" placeholder="State" className="textbox" />
              <input type="text" placeholder="City" className="textbox" />
              <input
                type="text"
                placeholder="Vehicle Type"
                className="textbox"
              />
              {/* <Button>Submit</Button> */}
              <Button variant="outlined" className="textbox">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
