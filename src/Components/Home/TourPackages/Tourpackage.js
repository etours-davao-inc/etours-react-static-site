import React from 'react';
import styled from 'styled-components';

import { Link } from '@reach/router'

const LinkWrap = styled.span`
  a {
    color:#636e72;
  }
  a:hover {
    color:#636e72;
    text-decoration: none;
    background-color: bisque;
  }
  a:visited {
    color:#636e72;
  }
`

const BannerImage = styled.div`
  padding-top: 66.66%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${props => props.img};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`

const PackageName = styled.h3`
  color: #ff9f43;
  font-family: 'Gotham Bold',Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif;
  font-size: 1.4em;
`

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  line-height: 1.3rem;
`
const Price = styled.span`
  ::before {
    content: "Php ";
  }
  font-family: 'Gotham Bold',Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif;
  font-size: 1.3rem;
  color: #2ecc71;
`

export default (props) => {
  let image = `url(http://res.cloudinary.com/etours-davao-inc/image/upload/w_288/${props.item.photo})`
  return (
    <LinkWrap>
      <Link key={props.item.code} to={`/davao-philippines-tour-packages-2018/${props.item.slug}`} className="d-block shadow mx-1 rounded tourpackage-link bg-white">
        <BannerImage img={image} />
        <div className="p-2 d-flex flex-wrap align-content-between" style={{ minHeight: '135px' }}>
          <PackageName className="dragon-skin">{props.item.name}</PackageName>
          <PriceWrapper>
            <span>Price starts from</span> 
            <Price>{props.item.price_starts}</Price>
          </PriceWrapper>
        </div>
      </Link>
    </LinkWrap>
  )
};