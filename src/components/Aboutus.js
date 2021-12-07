import React, { useState } from 'react';
// import howToUseApp from './API/howToUse.js';

import './Aboutus.css';
import ImageHero from '../Images/hero3.jpg';

const aboutData = [
  {
    id: 1,
    title: 'Sign in',
    info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, Etquia quis?Lorem ipsum,  Etquia quis?',
  },
  {
    id: 2,
    title: 'Add your bank Account',
    info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 3,
    title: 'Send payment request',
    info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, consectetur adipisicing elit. Etquia quis?Lorem ipsum?',
  },
];
const Aboutus = () => {
  //   const [aboutData, setAboutData] = useState(howToUseApp);
  return (
    <>
      <section className="common-section our-services bgcolor">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-service-leftside-img">
              <img src={ImageHero} alt="aboutusIMg" />
            </div>

            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 our-services-list">
              <h1 className="main-heading">How to use ?</h1>

              {aboutData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border">learn more</button>
            </div>
          </div>
        </div>
      </section>

      {/* 2nd part of bayt us section  */}
    </>
  );
};

export default Aboutus;
