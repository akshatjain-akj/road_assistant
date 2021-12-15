import React, { Component } from 'react';
import axios from 'axios';
import '../Main.css';

import Button from '@mui/material/Button';
const PATH = 'http://localhost/road/sellerregister.php';
export default class sellerregister extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      info: '',
      state: '',
      city: '',
      parts: '',

    };

    this.register = this.register.bind(this);
    this.onChange = this.onChange.bind(this);

  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    

  }
  register() {
    if (this.state.username && this.state.password && this.state.state && this.state.city && this.state.parts) {
      console.log(this.state);
      axios({
        method: 'post',
        url: `${PATH}`,
        headers: { 'content-type': 'application/json' },
        data: this.state

      })
        .then(result => {
          alert(result.data[0].Message);
          this.setState({
            info: result.data[0].Message
          })

          
          if (result.data[0].Message == 'ok') {
            localStorage.setItem('username', JSON.stringify(this.state.username));
            window.open("/seller/customer/show", "_self")
          }

        })
        .catch(error => {alert(error.data[0].Message);});


    }

  }
  render()
  {
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
                <input type="text" placeholder="Username" className="textbox" name="username"onChange={this.onChange} />
                <input
                  type="password"
                  placeholder="Password"
                  className="textbox"
                  name="password"
                  onChange={this.onChange}
                />
                <input type="text" placeholder="State" className="textbox" name="state" onChange={this.onChange}/>
                <input type="text" placeholder="City" className="textbox" name="city" onChange={this.onChange}/>
                <input type="text" placeholder="Parts" className="textbox" name="parts" onChange={this.onChange}/>
               
                <Button variant="outlined" className="textbox" onClick={this.register}>
                  Submit
                  
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  
    }
}


