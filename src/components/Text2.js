import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .main {
  }
  h5 {
    color: ${props => props.theme.lightShades} !important;
  }
  .vvv {
    margin-top: 2rem;
    padding-inline-start: 4rem;
  }
`;
const Text2 = () => (
  <Wrapper>
    <div className="main">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h1 className="title  is-1 has-text-left is-spaced has-text-grey-dark has-text-centered has-text-centered">
                Medcare Experience Doctors
              </h1>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="card">
                <figure className="image">
                  <img
                    src="https://colorlib.com/preview/theme/medcare/img/team/1.jpg"
                    alt="eee "
                  />
                </figure>
                <div className="container">
                  <section className="section">
                    <h1 className="title is-4 has-text-centered">
                      Dr Adam Brain
                    </h1>
                    <h2 className="subtitle  is-6 has-text-weight-normal is-family-sans-serif has-text-centered">
                      Subtitle
                    </h2>
                  </section>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <figure className="image">
                  <img
                    src="https://colorlib.com/preview/theme/medcare/img/team/2.jpg"
                    alt="rrr"
                  />
                </figure>
                <div className="container">
                  <section className="section">
                    <h1 className="title is-4 has-text-centered">
                      Dr Blian Judge
                    </h1>
                    <h2 className="subtitle has-text-centered is-6 has-text-weight-normal is-family-sans-serif">
                      Subtitle
                    </h2>
                  </section>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <figure className="image">
                  <img
                    src="https://colorlib.com/preview/theme/medcare/img/team/3.jpg"
                    alt="place"
                  />
                </figure>
                <div className="container">
                  <section className="section">
                    <h1 className="title is-4 has-text-centered">
                      Dr Blian Judge
                    </h1>
                    <h2 className="subtitle has-text-centered is-6 has-text-weight-normal is-family-sans-serif">
                      Subtitle
                    </h2>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
);
export default Text2;
