import React from 'react';
import styled from 'styled-components';

import { Link } from '@reach/router';

import numeral from 'numeral';

import { urlPrefix } from '../../../../data';

const LinkWrap = styled.span`
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
  font-size: 1.1em;
`

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  line-height: 1.1rem;
`
const Price = styled.span`
  ::before {
    content: "Php ";
  }
  font-family: 'Gotham Bold',Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif;
  font-size: 1.1rem;
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
    background-color: ${props => props.ribbonColor};
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
  let isMultiDayTour = props.item.type === "multiday";
  let ribbonColor = isMultiDayTour ? "#e74c3c":"#9b59b6";
  return (
    <LinkWrap>
      <div className="d-block mx-1 rounded tourpackage-link bg-white">
        <Ribbon ribbonColor={ribbonColor}><span>{props.item.duration_text}</span></Ribbon>
        <BannerImage img={image} />
        <div className="p-2 d-flex flex-wrap align-content-between" style={{ minHeight: '115px' }}>
          <PackageName className="dragon-skin">{props.item.name}</PackageName>
          <PriceWrapper>
            <div>
              <p class="p-0 m-0"><small>Price starts from</small></p>
              <Price>{numeral(props.item.price_starts).format('0,0')}</Price>
            </div>
            <div>
              <Link key={props.item.code} to={`/${urlPrefix}/${props.item.slug}`} className="btn btn-outline-info align-right btn-sm">
              View details</Link>
            </div>
          
          </PriceWrapper>

        </div>
      </div>
    </LinkWrap>
  )
};