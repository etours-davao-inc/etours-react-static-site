import React from 'react';

import Slider from '../Slider';

import Service from './Service';
import { Mobile, Desktop } from '../Breakpoints';

import HeaderText from '../HeaderText';

export default (props) => {
  return (
    <section id="services">
      <HeaderText>Our Services</HeaderText>
      <Desktop>
        {props.data.Services.map((item, index) => {
          return <Service item={item} key={index} />
        })}
      </Desktop>
      <Mobile>
        <Slider settings={props.data.servicesSliderSettings}>
          {props.data.Services.map((item, index) => {
            return <Service item={item} key={index} />
          })}
        </Slider>
      </Mobile>
    </section>
  )
}