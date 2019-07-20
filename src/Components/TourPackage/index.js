import React from 'react';
import {withRouteData, Head} from 'react-static';

import styled from 'styled-components';

import TourPackageInfo from './modules/TourPackageInfo/TourPackageInfo';
import BookingForm from './modules/BookingForm';

const TourPackageWrapper = styled.div`
  /* Extra small devices (portrait phones, less than 576px) */
    margin: 10px auto;
  
  /* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
  @media (min-width: 768px) {  
    max-width: 768px;
    margin: 0 auto;
  }
  
  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) { 
    margin: 15px auto;
    max-width: 95%;
    display: grid;
    grid-template-columns: minmax(440px, 800px) minmax(320px, 350px);
    grid-gap: 5px 5px;
    justify-content: center;
  }
`

const TourPackage = props => {
  return (
    <React.Fragment>
      <Head>
        <title>{props.tourpackage.metatitle}</title>
        <meta name="description" content={props.tourpackage.metadescription} />
        <meta name="keywords" content={props.tourpackage.metakeywords} />
      </Head>  
      <TourPackageWrapper>
        <TourPackageInfo data={props.tourpackage} lastUpdate={props.lastUpdate} />
        <BookingForm data={props.tourpackage} />
      </TourPackageWrapper>
    </React.Fragment>
  )
}

export default withRouteData(TourPackage);