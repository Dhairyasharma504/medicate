import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .main {
    background-image: url(https://colorlib.com/preview/theme/medcare/img/banner/pattern_bg.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  h1 {
    color: ${props => props.theme.mainBrandColor} !important;
  }
  h5 {
    color: ${props => props.theme.lightShades} !important;
  }
`;
const service = () => (
  <Wrapper>
    <div className="main">
      <body>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <h1 className="title is-4 is-spaced has-text-center">
                      Primary Care
                    </h1>
                    <h5 className="subtitle is-6 has-text-weight-normal is-family-sans-serif has-text-center is-spaced">
                      An so regular to on points wanted rapture ous resolving
                      continued household
                    </h5>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <h1 className="title is-4 is-spaced has-text-center">
                      Emergency Cases
                    </h1>
                    <h5 className="subtitle is-6 has-text-weight-normal is-family-sans-serif has-text-center is-spaced">
                      An so regular to on points wanted rapture ous resolving
                      continued household
                    </h5>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <h1 className="title is-4 is-spaced has-text-center">
                      Online Appointment
                    </h1>
                    <h5 className="subtitle is-6 has-text-weight-normal is-family-sans-serif has-text-center is-spaced">
                      An so regular to on points wanted rapture ous resolving
                      continued household
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </div>
  </Wrapper>
);
export default service;
