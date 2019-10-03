/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .main {
    background-image: url(https://colorlib.com/preview/theme/medcare/img/background/bg_1.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  h2 {
    color: ${props => props.theme.darkAccent} !important;
  }
  h5 {
    color: ${props => props.theme.lightShades} !important;
  }
`;
const Image = () => (
  <Wrapper>
    <div className="main">
      <div className="columns">
        <div className="image column">
          <figure className="image ">
            <img src="https://colorlib.com/preview/theme/medcare/img/banner/about1.png" />
          </figure>
        </div>
        <div className="column">
          <section className="hero is-medium">
            <div className="hero-body">
              <div className="container ">
                <h1 className="title is-2 is-spaced">
                  Second Abundantly Move That Cattle Perform Appen Land
                </h1>
                <h2 className="subtitle is-spaced is-6">
                  Give their their without moving were stars called so divide in
                  female be moving night may fish him
                </h2>
                <h5 className="subtitle is-spaced is-6">
                  Give their their without moving were stars called so divide
                  female be moving night may fish him own male vreated great
                  Give their their without moving were. Stars called so divide
                  female moving night may fish him own male created great
                  opportunity deal.
                </h5>
                <div className="container">
                  <p className="subtitle is-6 is-spaced has-text-weight-normal">
                    Learn More
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </Wrapper>
);
export default Image;
