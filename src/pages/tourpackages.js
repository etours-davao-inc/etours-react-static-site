import React from 'react';
import { Head, withRouteData } from 'react-static';

import styled from 'styled-components';

import '../Components/TourPackages/tourpackages.css';

import Banner from '../Components/TourPackages/Banner';
import TourPackages from '../Components/TourPackages';

const H1 = styled.h1`
  font-family: 'Gotham Bold',Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif;
  font-size: 1.8rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: #e67e22;
`

const ResponsiveWidths = styled.section`
  width:100%;
  margin: 0 auto;
 
  @media (min-width: 992px) { 
      min-width:768px;
      max-width: 800px;
  }
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
      <ResponsiveWidths>
        <H1>Tour packages</H1>
        <FoundText>{found} tour packages found</FoundText>
        <TourPackages tourpackages={props.tourpackages} />
      </ResponsiveWidths>
    </React.Fragment>
  )
})



