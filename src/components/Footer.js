import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 4rem;
  .heading {
    margin-bottom: 1rem;
  }
  .underline {
    border-bottom: 3px solid white;
  }
  .text {
    margin-bottom: 1rem;
    margin-top: 1rem;
    line-height: 2;
  }
  .link {
    display: block;
    transition: color 0.2s, text-decoraton 0.2s;
    :hover {
      color: white !important;
      text-decoration: underline;
    }
  }
  .my-footer {
  }
`;

const Footer = () => (
  <Container>
    <div className="container ">
      <div className="columns ">
        <div className="column">
          <h2 className="has-text-weight-semibold has-text-white-ter title is-6 heading">
            <span className="underline">Our Campus</span>
          </h2>
          <a className="has-text-grey link">Acedemic</a>
          <a className="has-text-grey link">News</a>
          <a className="has-text-grey link">Our Interns</a>
          <a className="has-text-grey link">Our Leadership</a>
          <a className="has-text-grey link">careers</a>
          <a className="has-text-grey link">Human Resources</a>
        </div>
        <div className="column">
          <h2 className="has-text-weight-semibold has-text-white-ter title is-6 heading">
            <span className="underline">Our Courses</span>
          </h2>
          <a className="has-text-grey link">Math</a>
          <a className="has-text-grey link">Science & Engineering</a>
          <a className="has-text-grey link">Art and Humanities</a>
          <a className="has-text-grey link">Economics & Finance</a>
          <a className="has-text-grey link">Business Administration</a>
          <a className="has-text-grey link">Computer Science</a>
        </div>
        <div className="column">
          <h2 className="has-text-weight-semibold has-text-white-ter title is-6 heading">
            <span className="underline">Contact</span>
          </h2>
          <a className="has-text-grey link">Help Center</a>
          <a className="has-text-grey link">Support Community</a>
          <a className="has-text-grey link">Press</a>
          <a className="has-text-grey link">Share Your Story</a>
          <a className="has-text-grey link">Our Supporters</a>
        </div>
      </div>
    </div>
    <footer className="footer my-footer has-text-white-ter">
      <div className="content has-text-centered">
        <p>
          <strong className="has-text-white-ter">Bulma</strong> by{' '}
          <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is
          licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The
          website content is licensed{' '}
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
            CC BY NC SA 4.0
          </a>
          .
        </p>
      </div>
    </footer>
  </Container>
);

export default Footer;
