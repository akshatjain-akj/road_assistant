import React from 'react';
import '../Main.css';

const Login = () => {
  return (
    <div>
      <div class="row">
        <div id="bg">
          <div class="module">
            <ul>
              <li class="tab activeTab">
                <img
                  src="https://i.imgur.com/Fk1Urva.png"
                  alt=""
                  class="icon"
                />
              </li>
              <li class="tab">
                <img
                  src="https://i.imgur.com/ZsRgIDD.png"
                  alt=""
                  class="icon"
                />
              </li>
              <li class="tab">
                <img
                  src="https://i.imgur.com/34Q50wo.png"
                  alt=""
                  class="icon"
                />
              </li>
              <li class="tab">
                <img
                  src="https://i.imgur.com/LCCJ06E.png"
                  alt=""
                  class="icon"
                />
              </li>
            </ul>

            <form class="form">
              <input type="text" placeholder="Email Address" class="textbox" />
              <input type="password" placeholder="Password" class="textbox" />
              <input type="button" value="Next" class="button" />
            </form>
          </div>
        </div>

        <a href="http://dribbble.com/shots/1265587-Registration-Template-PSD?list=everyone">
          Design by: Asif Aleem
        </a>
      </div>
    </div>
  );
};

export default Login;
