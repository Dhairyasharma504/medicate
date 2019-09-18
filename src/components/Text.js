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
const Text = () => (
  <Wrapper>
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-3">
              <h1 className="title  is-2 has-text-left is-spaced has-text-grey-dark">
                Awesome Health Service
              </h1>
            </div>
            <div className="column is-hidden-touch">
              <body>
                <div className="container">
                  <div className="vvv">
                    <h5 className="subtitle is-6 has-text-weight-normal is-family-sans-serif has-text-centered">
                      Land meat winged called subdue without very light in all
                      years sea appear midst forth image him third there set.
                      Land meat winged called subdue without very light in all
                      years sea appear
                    </h5>
                  </div>
                </div>
              </body>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="card">
                <header className="card-header">
                  <p className="card-header-title">Component</p>
                </header>
                <div className="card-content">
                  <p className="title is-4 is-spaced">Neurology Service</p>
                  <h5 className="subtitle is-6 has-text-weight-normal is-family-sans-serif">
                    Land meat winged called subdue without a very light in all
                    years sea appear Lesser bring fly first land set female best
                    perform.
                  </h5>
                  <div className="container">
                    <p className="subtitle is-6 is-spaced has-text-weight-normal">
                      Learn More
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <header className="card-header">
                  <p className="card-header-title">Component</p>
                </header>
                <div className="card-content">
                  <p className="title is-4 is-spaced">Dental Clinic</p>
                  <h5 className="subtitle is-6 has-text-weight-normal is-family-sans-serif">
                    Land meat winged called subdue without a very light in all
                    years sea appear Lesser bring fly first land set female best
                    perform.
                  </h5>
                  <div className="container">
                    <p className="subtitle is-6 is-spaced has-text-weight-normal">
                      Learn More
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <header className="card-header">
                  <p className="card-header-title">Component</p>
                </header>
                <div className="card-content">
                  <p className="title is-4 is-spaced">Plastic Surgery</p>
                  <h5 className="subtitle is-6 has-text-weight-normal is-family-sans-serif ">
                    Land meat winged called subdue without a very light in all
                    years sea appear Lesser bring fly first land set female best
                    perform.
                  </h5>
                  <div className="container">
                    <p className="subtitle is-6 is-spaced has-text-weight-normal">
                      Learn More
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Wrapper>
);
export default Text;
