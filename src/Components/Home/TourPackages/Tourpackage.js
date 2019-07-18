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

  position: relative;
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
const Ribbon = styled.div`
  width: 130px;
  height: 130px;
  overflow: hidden;
  position: absolute;

  ::before,
  ::after {
    position: absolute;
    z-index: -1;
    content: '';
    display: block;
    border: 5px solid #2980b9;
  }

   span {
    position: absolute;
    display: block;
    width: 225px;
    padding: 15px 0;
    background-color: #2ecc71;
    box-shadow: 0 5px 10px rgba(0,0,0,.1);
    color: #fff;
    font: 700 18px/1 'Lato', sans-serif;
    text-shadow: 0 1px 1px rgba(0,0,0,.2);
    text-align: center;
  }

   span {
    right: -25px;
    top: 30px;
    transform: rotate(-45deg);
  }
`

export default (props) => {
  let image = `url(http://res.cloudinary.com/etours-davao-inc/image/upload/w_288/${props.item.photo})`
  return (
    <LinkWrap>
      <Link key={props.item.code} to={`/davao-philippines-tour-packages-2018/${props.item.slug}`} className="d-block shadow mx-1 rounded tourpackage-link bg-white">

        <Ribbon><span>{props.item.duration_text}</span></Ribbon>
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