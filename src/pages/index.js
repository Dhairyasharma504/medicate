import React from 'react';
import styled from 'styled-components';
import Seo from '../components/Seo';
import Service from '../components/Service';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Text from '../components/Text';
import Image from '../components/Image';
import Text2 from '../components/Text2';
import Footer from '../components/Footer';
import Phone from '../components/Phone';

const Wrapper = styled.div`
  .main {
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
          <div className="main">
            <Header />
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
                          greater let livein form beast sinthete better together
                          these place absolute right. Make An Appointment
                        </h5>
                      </div>

                      <div className="tags are-medium">
                        <span>
                          <section className="section">
                            <a className="button is-info is-outlined is-medium">
                              Make An Appointment
                            </a>
                          </section>
                        </span>
                        <span>
                          <p className="control">
                            <a href="#">
                              <button
                                type="submit"
                                className="button is-secondary is-medium is-info is-hidden-touch ">
                                View Department
                              </button>
                            </a>
                          </p>
                        </span>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
        <Service />
        <Text />
        <Image />
        <Text2 />
        <Phone />
        <Footer />
      </Layout>
    );
  }
}
