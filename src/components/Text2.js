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
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h1 className="title  is-1 has-text-left is-spaced has-text-grey-dark has-text-centered">
                Medcare Experience Doctors
              </h1>
            </div>
          </div>
          <section className="section">
            <div className="columns">
              <div className="column">
                <div className="card">
                  <figure className="image">
                    <img src="https://colorlib.com/preview/theme/medcare/img/team/1.jpg" />
                  </figure>
                  <div className="container">
                    <section className="section">
                      <h1 className="title">Dr Adam Brain</h1>
                      <h2 className="subtitle">Subtitle</h2>
                    </section>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <figure className="image">
                    <img src="https://colorlib.com/preview/theme/medcare/img/team/2.jpg" />
                  </figure>
                  <div className="container">
                    <section className="section">
                      <h1 className="title">Title</h1>
                      <h2 className="subtitle">Subtitle</h2>
                    </section>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <figure className="image">
                    <img src="https://colorlib.com/preview/theme/medcare/img/team/3.jpg" />
                  </figure>
                  <div className="container">
                    <section className="section">
                      <h1 className="title">Title</h1>
                      <h2 className="subtitle">Subtitle</h2>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </Wrapper>
);
export default Text2;
