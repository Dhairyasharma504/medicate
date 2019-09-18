import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Service from '../components/Service';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Text from '../components/Text';
import Image from '../components/Image';
import Text2 from '../components/Text2';

const Wrapper = styled.div`
  .section {
    background-image: url(https://colorlib.com/preview/theme/medcare/img/banner/home-banner.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: center;
  }
  h1 {
    color: ${props => props.theme.mainBrandColor} !important;
  }
  h5 {
    color: ${props => props.theme.lightShades} !important;
  }
`;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <Wrapper>
          <Header />
          <section className="section">
            <div className="container">
              <div className="columns">
                <div className="column is-half is-size-1-touch">
                  <section className="hero is-medium">
                    <div className="hero-body">
                      <div className="container is-size-1-touch">
                        <h1 className="title  is-1 is-spaced is-size-1-touch">
                          Making Health Care Better Together
                        </h1>
                        <h5 className="subtitle is-6 has-text-weight-normal is-family-sans-serif has-text-left is-hidden-touch">
                          Also you dry creeping beast multiply fourth abundantly
                          our itself signs bring our. Won form living. Whose dry
                          you seasons divide given gathering great in whose
                          you'll greater let livein form beast sinthete better
                          together these place absolute right. Make An
                          Appointment
                        </h5>
                      </div>

                      <a className="button is-info is-outlined is-medium">
                        View Department
                      </a>

                      <div className="field is-grouped">
                        <p className="control">
                          <a className="button is-link is-medium">
                            Save changes
                          </a>
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>
        </Wrapper>
        <Service />
        <Text />
        <Image />
        <Text2 />
      </Layout>
    );
  }
}
