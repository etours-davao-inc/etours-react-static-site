import React from 'react';
import styled from 'styled-components';

const ServiceWrapper = styled.section`
  background-color: white;
  border-radius: 5px;
  min-height: 418px;

  @media (min-width: 576px) { 
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    background-color: white;
    margin-bottom: 10px;
    border-radius: 5px;
    max-width: 100%;
    
    :nth-of-type(odd) {
      direction: rtl;
    }

    .header {
      display: flex;
      flex-direction: column;
      align-items: center;
      align-content: center;
      width: 60%;
      margin: auto;
    }     
  }
  @media (max-width: 576px) {
    .header {
      min-height: 282px;
    }
  }
`

const BannerWrapper = styled.div`
  padding-top: 75%;
  background-size: cover !important;
  background-repeat: no-repeat !important;

  @media (min-width: 576px) { 
    padding-top: 75%;
    background-size: cover !important;
    background-repeat: no-repeat !important;    
  }
`

const H2 = styled.h2`
  font-family: 'Gotham Bold',Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif;
  color: #3498db;
  font-size: 2rem;

  @media (max-width: 576px) { 
    font-size: 1.5rem;
    text-align: center;
    padding-top: .5rem;
    padding-bottom: .5rem;
  }
`

const Description = styled.p`
  font-family: 'Gotham Bold',Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif;
  padding: .7rem;
  font-size: 1rem;
  color: gray;
`

const Button = styled.div`
  font-family: 'Gotham Bold',Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
`

export default (props) => {
  return (
    <ServiceWrapper>
      <BannerWrapper
        style={{ background: `url(${props.item.photo})` }}>
      </BannerWrapper>
      <div className="header">
        <H2>{props.item.title}</H2>
        <Description>{props.item.description}</Description>
        <Button>
          <a href="#" className="btn btn-warning">Know more</a>
        </Button>
        
      </div>
    </ServiceWrapper>
  )
}