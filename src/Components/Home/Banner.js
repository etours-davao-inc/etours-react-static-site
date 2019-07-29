import React from 'react';
import styled from 'styled-components';

const BannerWrapper = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url('https://res.cloudinary.com/etours-davao-inc/image/upload/c_fill,e_art:ukulele,w_1439,ar_16:9,g_auto/v1549011328/etours-group-travel-davao-philippines.jpg');
  ;
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 1280px;
  margin: 0 auto;
  border-radius: 4px;

  h2 {
    padding: 22% 0;
    font-family: 'Gotham Bold',Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif;
    color: white;
    font-size: 3em;
    width: 75%;
    text-align: center;
    margin: 0 auto;
  }

  @media (min-width: 576px) { 
    h2 {
      font-size: 4em;
    }
  }

  @media (min-width: 768px) {  
    #banner h2 {
      font-size: 5em;
    }
  }

  @media (min-width: 992px) { 
    #banner h2 {
      font-size: 5em;
    }
  }  
`

export default (props) => (
  <BannerWrapper>
    <h2>{props.text}</h2>
  </BannerWrapper>
)