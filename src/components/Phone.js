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
const Phone = () => (
  <Wrapper>
    <div className="main">
      <section className="section">
        <div className="container">dd</div>
      </section>
    </div>
  </Wrapper>
);
export default Phone;
