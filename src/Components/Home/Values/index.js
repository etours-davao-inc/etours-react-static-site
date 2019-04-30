import React from 'react';
import styled from 'styled-components';

import Value from './Value';

import HeaderText from '../HeaderText';

const ValuesWrapper = styled.span`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 10px;
`
export default (props) => {
  return (
    <section>
      <HeaderText>Why Etours</HeaderText>
      <ValuesWrapper>
        {props.data.map((value, index) => {
          return <Value value={value} key={index} />
        })}
      </ValuesWrapper>
    </section>
  )
}