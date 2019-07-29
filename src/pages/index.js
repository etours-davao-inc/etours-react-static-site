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
  return (
    <React.Fragment>
      <Head>
        <title>{data.Header.title}</title>
        <meta name="description" content={data.Header.metaDescription} />
      </Head>
      <span className="d-block mt-3">
        <ResponsiveWidth>
          <video controls="controls" loop="loop" style={{ width: '100%', height: 'auto' }} autoPlay="autoplay">
            <source src="https://res.cloudinary.com/etours-davao-inc/video/upload/v1564382116/Etours_Kadayawan_Cover_Video_2019.mp4" type="video/mp4" />
            Your browser does not support playing video content.
          </video>
          <TourPackages data={props.tourpackages} settings={data} />
          <Banner text={data.Header.bannerText} />
          <Services data={data} />
          <Values data={data.Values} />
          <About />
        </ResponsiveWidth>
      </span>
    </React.Fragment >
  )
})