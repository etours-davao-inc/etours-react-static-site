import React from 'react';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styled from 'styled-components';

const SliderWrapper = styled.span`
  .slick-slide {
    font-size: .85em;
    padding: 3px;
  }
`

export default (props) => (
  <SliderWrapper>
    <Slider {...props.settings}>
      {props.children}
    </Slider>
  </SliderWrapper>
);