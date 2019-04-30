import React from 'react';
import styled from 'styled-components';
import HeaderText from './HeaderText';

const Section = styled.section`
  font-family: 'Gotham Bold',Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif;
  margin-bottom: 1rem;
`

export default () => {
  return (
    <React.Fragment>
      <HeaderText>About Etours</HeaderText>
      <Section>
        <div className="embed-responsive embed-responsive-16by9 rounded m-auto bg-white">
          <iframe className="embed-responsive-item border rounded" width="560" height="315" src="https://www.youtube.com/embed/kvW5iV7qp2w" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </Section>
    </React.Fragment>
  )
}