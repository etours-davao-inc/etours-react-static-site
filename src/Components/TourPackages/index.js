import React from 'react';
import { Head, withRouteData } from 'react-static';

import styled from 'styled-components';

import './tourpackages.css';

import Banner from './Banner';
import TourPackage from './TourPackage';

const H1 = styled.h1`
  font-family: 'Gotham Bold',Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif;
  font-size: 1.8rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: #e67e22;
`
const FoundText = styled.p`
width: 100%;
text-align: right;
color: #3498db;
 font-family: 'Gotham Bold',Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif;
`

export default withRouteData((props) => {
  let found = props.tourpackages.length
  if (typeof window !== 'undefined') {
    window.scrollTo(0,0)
  }
  return (
    <React.Fragment>
      <Head>
        <title>Philippine Tour Packages | Davao Tours 2019-2020</title>
        <meta name="description" content="Davao and Samal day tour activities and multiday tour packages" />
      </Head>
      <Banner />
      <div className="responsive-widths">
        <H1>Tour packages</H1>
        <FoundText>{found} tour packages found</FoundText>
        {props.tourpackages.map((item, index) => {
          return <TourPackage data={item} key={item.code} />
        })}   
      </div>
    </React.Fragment>
  )
})

