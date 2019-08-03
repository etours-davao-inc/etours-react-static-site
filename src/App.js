import React, { Component } from 'react';
import { Root, Routes } from 'react-static';

import './Templates/css/base.css';

import Footer from './Templates/Footer';
import Header from './Templates/Header';
import Loader from './Templates/Loader';
import ErrorBoundary from './Templates/ErrorBoundary';

class App extends Component {
  render() {
    return (
      <Root>
        <Header />
        <ErrorBoundary>
          <React.Suspense fallback={<Loader />}>
            <Routes />
          </React.Suspense>
        </ErrorBoundary>
        <Footer />
      </Root>
    );
  }
}

export default App;
