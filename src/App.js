import React, { Component } from 'react';
import { Root, Routes } from 'react-static';

import './Templates/css/base.css';

import Footer from './Templates/Footer';
import Header from './Templates/Header';
import Loader from './Templates/Loader';

class App extends Component {
  render() {
    return (
      <Root>
        <Header />
        <React.Suspense fallback={<Loader />}>
          <Routes />
        </React.Suspense>
        <Footer />
      </Root>
    );
  }
}

export default App;
