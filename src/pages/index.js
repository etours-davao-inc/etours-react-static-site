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
  if (typeof window !== 'undefined') {
    window.scrollTo(0,0)
  }
  return (
    <React.Fragment>
      <Head>
        <title>{data.Header.title}</title>
        <meta name="description" content={data.Header.metaDescription} />
      </Head>
      <span className="d-block mt-3">
        <div className="responsive-widths">
          <video 
            loop="loop" 
            style={{ width: '100%', height: 'auto' }} 
            autoPlay="autoplay" 
            playsInline="playsinline"
            poster="https://res.cloudinary.com/etours-davao-inc/image/upload/v1564466982/etours-davao-kadayawan-banner-2019.jpg"
            >
            <source src="https://res.cloudinary.com/etours-davao/video/upload/v1564969038/etours-davao-kadayawan-2019-c_scale_vc_auto_w_992_kly8v3.mp4" type="video/mp4" />
              Your browser does not support playing video content.
          </video>
         
          <TourPackages data={props.tourpackages} settings={data} />
          <Banner text={data.Header.bannerText} />
          <Services data={data} />
          <Values data={data.Values} />
          <About />
        </div>
      </span>
    </React.Fragment >
  )
})