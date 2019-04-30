import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: #00a8ff;
`

const Img = styled.img`
  padding: 3% 0px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  max-width: 100%;
  height: auto;
  border-style: none;
`
export default () => {
  return (
    <Section>
      <Img src="http://res.cloudinary.com/etours-davao-inc/image/upload/w_600/v1489730145/etours-davao-philippines-hassle-free-travel_lqsg2k.png" />
    </Section>
  )
}