import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const H3 = styled.h3`
  font-family: 'Gotham Bold',Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif;
  font-size: 2rem;
  color: #e67e22;
  margin: 0;
`

const Duration = styled.p`
  font-family: 'Gotham Bold',Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`

const Description = styled.p`
  color: gray;
  font-size: 1rem;
`
const FooterWrap = styled.div`
  font-family: 'Gotham Bold',Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  a {
    display: block;
  }
`

const PriceWrapper = styled.span`
  line-height: 1.3rem;
  transform: rotate(-3deg);
`
const Price = styled.p`
  ::before {
    content: "Php ";
  }
  font-size: 1.3rem;
  color: #2ecc71;
`

const PriceStarts = styled.span`
  color: #c0392b;
  font-size: .9rem;
`

export default (props) => {
  return (
    <div className="tourpackage d-flex flex-row mb-1 p-2 rounded bg-white">
      <div className="p-2">
        <img className="tourpackage_thumbnail rounded" crop="fill" src={`https://res.cloudinary.com/etours-davao-inc/image/upload/w_125,h_125,c_thumb/v1478855681/${props.data.photo}`} />
      </div>
      <div className="tourpackage_info_wrapper">
        <H3>{props.data.name}</H3>
        <Duration>{props.data.duration_text}</Duration>
        <Description>{props.data.description}</Description>
        <FooterWrap>
          <Link to={`/davao-philippines-tour-packages-2018/${props.data.slug}`} className="btn btn-warning">View details</Link>
          <PriceWrapper>
            <PriceStarts>Price starts from</PriceStarts>
            <Price>{props.data.price_starts}</Price>
          </PriceWrapper>
        </FooterWrap>

      </div>
    </div>
  )
}