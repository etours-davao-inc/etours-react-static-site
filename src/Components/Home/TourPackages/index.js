import React from 'react';
import styled from 'styled-components';
import Tourpackage from './Tourpackage';

import HeaderText from '../HeaderText';

const TourPackagesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 10px;
`

export default (props) => {
  return (
    <section>
      <HeaderText>Our standard tour packages</HeaderText>
      <TourPackagesWrapper>
        {props.data.map((item, index) => {
          return <Tourpackage item={item} key={index} />
        })}
      </TourPackagesWrapper>
    </section>
  )
}