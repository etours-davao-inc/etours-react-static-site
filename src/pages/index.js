import React from 'react';
import { Head, withRouteData } from 'react-static';

import Banner from '../Components/Home/Banner';
import Services from '../Components/Home/Services';
import TourPackages from '../Components/Home/TourPackages';
import Values from '../Components/Home/Values';
import About from '../Components/Home/About';

import data from '../data';

import ResponsiveWidth from '../Components/Home/ResponsiveWidth';

export default withRouteData(props => {
  window.scrollTo(0,0);
  return (
    <React.Fragment>
      <Head>
        <title>{data.Header.title}</title>
        <meta name="description" content={data.Header.metaDescription} />
      </Head>
      <span>
        <Banner text={data.Header.bannerText} />
        <ResponsiveWidth>
          <TourPackages data={props.tourpackages} settings={data} />
          <Services data={data} />
          <Values data={data.Values} />
          <About />
        </ResponsiveWidth>
      </span>
    </React.Fragment>
  )
})