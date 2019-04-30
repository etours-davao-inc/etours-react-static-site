import React from 'react';
import styled from 'styled-components';

const ValueWrapper = styled.div`
  font-family: 'Gotham Bold',Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif;
  padding: 2rem;
  font-size: 1rem;
  background-color: white;
  border-radius: 4px;
  text-align: center;

  .title {
    padding: 1rem;
    font-size: 1.4rem;
  }
`

export default props => {
  return (
    <ValueWrapper>
      <i className={props.value.icon} style={{color: props.value.color}}></i>
      <p className="title">{props.value.title}</p>
      <p>{props.value.text}</p>
    </ValueWrapper>    
  )
}