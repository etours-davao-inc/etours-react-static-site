import React from 'react';
import TourPackage from './TourPackage';

export default (props) => {
  return (
    <React.Fragment>
      {props.tourpackages.map((item, index) => {
          return <TourPackage data={item} key={item.code} />
      })}      
    </React.Fragment>
  )
}

