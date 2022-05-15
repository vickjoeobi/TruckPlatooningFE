import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import Form from "./Form";

class Header extends Component {
  render() {

    return (
      <header id='home'>
        <ParticlesBg type='square' bg={true} />
        <div className='row banner'>
          <div className='banner-text'>
            <Fade bottom>
              <h1 style={{
                paddingTop: '5%',
              }} className='responsive-headline'>Truck Platooning API</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3 style={{ fontWeight: "bold" }}>
                The purpose of this API is to discover which of our trucks
                should be leader while others follow. The projects considers
                various parameters and returns the best truck to head the
                platooning
              </h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul
                style={{
                  display: "flex",
                }}
                className='social'
              >
                <a
                  href='https://truckplatooningapi.herokuapp.com/docs'
                  target='_blank'
                  className='button btn project-btn'
                >
                  <i className='fa fa-book'></i>API Documentation
                </a>
                <a
                  href='https://github.com/vickjoeobi/truckPlatooningAPI'
                  target='_blank'
                  className='button btn github-btn'
                >
                  <i className='fa fa-github'></i>Github
                </a>
              </ul>
            </Fade>
            <Fade>
              <Form />
            </Fade>
          </div>
        </div>
        <div>
          <h2
            style={{
              fontWeight: "bold",
              backgroundColor: "#f5f5f5",
              padding: "10px",
              paddingBottom: "20px",
              paddingTop: "20px",
              color: "green",
            }}
          >
            This project was developed for the purpose of Autonomous Lab 6th
            Semester Electronic Engineering at Hoschule Hamm Lippstadt
          </h2>
        </div>
      </header>
    )
  }
}

export default Header;
