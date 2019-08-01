import React from 'react';
import path from 'path'
import { dataSource, urlPrefix } from './data';
import MessengerCustomerChat from 'react-messenger-customer-chat';

import { format } from 'date-fns';
export default {
  siteRoot: 'https://www.etours.ph',
  minLoadTime: 2500,
  getRoutes: async () => {
    var tourpackages = require(dataSource)
    tourpackages = tourpackages.sort((a, b) => {
      return a.total_hours - b.total_hours
    })
    return [
      {
        path: '/',
        getData: () => ({
          tourpackages,
        }),
        children: tourpackages.map(tourpackage => ({
          path: `/${urlPrefix}/${tourpackage.slug}`,
          template: 'src/Components/TourPackage',
          getData: () => ({
            tourpackage: tourpackage,
            lastUpdate: format(new Date(), 'MMMM DD, YYYY')
          })
        })),
      },
      {
        path: '/philippine-tours-2019-2020/davao-tourpackages',
        template: 'src/Components/TourPackages',
        getData: () => ({
          tourpackages,
        })
      },
      {
        path: '404',
        template: 'src/Components/404.js'
      }
      
    ]
  },
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => {
    let googleTracker = () => {
      if (process.env.NODE_ENV === 'development') {
        return `console.log('Dev Mode')`
      } else {
        return `
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-11499974-1', 'auto');
          ga('send', 'pageview'); 
        `
      }
    }

    return (
      <Html lang="en-US">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
          <meta name="theme-color" content="#000000" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous" />
        </Head>
        <Body>
          <MessengerCustomerChat
            pageId="229913515288"
            appId="729113564186331"
          />
          {children}
          <div id="modal"></div>
          <script dangerouslySetInnerHTML={{ __html: googleTracker() }}></script>
          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
        </Body>
      </Html>
    )
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
